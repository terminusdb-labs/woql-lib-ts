const mock = [
    {
        textWoql: `
(doc, type, unbound) => {
  distinct(doc,and())
}
`,
        woqlAst: {
            '@type': 'Distinct',
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
    distinct(doc,type,triple(doc,"rdf:type",type))
  }
  `,
        woqlAst: {
            '@type': 'Distinct',
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
//# sourceMappingURL=distinct.woql.js.map