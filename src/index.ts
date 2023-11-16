import { Vars } from './woql_defs/types.js'
import * as W from './woql_defs/woql.js'

const v = Vars('x', 'y', 'z')
const query = W.and([W.triple(v.x, v.y, v.z), W.triple(v.z, v.y, v.z)])

console.log(JSON.stringify(query))

const world = 'world'

export function hello(who: string = world): string {
  return `Hello ${who}! `
}
