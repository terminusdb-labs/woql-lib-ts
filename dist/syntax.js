// Convenience functions for defining ASTs in WOQL
import * as W from './woql_defs/woql.js';
export * from './woql_defs/woql.js';
export * from './woql_defs/types.js';
export function and(...args) {
    return W.and(args);
}
export function or(...args) {
    return W.or(args);
}
export function letvars(fn) {
    var _a;
    const func = fn.toString();
    const args = (_a = func.slice(func.indexOf('(') + 1, func.indexOf(')')).match(/([^\s,]+)/g)) !== null && _a !== void 0 ? _a : [];
    const vs = args.map((v) => {
        return {
            variable: v,
        };
    });
    return fn(...vs);
}
//# sourceMappingURL=syntax.js.map