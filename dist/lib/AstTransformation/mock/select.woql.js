const mock = [
    {
        textWoql: `
(doc, type, unbound) => {
  select(doc,and())
}
`,
        woqlAst: {
            '@type': 'Select',
            query: {
                '@type': 'And',
                and: [],
            },
            variables: ['doc'],
        },
    },
    {
        textWoql: `
  (doc, type, unbound) => {
    select(doc,type,triple(doc,"rdf:type",type))
  }
  `,
        woqlAst: {
            '@type': 'Select',
            query: {
                '@type': 'Triple',
                subject: { '@type': 'NodeValue', variable: 'doc' },
                predicate: { '@type': 'NodeValue', node: 'rdf:type' },
                object: { '@type': 'Value', variable: 'type' },
                graph: undefined,
            },
            variables: ['doc', 'type'],
        },
    },
];
export default mock;
//# sourceMappingURL=select.woql.js.map