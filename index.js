const ErrorClass = require(`${__dirname}/modules/class/ErrorHandler.js`);
const sanitizeObjectQuery = require(`${__dirname}/modules/functions/SanitizeObjectQuery.js`);

function parameterPolutionPrevent(options) {
    return (req, res, next) => {
        const { join, whitelist = [] } = options;
        const ObjectQuery = [];
        const ObjectKeys = [];

        Object.keys(req.query).map(keys => {
            if (!whitelist?.includes(keys) && Array.isArray(req.query[keys])) {
                if (Array.isArray(join)) {
                    req.query[keys] = join.includes(keys) ? req.query[keys].join(" ") : req.query[keys][0];
                } else {
                    req.query[keys] = join ? req.query[keys].join(" ") : req.query[keys][0];
                }
            }

            if (typeof req.query[keys] !== "string" && typeof req.query[keys] === "object") {
                ObjectQuery.push({ ...req.query[keys], origin: keys });
                ObjectKeys.push(Object.keys(req.query[keys]));
            }
        });

        if (ObjectQuery.length) {
            sanitizeObjectQuery(req, ObjectQuery, ObjectKeys, 0, 0, 0, options);
        }

        next();
    };
};

module.exports = parameterPolutionPrevent;