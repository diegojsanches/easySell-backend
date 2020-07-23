"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var Product_1 = __importDefault(require("@modules/products/infra/typeorm/entities/Product"));
var Sale_1 = __importDefault(require("./Sale"));
var SaleItem = /** @class */ (function () {
    function SaleItem() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn('uuid'),
        __metadata("design:type", String)
    ], SaleItem.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column('decimal'),
        __metadata("design:type", Number)
    ], SaleItem.prototype, "amount", void 0);
    __decorate([
        typeorm_1.Column('decimal'),
        __metadata("design:type", Number)
    ], SaleItem.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column('decimal'),
        __metadata("design:type", Number)
    ], SaleItem.prototype, "total", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SaleItem.prototype, "product_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function () { return Product_1.default; }),
        typeorm_1.JoinColumn({ name: 'product_id' }),
        __metadata("design:type", Product_1.default)
    ], SaleItem.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], SaleItem.prototype, "sale_id", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Sale_1.default; }, function (sale) { return sale.items; }),
        typeorm_1.JoinColumn({ name: 'sale_id' }),
        __metadata("design:type", Sale_1.default)
    ], SaleItem.prototype, "sale", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], SaleItem.prototype, "created_at", void 0);
    __decorate([
        typeorm_1.UpdateDateColumn(),
        __metadata("design:type", Date)
    ], SaleItem.prototype, "updated_at", void 0);
    SaleItem = __decorate([
        typeorm_1.Entity('sale_items')
    ], SaleItem);
    return SaleItem;
}());
exports.default = SaleItem;
