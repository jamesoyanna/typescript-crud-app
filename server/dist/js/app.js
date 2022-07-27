"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = __importDefault(require("./routes"));
require('dotenv').config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(routes_1.default);
const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0.qwaoo.mongodb.net/?retryWrites=true&w=majority`;
mongoose_1.default
    .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
})
    //  as ConnectOptions)
    .then(() => {
    console.log('Connected to Distribution API Database - Initial Connection');
})
    .catch((err) => {
    console.log(`Initial Distribution API Database connection error occured -`, err);
});
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
