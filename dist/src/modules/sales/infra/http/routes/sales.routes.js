"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ensureAuthenticated_1 = __importDefault(require("@modules/users/infra/http/middlewares/ensureAuthenticated"));
var SalesController_1 = __importDefault(require("../controllers/SalesController"));
var salesRoute = express_1.Router();
var salesController = new SalesController_1.default();
salesRoute.use(ensureAuthenticated_1.default);
salesRoute.get('/', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.QUERY] = {
        fromDate: celebrate_1.Joi.date(),
        toDate: celebrate_1.Joi.date(),
    },
    _a)), salesController.index);
salesRoute.post('/', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        buyer: celebrate_1.Joi.string().allow(''),
        payment: celebrate_1.Joi.number().required(),
        items: celebrate_1.Joi.array().items(celebrate_1.Joi.object().keys({
            product_id: celebrate_1.Joi.string().required(),
            amount: celebrate_1.Joi.number().required(),
        })),
    },
    _b)), salesController.create);
salesRoute.get('/:sale_id/', celebrate_1.celebrate((_c = {},
    _c[celebrate_1.Segments.PARAMS] = {
        sale_id: celebrate_1.Joi.string().required(),
    },
    _c)), salesController.show);
exports.default = salesRoute;
