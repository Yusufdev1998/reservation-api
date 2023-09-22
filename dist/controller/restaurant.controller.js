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
exports.deleteMenuItem = exports.updateMenuItem = exports.createMenuItem = exports.deleteRestaurant = exports.updateRestaurant = exports.createRestaurant = exports.getRestaurants = void 0;
const restaurant_model_1 = __importDefault(require("../models/restaurant.model"));
const getRestaurants = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurants = yield restaurant_model_1.default.find({});
        res.json(restaurants);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.getRestaurants = getRestaurants;
const createRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const restaurant = yield restaurant_model_1.default.create(req.body);
        res.json(restaurant);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.createRestaurant = createRestaurant;
const updateRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const restaurant = yield restaurant_model_1.default.updateOne({ _id: id }, req.body);
        res.json(restaurant);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.updateRestaurant = updateRestaurant;
const deleteRestaurant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const restaurant = yield restaurant_model_1.default.deleteOne({ _id: id });
        res.json(restaurant);
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.deleteRestaurant = deleteRestaurant;
const createMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res_id = req.params.restaurantId;
        yield restaurant_model_1.default.updateOne({ _id: res_id }, {
            $push: { menu: req.body },
        });
        res.status(201).send({ message: "created" });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.createMenuItem = createMenuItem;
const updateMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res_id = req.params.restaurantId;
        const menu_id = req.params.menuId;
        const menu = req.body;
        let setObj = {};
        Object.keys(menu).map(key => (setObj[`menu.$.${key}`] = menu[key]));
        yield restaurant_model_1.default.updateOne({ _id: res_id, "menu._id": menu_id }, {
            $set: setObj,
        });
        res.status(200).send({ message: "updated" });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.updateMenuItem = updateMenuItem;
const deleteMenuItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const res_id = req.params.restaurantId;
        const menu_id = req.params.menuId;
        yield restaurant_model_1.default.updateOne({ _id: res_id }, {
            $pull: { menu: { _id: menu_id } },
        });
        res.status(200).send({ message: "deleted" });
    }
    catch (error) {
        res.status(400).send({
            message: error.message,
        });
    }
});
exports.deleteMenuItem = deleteMenuItem;
