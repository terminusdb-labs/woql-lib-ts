import type { Node } from 'acorn';
import type { Query } from '../../syntax.js';
export declare class AstJsWoqlTransformer {
    transform(node: Node): Query;
    private visitNodeValue;
    private visitValue;
    private visitNode;
    private visitIdentifier;
    private visitLiteral;
    private visitCallExpression;
    private readonly registeredVariableNames;
    private visitArrowFunctionExpression;
}
