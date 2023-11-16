import { readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

function renameField(name: string) : string {
  if (name == 'object') {
    return 'obj'
  }else if (name == 'type'){
    return 'ty'
  }else if (name == 'from'){
    return 'start'
  }else if (name == 'string'){
    return 'str'
  }else{
    return name
  }
}

function listType(s:string) : string | null {
  if (s.length > 5 && s.slice(0,5) == 'list('){
    return s.slice(5, s.length - 1)
  }else{
    return null
  }
}

export function optionType(s:string) : string | null {
  if (s.length > 9 && s.slice(0,9) == 'optional('){
    return s.slice(9, s.length - 1)
  }else{
    return null
  }
}

function associated_type(ty: string) : string {
  let lt = listType(ty)
  let ot = optionType(ty)
  if(lt){
    let t = associated_type(lt)
    return `${t}[]`
  }else if(ot){
    let t = associated_type(ot)
    return `${t} | null`
  }else if (ty=='query') {
    return `Query`
  }else if (ty=='graph'){
    return 'Graph'
  }else if (ty=='node'){
    return 'Node'
  }else if (ty=='value'){
    return 'Value'
  }else if (ty=='integer'){
    return 'number'
  }else if (ty=='boolean'){
    return 'boolean'
  }else if (ty=='json'){
    return 'any'
  }else if (ty=='resource'){
    return 'string'
  }else if (ty=='string'){
    return 'string'
  }else if (ty=='float'){
    return 'number'
  }else if (ty=='path'){
    return 'PathPattern'
  }else if (ty=='arithmetic'){
    return 'ArithmeticExpression'
  }else{
    return 'any'
  }
}

function lowerCamelCase(inputString: string) : string {
  if (inputString.length > 1) {
    return inputString[0].toLowerCase() + inputString.slice(1,inputString.length)
  }
  return inputString.toLowerCase()
}

function renameFunction(inputString: string) : string {
  let newName = lowerCamelCase(inputString)
  if (newName == 'eval') {
    return 'compute'
  }else if(newName == 'true'){
    return 'success'
  }else{
    return newName
  }
}

function renameFields(fields: string[]) : string[] {
  return fields.map( (s) => { return renameField(s) })
}

function argsList(fields: string[], types: string[]) : string[] {
  let args = []
  for (const i in fields) {
    let name = fields[i];
    let typ = associated_type(types[i]);
    args.push(`${name} : ${typ}`)
  }
  return args
}

function renderBody(fields: string[]) : string {
  let inner = fields.map( (s : string) : string => {
    return `${s} : ${s}`
  } ).join(', ')
  return `{ ${inner} }`
}

function generateDefs(jsonObject: any, cls: string, otherTypes: string[] = []) : string {
  let defs = ''
  let clsTypeList : string[] = []
  for (const i in jsonObject) {
    if (jsonObject[i]['@metadata'] && jsonObject[i]['@inherits'] == cls) {
      let name = jsonObject[i]['@id']
      let metadata = jsonObject[i]['@metadata']
      let definitionRecord = metadata['https://terminusdb.com']
      let fields = renameFields(definitionRecord['fields'])
      let defTypes = definitionRecord['types']
      let funName = renameFunction(name)
      let args = argsList(fields, defTypes)
      let funArgs = args.join(', ')
      let types = args.join('\n  ')
      let body = renderBody(fields)
      let fundef = `
type ${name} = {
  ${types}
}

export function ${funName}(${funArgs}) : ${cls} {
  return ${body}
}
`
      console.log(fundef)
      defs += fundef
      clsTypeList.push(name)
    }
  }
  clsTypeList = clsTypeList.concat(otherTypes)
  let queryType = `
type ${cls} = ${clsTypeList.join(' | ')}
`
  defs += queryType
  return defs
}

export async function generate_woql() {
  const dir = dirname(fileURLToPath(import.meta.url))
  const data = await readFile(dir + '/woql_list.json', 'utf8')
  const jsonObject = JSON.parse(data)

  let defs = `
import { Graph, Value, Node} from './types.ts'

`
  let queryDefs = generateDefs(jsonObject, 'Query')
  defs += queryDefs

  let pathDefs = generateDefs(jsonObject, 'PathPattern')
  defs += pathDefs

  let arithmeticDefs = generateDefs(jsonObject, 'ArithmeticExpression', ['number'])
  defs += arithmeticDefs

  await writeFile(dir + '/woql.ts', defs)
}
