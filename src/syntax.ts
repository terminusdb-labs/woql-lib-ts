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

/*
function stripPrefix(litType: string): string {
  return litType.split(':')[1]
}

function renderLiteral(l: Literal): string {
  const litType = stripPrefix(l['@type'])
  const value = l['@value']
  return `lit(${value}, Literal.${litType}`
}

export function render(q: W.Query) : string {
  const ty = q['@type']
  const woqlDef = woqlSchema[ty]
  const types = woqlDef.types
  const fields = woqlDef.fields
  const args: string[] = []
  for (var i = 0; i++; i < types.length) {
    const ty = types[i]
    const field = fields[i]
    let arg = ''
    if (ty === 'Query') {
      arg += render(q)
    }else if (ty === 'Literal'){
      if (field in q){
        const l: Literal = q[field] as Literal
        arg += renderLiteral(l)
      }else{
        throw Error("Impossible! field misisng from type")
      }
    }else{
      arg += ''
    }
    args.push(arg)
  }
  def =+ `${funName}(`+ render()

  return def
}
*/
