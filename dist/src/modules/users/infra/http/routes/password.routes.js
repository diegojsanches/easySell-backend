"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var celebrate_1 = require("celebrate");
var ForgotPasswordController_1 = __importDefault(require("../controllers/ForgotPasswordController"));
var ResetPasswordController_1 = __importDefault(require("../controllers/ResetPasswordController"));
var passwordRouter = express_1.Router();
var resetPasswordController = new ResetPasswordController_1.default();
var forgotPasswordController = new ForgotPasswordController_1.default();
passwordRouter.post('/reset', celebrate_1.celebrate((_a = {},
    _a[celebrate_1.Segments.BODY] = {
        token: celebrate_1.Joi.string().uuid().required(),
        password: celebrate_1.Joi.string().required(),
        password_confirmation: celebrate_1.Joi.string().required().valid(celebrate_1.Joi.ref('password')),
    },
    _a)), resetPasswordController.create);
passwordRouter.post('/forgot', celebrate_1.celebrate((_b = {},
    _b[celebrate_1.Segments.BODY] = {
        email: celebrate_1.Joi.string().email().required(),
    },
    _b)), forgotPasswordController.create);
exports.default = passwordRouter;
