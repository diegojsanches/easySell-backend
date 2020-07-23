"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var ProductsController_1 = __importDefault(require("../controllers/ProductsController"));
var productsRoute = express_1.Router();
var productsController = new ProductsController_1.default();
productsRoute.use(ensureAuthenticated_1.default);
productsRoute.get('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        q: celebrate_1.Joi.string(),
    },
    _a)), productsController.index);
productsRoute.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        code: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        stock: celebrate_1.Joi.number().required(),
        price: celebrate_1.Joi.number().required(),
        cost: celebrate_1.Joi.number().required(),
    },
    _b)), productsController.create);
productsRoute.get('/:product_id/', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        product_id: celebrate_1.Joi.string().required(),
    },
    _c)), productsController.show);
productsRoute.put('/:product_id/', celebrate_1.celebrate((_d = {},
    _d[celebrate_1.Segments.PARAMS] = {
        product_id: celebrate_1.Joi.string().required(),
    },
    _d[celebrate_1.Segments.BODY] = {
        code: celebrate_1.Joi.string().required(),
        description: celebrate_1.Joi.string().required(),
        stock: celebrate_1.Joi.number().required(),
        price: celebrate_1.Joi.number().required(),
        cost: celebrate_1.Joi.number().required(),
    },
    _d)), productsController.update);
exports.default = productsRoute;
