import type { MockData } from '../JsWoqlAstTransformer.test.js'

const mock: MockData[] = [
  {
    textWoql: `
(doc, type, unbound) => {
  and(
    triple(doc,"rdf:type",type),
    triple(doc,"rdf:type",type)
  )
}
`,
    woqlAst: {
      '@type': 'And',
      and: [
        {
          '@type': 'Triple',
          subject: { '@type': 'NodeValue', variable: 'doc' },
          predicate: { '@type': 'NodeValue', node: 'rdf:type' },
          object: { '@type': 'Value', variable: 'type' },
          graph: undefined,
        },
        {
          '@type': 'Triple',
          subject: { '@type': 'NodeValue', variable: 'doc' },
          predicate: { '@type': 'NodeValue', node: 'rdf:type' },
          object: { '@type': 'Value', variable: 'type' },
          graph: undefined,
        },
      ],
    },
  },
]

export default mock
