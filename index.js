const ErrorClass = require(`${__dirname}/modules/class/ErrorHandler.js`);

function parameterPolutionPrevent(options) {
    return (req, res, next) => {
        const { join, whitelist } = options;
        const ObjectQuery = [];
        const keys = [];

        Object.keys(req.query).map(keys => {
            if (!whitelist.includes(keys) && Array.isArray(req.query[keys])) {
                if (Array.isArray(whitelist)) {
                    req.query[keys] = join.includes(keys) ? req.query[keys].join(" ") : req.query[keys][0];
                } else {
                    req.query[keys] = join ? req.query[keys].join(" ") : req.query[keys][0];
                }
            }

            if (typeof req.query[keys] !== "string" && typeof req.query[keys] === "object") {
                ObjectQuery.push({ ...req.query[keys], origin: keys });
                keys.push(Object.keys(req.query[keys]));
            }
        });

        sanitizeObjectQuery(req, ObjectQuery, keys, 0, 0, 0, options);

        next();
    };
};

module.exports = parameterPolutionPrevent;