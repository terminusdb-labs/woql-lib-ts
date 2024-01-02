export function embedWoqlQuery(woql, options) {
    var _a;
    return {
        query: woql,
        all_witnesses: (_a = options === null || options === void 0 ? void 0 : options.allWitnesses) !== null && _a !== void 0 ? _a : undefined,
    };
}
export const prepareWoqlHttpPostBody = (woql, options) => {
    const woqlQuery = embedWoqlQuery(woql, {
        allWitnesses: options === null || options === void 0 ? void 0 : options.allWitnesses,
    });
    const resourceObjects = getResourceObjects(woqlQuery.query);
    let postBody;
    if (resourceObjects.length > 0) {
        const formData = new FormData();
        resourceObjects.forEach((resourceObject) => {
            var _a, _b, _c, _d;
            const fileName = (_c = (_b = (_a = resourceObject.source.post) === null || _a === void 0 ? void 0 : _a.split('/').pop()) === null || _b === void 0 ? void 0 : _b.split('\\').pop()) !== null && _c !== void 0 ? _c : 'unknown.csv';
            resourceObject.source.post = fileName;
            const attachment = (_d = options === null || options === void 0 ? void 0 : options.attachments) === null || _d === void 0 ? void 0 : _d[fileName];
            if (typeof attachment === 'string' && attachment !== '') {
                formData.append('file', attachment);
            }
        });
        formData.append('payload', new Blob([JSON.stringify(woqlQuery)], { type: 'application/json' }), 'body.json');
        postBody = formData;
    }
    else {
        postBody = woqlQuery;
    }
    return postBody;
};
// recurse the WOQL query for all properties and arrays. If @type on an object = QueryResource,
// add it to the post body.
const getResourceObjects = (woql) => (Array.isArray(woql) ? woql : [woql]).reduce((resources, query) => {
    if (query !== null && typeof query === 'object') {
        Object.keys(query).forEach((key) => {
            const resourceKey = 'resource';
            if (key !== resourceKey)
                return;
            if (!(key in query))
                return; // Looks like a type inaccuracy bug in TypeScript
            const value = query[resourceKey];
            if (value !== null && typeof value === 'object') {
                if ('@type' in value && value['@type'] === 'QueryResource') {
                    resources.push(value);
                }
                else {
                    resources = resources.concat(getResourceObjects(value));
                }
            }
        });
    }
    else if (typeof query !== 'string' && Array.isArray(query)) {
        resources.concat(getResourceObjects(query));
    }
    return resources;
}, []);
//# sourceMappingURL=prepareWoqlQuery.js.map