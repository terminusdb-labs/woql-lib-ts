const mock = [
    {
        textWoql: `
(doc, type, unbound) => {
    equals(doc,"rdf:type")
}
`,
        woqlAst: {
            '@type': 'Equals',
            left: {
                '@type': 'Value',
                variable: 'doc',
            },
            right: {
                '@type': 'Value',
                node: 'rdf:type',
            },
        },
    },
];
export default mock;
//# sourceMappingURL=equals.woql.js.map