#!/usr/bin/env node
import * as W from './woql_defs/woql.ts'

function v(name: string) : Var {
  return { name: name }
}

const query = W.and([W.triple(v("x"),v("y"),v("z")),
                     W.triple(v("z"),v("y"),v("w"))])

console.log(query)

const world = 'world';

export function hello(who: string = world): string {
  return `Hello ${who}! `;
}
