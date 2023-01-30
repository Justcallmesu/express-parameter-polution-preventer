const ErrorClass = require(`${__dirname}/modules/class/ErrorHandler.js`);

function parameterPolutionPrevent() {
    return (req, res, next) => {
        Object.keys(req.query).map(key => {
            if (Array.isArray(req.query[key])) {
                req.query[key] = req.query[key].join(" ");
            }

            if (typeof req.query[key] !== "string" && typeof req.query[key] === "object") {
                const values = Object.values(req.query[key]);
                if (Array.isArray(...values)) {
                    req.query[key] = values.pop().join(" ");
                    return;
                }

                if (typeof values.pop() !== "string") {
                    throw new ErrorClass(400, "Bad Parameter");
                }
            }
        });
        next();
    };
};

module.exports = parameterPolutionPrevent;