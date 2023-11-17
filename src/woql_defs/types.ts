export enum Graph {
  instance = 'instance',
  schema = 'schema',
}

export interface Uri {
  node: string
}

enum LiteralType {
  decimal = 'xsd:decimal',
  string = 'xsd:string',
}

export interface Literal {
  '@type': LiteralType
  '@value': string | number | boolean | null
}

export interface Var {
  variable: string
}

export type Value = Var | Uri | Literal
export type Node = Var | Uri

export function Vars(...args: string[]): { [K in string]: Var } {
  const varObj: { [K in string]: Var } = {}
  for (let i = 0, j = arguments.length; i < j; i += 1) {
    const argumentName = args[i]

    varObj[argumentName] = { variable: argumentName }
  }
  return varObj
}
