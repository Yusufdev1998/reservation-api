"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.default = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        try {
            const payload = jsonwebtoken_1.default.verify(token, "secret");
            req.userId = payload.id;
        }
        catch (error) {
            return res.status(403).send({ message: error.message });
        }
    }
    else {
        return res.status(403).send({ message: "token not found" });
    }
    next();
};
