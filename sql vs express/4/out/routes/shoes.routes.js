"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shoes_storage_1 = __importDefault(require("../storage/shoes.storage"));
const routes = (0, express_1.Router)();
routes.get('/shoes', (req, res) => {
    res.json(shoes_storage_1.default.allshoes);
});
routes.get('/shoes/:brand', (req, res) => {
    res.json(shoes_storage_1.default.search);
});
routes.post('/shoes', (req, res) => {
    res.json(shoes_storage_1.default.addShoes);
});
routes.delete('/shoes/:id', (req, res) => {
    res.json(shoes_storage_1.default.remove);
});
exports.default = routes;
