"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var tsyringe_1 = require("tsyringe");
require("./providers");
require("@modules/users/providers");
var ProductsRepository_1 = __importDefault(require("@modules/products/infra/typeorm/repositories/ProductsRepository"));
var SalesRepository_1 = __importDefault(require("@modules/sales/infra/typeorm/repositories/SalesRepository"));
var UsersRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UsersRepository"));
var UserTokensRepository_1 = __importDefault(require("@modules/users/infra/typeorm/repositories/UserTokensRepository"));
tsyringe_1.container.registerSingleton('ProductsRepository', ProductsRepository_1.default);
tsyringe_1.container.registerSingleton('SalesRepository', SalesRepository_1.default);
tsyringe_1.container.registerSingleton('UsersRepository', UsersRepository_1.default);
tsyringe_1.container.registerSingleton('UserTokensRepository', UserTokensRepository_1.default);
