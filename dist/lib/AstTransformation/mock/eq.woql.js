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
    {
        textWoql: `
(doc, type, unbound) => {
    eq(doc,"rdf:type")
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
//# sourceMappingURL=eq.woql.js.map