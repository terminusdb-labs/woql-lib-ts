const mock = [
    {
        textWoql: `
(doc, type) => {
    triple(doc,"rdf:type",type)
}
`,
        woqlAst: {
            '@type': 'Triple',
            subject: { '@type': 'NodeValue', variable: 'doc' },
            predicate: { '@type': 'NodeValue', node: 'rdf:type' },
            object: { '@type': 'Value', variable: 'type' },
            graph: undefined,
        },
    },
];
export default mock;
//# sourceMappingURL=triple.woql.js.map