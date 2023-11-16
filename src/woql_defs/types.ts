export enum Graph {
  instance = 'instance',
  schema = 'schema',
}

export interface Uri {
  node: string
}

export interface Literal {
  data: string | number | boolean
}

export interface Var {
  variable: string
}

export type Value = Var | Uri | Literal
export type Node = Var | Uri
