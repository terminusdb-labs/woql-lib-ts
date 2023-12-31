/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import {
  type Graph,
  type Value,
  type Node,
  type Column,
  type Literal,
  type WoqlNode,
} from './types.js'

export interface Using extends WoqlNode {
  '@type': 'Using'
  collection: any
  query: Query
}

export function using(collection: any, query: Query): Using {
  return { '@type': 'Using', collection, query }
}

export interface Select extends WoqlNode {
  '@type': 'Select'
  variables: string[]
  query: Query
}

export function select(variables: string[], query: Query): Select {
  return { '@type': 'Select', variables, query }
}

export interface Distinct extends WoqlNode {
  '@type': 'Distinct'
  variables: string[]
  query: Query
}

export function distinct(variables: string[], query: Query): Distinct {
  return { '@type': 'Distinct', variables, query }
}

export interface And extends WoqlNode {
  '@type': 'And'
  and: Query[]
}

export function and(and: Query[]): And {
  return { '@type': 'And', and }
}

export interface Or extends WoqlNode {
  '@type': 'Or'
  or: Query[]
}

export function or(or: Query[]): Or {
  return { '@type': 'Or', or }
}

export interface From extends WoqlNode {
  '@type': 'From'
  graph: Graph
  query: Query
}

export function from(graph: Graph, query: Query): From {
  return { '@type': 'From', graph, query }
}

export interface Into extends WoqlNode {
  '@type': 'Into'
  graph: Graph
  query: Query
}

export function into(graph: Graph, query: Query): Into {
  return { '@type': 'Into', graph, query }
}

export interface Triple extends WoqlNode {
  '@type': 'Triple'
  subject: Node
  predicate: Node
  object: Value
  graph?: Graph
}

export function triple(
  subject: Node,
  predicate: Node,
  object: Value,
  graph?: Graph,
): Triple {
  return { '@type': 'Triple', subject, predicate, object, graph }
}

export interface AddTriple extends WoqlNode {
  '@type': 'AddTriple'
  subject: Node
  predicate: Node
  object: Value
  graph?: Graph
}

export function addTriple(
  subject: Node,
  predicate: Node,
  object: Value,
  graph?: Graph,
): AddTriple {
  return { '@type': 'AddTriple', subject, predicate, object, graph }
}

export interface AddedTriple extends WoqlNode {
  '@type': 'AddedTriple'
  subject: Node
  predicate: Node
  object: Value
  graph?: Graph
}

export function addedTriple(
  subject: Node,
  predicate: Node,
  object: Value,
  graph?: Graph,
): AddedTriple {
  return { '@type': 'AddedTriple', subject, predicate, object, graph }
}

export interface DeleteTriple extends WoqlNode {
  '@type': 'DeleteTriple'
  subject: Node
  predicate: Node
  object: Value
  graph?: Graph
}

export function deleteTriple(
  subject: Node,
  predicate: Node,
  object: Value,
  graph?: Graph,
): DeleteTriple {
  return { '@type': 'DeleteTriple', subject, predicate, object, graph }
}

export interface DeletedTriple extends WoqlNode {
  '@type': 'DeletedTriple'
  subject: Node
  predicate: Node
  object: Value
  graph?: Graph
}

export function deletedTriple(
  subject: Node,
  predicate: Node,
  object: Value,
  graph?: Graph,
): DeletedTriple {
  return { '@type': 'DeletedTriple', subject, predicate, object, graph }
}

export interface Subsumption extends WoqlNode {
  '@type': 'Subsumption'
  child: Node
  parent: Node
}

export function subsumption(child: Node, parent: Node): Subsumption {
  return { '@type': 'Subsumption', child, parent }
}

export interface Equals extends WoqlNode {
  '@type': 'Equals'
  left: any
  right: any
}

export function equals(left: any, right: any): Equals {
  return { '@type': 'Equals', left, right }
}

export interface Substring extends WoqlNode {
  '@type': 'Substring'
  string: string
  before: number
  length: number
  after: number
  substring: string
}

