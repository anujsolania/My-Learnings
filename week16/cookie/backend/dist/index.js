"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "secret123";
const app = (0, express_1.default)();
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
app.use((0, cors_1.default)({
    credentials: true,
    origin: "http://localhost:5173"
}));
app.post("/signin", (req, res) => {
    const { username, password } = req.body;
    const token = jsonwebtoken_1.default.sign({ userid: 1 }, JWT_SECRET);
    res.cookie("token", token);
    res.send("Logged innn");
});
app.get("/user", (req, res) => {
    const token = req.cookies.token;
    console.log("Received token:", token);
    const verified = jsonwebtoken_1.default.verify(token, JWT_SECRET);
    res.send(verified.userid);
});
app.post("/logout", (req, res) => {
    res.cookie("token", "/");
    res.json({
        message: "Logged out!"
    });
});
app.listen(3000, () => {
    console.log("server running at 3000");
});
