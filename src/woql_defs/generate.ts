import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
import * as prettier from 'prettier'

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

function generateDefs(
  jsonObject: any,
  cls: string,
  otherTypes: string[] = [],
): string {
  let defs = ''
  let clsTypeList: string[] = []
  jsonObject.forEach((obj: any) => {
    if (obj['@metadata'] !== undefined && obj['@inherits'] === cls) {
      const name = obj['@id']
      const metadata = obj['@metadata']
      const definitionRecord = metadata['https://terminusdb.com']
      const fields = definitionRecord.fields
      const defTypes = associatedTypes(definitionRecord.types)
      const funName = renameFunction(name)
      const args = argsList(fields, defTypes)
      const funArgs = args.join(', ')
      const types = args.join('\n  ')
      const body = renderBody(name, fields)
      const fundef = `
export interface ${name} {
'@type': '${name}'
  ${types}
}

export function ${funName}(${funArgs}) : ${name} {
  return ${body}
}
`
      defs += fundef
      clsTypeList.push(name)
    }
  })
  clsTypeList = clsTypeList.concat(otherTypes)
  const queryType = `
export type ${cls} = ${clsTypeList.join(' | ')}
`
  defs += queryType
  return defs
}

export async function generateWoql(): Promise<void> {
  const dir = dirname(fileURLToPath(import.meta.url))
  const data = await readFile(dir + '/woql_list.json', 'utf8')
  const jsonObject = JSON.parse(data)

  let defs = `
/* eslint-disable @typescript-eslint/no-empty-interface */
/* eslint-disable @typescript-eslint/naming-convention */
import { type Graph, type Value, type Node } from './types.js'

`
  const queryDefs = generateDefs(jsonObject, 'Query')
  defs += queryDefs

  const pathDefs = generateDefs(jsonObject, 'PathPattern')
  defs += pathDefs

  const arithmeticDefs = generateDefs(jsonObject, 'ArithmeticExpression', [
    'number',
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
