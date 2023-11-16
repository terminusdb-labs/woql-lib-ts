
import { Graph, Value, Node} from './types.ts'


type Using = {
  collection: any
  query: Query
}

export function using(collection: any, query: Query) : Query {
  return { collection: collection, query: query }
}

type Select = {
  variables: string[]
  query: Query
}

export function select(variables: string[], query: Query) : Query {
  return { variables: variables, query: query }
}

type Distinct = {
  variables: string[]
  query: Query
}

export function distinct(variables: string[], query: Query) : Query {
  return { variables: variables, query: query }
}

type And = {
  and: Query[]
}

export function and(and: Query[]) : Query {
  return { and: and }
}

type Or = {
  or: Query[]
}

export function or(or: Query[]) : Query {
  return { or: or }
}

type From = {
  graph: Graph
  query: Query
}

export function from(graph: Graph, query: Query) : Query {
  return { graph: graph, query: query }
}

type Into = {
  graph: Graph
  query: Query
}

export function into(graph: Graph, query: Query) : Query {
  return { graph: graph, query: query }
}

type Triple = {
  subject: Node
  predicate: Node
  obj: Value
  graph: Graph | null
}

export function triple(subject: Node, predicate: Node, obj: Value, graph: Graph | null = null) : Query {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type AddTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph: Graph | null
}

export function addTriple(subject: Node, predicate: Node, obj: Value, graph: Graph | null = null) : Query {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type AddedTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph: Graph | null
}

export function addedTriple(subject: Node, predicate: Node, obj: Value, graph: Graph | null = null) : Query {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type DeleteTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph: Graph | null
}

export function deleteTriple(subject: Node, predicate: Node, obj: Value, graph: Graph | null = null) : Query {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type DeletedTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph: Graph | null
}

