import type {
  Program,
  Node,
  BlockStatement,
  ExpressionStatement,
  CallExpression,
  ArrowFunctionExpression,
  Identifier,
  Expression,
  Super,
  Pattern,
  Literal as AcornLiteral,
} from 'acorn'
import type { Var, WoqlNode, Literal } from '../../syntax.js'
import { Vars, lit } from '../../syntax.js'
import { WOQL } from '../../index.js'

function lowerCamelCase(inputString: string): string {
  if (inputString.length > 1) {
    return (
      inputString[0].toLowerCase() + inputString.slice(1, inputString.length)
    )
  }
  return inputString.toLowerCase()
}

function renameFunction(inputString: string): string {
  const newName = lowerCamelCase(inputString)
  if (newName === 'eval') {
    return 'compute'
  } else if (newName === 'true') {
    return 'success'
  } else {
    return newName
  }
}

const supportedWoql = [
  'Using',
  'Select',
  'Distinct',
  'And',
  'Or',
  'From',
  'Into',
  'Triple',
  'AddTriple',
  'AddedTriple',
  'DeleteTriple',
  'DeletedTriple',
  'Subsumption',
  'Equals',
  'Substring',
  'ReadDocument',
  'UpdateDocument',
  'InsertDocument',
  'DeleteDocument',
  'Get',
  'Trim',
  'Eval',
  'Plus',
  'Minus',
  'Times',
  'Divide',
  'Div',
  'Exp',
  'Floor',
  'IsA',
  'Like',
  'Less',
  'Greater',
  'Optional',
  'Upper',
  'Lower',
  'Pad',
  'Split',
  'Member',
  'Concatenate',
  'Join',
  'Sum',
  'Start',
  'Limit',
  'Regexp',
  'True',
  'OrderBy',
  'GroupBy',
  'Length',
  'Not',
  'Once',
  'Immediately',
  'Count',
  'Typecast',
  'Path',
  'PathPredicate',
  'InversePathPredicate',
  'PathSequence',
  'PathOr',
  'PathPlus',
  'PathStar',
  'PathTimes',
  'Dot',
  'TypeOf',
  'Quad',
]

const supportedWoqlFunctions = supportedWoql.map((woql) => renameFunction(woql))

export class AstJsWoqlTransformer {
  transform(node: Node): WoqlNode {
    return this.visitNode(node)
  }

  private visitNode(node: Node): WoqlNode {
    switch (node?.type) {
      case 'Program': {
        const body = (node as Program)?.body
        if (Array.isArray(body) && body.length === 1) {
          return this.visitNode(body[0])
        } else {
          throw new Error(
            `Only a single expression is supported: ${node?.type}`,
          )
        }
      }
      case 'BlockStatement': {
        const body = (node as BlockStatement)?.body
        if (Array.isArray(body) && body.length === 1) {
          return this.visitNode(body[0])
        } else {
          throw new Error(
            `Only a single expression is supported: ${node?.type}`,
          )
        }
      }
      case 'ExpressionStatement': {
        const expression = (node as ExpressionStatement).expression
        return this.visitNode(expression)
      }
      case 'CallExpression': {
        return this.visitCallExpression(node as CallExpression)
      }
      case 'Identifier': {
        return this.visitIdentifier(node as Identifier)
      }
      case 'Literal': {
        return this.visitLiteral(node as AcornLiteral)
      }
      case 'ArrowFunctionExpression':
        return this.visitArrowFunctionExpression(
          node as ArrowFunctionExpression,
        )
      default:
        throw new Error(
          `Unhandled node type: ${node?.type}, full node: ${JSON.stringify(
            node,
          )}`,
        )
    }
  }

  private visitIdentifier(
    node: Identifier | Expression | Super | Pattern,
  ): Var {
    if (node.type === 'Identifier') {
      const variables = Vars(node.name)
      return variables[node.name]
    } else {
      throw new Error(`Unhandled node type: ${node?.type}`)
    }
  }

  private visitLiteral(node: AcornLiteral): Literal {
    try {
      return lit(JSON.parse(node.raw ?? '') ?? node.value)
    } catch (e) {
      throw new Error(`Unhandled literal value: ${node?.value}`)
    }
  }

  private visitCallExpression(node: CallExpression): WoqlNode {
    const callIdentifier = this.visitIdentifier(node.callee)
    const callee = callIdentifier?.variable

    const args = node.arguments.map((arg) => this.visitNode(arg))
    if (
      typeof callee === 'string' &&
      callee !== '' &&
      supportedWoqlFunctions.includes(callee)
    ) {
      // Here we limit what functions can be called from the library to the allowed terms
      // It must not be allowed to call any function, but restricted to only functions.
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (WOQL[callee as keyof typeof WOQL] as any)(...args)
    } else {
      throw new Error(`Unsupported function: ${callee}`)
    }
  }

  private readonly registeredVariableNames: string[] = []

  private visitArrowFunctionExpression(
    node: ArrowFunctionExpression,
  ): WoqlNode {
    const params = Array.isArray(node.params) ? node.params : [node.params]
    const variables = params.map(
      (identifer) => this.visitIdentifier(identifer)?.variable,
    )
    this.registeredVariableNames.push(...variables)
    return this.visitNode(node.body)
  }
}
