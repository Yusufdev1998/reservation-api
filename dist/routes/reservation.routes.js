"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reservation_controller_1 = require("../controller/reservation.controller");
const express_1 = __importDefault(require("express"));
const reservationRouter = express_1.default.Router();
reservationRouter.get("/");
reservationRouter.post("/", reservation_controller_1.createReservation);
exports.default = reservationRouter;
