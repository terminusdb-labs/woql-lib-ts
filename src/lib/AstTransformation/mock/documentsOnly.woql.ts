const textWoql = `
(doc, type, unbound) => {
  and(
    triple(doc, "rdf:type", type),
    not(quad(type, "sys:subdocument", unbound, "schema")),
  )
}
`

const woqlAst = {
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
        graph: 'schema',
      },
    },
  ],
}

export default {
  text: textWoql,
  woqlAst,
}