export function substring(
  string: string,
  before: number,
  length: number,
  after: number,
  substring: string,
): Substring {
  return { '@type': 'Substring', string, before, length, after, substring }
}

export interface ReadDocument extends WoqlNode {
  '@type': 'ReadDocument'
  identifier: Node
  document: any
}

export function readDocument(identifier: Node, document: any): ReadDocument {
  return { '@type': 'ReadDocument', identifier, document }
}

export interface UpdateDocument extends WoqlNode {
  '@type': 'UpdateDocument'
  document: Node
  identifier?: any
}

export function updateDocument(
  document: Node,
  identifier?: any,
): UpdateDocument {
  return { '@type': 'UpdateDocument', document, identifier }
}

export interface InsertDocument extends WoqlNode {
  '@type': 'InsertDocument'
  document: Node
  identifier?: any
}

export function insertDocument(
  document: Node,
  identifier?: any,
): InsertDocument {
  return { '@type': 'InsertDocument', document, identifier }
}

export interface DeleteDocument extends WoqlNode {
  '@type': 'DeleteDocument'
  identifier: Node
}

export function deleteDocument(identifier: Node): DeleteDocument {
  return { '@type': 'DeleteDocument', identifier }
}

export interface Get extends WoqlNode {
  '@type': 'Get'
  columns: Column[]
  resource: string
  has_header?: boolean
}

export function get(
  columns: Column[],
  resource: string,
  has_header?: boolean,
): Get {
  return { '@type': 'Get', columns, resource, has_header }
}

export interface Trim extends WoqlNode {
  '@type': 'Trim'
  untrimmed: string
  trimmed: string
}

export function trim(untrimmed: string, trimmed: string): Trim {
  return { '@type': 'Trim', untrimmed, trimmed }
}

export interface Eval extends WoqlNode {
  '@type': 'Eval'
  expression: ArithmeticExpression
  result: any
}

export function compute(expression: ArithmeticExpression, result: any): Eval {
  return { '@type': 'Eval', expression, result }
}

export interface IsA extends WoqlNode {
  '@type': 'IsA'
  element: Node
  type: Node
}

export function isA(element: Node, type: Node): IsA {
  return { '@type': 'IsA', element, type }
}

export interface Like extends WoqlNode {
  '@type': 'Like'
  left: string
  right: string
  similarity: number
}

export function like(left: string, right: string, similarity: number): Like {
  return { '@type': 'Like', left, right, similarity }
}

export interface Less extends WoqlNode {
  '@type': 'Less'
  left: any
  right: any
}

export function less(left: any, right: any): Less {
  return { '@type': 'Less', left, right }
}

export interface Greater extends WoqlNode {
  '@type': 'Greater'
  left: any
  right: any
}

export function greater(left: any, right: any): Greater {
  return { '@type': 'Greater', left, right }
}

export interface Optional extends WoqlNode {
  '@type': 'Optional'
  query: Query
}

export function optional(query: Query): Optional {
  return { '@type': 'Optional', query }
}

export interface Upper extends WoqlNode {
  '@type': 'Upper'
  mixed: string
  upper: string
}

export function upper(mixed: string, upper: string): Upper {
  return { '@type': 'Upper', mixed, upper }
}

export interface Lower extends WoqlNode {
  '@type': 'Lower'
  mixed: string
  lower: string
}

export function lower(mixed: string, lower: string): Lower {
  return { '@type': 'Lower', mixed, lower }
}

export interface Pad extends WoqlNode {
  '@type': 'Pad'
  string: string
  char: string
  times: number
  result: string
}

export function pad(
  string: string,
  char: string,
  times: number,
  result: string,
): Pad {
  return { '@type': 'Pad', string, char, times, result }
}

export interface Split extends WoqlNode {
  '@type': 'Split'
  string: string
  pattern: string
  list: string[]
}

export function split(string: string, pattern: string, list: string[]): Split {
  return { '@type': 'Split', string, pattern, list }
}

