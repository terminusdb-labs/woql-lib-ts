export declare enum Graph {
    instance = "instance",
    schema = "schema"
}
export interface Uri {
    '@type'?: 'NodeValue' | 'Value';
    node: string;
}
export declare enum LiteralType {
    string = "xsd:string",
    boolean = "xsd:boolean",
    decimal = "xsd:decimal",
    integer = "xsd:integer",
    double = "xsd:double",
    float = "xsd:float",
    date = "xsd:date",
    time = "xsd:time",
    dateTime = "xsd:dateTime",
    dateTimeStamp = "xsd:dateTimeStamp",
    gYear = "xsd:gYear",
    gMonth = "xsd:gMonth",
    gDay = "xsd:gDay",
    gYearMonth = "xsd:gYearMonth",
    gMonthDay = "xsd:gMonthDay",
    duration = "xsd:duration",
    yearMonthDuration = "xsd:yearMonthDuration",
    dayTimeDuration = "xsd:dayTimeDuration",
    byte = "xsd:byte",
    short = "xsd:short",
    int = "xsd:int",
    long = "xsd:long",
    unsignedByte = "xsd:unsignedByte",
    unsignedShort = "xsd:unsignedShort",
    unsignedInt = "xsd:unsignedInt",
    unsignedLong = "xsd:unsignedLong",
    positiveInteger = "xsd:positiveInteger",
    nonNegativeInteger = "xsd:nonNegativeInteger",
    negativeInteger = "xsd:negativeInteger",
    nonPositiveInteger = "xsd:nonPositiveInteger",
    hexBinary = "xsd:hexBinary",
    base64Binary = "xsd:base64Binary",
    anyURI = "xsd:anyURI",
    language = "xsd:language",
    normalizedString = "xsd:normalizedString",
    NMTOKEN = "xsd:NMTOKEN",
    Name = "xsd:Name",
    NCName = "xsd:NCName"
}
export interface Literal {
    '@type': LiteralType;
    '@value': string | number | boolean | null;
}
export declare function lit(value: any, type?: LiteralType): Literal;
export interface Quad {
    '@type': 'Triple';
    subject: Node;
    predicate: Node;
    object: Value;
    graph?: Graph;
}
export declare function quad(subject: Node, predicate: Node, object: Value, graph?: Graph): Quad;
export declare function uri(value: string): Uri;
export interface Var {
    '@type'?: 'NodeValue' | 'Value';
    variable: string;
}
export type Value = Var | Uri | Literal;
export type Node = Var | Uri;
export declare function Vars(...args: string[]): {
    [K in string]: Var;
};
export interface Indicator {
    index: number;
    name: string;
}
export interface Column {
    '@type': 'Column';
    indicator: Indicator;
    type?: Literal;
}
