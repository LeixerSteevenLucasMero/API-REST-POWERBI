"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const sales_route_1 = __importDefault(require("./sales.route"));
const products_route_1 = __importDefault(require("./products.route"));
exports.routes = {
    ProductsRoute: products_route_1.default,
    SalesRoute: sales_route_1.default,
};