export interface Member extends WoqlNode {
  '@type': 'Member'
  member: any
  list: any[]
}

export function member(member: any, list: any[]): Member {
  return { '@type': 'Member', member, list }
}

export interface Concatenate extends WoqlNode {
  '@type': 'Concatenate'
  list: string[]
  result: string
}

export function concatenate(list: string[], result: string): Concatenate {
  return { '@type': 'Concatenate', list, result }
}

export interface Join extends WoqlNode {
  '@type': 'Join'
  list: any[]
  separator: string
  result: string
}

export function join(list: any[], separator: string, result: string): Join {
  return { '@type': 'Join', list, separator, result }
}

export interface Sum extends WoqlNode {
  '@type': 'Sum'
  list: any[]
  result: any
}

export function sum(list: any[], result: any): Sum {
  return { '@type': 'Sum', list, result }
}

export interface Start extends WoqlNode {
  '@type': 'Start'
  start: number
  query: Query
}

export function start(start: number, query: Query): Start {
  return { '@type': 'Start', start, query }
}

export interface Limit extends WoqlNode {
  '@type': 'Limit'
  limit: number
  query: Query
}

export function limit(limit: number, query: Query): Limit {
  return { '@type': 'Limit', limit, query }
}

export interface Regexp extends WoqlNode {
  '@type': 'Regexp'
  pattern: string
  string: string
  result: string[]
}

export function regexp(
  pattern: string,
  string: string,
  result: string[],
): Regexp {
  return { '@type': 'Regexp', pattern, string, result }
}

export interface True extends WoqlNode {
  '@type': 'True'
}

export function success(): True {
  return { '@type': 'True' }
}

export interface OrderBy extends WoqlNode {
  '@type': 'OrderBy'
  ordering: any[]
  query: Query
}

export function orderBy(ordering: any[], query: Query): OrderBy {
  return { '@type': 'OrderBy', ordering, query }
}

export interface GroupBy extends WoqlNode {
  '@type': 'GroupBy'
  template: Value
  group_by: any
  value: any
  query: Query
}

export function groupBy(
  template: Value,
  group_by: any,
  value: any,
  query: Query,
): GroupBy {
  return { '@type': 'GroupBy', template, group_by, value, query }
}

export interface Length extends WoqlNode {
  '@type': 'Length'
  list: any[]
  length: number
}

export function length(list: any[], length: number): Length {
  return { '@type': 'Length', list, length }
}

export interface Not extends WoqlNode {
  '@type': 'Not'
  query: Query
}

export function not(query: Query): Not {
  return { '@type': 'Not', query }
}

export interface Once extends WoqlNode {
  '@type': 'Once'
  query: Query
}

export function once(query: Query): Once {
  return { '@type': 'Once', query }
}

export interface Immediately extends WoqlNode {
  '@type': 'Immediately'
  query: Query
}

export function immediately(query: Query): Immediately {
  return { '@type': 'Immediately', query }
}

export interface Count extends WoqlNode {
  '@type': 'Count'
  query: Query
  count: any
}

export function count(query: Query, count: any): Count {
  return { '@type': 'Count', query, count }
}

export interface Typecast extends WoqlNode {
  '@type': 'Typecast'
  value: Value
  type: Node
  result: Value
}

export function typecast(value: Value, type: Node, result: Value): Typecast {
  return { '@type': 'Typecast', value, type, result }
}

export interface Path extends WoqlNode {
  '@type': 'Path'
  subject: Node
  pattern: any
  object: Node
  path?: PathPattern
}

export function path(
  subject: Node,
  pattern: any,
  object: Node,
  path?: PathPattern,
): Path {
  return { '@type': 'Path', subject, pattern, object, path }
}

export interface Dot extends WoqlNode {
  '@type': 'Dot'
  document: any
  field: string
  value: any
}

export function dot(document: any, field: string, value: any): Dot {
  return { '@type': 'Dot', document, field, value }
}

export interface TypeOf extends WoqlNode {
  '@type': 'TypeOf'
  value: Value
  type: Node
}

