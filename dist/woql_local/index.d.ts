import type { Var } from '../syntax.js';
import type * as W from '../woql_defs/woql.js';
export declare function letvars(fn: (...x: Var[]) => W.Query): W.Query;
