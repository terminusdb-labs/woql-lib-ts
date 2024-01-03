const textWoql = `
(doc, type, unbound) => {
  select(doc,type,triple(doc,"rdf:type",type))
}
`

const woqlAst = {
  '@type': 'Select',
  query: {
    '@type': 'Triple',
    subject: { '@type': 'NodeValue', variable: 'doc' },
    predicate: { '@type': 'NodeValue', node: 'rdf:type' },
    object: { '@type': 'Value', variable: 'type' },
    graph: undefined,
  },
  variables: ['doc', 'type'],
}

export default {
  text: textWoql,
  woqlAst,
}
