import * as fs from 'fs';
import { readFile } from 'fs/promises'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

export async function generate_woql() {
  const dir = dirname(fileURLToPath(import.meta.url))
  const data = await readFile(dir + '/woql_list.json', 'utf8')

  const jsonObject = JSON.parse(data);
  for (const i in jsonObject) {
    if (jsonObject[i]['@inherits'] == 'Query') {
      console.log(`name: ${jsonObject[i]["@id"]}`)
    }
  }
}
