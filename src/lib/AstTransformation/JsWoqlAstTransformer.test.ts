// tests/calculator.spec.tx
import { assert } from 'chai'
import documentQuery from './mock/documentsOnly.woql.js'
import select1 from './mock/select1.woql.js'
import select2 from './mock/select2.woql.js'
import { parseWoqlString } from './parseWoqlString.js'

describe('Basic AST Transformation Sanity Check', () => {
  it('should compile the string WOQL to an accurate WOQL AST', () => {
    const result = parseWoqlString(documentQuery.text)

    assert.deepEqual(result as object, documentQuery.woqlAst)
  })
})

describe('Specific AST Transformation Checks', () => {
  it('should compile select with one variables correctly', () => {
    const result = parseWoqlString(select1.text)
    assert.deepEqual(result as object, select1.woqlAst)
  })
  it('should compile select with two variables correctly', () => {
    const result = parseWoqlString(select2.text)
    assert.deepEqual(result as object, select2.woqlAst)
  })
})
