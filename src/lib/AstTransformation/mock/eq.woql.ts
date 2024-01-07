import type { MockData } from '../JsWoqlAstTransformer.test.js'

const mock: MockData[] = [
  {
    textWoql: `
(doc, type, unbound) => {
    equals(doc,"rdf:type")
}
`,
    woqlAst: {
      '@type': 'Equals',
      left: {
        '@type': 'Variable',
        name: 'doc',
      },
      right: {
        '@type': 'Value',
        value: 'rdf:type',
      },
    },
  },
]

export default mock
