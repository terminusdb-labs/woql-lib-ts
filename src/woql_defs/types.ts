export enum Graph {
  instance = 'instance',
  schema = 'schema',
}

export interface Uri {
  uri: string
}

export interface Literal {
  type: string
  value: string | number | boolean
}

export interface Var {
  name: string
}

export type Value = Var | Uri | Literal
export type Node = Var | Uri
