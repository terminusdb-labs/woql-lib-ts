// Convenience functions for defining ASTs in WOQL
import * as W from './woql_defs/woql.js'
import { type Var } from './woql_defs/types.js'
export * from './woql_defs/woql.js'
export * from './woql_defs/types.js'

export function and(...args: W.Query[]): W.Query {
  return W.and(args)
}

export function or(...args: W.Query[]): W.Query {
  return W.or(args)
}

export function letvars(fn: (...x: Var[]) => W.Query): W.Query {
  const func = fn.toString()
  const args =
    func.slice(func.indexOf('(') + 1, func.indexOf(')')).match(/([^\s,]+)/g) ??
    []
  const vs = args.map((v) => {
    return {
      variable: v,
    }
  })
  return fn(...vs)
}
