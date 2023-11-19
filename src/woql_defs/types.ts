export enum Graph {
  instance = 'instance',
  schema = 'schema',
}

export interface Uri {
  node: string
}

export enum LiteralType {
  // Core types
  string = 'xsd:string', // Character strings (but not all Unicode character strings)
  boolean = 'xsd:boolean', // true, false
  decimal = 'xsd:decimal', // Arbitrary-precision decimal numbers
  integer = 'xsd:integer', //  Arbitrary-size integer numbers |
  // IEEE floating-point numbers
  double = 'xsd:double', // 64-bit floating point numbers incl. ±Inf, ±0, NaN
  float = 'xsd:float', // 32-bit floating point numbers incl. ±Inf, ±0, NaN
  // Time and date
  date = 'xsd:date', // Dates (yyyy-mm-dd) with or without timezone
  time = 'xsd:time', // Times (hh:mm:ss.sss…) with or without timezone
  dateTime = 'xsd:dateTime', // Date and time with or without timezone
  dateTimeStamp = 'xsd:dateTimeStamp', // Date and time with required timezone
  // Recurring and partial dates
  gYear = 'xsd:gYear', // 	Gregorian calendar year
  gMonth = 'xsd:gMonth', //	Gregorian calendar month
  gDay = 'xsd:gDay', // Gregorian calendar day of the month
  gYearMonth = 'xsd:gYearMonth', //	Gregorian calendar year and month
  gMonthDay = 'xsd:gMonthDay', //	Gregorian calendar month and day
  duration = 'xsd:duration', // Duration of time
  yearMonthDuration = 'xsd:yearMonthDuration', // Duration of time (months and years only)
  dayTimeDuration = 'xsd:dayTimeDuration', // Duration of time (days, hours, minutes, seconds only)
  // Limited-range integer numbers
  byte = 'xsd:byte', // -128…+127 (8 bit)
  short = 'xsd:short', //	-32768…+32767 (16 bit)
  int = 'xsd:int', //	-2147483648…+2147483647 (32 bit)
  long = 'xsd:long', //	-9223372036854775808…+9223372036854775807 (64 bit)
  unsignedByte = 'xsd:unsignedByte', //	0…255 (8 bit)
  unsignedShort = 'xsd:unsignedShort', //	0…65535 (16 bit)
  unsignedInt = 'xsd:unsignedInt', //	0…4294967295 (32 bit)
  unsignedLong = 'xsd:unsignedLong', //	0…18446744073709551615 (64 bit)
  positiveInteger = 'xsd:positiveInteger', //	Integer numbers >0
  nonNegativeInteger = 'xsd:nonNegativeInteger', //	Integer numbers ≥0
  negativeInteger = 'xsd:negativeInteger', //	Integer numbers <0
  nonPositiveInteger = 'xsd:nonPositiveInteger', //	Integer numbers ≤0
  // Encoded binary data
  hexBinary = 'xsd:hexBinary', //	Hex-encoded binary data
  base64Binary = 'xsd:base64Binary', //	Base64-encoded binary data
  // Miscellaneous XSD types
  anyURI = 'xsd:anyURI', //	Absolute or relative URIs and IRIs
  language = 'xsd:language', //	Language tags per [BCP47]
  normalizedString = 'xsd:normalizedString', //	Whitespace-normalized strings
  NMTOKEN = 'xsd:NMTOKEN', //	XML NMTOKENs
  Name = 'xsd:Name', //	XML Names
  NCName = 'xsd:NCName', //	XML NCNames
}

export interface Literal {
  '@type': LiteralType
  '@value': string | number | boolean | null
}

export function lit(
  value: any,
  type: LiteralType = LiteralType.string,
): Literal {
  return { '@type': type, '@value': value }
}

export function uri(value: string): Uri {
  return { node: value }
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

export interface Indicator {
  index: number
  name: string
}

export interface Column {
  '@type': 'Column'
  indicator: Indicator
  type?: Literal
}
