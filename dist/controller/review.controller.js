"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteReview = exports.updateReview = exports.createReview = exports.getReviews = void 0;
const review_model_1 = __importDefault(require("../models/review.model"));
const reservation_model_1 = __importDefault(require("../models/reservation.model"));
const user_model_1 = __importDefault(require("../models/user.model"));
const getReviews = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const reviews = yield review_model_1.default.find({});
        res.json(reviews);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.getReviews = getReviews;
const createReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user_id = req.userId;
        const oneReserve = yield reservation_model_1.default.findOne({
            user_id,
            restaurant_id: req.body.restaurant_id,
        });
        if (oneReserve) {
            const user = yield user_model_1.default.findOne({ _id: user_id });
            const readyReview = Object.assign(Object.assign({}, req.body), { user_id, first_name: user === null || user === void 0 ? void 0 : user.first_name, last_name: user === null || user === void 0 ? void 0 : user.last_name, photoURL: user === null || user === void 0 ? void 0 : user.photoURL });
            const new_review = yield review_model_1.default.create(readyReview);
            return res.status(201).json(new_review);
        }
        else {
            return res
                .status(400)
                .send({ message: "User cannot create a review before reserving" });
        }
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.createReview = createReview;
const updateReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const review = yield review_model_1.default.updateOne({ _id: id }, req.body);
        res.json(review);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.updateReview = updateReview;
const deleteReview = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const review = yield review_model_1.default.deleteOne({ _id: id });
        res.json(review);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.deleteReview = deleteReview;