export function deletedTriple(subject: Node, predicate: Node, obj: Value, graph: Graph | null = null) : Query {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type Subsumption = {
  child: Node
  parent: Node
}

export function subsumption(child: Node, parent: Node) : Query {
  return { child: child, parent: parent }
}

type Equals = {
  left: any
  right: any
}

export function equals(left: any, right: any) : Query {
  return { left: left, right: right }
}

type Substring = {
  str: string
  before: number
  length: number
  after: number
  substring: string
}

export function substring(str: string, before: number, length: number, after: number, substring: string) : Query {
  return { str: str, before: before, length: length, after: after, substring: substring }
}

type ReadDocument = {
  identifier: Node
  document: any
}

export function readDocument(identifier: Node, document: any) : Query {
  return { identifier: identifier, document: document }
}

type UpdateDocument = {
  document: Node
  identifier: any | null
}

export function updateDocument(document: Node, identifier: any | null = null) : Query {
  return { document: document, identifier: identifier }
}

type InsertDocument = {
  document: Node
  identifier: any | null
}

export function insertDocument(document: Node, identifier: any | null = null) : Query {
  return { document: document, identifier: identifier }
}

type DeleteDocument = {
  identifier: Node
}

export function deleteDocument(identifier: Node) : Query {
  return { identifier: identifier }
}

type Get = {
  columns: any[]
  resource: string
  has_header: boolean | null
}

export function get(columns: any[], resource: string, has_header: boolean | null = null) : Query {
  return { columns: columns, resource: resource, has_header: has_header }
}

type Trim = {
  untrimmed: string
  trimmed: string
}

export function trim(untrimmed: string, trimmed: string) : Query {
  return { untrimmed: untrimmed, trimmed: trimmed }
}

type Eval = {
  expression: ArithmeticExpression
  result: any
}

export function compute(expression: ArithmeticExpression, result: any) : Query {
  return { expression: expression, result: result }
}

type IsA = {
  element: Node
  ty: Node
}

export function isA(element: Node, ty: Node) : Query {
  return { element: element, ty: ty }
}

type Like = {
  left: string
  right: string
  similarity: number
}

export function like(left: string, right: string, similarity: number) : Query {
  return { left: left, right: right, similarity: similarity }
}

type Less = {
  left: any
  right: any
}

export function less(left: any, right: any) : Query {
  return { left: left, right: right }
}

type Greater = {
  left: any
  right: any
}

export function greater(left: any, right: any) : Query {
  return { left: left, right: right }
}

type Optional = {
  query: Query
}

export function optional(query: Query) : Query {
  return { query: query }
}

type Upper = {
  mixed: string
  upper: string
}

export function upper(mixed: string, upper: string) : Query {
  return { mixed: mixed, upper: upper }
}

type Lower = {
  mixed: string
  lower: string
}

export function lower(mixed: string, lower: string) : Query {
  return { mixed: mixed, lower: lower }
}

type Pad = {
  str: string
  char: string
  times: number
  result: string
}

export function pad(str: string, char: string, times: number, result: string) : Query {
  return { str: str, char: char, times: times, result: result }
}

type Split = {
  str: string
  pattern: string
  list: string[]
}

export function split(str: string, pattern: string, list: string[]) : Query {
  return { str: str, pattern: pattern, list: list }
}

type Member = {
  member: any
  list: any[]
}

export function member(member: any, list: any[]) : Query {
  return { member: member, list: list }
}

type Concatenate = {
  list: string[]
  result: string
}

export function concatenate(list: string[], result: string) : Query {
  return { list: list, result: result }
}

type Join = {
  list: any[]
  separator: string
  result: string
}

export function join(list: any[], separator: string, result: string) : Query {
  return { list: list, separator: separator, result: result }
}

type Sum = {
  list: any[]
  result: any
}

export function sum(list: any[], result: any) : Query {
  return { list: list, result: result }
}

type Start = {
  start: number
  query: Query
}

export function start(start: number, query: Query) : Query {
  return { start: start, query: query }
}

type Limit = {
  limit: number
  query: Query
}

export function limit(limit: number, query: Query) : Query {
  return { limit: limit, query: query }
}

type Regexp = {
  pattern: string
  str: string
  result: string[]
}

export function regexp(pattern: string, str: string, result: string[]) : Query {
  return { pattern: pattern, str: str, result: result }
}

type True = {
  
}

export function success() : Query {
  return {  }
}

type OrderBy = {
  ordering: any[]
  query: Query
}

export function orderBy(ordering: any[], query: Query) : Query {
  return { ordering: ordering, query: query }
}

type GroupBy = {
  template: Value
  group_by: any
  value: any
  query: Query
}

export function groupBy(template: Value, group_by: any, value: any, query: Query) : Query {
  return { template: template, group_by: group_by, value: value, query: query }
}

type Length = {
  list: any[]
  length: number
}

export function length(list: any[], length: number) : Query {
  return { list: list, length: length }
}

type Not = {
  query: Query
}

export function not(query: Query) : Query {
  return { query: query }
}

type Once = {
  query: Query
}

export function once(query: Query) : Query {
  return { query: query }
}

type Immediately = {
  query: Query
}

export function immediately(query: Query) : Query {
  return { query: query }
}

type Count = {
  query: Query
  count: any
}

export function count(query: Query, count: any) : Query {
  return { query: query, count: count }
}

type Typecast = {
  value: Value
  ty: Node
  result: Value
}

export function typecast(value: Value, ty: Node, result: Value) : Query {
  return { value: value, ty: ty, result: result }
}

type Path = {
  subject: Node
  pattern: any
  obj: Node
  path: PathPattern | null
}

export function path(subject: Node, pattern: any, obj: Node, path: PathPattern | null = null) : Query {
  return { subject: subject, pattern: pattern, obj: obj, path: path }
}

type Dot = {
  document: any
  field: string
  value: any
}

export function dot(document: any, field: string, value: any) : Query {
  return { document: document, field: field, value: value }
}

type TypeOf = {
  value: Value
  ty: Node
}

export function typeOf(value: Value, ty: Node) : Query {
  return { value: value, ty: ty }
}

type Query = Using | Select | Distinct | And | Or | From | Into | Triple | AddTriple | AddedTriple | DeleteTriple | DeletedTriple | Subsumption | Equals | Substring | ReadDocument | UpdateDocument | InsertDocument | DeleteDocument | Get | Trim | Eval | IsA | Like | Less | Greater | Optional | Upper | Lower | Pad | Split | Member | Concatenate | Join | Sum | Start | Limit | Regexp | True | OrderBy | GroupBy | Length | Not | Once | Immediately | Count | Typecast | Path | Dot | TypeOf

type PathPredicate = {
  predicate: string | null
}

export function pathPredicate(predicate: string | null = null) : PathPattern {
  return { predicate: predicate }
}

type InversePathPredicate = {
  predicate: string | null
}

export function inversePathPredicate(predicate: string | null = null) : PathPattern {
  return { predicate: predicate }
}

type PathSequence = {
  sequence: PathPattern[]
}

export function pathSequence(sequence: PathPattern[]) : PathPattern {
  return { sequence: sequence }
}

type PathOr = {
  or: PathPattern[]
}

export function pathOr(or: PathPattern[]) : PathPattern {
  return { or: or }
}

type PathPlus = {
  plus: PathPattern
}

export function pathPlus(plus: PathPattern) : PathPattern {
  return { plus: plus }
}

type PathStar = {
  star: PathPattern
}

export function pathStar(star: PathPattern) : PathPattern {
  return { star: star }
}

type PathTimes = {
  times: PathPattern
  start: number
  to: number
}

export function pathTimes(times: PathPattern, start: number, to: number) : PathPattern {
  return { times: times, start: start, to: to }
}

type PathPattern = PathPredicate | InversePathPredicate | PathSequence | PathOr | PathPlus | PathStar | PathTimes

type Plus = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function plus(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Minus = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function minus(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Times = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function times(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Divide = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function divide(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Div = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function div(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Exp = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function exp(left: ArithmeticExpression, right: ArithmeticExpression) : ArithmeticExpression {
  return { left: left, right: right }
}

type Floor = {
  argument: ArithmeticExpression
}

export function floor(argument: ArithmeticExpression) : ArithmeticExpression {
  return { argument: argument }
}

type ArithmeticExpression = Plus | Minus | Times | Divide | Div | Exp | Floor | number
