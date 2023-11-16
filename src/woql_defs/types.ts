enum Graph {
  instance = 'instance',
  schema = 'schema'
}

type Uri = {
  uri: string
}

type Literal = {
  type: string
  value: string | number | boolean
}

type Var = {
  name: string
}

type Value = Var | Uri | Literal
type Node = Var | Uri

export { Graph, Uri, Literal, Var, Value, Node }
