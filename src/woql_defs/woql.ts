
import { Graph, Value, Node} from './types.js'


type Using = {
  collection: any
  query: Query
}

export function using(collection: any, query: Query) : Using {
  return { collection: collection, query: query }
}

type Select = {
  variables: string[]
  query: Query
}

export function select(variables: string[], query: Query) : Select {
  return { variables: variables, query: query }
}

type Distinct = {
  variables: string[]
  query: Query
}

export function distinct(variables: string[], query: Query) : Distinct {
  return { variables: variables, query: query }
}

type And = {
  and: Query[]
}

export function and(and: Query[]) : And {
  return { and: and }
}

type Or = {
  or: Query[]
}

export function or(or: Query[]) : Or {
  return { or: or }
}

type From = {
  graph: Graph
  query: Query
}

export function from(graph: Graph, query: Query) : From {
  return { graph: graph, query: query }
}

type Into = {
  graph: Graph
  query: Query
}

export function into(graph: Graph, query: Query) : Into {
  return { graph: graph, query: query }
}

type Triple = {
  subject: Node
  predicate: Node
  obj: Value
  graph?: Graph
}

export function triple(subject: Node, predicate: Node, obj: Value, graph?: Graph) : Triple {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type AddTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph?: Graph
}

export function addTriple(subject: Node, predicate: Node, obj: Value, graph?: Graph) : AddTriple {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type AddedTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph?: Graph
}

export function addedTriple(subject: Node, predicate: Node, obj: Value, graph?: Graph) : AddedTriple {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type DeleteTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph?: Graph
}

