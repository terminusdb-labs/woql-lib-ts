const mock = [
    {
        textWoql: `
(doc, type) => {
    triple("v:doc","rdf:type","@schema:MyType")
}
`,
        woqlAst: {
            '@type': 'Triple',
            subject: { '@type': 'NodeValue', variable: 'doc' },
            predicate: { '@type': 'NodeValue', node: 'rdf:type' },
            object: { '@type': 'Value', node: '@schema:MyType' },
            graph: undefined,
        },
    },
];
export default mock;
//# sourceMappingURL=tripleVariable.woql.js.map