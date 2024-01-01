import { AstJsWoqlTransformer } from '../AstTransformation/JsWoqlAstTransformer.js'
import { parse } from 'acorn'
import type { Program } from 'acorn'
import type { Query } from '../../syntax.js'

const parseWoqlStringToJsAst = (code: string): Program | undefined => {
  const ast = parse(code, {
    ecmaVersion: 2020,
    sourceType: 'module',
  })
  return ast
}

export const parseWoqlString = (woql: string): Query => {
  const ast = parseWoqlStringToJsAst(woql)
  if (ast === undefined) {
    throw new Error('Could not parse WOQL string')
  }
  const transformer = new AstJsWoqlTransformer()
  return transformer.transform(ast)
}
