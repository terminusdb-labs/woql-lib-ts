const mock = [
    {
        textWoql: `
(doc, type, unbound) => {
  or(
    triple(doc,"rdf:type",type),
    triple(doc,"rdf:type",type)
  )
}
`,
        woqlAst: {
            '@type': 'Or',
            or: [
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
];
export default mock;
//# sourceMappingURL=or.woql.js.map