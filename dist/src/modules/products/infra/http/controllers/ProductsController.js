"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var CreateProductService_1 = __importDefault(require("@modules/products/services/CreateProductService"));
var tsyringe_1 = require("tsyringe");
var UpdateProductService_1 = __importDefault(require("@modules/products/services/UpdateProductService"));
var ListProductsQueryService_1 = __importDefault(require("@modules/products/services/ListProductsQueryService"));
var ListProductsService_1 = __importDefault(require("@modules/products/services/ListProductsService"));
var ShowProductService_1 = __importDefault(require("@modules/products/services/ShowProductService"));
var ProductsController = /** @class */ (function () {
    function ProductsController() {
    }
    ProductsController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var q, products, listProducts, listProducts;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = req.query.q;
                        if (!q) return [3 /*break*/, 2];
                        listProducts = tsyringe_1.container.resolve(ListProductsQueryService_1.default);
                        return [4 /*yield*/, listProducts.execute(q)];
                    case 1:
                        products = _a.sent();
                        return [3 /*break*/, 4];
                    case 2:
                        listProducts = tsyringe_1.container.resolve(ListProductsService_1.default);
                        return [4 /*yield*/, listProducts.execute()];
                    case 3:
                        products = _a.sent();
                        _a.label = 4;
                    case 4: return [2 /*return*/, res.json(products)];
                }
            });
        });
    };
    ProductsController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product_id, showProduct, product;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        product_id = req.params.product_id;
                        showProduct = tsyringe_1.container.resolve(ShowProductService_1.default);
                        return [4 /*yield*/, showProduct.execute({ product_id: product_id })];
                    case 1:
                        product = _a.sent();
                        return [2 /*return*/, res.json(product)];
                }
            });
        });
    };
    ProductsController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, code, description, stock, price, cost, createProduct, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, code = _a.code, description = _a.description, stock = _a.stock, price = _a.price, cost = _a.cost;
                        createProduct = tsyringe_1.container.resolve(CreateProductService_1.default);
                        return [4 /*yield*/, createProduct.execute({
                                code: code,
                                description: description,
                                stock: stock,
                                price: price,
                                cost: cost,
                            })];
                    case 1:
                        product = _b.sent();
                        return [2 /*return*/, res.json(product)];
                }
            });
        });
    };
    ProductsController.prototype.update = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var product_id, _a, code, description, stock, price, cost, updateProduct, product;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        product_id = req.params.product_id;
                        _a = req.body, code = _a.code, description = _a.description, stock = _a.stock, price = _a.price, cost = _a.cost;
                        updateProduct = tsyringe_1.container.resolve(UpdateProductService_1.default);
                        return [4 /*yield*/, updateProduct.execute({
                                product_id: product_id,
                                code: code,
                                description: description,
                                stock: stock,
                                price: price,
                                cost: cost,
                            })];
                    case 1:
                        product = _b.sent();
                        return [2 /*return*/, res.json(product)];
                }
            });
        });
    };
    return ProductsController;
}());
exports.default = ProductsController;