export function deleteTriple(subject: Node, predicate: Node, obj: Value, graph?: Graph) : DeleteTriple {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type DeletedTriple = {
  subject: Node
  predicate: Node
  obj: Value
  graph?: Graph
}

export function deletedTriple(subject: Node, predicate: Node, obj: Value, graph?: Graph) : DeletedTriple {
  return { subject: subject, predicate: predicate, obj: obj, graph: graph }
}

type Subsumption = {
  child: Node
  parent: Node
}

export function subsumption(child: Node, parent: Node) : Subsumption {
  return { child: child, parent: parent }
}

type Equals = {
  left: any
  right: any
}

export function equals(left: any, right: any) : Equals {
  return { left: left, right: right }
}

type Substring = {
  str: string
  before: number
  length: number
  after: number
  substring: string
}

export function substring(str: string, before: number, length: number, after: number, substring: string) : Substring {
  return { str: str, before: before, length: length, after: after, substring: substring }
}

type ReadDocument = {
  identifier: Node
  document: any
}

export function readDocument(identifier: Node, document: any) : ReadDocument {
  return { identifier: identifier, document: document }
}

type UpdateDocument = {
  document: Node
  identifier?: any
}

export function updateDocument(document: Node, identifier?: any) : UpdateDocument {
  return { document: document, identifier: identifier }
}

type InsertDocument = {
  document: Node
  identifier?: any
}

export function insertDocument(document: Node, identifier?: any) : InsertDocument {
  return { document: document, identifier: identifier }
}

type DeleteDocument = {
  identifier: Node
}

export function deleteDocument(identifier: Node) : DeleteDocument {
  return { identifier: identifier }
}

type Get = {
  columns: any[]
  resource: string
  has_header?: boolean
}

export function get(columns: any[], resource: string, has_header?: boolean) : Get {
  return { columns: columns, resource: resource, has_header: has_header }
}

type Trim = {
  untrimmed: string
  trimmed: string
}

export function trim(untrimmed: string, trimmed: string) : Trim {
  return { untrimmed: untrimmed, trimmed: trimmed }
}

type Eval = {
  expression: ArithmeticExpression
  result: any
}

export function compute(expression: ArithmeticExpression, result: any) : Eval {
  return { expression: expression, result: result }
}

type IsA = {
  element: Node
  ty: Node
}

export function isA(element: Node, ty: Node) : IsA {
  return { element: element, ty: ty }
}

type Like = {
  left: string
  right: string
  similarity: number
}

export function like(left: string, right: string, similarity: number) : Like {
  return { left: left, right: right, similarity: similarity }
}

type Less = {
  left: any
  right: any
}

export function less(left: any, right: any) : Less {
  return { left: left, right: right }
}

type Greater = {
  left: any
  right: any
}

export function greater(left: any, right: any) : Greater {
  return { left: left, right: right }
}

type Optional = {
  query: Query
}

export function optional(query: Query) : Optional {
  return { query: query }
}

type Upper = {
  mixed: string
  upper: string
}

export function upper(mixed: string, upper: string) : Upper {
  return { mixed: mixed, upper: upper }
}

type Lower = {
  mixed: string
  lower: string
}

export function lower(mixed: string, lower: string) : Lower {
  return { mixed: mixed, lower: lower }
}

type Pad = {
  str: string
  char: string
  times: number
  result: string
}

export function pad(str: string, char: string, times: number, result: string) : Pad {
  return { str: str, char: char, times: times, result: result }
}

type Split = {
  str: string
  pattern: string
  list: string[]
}

export function split(str: string, pattern: string, list: string[]) : Split {
  return { str: str, pattern: pattern, list: list }
}

type Member = {
  member: any
  list: any[]
}

export function member(member: any, list: any[]) : Member {
  return { member: member, list: list }
}

type Concatenate = {
  list: string[]
  result: string
}

export function concatenate(list: string[], result: string) : Concatenate {
  return { list: list, result: result }
}

type Join = {
  list: any[]
  separator: string
  result: string
}

export function join(list: any[], separator: string, result: string) : Join {
  return { list: list, separator: separator, result: result }
}

type Sum = {
  list: any[]
  result: any
}

export function sum(list: any[], result: any) : Sum {
  return { list: list, result: result }
}

type Start = {
  start: number
  query: Query
}

export function start(start: number, query: Query) : Start {
  return { start: start, query: query }
}

type Limit = {
  limit: number
  query: Query
}

export function limit(limit: number, query: Query) : Limit {
  return { limit: limit, query: query }
}

type Regexp = {
  pattern: string
  str: string
  result: string[]
}

export function regexp(pattern: string, str: string, result: string[]) : Regexp {
  return { pattern: pattern, str: str, result: result }
}

type True = {
  
}

export function success() : True {
  return {  }
}

type OrderBy = {
  ordering: any[]
  query: Query
}

export function orderBy(ordering: any[], query: Query) : OrderBy {
  return { ordering: ordering, query: query }
}

type GroupBy = {
  template: Value
  group_by: any
  value: any
  query: Query
}

export function groupBy(template: Value, group_by: any, value: any, query: Query) : GroupBy {
  return { template: template, group_by: group_by, value: value, query: query }
}

type Length = {
  list: any[]
  length: number
}

export function length(list: any[], length: number) : Length {
  return { list: list, length: length }
}

type Not = {
  query: Query
}

export function not(query: Query) : Not {
  return { query: query }
}

type Once = {
  query: Query
}

export function once(query: Query) : Once {
  return { query: query }
}

type Immediately = {
  query: Query
}

export function immediately(query: Query) : Immediately {
  return { query: query }
}

type Count = {
  query: Query
  count: any
}

export function count(query: Query, count: any) : Count {
  return { query: query, count: count }
}

type Typecast = {
  value: Value
  ty: Node
  result: Value
}

export function typecast(value: Value, ty: Node, result: Value) : Typecast {
  return { value: value, ty: ty, result: result }
}

type Path = {
  subject: Node
  pattern: any
  obj: Node
  path?: PathPattern
}

export function path(subject: Node, pattern: any, obj: Node, path?: PathPattern) : Path {
  return { subject: subject, pattern: pattern, obj: obj, path: path }
}

type Dot = {
  document: any
  field: string
  value: any
}

export function dot(document: any, field: string, value: any) : Dot {
  return { document: document, field: field, value: value }
}

type TypeOf = {
  value: Value
  ty: Node
}

export function typeOf(value: Value, ty: Node) : TypeOf {
  return { value: value, ty: ty }
}

type Query = Using | Select | Distinct | And | Or | From | Into | Triple | AddTriple | AddedTriple | DeleteTriple | DeletedTriple | Subsumption | Equals | Substring | ReadDocument | UpdateDocument | InsertDocument | DeleteDocument | Get | Trim | Eval | IsA | Like | Less | Greater | Optional | Upper | Lower | Pad | Split | Member | Concatenate | Join | Sum | Start | Limit | Regexp | True | OrderBy | GroupBy | Length | Not | Once | Immediately | Count | Typecast | Path | Dot | TypeOf

type PathPredicate = {
  predicate?: string
}

export function pathPredicate(predicate?: string) : PathPredicate {
  return { predicate: predicate }
}

type InversePathPredicate = {
  predicate?: string
}

export function inversePathPredicate(predicate?: string) : InversePathPredicate {
  return { predicate: predicate }
}

type PathSequence = {
  sequence: PathPattern[]
}

export function pathSequence(sequence: PathPattern[]) : PathSequence {
  return { sequence: sequence }
}

type PathOr = {
  or: PathPattern[]
}

export function pathOr(or: PathPattern[]) : PathOr {
  return { or: or }
}

type PathPlus = {
  plus: PathPattern
}

export function pathPlus(plus: PathPattern) : PathPlus {
  return { plus: plus }
}

type PathStar = {
  star: PathPattern
}

export function pathStar(star: PathPattern) : PathStar {
  return { star: star }
}

type PathTimes = {
  times: PathPattern
  start: number
  to: number
}

export function pathTimes(times: PathPattern, start: number, to: number) : PathTimes {
  return { times: times, start: start, to: to }
}

type PathPattern = PathPredicate | InversePathPredicate | PathSequence | PathOr | PathPlus | PathStar | PathTimes

type Plus = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function plus(left: ArithmeticExpression, right: ArithmeticExpression) : Plus {
  return { left: left, right: right }
}

type Minus = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function minus(left: ArithmeticExpression, right: ArithmeticExpression) : Minus {
  return { left: left, right: right }
}

type Times = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function times(left: ArithmeticExpression, right: ArithmeticExpression) : Times {
  return { left: left, right: right }
}

type Divide = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function divide(left: ArithmeticExpression, right: ArithmeticExpression) : Divide {
  return { left: left, right: right }
}

type Div = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function div(left: ArithmeticExpression, right: ArithmeticExpression) : Div {
  return { left: left, right: right }
}

type Exp = {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function exp(left: ArithmeticExpression, right: ArithmeticExpression) : Exp {
  return { left: left, right: right }
}

type Floor = {
  argument: ArithmeticExpression
}

export function floor(argument: ArithmeticExpression) : Floor {
  return { argument: argument }
}

type ArithmeticExpression = Plus | Minus | Times | Divide | Div | Exp | Floor | number
