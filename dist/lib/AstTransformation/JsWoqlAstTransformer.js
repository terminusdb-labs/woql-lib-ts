import { Graph, lit } from '../../syntax.js';
import { WOQL } from '../../index.js';
function lowerCamelCase(inputString) {
    if (inputString.length > 1) {
        return (inputString[0].toLowerCase() + inputString.slice(1, inputString.length));
    }
    return inputString.toLowerCase();
}
function renameFunction(inputString) {
    const newName = lowerCamelCase(inputString);
    if (newName === 'eval') {
        return 'compute';
    }
    else if (newName === 'true') {
        return 'success';
    }
    else {
        return newName;
    }
}
const supportedWoql = [
    'Using',
    'Select',
    'Distinct',
    'And',
    'Or',
    'From',
    'Into',
    'Triple',
    'AddTriple',
    'AddedTriple',
    'DeleteTriple',
    'DeletedTriple',
    'Subsumption',
    'Equals',
    'Substring',
    'ReadDocument',
    'UpdateDocument',
    'InsertDocument',
    'DeleteDocument',
    'Get',
    'Trim',
    'Eval',
    'Plus',
    'Minus',
    'Times',
    'Divide',
    'Div',
    'Exp',
    'Floor',
    'IsA',
    'Like',
    'Less',
    'Greater',
    'Optional',
    'Upper',
    'Lower',
    'Pad',
    'Split',
    'Member',
    'Concatenate',
    'Join',
    'Sum',
    'Start',
    'Limit',
    'Regexp',
    'True',
    'OrderBy',
    'GroupBy',
    'Length',
    'Not',
    'Once',
    'Immediately',
    'Count',
    'Typecast',
    'Path',
    'PathPredicate',
    'InversePathPredicate',
    'PathSequence',
    'PathOr',
    'PathPlus',
    'PathStar',
    'PathTimes',
    'Dot',
    'TypeOf',
    'Quad',
];
const supportedWoqlFunctions = supportedWoql.map((woql) => renameFunction(woql));
export class AstJsWoqlTransformer {
    constructor() {
        this.literalExceptions = ['limit'];
        this.currentCallExpression = undefined;
        this.registeredVariableNames = [];
    }
    transform(node) {
        return this.visitNode(node);
    }
    visitNodeValue(node) {
        switch (node === null || node === void 0 ? void 0 : node.type) {
            case 'Identifier': {
                return this.visitIdentifier(node, 'NodeValue');
            }
            case 'Literal': {
                const valueNode = node;
                if (typeof (valueNode === null || valueNode === void 0 ? void 0 : valueNode.value) !== 'string')
                    throw new Error('NodeValue is not a string');
                if (valueNode.value.startsWith('v:')) {
                    return {
                        '@type': 'NodeValue',
                        variable: valueNode.value,
                    };
                }
                return {
                    '@type': 'NodeValue',
                    node: valueNode.value,
                };
            }
            default:
                throw new Error(`Unhandled value type: ${node === null || node === void 0 ? void 0 : node.type}, full node: ${JSON.stringify(node)}`);
        }
    }
    visitValue(node) {
        switch (node === null || node === void 0 ? void 0 : node.type) {
            case 'Identifier': {
                return this.visitIdentifier(node, 'NodeValue');
            }
            case 'Literal': {
                const valueNode = node;
                if (typeof (valueNode === null || valueNode === void 0 ? void 0 : valueNode.value) !== 'string')
                    throw new Error('NodeValue is not a string');
                if (valueNode.value.startsWith('v:')) {
                    return {
                        '@type': 'NodeValue',
                        variable: valueNode.value,
                    };
                }
                return this.visitLiteral(valueNode);
            }
            default:
                throw new Error(`Unhandled value type: ${node === null || node === void 0 ? void 0 : node.type}, full node: ${JSON.stringify(node)}`);
        }
    }
    visitNode(node) {
        switch (node === null || node === void 0 ? void 0 : node.type) {
            case 'Program': {
                const body = node === null || node === void 0 ? void 0 : node.body;
                if (Array.isArray(body) && body.length === 1) {
                    return this.visitNode(body[0]);
                }
                else {
                    throw new Error(`Only a single expression is supported: ${node === null || node === void 0 ? void 0 : node.type}`);
                }
            }
            case 'BlockStatement': {
                const body = node === null || node === void 0 ? void 0 : node.body;
                if (Array.isArray(body) && body.length === 1) {
                    return this.visitNode(body[0]);
                }
                else {
                    throw new Error(`Only a single expression is supported: ${node === null || node === void 0 ? void 0 : node.type}`);
                }
            }
            case 'ExpressionStatement': {
                const expression = node.expression;
                return this.visitNode(expression);
            }
            case 'CallExpression': {
                return this.visitCallExpression(node);
            }
            case 'Identifier': {
                return this.visitIdentifier(node, 'NodeValue');
            }
            case 'Literal': {
                return this.visitLiteral(node);
            }
            case 'ArrowFunctionExpression':
                return this.visitArrowFunctionExpression(node);
            default:
                throw new Error(`Unhandled node type: ${node === null || node === void 0 ? void 0 : node.type}, full node: ${JSON.stringify(node)}`);
        }
    }
    visitIdentifier(node, identifierType) {
        if (node.type === 'Identifier') {
            return {
                '@type': identifierType,
                variable: node.name,
            };
        }
        else {
            throw new Error(`Unhandled node type: ${node === null || node === void 0 ? void 0 : node.type}`);
        }
    }
    visitLiteral(node) {
        var _a, _b;
        try {
            const value = (_b = JSON.parse((_a = node.raw) !== null && _a !== void 0 ? _a : '')) !== null && _b !== void 0 ? _b : node.value;
            if (typeof this.currentCallExpression === 'string' &&
                this.currentCallExpression !== '' &&
                this.literalExceptions.includes(this.currentCallExpression)) {
                return value;
            }
            else {
                return lit(value);
            }
        }
        catch (e) {
            throw new Error(`Unhandled literal value: ${node === null || node === void 0 ? void 0 : node.value}`);
        }
    }
    visitCallExpression(node) {
        var _a;
        const callIdentifier = this.visitIdentifier(node.callee, undefined);
        const callee = callIdentifier === null || callIdentifier === void 0 ? void 0 : callIdentifier.variable;
        this.currentCallExpression = callee;
        if (typeof callee === 'string' &&
            callee !== '' &&
            supportedWoqlFunctions.includes(callee)) {
            switch (callee) {
                case 'triple': {
                    return WOQL.triple({ '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[0]) }, { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[1]) }, { '@type': 'Value', ...this.visitValue(node.arguments[2]) });
                }
                case 'quad': {
                    return WOQL.quad({ '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[0]) }, { '@type': 'NodeValue', ...this.visitNodeValue(node.arguments[1]) }, { '@type': 'Value', ...this.visitValue(node.arguments[2]) }, (_a = (this.visitLiteral(node.arguments[3])['@value'] ===
                        'instance'
                        ? Graph.instance
                        : Graph.schema)) !== null && _a !== void 0 ? _a : undefined);
                }
                default: {
                    // Here we limit what functions can be called from the library to the allowed terms
                    // It must not be allowed to call any function, but restricted to only functions.
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any
                    return WOQL[callee](...node.arguments.map((arg) => this.visitNode(arg)));
                }
            }
        }
        else {
            throw new Error(`Unsupported function: ${callee}`);
        }
    }
    visitArrowFunctionExpression(node) {
        const params = Array.isArray(node.params) ? node.params : [node.params];
        const variables = params.map((identifer) => { var _a; return (_a = this.visitIdentifier(identifer, undefined)) === null || _a === void 0 ? void 0 : _a.variable; });
        this.registeredVariableNames.push(...variables);
        return this.visitNode(node.body);
    }
}
//# sourceMappingURL=JsWoqlAstTransformer.js.map