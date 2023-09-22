"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const restaurant_controller_1 = require("./../controller/restaurant.controller");
const express_1 = __importDefault(require("express"));
const restaurantRouter = express_1.default.Router();
restaurantRouter.get("/", restaurant_controller_1.getRestaurants);
restaurantRouter.post("/", restaurant_controller_1.createRestaurant);
restaurantRouter.patch("/:id", restaurant_controller_1.updateRestaurant);
restaurantRouter.delete("/:id", restaurant_controller_1.deleteRestaurant);
// for menu
restaurantRouter.post("/:restaurantId/menu/", restaurant_controller_1.createMenuItem);
restaurantRouter.patch("/:restaurantId/menu/:menuId", restaurant_controller_1.updateMenuItem);
restaurantRouter.delete("/:restaurantId/menu/:menuId", restaurant_controller_1.deleteMenuItem);
exports.default = restaurantRouter;
