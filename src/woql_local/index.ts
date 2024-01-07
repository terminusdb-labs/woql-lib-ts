import type { Var } from '../syntax.js'
import type * as W from '../woql_defs/woql.js'

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
