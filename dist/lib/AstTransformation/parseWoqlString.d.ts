import type { Program } from 'acorn';
import type { Query } from '../../syntax.js';
export declare const generateWoqlStringFromJsAst: (ast: Program) => string;
export declare const parseWoqlString: (woql: string) => Query;
