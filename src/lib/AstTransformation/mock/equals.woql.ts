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
        '@type': 'Value',
        variable: 'doc',
      },
      right: {
        '@type': 'Value',
        node: 'rdf:type',
      },
    },
  },
]

export default mock
