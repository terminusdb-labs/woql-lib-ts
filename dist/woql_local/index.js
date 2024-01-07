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
//# sourceMappingURL=index.js.map