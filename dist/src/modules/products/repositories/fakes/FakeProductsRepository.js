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
var uuidv4_1 = require("uuidv4");
var Product_1 = __importDefault(require("../../infra/typeorm/entities/Product"));
var FakeProductsRepository = /** @class */ (function () {
    function FakeProductsRepository() {
        this.products = [];
    }
    FakeProductsRepository.prototype.create = function (_a) {
        var code = _a.code, description = _a.description, stock = _a.stock, price = _a.price, cost = _a.cost;
        return __awaiter(this, void 0, void 0, function () {
            var product;
            return __generator(this, function (_b) {
                product = new Product_1.default();
                Object.assign(product, {
                    id: uuidv4_1.uuid(),
                    code: code,
                    description: description,
                    cost: cost,
                    price: price,
                    stock: stock,
                });
                this.products.push(product);
                return [2 /*return*/, product];
            });
        });
    };
    FakeProductsRepository.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.products];
            });
        });
    };
    FakeProductsRepository.prototype.findById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var findProduct;
            return __generator(this, function (_a) {
                findProduct = this.products.find(function (product) { return product.id === id; });
                return [2 /*return*/, findProduct];
            });
        });
    };
    FakeProductsRepository.prototype.findByCode = function (code) {
        return __awaiter(this, void 0, void 0, function () {
            var findProduct;
            return __generator(this, function (_a) {
                findProduct = this.products.find(function (product) { return product.code === code; });
                return [2 /*return*/, findProduct];
            });
        });
    };
    FakeProductsRepository.prototype.filterByQuery = function (q) {
        return __awaiter(this, void 0, void 0, function () {
            var findProduct;
            return __generator(this, function (_a) {
                findProduct = this.products.filter(function (product) { return product.code.includes(q) || product.description.includes(q); });
                return [2 /*return*/, findProduct];
            });
        });
    };
    FakeProductsRepository.prototype.save = function (product) {
        return __awaiter(this, void 0, void 0, function () {
            var findIndex;
            return __generator(this, function (_a) {
                findIndex = this.products.findIndex(function (findProduct) { return findProduct.id === product.id; });
                this.products[findIndex] = product;
                return [2 /*return*/, product];
            });
        });
    };
    return FakeProductsRepository;
}());
exports.default = FakeProductsRepository;
