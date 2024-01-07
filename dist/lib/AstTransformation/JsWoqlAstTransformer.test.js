// tests/calculator.spec.tx
import { assert } from 'chai';
import mock from './mock/index.js';
import documentQuery from './mock/_documentQuery.woql.js';
import { parseWoqlString } from './parseWoqlString.js';
describe('Basic AST Transformation Sanity Check', () => {
    it('should compile the string WOQL to an accurate WOQL AST', () => {
        const result = parseWoqlString(documentQuery.textWoql);
        assert.deepEqual(result, documentQuery.woqlAst);
    });
});
describe('Specific AST Transformation Checks', () => {
    Object.keys(mock).forEach((testTerm) => {
        mock[testTerm].forEach((testCase, index) => {
            it(`should compile ${testTerm} test ${index} correctly to WOQL AST`, () => {
                const result = parseWoqlString(testCase.textWoql);
                assert.deepEqual(result, testCase.woqlAst);
            });
        });
    });
});
//# sourceMappingURL=JsWoqlAstTransformer.test.js.map