# WOQL Library in TypeScript

The WOQL Library in TypeScript aims to provide AST manipulation
capabilities which can be included in clients etc in Typescript or
Javascript, allowing convenient handling of queries.

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


## Syntax options for variables

The WOQL DSL parser and WOQL transformer supports new WOQL authoring styles. Variables can now be declared in multiple ways, and the DSL even support undeclared variables.

* Variables get assigned through the new `(var1, var2, var3...) => { ... }`
* Undeclared variables are supported for the DSL (similar to datalog variables)
* Variables support the `v:` prefix to maintain backwards compatibility

### Examples

```javascript
(doc, type, unbound) =>
  and(
    triple(doc, "rdf:type", type),
    not(quad(type, "sys:subdocument", unbound, "schema")),
  )
```

```javascript
  and(
    triple(doc, "rdf:type", type),
    not(quad(type, "sys:subdocument", unbound, "schema")),
  )
```

```javascript
  and(
    triple("v:doc", "rdf:type", "v:type"),
    not(quad("v:type", "sys:subdocument", "v:unbound", "schema")),
  )
```
