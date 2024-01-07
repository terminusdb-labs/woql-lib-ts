import * as W from './woql.js';
import { type Var } from './types.js';
export declare function and(...args: W.Query[]): W.Query;
export declare function or(...args: W.Query[]): W.Query;
export declare function letvars(fn: (...x: Var[]) => W.Query): W.Query;
