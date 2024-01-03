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
import type { Var, Literal, Query, Uri } from '../../syntax.js'
import { Graph, lit } from '../../syntax.js'
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

type WoqlElement = Query | Var | Literal

export class AstJsWoqlTransformer {
  transform(node: Node): Query {
    return this.visitNode(node) as Query
  }

  private visitNodeValue(node: Node): Var | Uri {
    switch (node?.type) {
      case 'Identifier': {
        return this.visitIdentifier(node as Identifier, 'NodeValue')
      }
      case 'Literal': {
        const valueNode = node as AcornLiteral
        if (typeof valueNode?.value !== 'string')
          throw new Error('NodeValue is not a string')
        if (valueNode.value.startsWith('v:')) {
          return {
            '@type': 'NodeValue',
            variable: valueNode.value,
          }
        }
        return {
          '@type': 'NodeValue',
          node: valueNode.value,
        }
      }
      default:
        throw new Error(
          `Unhandled value type: ${node?.type}, full node: ${JSON.stringify(
            node,
          )}`,
        )
    }
  }

  private visitValue(node: Node): Var | Literal {
    switch (node?.type) {
      case 'Identifier': {
        return this.visitIdentifier(node as Identifier, 'Value')
      }

      case 'Literal': {
        const valueNode = node as AcornLiteral
        if (typeof valueNode?.value !== 'string')
          throw new Error('NodeValue is not a string')
        if (valueNode.value.startsWith('v:')) {
          return {
            '@type': 'Value',
            variable: valueNode.value,
          }
        }
        return this.visitLiteral(valueNode)
      }

      default:
        throw new Error(
          `Unhandled value type: ${node?.type}, full node: ${JSON.stringify(
            node,
          )}`,
        )
    }
  }

  private visitNode(node: Node): WoqlElement {
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
        return this.visitIdentifier(node as Identifier, 'NodeValue')
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
    identifierType: 'NodeValue' | 'Value' | undefined,
  ): Var {
    if (node.type === 'Identifier') {
      return {
        '@type': identifierType,
        variable: node.name,
      }
    } else {
      throw new Error(`Unhandled node type: ${node?.type}`)
    }
  }

  private visitLiteral(node: AcornLiteral): Literal {
    try {
      const value = JSON.parse(node.raw ?? '') ?? node.value
      if (
        typeof this.currentCallExpression === 'string' &&
        this.currentCallExpression !== '' &&
        this.literalExceptions.includes(this.currentCallExpression)
      ) {
        return lit(value)
      } else {
        return value
      }
    } catch (e) {
      throw new Error(`Unhandled literal value: ${node?.value}`)
    }
  }

  private readonly literalExceptions = ['triple', 'quad']
  private currentCallExpression: string | undefined = undefined

  private visitCallExpression(node: CallExpression): Query {
    const callIdentifier = this.visitIdentifier(node.callee, undefined)
    const callee = callIdentifier?.variable
    this.currentCallExpression = callee

    if (
      typeof callee === 'string' &&
      callee !== '' &&
      supportedWoqlFunctions.includes(callee)
    ) {
      switch (callee) {
        case 'select': {
          const woql = this.visitNode(node.arguments[node.arguments.length - 1])
          node.arguments.pop()
          const identifiers = node.arguments.map(
            (arg) =>
              this.visitIdentifier(arg as AcornLiteral, 'NodeValue').variable,
          )
          return WOQL.select(identifiers, woql as Query)
        }
        case 'triple': {
          return WOQL.triple(
            { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[0]) },
            { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[1]) },
            { '@type': 'Value', ...this.visitValue(node.arguments[2]) },
          )
        }
        case 'quad': {
          return WOQL.quad(
            { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[0]) },
            { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[1]) },
            { '@type': 'Value', ...this.visitValue(node.arguments[2]) },
            (this.visitLiteral(node.arguments[3] as AcornLiteral)['@value'] ===
            'instance'
              ? Graph.instance
              : Graph.schema) ?? undefined,
          )
        }
        default: {
          // Here we limit what functions can be called from the library to the allowed terms
          // It must not be allowed to call any function, but restricted to only functions.
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          return (WOQL[callee as keyof typeof WOQL] as any)(
            ...node.arguments.map((arg) => this.visitNode(arg)),
          )
        }
      }
    } else {
      throw new Error(`Unsupported function: ${callee}`)
    }
  }

  private readonly registeredVariableNames: string[] = []

  private visitArrowFunctionExpression(
    node: ArrowFunctionExpression,
  ): WoqlElement {
    const params = Array.isArray(node.params) ? node.params : [node.params]
    const variables = params.map(
      (identifer) => this.visitIdentifier(identifer, undefined)?.variable,
    )
    this.registeredVariableNames.push(...variables)
    return this.visitNode(node.body)
  }
}
