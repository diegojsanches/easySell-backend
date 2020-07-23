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
var tsyringe_1 = require("tsyringe");
var CreateSaleService_1 = __importDefault(require("@modules/sales/services/CreateSaleService"));
var ListSalesService_1 = __importDefault(require("@modules/sales/services/ListSalesService"));
var ShowSaleService_1 = __importDefault(require("@modules/sales/services/ShowSaleService"));
var SalesController = /** @class */ (function () {
    function SalesController() {
    }
    SalesController.prototype.index = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, fromDate, toDate, listSales, sales;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.query, fromDate = _a.fromDate, toDate = _a.toDate;
                        listSales = tsyringe_1.container.resolve(ListSalesService_1.default);
                        return [4 /*yield*/, listSales.execute({
                                fromDate: fromDate,
                                toDate: toDate,
                            })];
                    case 1:
                        sales = _b.sent();
                        return [2 /*return*/, res.json(sales)];
                }
            });
        });
    };
    SalesController.prototype.show = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var sale_id, showSale, sale;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        sale_id = req.params.sale_id;
                        showSale = tsyringe_1.container.resolve(ShowSaleService_1.default);
                        return [4 /*yield*/, showSale.execute({ sale_id: sale_id })];
                    case 1:
                        sale = _a.sent();
                        return [2 /*return*/, res.json(sale)];
                }
            });
        });
    };
    SalesController.prototype.create = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, buyer, payment, items, createSale, sale;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, buyer = _a.buyer, payment = _a.payment, items = _a.items;
                        createSale = tsyringe_1.container.resolve(CreateSaleService_1.default);
                        return [4 /*yield*/, createSale.execute({
                                buyer: buyer,
                                payment: payment,
                                items: items,
                            })];
                    case 1:
                        sale = _b.sent();
                        return [2 /*return*/, res.json(sale)];
                }
            });
        });
    };
    return SalesController;
}());
exports.default = SalesController;
