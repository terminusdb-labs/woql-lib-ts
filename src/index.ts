import { type Var, type Uri } from './woql_defs/types.js'
import * as W from './woql_defs/woql.js'

function v(name: string): Var {
  return { name }
}
const query = W.and([
  W.triple(v('x'), v('y'), v('z')),
  W.triple(v('z'), v('y'), v('w')),
])

console.log(query)

const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
}
