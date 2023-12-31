# WOQL Library in TypeScript

The WOQL Library in TypeScript aims to provide AST manipulation
capabilities which can be included in clients etc in Typescript or
Javascript, allowing convenient handling of queries.

## New syntax for variables

The WOQL DSL parser and WOQL transformer assumes an updated WOQL authoring style. These are the changes:

* Variables get assigned through the new (var1, var2, var3...) => {} 

```javascript
(doc, type, unbound) =>
  and(
    triple(doc, "rdf:type", type),
    not(quad(type, "sys:subdocument", unbound, "schema")),
  )

```

## Development

The file `src/woql_defs/woql.ts` is generated automatically from
`woql.json` and should not be altered manually.  Additions to the
processing or manipulation should either change the method of
producing `woql.ts` which is contained in `src/woql_defs/generate.ts`,
or should be wrapper code which uses `src/woql_defs/woql.ts`.

For development you will need to get the latest `woql.json` from the
terminusdb repository. Assuming you have wget installed, you can run:

```
$ npm run woql-get
```

After which you can build the new `woql.ts` file by running

```
$ npx src/generate.ts
```
