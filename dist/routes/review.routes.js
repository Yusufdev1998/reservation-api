"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const review_controller_1 = require("../controller/review.controller");
const reviewRouter = express_1.default.Router();
reviewRouter.get("/", review_controller_1.getReviews);
reviewRouter.post("/", review_controller_1.createReview);
reviewRouter.patch("/:id", review_controller_1.updateReview);
reviewRouter.delete("/:id", review_controller_1.deleteReview);
exports.default = reviewRouter;
