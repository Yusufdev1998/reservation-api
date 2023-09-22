"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const restaurant_routes_1 = __importDefault(require("./routes/restaurant.routes"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const auth_1 = __importDefault(require("./middleware/auth"));
const reservation_routes_1 = __importDefault(require("./routes/reservation.routes"));
const review_routes_1 = __importDefault(require("./routes/review.routes"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cookie_parser_1.default)());
app.get("/", (req, res) => {
    res.send("api is working");
});
app.use("/restaurant", auth_1.default, restaurant_routes_1.default);
app.use("/reservation", auth_1.default, reservation_routes_1.default);
app.use("/review", auth_1.default, review_routes_1.default);
app.use("/user", user_routes_1.default);
exports.default = app;
