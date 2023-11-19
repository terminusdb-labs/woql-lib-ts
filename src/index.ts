import { triple, letvars, and } from './syntax.js';

const query = letvars((x, y, z) => and(triple(x, y, z), triple(z, y, z)))
console.log(JSON.stringify(query))

