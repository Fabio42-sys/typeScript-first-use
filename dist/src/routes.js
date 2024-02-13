"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userControll_1 = __importDefault(require("./controlers/userControll"));
const routes = (0, express_1.Router)();
routes.get('/users', userControll_1.default.index);
routes.post('/user', userControll_1.default.create);
exports.default = routes;
