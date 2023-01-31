function sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex, ArrayIndex, itemIndex, options = {}) {
    const data = QueryObject[ObjectIndex];
    const { join, whitelist = [] } = options;
    const { origin } = data;

    const keys = keysArray[ArrayIndex][itemIndex];

    if (!whitelist.includes(origin) && Array.isArray(data[keys])) {
        if (Array.isArray(join)) {
            req.query[origin][keys] = join || join?.includes(origin) ? data[keys].join(" ") : data[keys][0];
        } else {
            req.query[origin][keys] = join ? data[keys].join(" ") : data[keys][0];
        }
    }
    if ((itemIndex + 1) < keysArray[ArrayIndex].length) sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex, ArrayIndex, itemIndex + 1, options);
    if (!itemIndex && (ObjectIndex + 1) < QueryObject.length && (ArrayIndex + 1) < keysArray.length) {
        sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex + 1, ArrayIndex + 1, itemIndex, options);
    }
}

module.exports = sanitizeObjectQuery;