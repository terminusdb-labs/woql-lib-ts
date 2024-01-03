const textWoql = `
(doc, type, unbound) => {
  select(doc,and())
}
`

const woqlAst = {
  '@type': 'Select',
  query: {
    '@type': 'And',
    and: [],
  },
  variables: ['doc'],
}

export default {
  text: textWoql,
  woqlAst,
}
