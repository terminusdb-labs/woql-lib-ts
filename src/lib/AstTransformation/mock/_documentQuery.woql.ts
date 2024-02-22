import { Graph, type Query } from '../../../syntax.js'

const textWoql: string = `
(doc, type, unbound) => {
  and(
    triple(doc, "rdf:type", type),
    not(quad(type, "sys:subdocument", unbound, "schema")),
  )
}
`

const woqlAst: Query = {
  '@type': 'And',
  and: [
    {
      '@type': 'Triple',
      graph: undefined,
      subject: {
        '@type': 'NodeValue',
        variable: 'doc',
      },
      predicate: {
        '@type': 'NodeValue',
        node: 'rdf:type',
      },
      object: {
        '@type': 'Value',
        variable: 'type',
      },
    },
    {
      '@type': 'Not',
      query: {
        '@type': 'Triple',
        subject: {
          '@type': 'NodeValue',
          variable: 'type',
        },
        predicate: {
          '@type': 'NodeValue',
          node: 'sys:subdocument',
        },
        object: {
          '@type': 'Value',
          variable: 'unbound',
        },
        graph: Graph.schema,
      },
    },
  ],
}

export default {
  textWoql,
  woqlAst,
}
