const mock = [
    {
        textWoql: `
(doc, type, unbound) => {
  and(
    not(
    triple(doc,"rdf:type",type)
  ))
}
`,
        woqlAst: {
            '@type': 'And',
            and: [
                {
                    '@type': 'Not',
                    query: {
                        '@type': 'Triple',
                        subject: { '@type': 'NodeValue', variable: 'doc' },
                        predicate: { '@type': 'NodeValue', node: 'rdf:type' },
                        object: { '@type': 'Value', variable: 'type' },
                        graph: undefined,
                    },
                },
            ],
        },
    },
];
export default mock;
//# sourceMappingURL=not.woql.js.map