function sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex, ArrayIndex, itemIndex, options = {}) {
    if (ArrayIndex > keysArray.length - 1 || itemIndex > keysArray[ArrayIndex].length - 1 || ObjectIndex > QueryObject.length - 1) {
        return;
    }

    const data = QueryObject[ObjectIndex];
    const { join = true, whitelist = [] } = options;
    const { origin } = data;

    const keys = keysArray[ArrayIndex][itemIndex];

    if (!whitelist.includes(origin) && Array.isArray(data[keys])) {
        if (Array.isArray(join)) {
            req.query[origin][keys] = join.includes(origin) ? data[keys].join(" ") : data[keys][0];
        } else {
            req.query[origin][keys] = join ? data[keys].join(" ") : data[keys][0];
        }
    }

    sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex, ArrayIndex, itemIndex + 1, options);
    if (!itemIndex) {
        sanitizeObjectQuery(req, QueryObject, keysArray, ObjectIndex + 1, ArrayIndex + 1, itemIndex, options);
    }
}

module.exports = sanitizeObjectQuery;