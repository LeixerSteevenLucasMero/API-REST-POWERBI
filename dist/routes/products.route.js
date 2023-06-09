"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const router = (0, express_1.Router)();
router.get('/', controllers_1.productsController.getAllProducts);
router.post('/', controllers_1.productsController.create);
router.patch('/:id', controllers_1.productsController.update);
router.delete('/:id', controllers_1.productsController.delete);
exports.default = router;
