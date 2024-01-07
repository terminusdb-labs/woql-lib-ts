export var Graph;
(function (Graph) {
    Graph["instance"] = "instance";
    Graph["schema"] = "schema";
})(Graph || (Graph = {}));
export var LiteralType;
(function (LiteralType) {
    // Core types
    LiteralType["string"] = "xsd:string";
    LiteralType["boolean"] = "xsd:boolean";
    LiteralType["decimal"] = "xsd:decimal";
    LiteralType["integer"] = "xsd:integer";
    // IEEE floating-point numbers
    LiteralType["double"] = "xsd:double";
    LiteralType["float"] = "xsd:float";
    // Time and date
    LiteralType["date"] = "xsd:date";
    LiteralType["time"] = "xsd:time";
    LiteralType["dateTime"] = "xsd:dateTime";
    LiteralType["dateTimeStamp"] = "xsd:dateTimeStamp";
    // Recurring and partial dates
    LiteralType["gYear"] = "xsd:gYear";
    LiteralType["gMonth"] = "xsd:gMonth";
    LiteralType["gDay"] = "xsd:gDay";
    LiteralType["gYearMonth"] = "xsd:gYearMonth";
    LiteralType["gMonthDay"] = "xsd:gMonthDay";
    LiteralType["duration"] = "xsd:duration";
    LiteralType["yearMonthDuration"] = "xsd:yearMonthDuration";
    LiteralType["dayTimeDuration"] = "xsd:dayTimeDuration";
    // Limited-range integer numbers
    LiteralType["byte"] = "xsd:byte";
    LiteralType["short"] = "xsd:short";
    LiteralType["int"] = "xsd:int";
    LiteralType["long"] = "xsd:long";
    LiteralType["unsignedByte"] = "xsd:unsignedByte";
    LiteralType["unsignedShort"] = "xsd:unsignedShort";
    LiteralType["unsignedInt"] = "xsd:unsignedInt";
    LiteralType["unsignedLong"] = "xsd:unsignedLong";
    LiteralType["positiveInteger"] = "xsd:positiveInteger";
    LiteralType["nonNegativeInteger"] = "xsd:nonNegativeInteger";
    LiteralType["negativeInteger"] = "xsd:negativeInteger";
    LiteralType["nonPositiveInteger"] = "xsd:nonPositiveInteger";
    // Encoded binary data
    LiteralType["hexBinary"] = "xsd:hexBinary";
    LiteralType["base64Binary"] = "xsd:base64Binary";
    // Miscellaneous XSD types
    LiteralType["anyURI"] = "xsd:anyURI";
    LiteralType["language"] = "xsd:language";
    LiteralType["normalizedString"] = "xsd:normalizedString";
    LiteralType["NMTOKEN"] = "xsd:NMTOKEN";
    LiteralType["Name"] = "xsd:Name";
    LiteralType["NCName"] = "xsd:NCName";
})(LiteralType || (LiteralType = {}));
export function lit(value, type = LiteralType.string) {
    return { '@type': type, '@value': value };
}
export function quad(subject, predicate, object, graph) {
    return { '@type': 'Triple', subject, predicate, object, graph };
}
export function uri(value) {
    return { node: value };
}
export function Vars(...args) {
    const varObj = {};
    for (let i = 0, j = arguments.length; i < j; i += 1) {
        const argumentName = args[i];
        varObj[argumentName] = { variable: argumentName };
    }
    return varObj;
}
//# sourceMappingURL=types.js.map