/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { type Graph, type Value, type Node } from './types.js'

export interface Using {
  collection: any
  query: Query
}

export function using(collection: any, query: Query): Using {
  return { collection, query }
}

export interface Select {
  variables: string[]
  query: Query
}

export function select(variables: string[], query: Query): Select {
  return { variables, query }
}

export interface Distinct {
  variables: string[]
  query: Query
}

export function distinct(variables: string[], query: Query): Distinct {
  return { variables, query }
}

export interface And {
  and: Query[]
}

export function and(and: Query[]): And {
  return { and }
}

export interface Or {
  or: Query[]
}

export function or(or: Query[]): Or {
  return { or }
}

export interface From {
  graph: Graph
  query: Query
}

export function from(graph: Graph, query: Query): From {
  return { graph, query }
}

export interface Into {
  graph: Graph
  query: Query
}

export function into(graph: Graph, query: Query): Into {
  return { graph, query }
}

export interface Triple {
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
  return { subject, predicate, object, graph }
}

export interface AddTriple {
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
  return { subject, predicate, object, graph }
}

export interface AddedTriple {
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
  return { subject, predicate, object, graph }
}

export interface DeleteTriple {
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
  return { subject, predicate, object, graph }
}

export interface DeletedTriple {
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
  return { subject, predicate, object, graph }
}

export interface Subsumption {
  child: Node
  parent: Node
}

export function subsumption(child: Node, parent: Node): Subsumption {
  return { child, parent }
}

export interface Equals {
  left: any
  right: any
}

export function equals(left: any, right: any): Equals {
  return { left, right }
}

export interface Substring {
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
  return { string, before, length, after, substring }
}

export interface ReadDocument {
  identifier: Node
  document: any
}

export function readDocument(identifier: Node, document: any): ReadDocument {
  return { identifier, document }
}

export interface UpdateDocument {
  document: Node
  identifier?: any
}

export function updateDocument(
  document: Node,
  identifier?: any,
): UpdateDocument {
  return { document, identifier }
}

export interface InsertDocument {
  document: Node
  identifier?: any
}

export function insertDocument(
  document: Node,
  identifier?: any,
): InsertDocument {
  return { document, identifier }
}

export interface DeleteDocument {
  identifier: Node
}

export function deleteDocument(identifier: Node): DeleteDocument {
  return { identifier }
}

export interface Get {
  columns: any[]
  resource: string
  has_header?: boolean
}

export function get(
  columns: any[],
  resource: string,
  has_header?: boolean,
): Get {
  return { columns, resource, has_header }
}

export interface Trim {
  untrimmed: string
  trimmed: string
}

export function trim(untrimmed: string, trimmed: string): Trim {
  return { untrimmed, trimmed }
}

export interface Eval {
  expression: ArithmeticExpression
  result: any
}

export function compute(expression: ArithmeticExpression, result: any): Eval {
  return { expression, result }
}

export interface IsA {
  element: Node
  type: Node
}

export function isA(element: Node, type: Node): IsA {
  return { element, type }
}

export interface Like {
  left: string
  right: string
  similarity: number
}

export function like(left: string, right: string, similarity: number): Like {
  return { left, right, similarity }
}

export interface Less {
  left: any
  right: any
}

export function less(left: any, right: any): Less {
  return { left, right }
}

export interface Greater {
  left: any
  right: any
}

export function greater(left: any, right: any): Greater {
  return { left, right }
}

export interface Optional {
  query: Query
}

export function optional(query: Query): Optional {
  return { query }
}

export interface Upper {
  mixed: string
  upper: string
}

export function upper(mixed: string, upper: string): Upper {
  return { mixed, upper }
}

export interface Lower {
  mixed: string
  lower: string
}

export function lower(mixed: string, lower: string): Lower {
  return { mixed, lower }
}

export interface Pad {
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
  return { string, char, times, result }
}

export interface Split {
  string: string
  pattern: string
  list: string[]
}

export function split(string: string, pattern: string, list: string[]): Split {
  return { string, pattern, list }
}

export interface Member {
  member: any
  list: any[]
}

export function member(member: any, list: any[]): Member {
  return { member, list }
}

export interface Concatenate {
  list: string[]
  result: string
}

