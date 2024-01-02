import { AstJsWoqlTransformer } from '../AstTransformation/JsWoqlAstTransformer.js';
import { parse } from 'acorn';
import escodegen from 'escodegen';
const parseWoqlStringToJsAst = (code) => {
    const ast = parse(code, {
        ecmaVersion: 2020,
        sourceType: 'module',
    });
    return ast;
};
export const generateWoqlStringFromJsAst = (ast) => {
    return escodegen.generate(ast);
};
export const parseWoqlString = (woql) => {
    const ast = parseWoqlStringToJsAst(woql);
    if (ast === undefined) {
        throw new Error('Could not parse WOQL string');
    }
    const transformer = new AstJsWoqlTransformer();
    return transformer.transform(ast);
};
//# sourceMappingURL=parseWoqlString.js.map