export function using(collection, query) {
    return { '@type': 'Using', collection, query };
}
export function select(variables, query) {
    return { '@type': 'Select', variables, query };
}
export function distinct(variables, query) {
    return { '@type': 'Distinct', variables, query };
}
export function and(and) {
    return { '@type': 'And', and };
}
export function or(or) {
    return { '@type': 'Or', or };
}
export function from(graph, query) {
    return { '@type': 'From', graph, query };
}
export function into(graph, query) {
    return { '@type': 'Into', graph, query };
}
export function triple(subject, predicate, object, graph) {
    return { '@type': 'Triple', subject, predicate, object, graph };
}
export function addTriple(subject, predicate, object, graph) {
    return { '@type': 'AddTriple', subject, predicate, object, graph };
}
export function addedTriple(subject, predicate, object, graph) {
    return { '@type': 'AddedTriple', subject, predicate, object, graph };
}
export function deleteTriple(subject, predicate, object, graph) {
    return { '@type': 'DeleteTriple', subject, predicate, object, graph };
}
export function deletedTriple(subject, predicate, object, graph) {
    return { '@type': 'DeletedTriple', subject, predicate, object, graph };
}
export function subsumption(child, parent) {
    return { '@type': 'Subsumption', child, parent };
}
export function equals(left, right) {
    return { '@type': 'Equals', left, right };
}
export function substring(string, before, length, after, substring) {
    return { '@type': 'Substring', string, before, length, after, substring };
}
export function readDocument(identifier, document) {
    return { '@type': 'ReadDocument', identifier, document };
}
export function updateDocument(document, identifier) {
    return { '@type': 'UpdateDocument', document, identifier };
}
export function insertDocument(document, identifier) {
    return { '@type': 'InsertDocument', document, identifier };
}
export function deleteDocument(identifier) {
    return { '@type': 'DeleteDocument', identifier };
}
export function get(columns, resource, has_header) {
    return { '@type': 'Get', columns, resource, has_header };
}
export function trim(untrimmed, trimmed) {
    return { '@type': 'Trim', untrimmed, trimmed };
}
export function compute(expression, result) {
    return { '@type': 'Eval', expression, result };
}
export function isA(element, type) {
    return { '@type': 'IsA', element, type };
}
export function like(left, right, similarity) {
    return { '@type': 'Like', left, right, similarity };
}
export function less(left, right) {
    return { '@type': 'Less', left, right };
}
export function greater(left, right) {
    return { '@type': 'Greater', left, right };
}
export function optional(query) {
    return { '@type': 'Optional', query };
}
export function upper(mixed, upper) {
    return { '@type': 'Upper', mixed, upper };
}
export function lower(mixed, lower) {
    return { '@type': 'Lower', mixed, lower };
}
export function pad(string, char, times, result) {
    return { '@type': 'Pad', string, char, times, result };
}
export function split(string, pattern, list) {
    return { '@type': 'Split', string, pattern, list };
}
export function member(member, list) {
    return { '@type': 'Member', member, list };
}
export function concatenate(list, result) {
    return { '@type': 'Concatenate', list, result };
}
export function join(list, separator, result) {
    return { '@type': 'Join', list, separator, result };
}
export function sum(list, result) {
    return { '@type': 'Sum', list, result };
}
export function start(start, query) {
    return { '@type': 'Start', start, query };
}
export function limit(limit, query) {
    return { '@type': 'Limit', limit, query };
}
export function regexp(pattern, string, result) {
    return { '@type': 'Regexp', pattern, string, result };
}
export function success() {
    return { '@type': 'True' };
}
export function orderBy(ordering, query) {
    return { '@type': 'OrderBy', ordering, query };
}
export function groupBy(template, group_by, value, query) {
    return { '@type': 'GroupBy', template, group_by, value, query };
}
export function length(list, length) {
    return { '@type': 'Length', list, length };
}
export function not(query) {
    return { '@type': 'Not', query };
}
export function once(query) {
    return { '@type': 'Once', query };
}
export function immediately(query) {
    return { '@type': 'Immediately', query };
}
export function count(query, count) {
    return { '@type': 'Count', query, count };
}
export function typecast(value, type, result) {
    return { '@type': 'Typecast', value, type, result };
}
export function path(subject, pattern, object, path) {
    return { '@type': 'Path', subject, pattern, object, path };
}
export function dot(document, field, value) {
    return { '@type': 'Dot', document, field, value };
}
export function typeOf(value, type) {
    return { '@type': 'TypeOf', value, type };
}
export function pathPredicate(predicate) {
    return { '@type': 'PathPredicate', predicate };
}
export function inversePathPredicate(predicate) {
    return { '@type': 'InversePathPredicate', predicate };
}
export function pathSequence(sequence) {
    return { '@type': 'PathSequence', sequence };
}
export function pathOr(or) {
    return { '@type': 'PathOr', or };
}
export function pathPlus(plus) {
    return { '@type': 'PathPlus', plus };
}
export function pathStar(star) {
    return { '@type': 'PathStar', star };
}
export function pathTimes(times, from, to) {
    return { '@type': 'PathTimes', times, from, to };
}
export function plus(left, right) {
    return { '@type': 'Plus', left, right };
}
export function minus(left, right) {
    return { '@type': 'Minus', left, right };
}
export function times(left, right) {
    return { '@type': 'Times', left, right };
}
export function divide(left, right) {
    return { '@type': 'Divide', left, right };
}
export function div(left, right) {
    return { '@type': 'Div', left, right };
}
export function exp(left, right) {
    return { '@type': 'Exp', left, right };
}
export function floor(argument) {
    return { '@type': 'Floor', argument };
}
//# sourceMappingURL=woql.js.map