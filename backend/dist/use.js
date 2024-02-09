"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// express é uma biblioteca
const app = (0, express_1.default)();
app.get('/', (reg, res) => {
    return res.send('Hello, world');
});
app.listen(3333);
