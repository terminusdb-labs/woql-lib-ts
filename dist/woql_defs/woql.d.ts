import { type Graph, type Value, type Node, type Column, type Literal } from './types.js';
export interface Using {
    '@type': 'Using';
    collection: any;
    query: Query;
}
export declare function using(collection: any, query: Query): Using;
export interface Select {
    '@type': 'Select';
    variables: string[];
    query: Query;
}
export declare function select(variables: string[], query: Query): Select;
export interface Distinct {
    '@type': 'Distinct';
    variables: string[];
    query: Query;
}
export declare function distinct(variables: string[], query: Query): Distinct;
export interface And {
    '@type': 'And';
    and: Query[];
}
export declare function and(and: Query[]): And;
export interface Or {
    '@type': 'Or';
    or: Query[];
}
export declare function or(or: Query[]): Or;
export interface From {
    '@type': 'From';
    graph: Graph;
    query: Query;
}
export declare function from(graph: Graph, query: Query): From;
export interface Into {
    '@type': 'Into';
    graph: Graph;
    query: Query;
}
export declare function into(graph: Graph, query: Query): Into;
export interface Triple {
    '@type': 'Triple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function triple(subject: Node, predicate: Node, object: Value, graph?: Graph): Triple;
export interface AddTriple {
    '@type': 'AddTriple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function addTriple(subject: Node, predicate: Node, object: Value, graph?: Graph): AddTriple;
export interface AddedTriple {
    '@type': 'AddedTriple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function addedTriple(subject: Node, predicate: Node, object: Value, graph?: Graph): AddedTriple;
export interface DeleteTriple {
    '@type': 'DeleteTriple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function deleteTriple(subject: Node, predicate: Node, object: Value, graph?: Graph): DeleteTriple;
export interface DeletedTriple {
    '@type': 'DeletedTriple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function deletedTriple(subject: Node, predicate: Node, object: Value, graph?: Graph): DeletedTriple;
export interface Subsumption {
    '@type': 'Subsumption';
    child: Node;
    parent: Node;
}
export declare function subsumption(child: Node, parent: Node): Subsumption;
export interface Equals {
    '@type': 'Equals';
    left: any;
    right: any;
}
export declare function equals(left: any, right: any): Equals;
export interface Substring {
    '@type': 'Substring';
    string: string;
    before: number;
    length: number;
    after: number;
    substring: string;
}
export declare function substring(string: string, before: number, length: number, after: number, substring: string): Substring;
export interface ReadDocument {
    '@type': 'ReadDocument';
    identifier: Node;
    document: any;
}
export declare function readDocument(identifier: Node, document: any): ReadDocument;
export interface UpdateDocument {
    '@type': 'UpdateDocument';
    document: Node;
    identifier?: any;
}
export declare function updateDocument(document: Node, identifier?: any): UpdateDocument;
export interface InsertDocument {
    '@type': 'InsertDocument';
    document: Node;
    identifier?: any;
}
export declare function insertDocument(document: Node, identifier?: any): InsertDocument;
export interface DeleteDocument {
    '@type': 'DeleteDocument';
    identifier: Node;
}
export declare function deleteDocument(identifier: Node): DeleteDocument;
export interface Get {
    '@type': 'Get';
    columns: Column[];
    resource: string;
    has_header?: boolean;
}
export declare function get(columns: Column[], resource: string, has_header?: boolean): Get;
export interface Trim {
    '@type': 'Trim';
    untrimmed: string;
    trimmed: string;
}
export declare function trim(untrimmed: string, trimmed: string): Trim;
export interface Eval {
    '@type': 'Eval';
    expression: ArithmeticExpression;
    result: any;
}
export declare function compute(expression: ArithmeticExpression, result: any): Eval;
export interface IsA {
    '@type': 'IsA';
    element: Node;
    type: Node;
}
export declare function isA(element: Node, type: Node): IsA;
export interface Like {
    '@type': 'Like';
    left: string;
    right: string;
    similarity: number;
}
export declare function like(left: string, right: string, similarity: number): Like;
export interface Less {
    '@type': 'Less';
    left: any;
    right: any;
}
export declare function less(left: any, right: any): Less;
export interface Greater {
    '@type': 'Greater';
    left: any;
    right: any;
}
export declare function greater(left: any, right: any): Greater;
export interface Optional {
    '@type': 'Optional';
    query: Query;
}
export declare function optional(query: Query): Optional;
export interface Upper {
    '@type': 'Upper';
    mixed: string;
    upper: string;
}
export declare function upper(mixed: string, upper: string): Upper;
export interface Lower {
    '@type': 'Lower';
    mixed: string;
    lower: string;
}
export declare function lower(mixed: string, lower: string): Lower;
export interface Pad {
    '@type': 'Pad';
    string: string;
    char: string;
    times: number;
    result: string;
}
export declare function pad(string: string, char: string, times: number, result: string): Pad;
export interface Split {
    '@type': 'Split';
    string: string;
    pattern: string;
    list: string[];
}
export declare function split(string: string, pattern: string, list: string[]): Split;
export interface Member {
    '@type': 'Member';
    member: any;
    list: any[];
}
export declare function member(member: any, list: any[]): Member;
export interface Concatenate {
    '@type': 'Concatenate';
    list: string[];
    result: string;
}
export declare function concatenate(list: string[], result: string): Concatenate;
export interface Join {
    '@type': 'Join';
    list: any[];
    separator: string;
    result: string;
}
export declare function join(list: any[], separator: string, result: string): Join;
export interface Sum {
    '@type': 'Sum';
    list: any[];
    result: any;
}
export declare function sum(list: any[], result: any): Sum;
export interface Start {
    '@type': 'Start';
    start: number;
    query: Query;
}
export declare function start(start: number, query: Query): Start;
export interface Limit {
    '@type': 'Limit';
    limit: number;
    query: Query;
}
export declare function limit(limit: number, query: Query): Limit;
export interface Regexp {
    '@type': 'Regexp';
    pattern: string;
    string: string;
    result: string[];
}
export declare function regexp(pattern: string, string: string, result: string[]): Regexp;
export interface True {
    '@type': 'True';
}
export declare function success(): True;
export interface OrderBy {
    '@type': 'OrderBy';
    ordering: any[];
    query: Query;
}
export declare function orderBy(ordering: any[], query: Query): OrderBy;
export interface GroupBy {
    '@type': 'GroupBy';
    template: Value;
    group_by: any;
    value: any;
    query: Query;
}
export declare function groupBy(template: Value, group_by: any, value: any, query: Query): GroupBy;
export interface Length {
    '@type': 'Length';
    list: any[];
    length: number;
}
export declare function length(list: any[], length: number): Length;
export interface Not {
    '@type': 'Not';
    query: Query;
}
export declare function not(query: Query): Not;
export interface Once {
    '@type': 'Once';
    query: Query;
}
export declare function once(query: Query): Once;
export interface Immediately {
    '@type': 'Immediately';
    query: Query;
}
export declare function immediately(query: Query): Immediately;
export interface Count {
    '@type': 'Count';
    query: Query;
    count: any;
}
export declare function count(query: Query, count: any): Count;
export interface Typecast {
    '@type': 'Typecast';
    value: Value;
    type: Node;
    result: Value;
}
export declare function typecast(value: Value, type: Node, result: Value): Typecast;
export interface Path {
    '@type': 'Path';
    subject: Node;
    pattern: any;
    object: Node;
    path?: PathPattern;
}
export declare function path(subject: Node, pattern: any, object: Node, path?: PathPattern): Path;
export interface Dot {
    '@type': 'Dot';
    document: any;
    field: string;
    value: any;
}
export declare function dot(document: any, field: string, value: any): Dot;
export interface TypeOf {
    '@type': 'TypeOf';
    value: Value;
    type: Node;
}
export declare function typeOf(value: Value, type: Node): TypeOf;
export type Query = Using | Select | Distinct | And | Or | From | Into | Triple | AddTriple | AddedTriple | DeleteTriple | DeletedTriple | Subsumption | Equals | Substring | ReadDocument | UpdateDocument | InsertDocument | DeleteDocument | Get | Trim | Eval | IsA | Like | Less | Greater | Optional | Upper | Lower | Pad | Split | Member | Concatenate | Join | Sum | Start | Limit | Regexp | True | OrderBy | GroupBy | Length | Not | Once | Immediately | Count | Typecast | Path | Dot | TypeOf;
export interface PathPredicate {
    '@type': 'PathPredicate';
    predicate?: string;
}
export declare function pathPredicate(predicate?: string): PathPredicate;
export interface InversePathPredicate {
    '@type': 'InversePathPredicate';
    predicate?: string;
}
export declare function inversePathPredicate(predicate?: string): InversePathPredicate;
export interface PathSequence {
    '@type': 'PathSequence';
    sequence: PathPattern[];
}
export declare function pathSequence(sequence: PathPattern[]): PathSequence;
export interface PathOr {
    '@type': 'PathOr';
    or: PathPattern[];
}
export declare function pathOr(or: PathPattern[]): PathOr;
export interface PathPlus {
    '@type': 'PathPlus';
    plus: PathPattern;
}
export declare function pathPlus(plus: PathPattern): PathPlus;
export interface PathStar {
    '@type': 'PathStar';
    star: PathPattern;
}
export declare function pathStar(star: PathPattern): PathStar;
export interface PathTimes {
    '@type': 'PathTimes';
    times: PathPattern;
    from: number;
    to: number;
}
export declare function pathTimes(times: PathPattern, from: number, to: number): PathTimes;
export type PathPattern = PathPredicate | InversePathPredicate | PathSequence | PathOr | PathPlus | PathStar | PathTimes;
export interface Plus {
    '@type': 'Plus';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function plus(left: ArithmeticExpression, right: ArithmeticExpression): Plus;
export interface Minus {
    '@type': 'Minus';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function minus(left: ArithmeticExpression, right: ArithmeticExpression): Minus;
export interface Times {
    '@type': 'Times';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function times(left: ArithmeticExpression, right: ArithmeticExpression): Times;
export interface Divide {
    '@type': 'Divide';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function divide(left: ArithmeticExpression, right: ArithmeticExpression): Divide;
export interface Div {
    '@type': 'Div';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function div(left: ArithmeticExpression, right: ArithmeticExpression): Div;
export interface Exp {
    '@type': 'Exp';
    left: ArithmeticExpression;
    right: ArithmeticExpression;
}
export declare function exp(left: ArithmeticExpression, right: ArithmeticExpression): Exp;
export interface Floor {
    '@type': 'Floor';
    argument: ArithmeticExpression;
}
export declare function floor(argument: ArithmeticExpression): Floor;
export type ArithmeticExpression = Plus | Minus | Times | Divide | Div | Exp | Floor | Literal;