export function concatenate(list: string[], result: string): Concatenate {
  return { list, result }
}

export interface Join {
  list: any[]
  separator: string
  result: string
}

export function join(list: any[], separator: string, result: string): Join {
  return { list, separator, result }
}

export interface Sum {
  list: any[]
  result: any
}

export function sum(list: any[], result: any): Sum {
  return { list, result }
}

export interface Start {
  start: number
  query: Query
}

export function start(start: number, query: Query): Start {
  return { start, query }
}

export interface Limit {
  limit: number
  query: Query
}

export function limit(limit: number, query: Query): Limit {
  return { limit, query }
}

export interface Regexp {
  pattern: string
  string: string
  result: string[]
}

export function regexp(
  pattern: string,
  string: string,
  result: string[],
): Regexp {
  return { pattern, string, result }
}

export interface True {}

export function success(): True {
  return {}
}

export interface OrderBy {
  ordering: any[]
  query: Query
}

export function orderBy(ordering: any[], query: Query): OrderBy {
  return { ordering, query }
}

export interface GroupBy {
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
  return { template, group_by, value, query }
}

export interface Length {
  list: any[]
  length: number
}

export function length(list: any[], length: number): Length {
  return { list, length }
}

export interface Not {
  query: Query
}

export function not(query: Query): Not {
  return { query }
}

export interface Once {
  query: Query
}

export function once(query: Query): Once {
  return { query }
}

export interface Immediately {
  query: Query
}

export function immediately(query: Query): Immediately {
  return { query }
}

export interface Count {
  query: Query
  count: any
}

export function count(query: Query, count: any): Count {
  return { query, count }
}

export interface Typecast {
  value: Value
  type: Node
  result: Value
}

export function typecast(value: Value, type: Node, result: Value): Typecast {
  return { value, type, result }
}

export interface Path {
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
  return { subject, pattern, object, path }
}

export interface Dot {
  document: any
  field: string
  value: any
}

export function dot(document: any, field: string, value: any): Dot {
  return { document, field, value }
}

export interface TypeOf {
  value: Value
  type: Node
}

export function typeOf(value: Value, type: Node): TypeOf {
  return { value, type }
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

export interface PathPredicate {
  predicate?: string
}

export function pathPredicate(predicate?: string): PathPredicate {
  return { predicate }
}

export interface InversePathPredicate {
  predicate?: string
}

export function inversePathPredicate(predicate?: string): InversePathPredicate {
  return { predicate }
}

export interface PathSequence {
  sequence: PathPattern[]
}

export function pathSequence(sequence: PathPattern[]): PathSequence {
  return { sequence }
}

export interface PathOr {
  or: PathPattern[]
}

export function pathOr(or: PathPattern[]): PathOr {
  return { or }
}

export interface PathPlus {
  plus: PathPattern
}

export function pathPlus(plus: PathPattern): PathPlus {
  return { plus }
}

export interface PathStar {
  star: PathPattern
}

export function pathStar(star: PathPattern): PathStar {
  return { star }
}

export interface PathTimes {
  times: PathPattern
  from: number
  to: number
}

export function pathTimes(
  times: PathPattern,
  from: number,
  to: number,
): PathTimes {
  return { times, from, to }
}

export type PathPattern =
  | PathPredicate
  | InversePathPredicate
  | PathSequence
  | PathOr
  | PathPlus
  | PathStar
  | PathTimes

export interface Plus {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function plus(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Plus {
  return { left, right }
}

export interface Minus {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function minus(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Minus {
  return { left, right }
}

export interface Times {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function times(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Times {
  return { left, right }
}

export interface Divide {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function divide(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Divide {
  return { left, right }
}

export interface Div {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function div(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Div {
  return { left, right }
}

export interface Exp {
  left: ArithmeticExpression
  right: ArithmeticExpression
}

export function exp(
  left: ArithmeticExpression,
  right: ArithmeticExpression,
): Exp {
  return { left, right }
}

export interface Floor {
  argument: ArithmeticExpression
}

export function floor(argument: ArithmeticExpression): Floor {
  return { argument }
}

export type ArithmeticExpression =
  | Plus
  | Minus
  | Times
  | Divide
  | Div
  | Exp
  | Floor
  | number
