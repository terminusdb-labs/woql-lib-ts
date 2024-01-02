import * as W from './woql_defs/woql.js';
import { type Var } from './woql_defs/types.js';
export * from './woql_defs/woql.js';
export * from './woql_defs/types.js';
export declare function and(...args: W.Query[]): W.Query;
export declare function or(...args: W.Query[]): W.Query;
export declare function letvars(fn: (...x: Var[]) => W.Query): W.Query;