export function typeOf(value: Value, type: Node): TypeOf {
  return { '@type': 'TypeOf', value, type }
}

export type Query =
  | Using
  | Select
  | Distinct
  | And
  | Or
  | From
  | Into
  | Triple
  | AddTriple
  | AddedTriple
  | DeleteTriple
  | DeletedTriple
  | Subsumption
  | Equals
  | Substring
  | ReadDocument
  | UpdateDocument
  | InsertDocument
  | DeleteDocument
  | Get
  | Trim
  | Eval
  | IsA
  | Like
  | Less
  | Greater
  | Optional
  | Upper
  | Lower
  | Pad
  | Split
  | Member
  | Concatenate
  | Join
  | Sum
  | Start
  | Limit
  | Regexp
  | True
  | OrderBy
  | GroupBy
  | Length
  | Not
  | Once
  | Immediately
  | Count
  | Typecast
  | Path
  | Dot
  | TypeOf

export interface PathPredicate extends WoqlNode {
  '@type': 'PathPredicate'
  predicate?: string
}

export function pathPredicate(predicate?: string): PathPredicate {
  return { '@type': 'PathPredicate', predicate }
}

export interface InversePathPredicate extends WoqlNode {
  '@type': 'InversePathPredicate'
  predicate?: string
}

export function inversePathPredicate(predicate?: string): InversePathPredicate {
  return { '@type': 'InversePathPredicate', predicate }
}

export interface PathSequence extends WoqlNode {
  '@type': 'PathSequence'
  sequence: PathPattern[]
}

export function pathSequence(sequence: PathPattern[]): PathSequence {
  return { '@type': 'PathSequence', sequence }
}

export interface PathOr extends WoqlNode {
  '@type': 'PathOr'
  or: PathPattern[]
}

export function pathOr(or: PathPattern[]): PathOr {
  return { '@type': 'PathOr', or }
}

export interface PathPlus extends WoqlNode {
  '@type': 'PathPlus'
  plus: PathPattern
}

export function pathPlus(plus: PathPattern): PathPlus {
  return { '@type': 'PathPlus', plus }
}

export interface PathStar extends WoqlNode {
  '@type': 'PathStar'
  star: PathPattern
}

export function pathStar(star: PathPattern): PathStar {
  return { '@type': 'PathStar', star }
}

export interface PathTimes extends WoqlNode {
  '@type': 'PathTimes'
  times: PathPattern
  from: number
  to: number
}

export function pathTimes(
  times: PathPattern,
  from: number,
  to: number,
): PathTimes {
  return { '@type': 'PathTimes', times, from, to }
}

export type PathPattern =
  | PathPredicate
  | InversePathPredicate
  | PathSequence
  | PathOr
  | PathPlus
  | PathStar
  | PathTimes

export interface Plus extends WoqlNode {
  '@type': 'Plus'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function plus(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Plus {
  return { '@type': 'Plus', left, right }
}

export interface Minus extends WoqlNode {
  '@type': 'Minus'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function minus(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Minus {
  return { '@type': 'Minus', left, right }
}

export interface Times extends WoqlNode {
  '@type': 'Times'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function times(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Times {
  return { '@type': 'Times', left, right }
}

export interface Divide extends WoqlNode {
  '@type': 'Divide'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function divide(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Divide {
  return { '@type': 'Divide', left, right }
}

export interface Div extends WoqlNode {
  '@type': 'Div'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function div(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Div {
  return { '@type': 'Div', left, right }
}

export interface Exp extends WoqlNode {
  '@type': 'Exp'
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function exp(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Exp {
  return { '@type': 'Exp', left, right }
}

export interface Floor extends WoqlNode {
  '@type': 'Floor'
  argument: ArithmeticExpression
}

export function floor(argument: ArithmeticExpression): Floor {
  return { '@type': 'Floor', argument }
}

export type ArithmeticExpression =
  | Plus
  | Minus
  | Times
  | Divide
  | Div
  | Exp
  | Floor
  | Literal
