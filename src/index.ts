import { type Var } from './woql_defs/types.js'
import * as W from './woql_defs/woql.js'
import * as UsingJs from './woql_defs/Using.js'

function v(name: string): Var {
  return { name }
}

const query = UsingJs.and([
  UsingJs.triple(v('x'), v('y'), v('z')),
  UsingJs.triple(v('z'), v('y'), v('w')),
])

console.log(query)

const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
}
