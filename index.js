const ErrorClass = require(`${__dirname}/modules/class/ErrorHandler.js`);

function parameterPolutionPrevent(options) {
    return (req, res, next) => {
        const ObjectQuery = [];
        const keys = [];

        Object.keys(req.query).map(key => {
            if (Array.isArray(req.query[key])) {
                req.query[key] = req.query[key].join(" ");
            }

            if (typeof req.query[key] !== "string" && typeof req.query[key] === "object") {
                ObjectQuery.push({ ...req.query[key], origin: key });
                keys.push(Object.keys(req.query[key]));
            }
        });

        sanitizeObjectQuery(req, ObjectQuery, keys, 0, 0, 0, options);

        next();
    };
};

module.exports = parameterPolutionPrevent;