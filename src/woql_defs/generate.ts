import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import * as prettier from 'prettier'

const dir = dirname(fileURLToPath(import.meta.url))
const schemaList: object[] = JSON.parse(
  await readFile(dir + '/woql_list.json', 'utf8'),
)

export interface WOQLDefinition {
  name: string
  group: string
  funName: string
  fields: string[]
  types: string[]
  args: string[]
}

export type WOQLSchema = { [K in string]: WOQLDefinition }
export const woqlSchema: WOQLSchema = {}
schemaList.forEach((obj: object) => {
  if ('@metadata' in obj && '@inherits' in obj && '@id' in obj) {
    const name = obj['@id'] as string
    const group = obj['@inherits'] as string
    const funName = renameFunction(name)
    const metadata = obj['@metadata'] as { [K in string]: any }
    const definitionRecord = metadata['https://terminusdb.com'] as {
      [K in 'fields' | 'types']: string[]
    }
    const fields = definitionRecord.fields
    const types = associatedTypes(definitionRecord.types)
    const args = argsList(fields, types)
    woqlSchema[name] = {
      name,
      group,
      funName,
      fields,
      types,
      args,
    }
  }
})

function listType(s: string): string | null {
  if (s.length > 5 && s.slice(0, 5) === 'list(') {
    return s.slice(5, s.length - 1)
  } else {
    return null
  }
}

export function optionType(s: string): string | null {
  if (s.length > 9 && s.slice(0, 9) === 'optional(') {
    return s.slice(9, s.length - 1)
  } else {
    return null
  }
}

function associatedType(ty: string): string {
  const lt = listType(ty)
  const ot = optionType(ty)
  if (lt !== null) {
    const t = associatedType(lt)
    return `${t}[]`
  } else if (ot !== null) {
    const t = associatedType(ot)
    return `${t} | undefined`
  } else if (ty === 'query') {
    return `Query`
  } else if (ty === 'graph') {
    return 'Graph'
  } else if (ty === 'column') {
    return 'Column'
  } else if (ty === 'node') {
    return 'Node'
  } else if (ty === 'value') {
    return 'Value'
  } else if (ty === 'integer') {
    return 'number'
  } else if (ty === 'boolean') {
    return 'boolean'
  } else if (ty === 'json') {
    return 'any'
  } else if (ty === 'resource') {
    return 'string'
  } else if (ty === 'string') {
    return 'string'
  } else if (ty === 'float') {
    return 'number'
  } else if (ty === 'path') {
    return 'PathPattern'
  } else if (ty === 'arithmetic') {
    return 'ArithmeticExpression'
  } else {
    return 'any'
  }
}

function associatedTypes(types: string[]): string[] {
  return types.map((ty) => {
    return associatedType(ty)
  })
}

function lowerCamelCase(inputString: string): string {
  if (inputString.length > 1) {
    return (
      inputString[0].toLowerCase() + inputString.slice(1, inputString.length)
    )
  }
  return inputString.toLowerCase()
}

function renameFunction(inputString: string): string {
  const newName = lowerCamelCase(inputString)
  if (newName === 'eval') {
    return 'compute'
  } else if (newName === 'true') {
    return 'success'
  } else {
    return newName
  }
}

function argsList(fields: string[], types: string[]): string[] {
  const args: string[] = []
  fields.forEach((name: string, i: number) => {
    const typ = types[i]
    const res = typ.match(/(\S*)\s*\|\s*undefined/)
    if (res != null) {
      args.push(`${name}?: ${res[1]}`)
    } else {
      args.push(`${name}: ${typ}`)
    }
  })
  return args
}

function renderBody(name: string, fields: string[]): string {
  const inner = fields
    .map((s: string): string => {
      return `${s}`
    })
    .join(', ')
  return `{ '@type': '${name}', ${inner} }`
}

function generateFunDef(
  name: string,
  funName: string,
  fields: string[],
  args: string[],
): string {
  const body = renderBody(name, fields)
  const funArgs = args.join(', ')

  return `
export function ${funName}(${funArgs}): ${name} {
  return ${body}
}
`
}

function generateTypeDef(name: string, args: string[]): string {
  const types = args.join('\n  ')
  return `
  export interface ${name} {
'@type': '${name}'
  ${types}
}
`
}

function generateDefs(
  schema: WOQLSchema,
  cls: string,
  otherTypes: string[] = [],
): string {
  let defs = ''
  let clsTypeList: string[] = []
  for (const obj of Object.values(schema)) {
    if (obj.group === cls) {
      const name = obj.name
      const fields = obj.fields
      const funName = obj.funName
      const args = obj.args
      const typeDef = generateTypeDef(name, args)
      defs += typeDef
      const funDef = generateFunDef(name, funName, fields, args)
      defs += funDef
      clsTypeList.push(name)
    }
  }

  clsTypeList = clsTypeList.concat(otherTypes)
  const queryType = `
export type ${cls} = ${clsTypeList.join(' | ')}
`
  defs += queryType
  return defs
}

export async function generateWoql(): Promise<void> {
  let defs = `
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { type Graph, type Value, type Node, type Column, type Literal } from './types.js'

`
  const queryDefs = generateDefs(woqlSchema, 'Query')
  defs += queryDefs

  const pathDefs = generateDefs(woqlSchema, 'PathPattern')
  defs += pathDefs

  const arithmeticDefs = generateDefs(woqlSchema, 'ArithmeticExpression', [
    'Literal',
  ])

  defs += arithmeticDefs

  const pretty = await prettier.format(defs, {
    parser: 'typescript',
    trailingComma: 'all',
    tabWidth: 2,
    semi: false,
    singleQuote: true,
  })
  await writeFile(dir + '/woql.ts', pretty)
}
