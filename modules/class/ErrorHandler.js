class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super(message);
        this.statusCode = statusCode;
        this.status = String(statusCode).startsWith("4") ? "Client Eror" : "Server Error";
        this.isOperational = true;
    }
}

module.exports = ErrorHandler;