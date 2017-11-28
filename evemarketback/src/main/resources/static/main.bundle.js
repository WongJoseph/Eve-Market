webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */] },
    { path: 'cart', component: __WEBPACK_IMPORTED_MODULE_3__cart_cart_component__["a" /* CartComponent */] },
    { path: '', redirectTo: '/search', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<div style=\"text-align:center\">\r\n  <h1 style=\"margin-top: 75px\">\r\n    Welcome to {{title}}!\r\n  </h1>\r\n</div>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Eve Market';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__service_search_item_service__ = __webpack_require__("../../../../../src/app/service/search-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropdown_directive__ = __webpack_require__("../../../../../src/app/dropdown.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__cart_cart_component__ = __webpack_require__("../../../../../src/app/cart/cart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__search_search_component__["a" /* SearchComponent */],
                __WEBPACK_IMPORTED_MODULE_8__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dropdown_directive__["a" /* DropdownDirective */],
                __WEBPACK_IMPORTED_MODULE_11__cart_cart_component__["a" /* CartComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap__["a" /* CollapseModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["b" /* NgbModule */].forRoot()
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__service_search_item_service__["a" /* SearchItemService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/cart/cart.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\r\n  width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <table class=\"table table-striped table-hover col-lg-12\">\r\n    <thead class=\"thead-inverse\">\r\n    <tr>\r\n      <th>Order #</th>\r\n      <th>Item</th>\r\n      <th>Location</th>\r\n      <th>Quantity</th>\r\n      <th>Price</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of cart; let ind = index \" placement=\"bottom\" [ngbPopover]=\"tipContent\" triggers=\"mouseenter:mouseleave\" popoverTitle={{item.item.typeName}}>\r\n      <ng-template #tipContent>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-3\">\r\n            <img [src]=\"'https://image.eveonline.com/Type/'+item.type_id+'_64.png'\"width=\"64\">\r\n          </div>\r\n          <div class=\"col-lg-9\">\r\n            {{item.item.description}}\r\n          </div>\r\n        </div>\r\n      </ng-template>\r\n      <td>{{item.order_id}}</td>\r\n      <td>{{item.item.typeName}}</td>\r\n      <td>{{item.stationName}}</td>\r\n      <td>{{item.quantity}}</td>\r\n      <td>{{item.price | number:'.2'}}\r\n        <span>\r\n          <button class=\"btn btn-primary btn-sm\" style=\"float: right\" (click)=\"removeFromThisCart(ind)\" title=\"remove\"> Remove</button>\r\n        </span>\r\n      </td>\r\n    </tr>\r\n    </tbody>\r\n    <div>Total: {{totalSum | number:'.2'}} </div>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cart/cart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CartComponent = (function () {
    function CartComponent() {
        this.totalSum = 0;
    }
    CartComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('cart')) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
            this.sum();
        }
    };
    CartComponent.prototype.removeFromThisCart = function (index) {
        this.cart.splice(index, 1);
        sessionStorage.setItem('cart', JSON.stringify(this.cart));
        this.sum();
        return false;
    };
    CartComponent.prototype.sum = function () {
        var currentTotal = 0;
        for (var i = 0; i < this.cart.length; i++) {
            currentTotal += this.cart[i].price * this.cart[i].quantity;
        }
        this.totalSum = currentTotal;
    };
    CartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-cart',
            template: __webpack_require__("../../../../../src/app/cart/cart.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cart/cart.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CartComponent);
    return CartComponent;
}());



/***/ }),

/***/ "../../../../../src/app/dropdown.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = (function () {
    function DropdownDirective(_el) {
        this._el = _el;
        this.isOpen = false;
    }
    Object.defineProperty(DropdownDirective.prototype, "opened", {
        get: function () {
            return this.isOpen;
        },
        enumerable: true,
        configurable: true
    });
    DropdownDirective.prototype.open = function () {
        this.isOpen = true;
        this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
    };
    DropdownDirective.prototype.close = function (targetElement) {
        var inside = this._el.nativeElement.contains(targetElement);
        if (!inside) {
            this.isOpen = false;
            this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostBinding */])('class.show'),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], DropdownDirective.prototype, "opened", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "open", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('document:click', ['$event.target']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "close", null);
    DropdownDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appDropdown]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light \">\r\n\r\n  <div class=\"navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/search\">Search<span class=\"sr-only\">(current)</span></a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a *ngIf=\"cart; else elseBlock\" class=\"nav-link\" routerLink=\"/cart\">My Cart {{'[' + cart.length + ']'}}</a>\r\n          <ng-template #elseBlock>\r\n            <a class=\"nav-link\" routerLink=\"/cart\">My Cart</a>\r\n          </ng-template>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/logout\">Logout</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('cart')) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
        }
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/search/search.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".form-control {\r\n  width: 300px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <label>\r\n    <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n      <img [src]=\"'https://image.eveonline.com/Type/'+r['typeID']+'_32.png'\"width=\"32\">\r\n      {{r.typeName}}\r\n    </ng-template>\r\n    <label for=\"typeahead-template\">Search for an Item Name:</label>\r\n    <input id=\"typeahead-template\" type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\"/>\r\n    <label>Region: </label>\r\n    <select [(ngModel)]=\"regionID\" style=\"width: 175px\">\r\n      <option *ngFor=\"let region of regions\" [value]=\"region.regionID\">{{region.name}}</option>\r\n    </select>\r\n    <button (click)=\"getOrder()\">Search</button>\r\n    <hr>\r\n    <div *ngIf=\"selectItem != undefined\">\r\n      <div>\r\n        <div><h3>{{selectItem.typeName}}</h3></div>\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-2 align\">\r\n            <img [src]=\"'https://image.eveonline.com/Type/'+selectItem['typeID']+'_64.png'\"width=\"128\">\r\n          </div>\r\n          <div class=\"col-lg-10\">\r\n            {{selectItem.description}}\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </label>\r\n</div>\r\n<p>\r\n<ngb-alert *ngIf=\"alertMessage\" type=\"{{alertType}}\" (close)=\"alertMessage = null\">{{ alertMessage }}</ngb-alert>\r\n</p>\r\n<div class=\"row\">\r\n  <table class=\"table table-striped table-hover col-lg-12\" style=\"table-layout: fixed; width: 100%;\">\r\n    <thead class=\"thead-inverse\">\r\n    <tr>\r\n      <th style=\"width: 15%\">ISSUED</th>\r\n      <th style=\"width: 20%\"><a href=\"#\" (click)=\"sortPrice()\">PRICE</a></th>\r\n      <th style=\"width: 10%\">VOLUME</th>\r\n      <th style=\"width: 55%\">LOCATION</th>\r\n    </tr>\r\n    </thead>\r\n    <tbody>\r\n    <tr *ngFor=\"let item of pages; let ind = index\">\r\n      <td>{{item.issued | date:'shortDate'}}</td>\r\n      <td>{{item.price | number:'.2'}}</td>\r\n      <td>{{item.volume_remain}}</td>\r\n      <td>{{item.stationName}}</td>\r\n      <span style=\"float: right\">\r\n        <div class=\"btn-group\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n          <button type=\"button\" class=\"btn btn-primary\" #addButton (click)=\"addToCart(ind, addButton)\">Add</button>\r\n          <button class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle>{{item.quantity}} </button>\r\n          <div class=\"dropdown-menu\" ngbDropdownMenu>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,1); myDrop.close()\">1</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,2); myDrop.close()\" >2</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,3); myDrop.close()\">3</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,4); myDrop.close()\">4</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,5); myDrop.close()\">5</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,6); myDrop.close()\">6</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,7); myDrop.close()\">7</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,8); myDrop.close()\">8</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,9); myDrop.close()\">9</button>\r\n            <button class=\"dropdown-item\" (click)=\"changeQuantity(ind,10); myDrop.close()\">10</button>\r\n            <button class=\"dropdown-item\" disabled><input (keydown)=\"enterAmount(ind, $event, box.value, myDrop)\" #box style=\"width: 40px\" type=\"text\" placeholder=\"{{item.quantity}}\"></button>\r\n          </div>\r\n        </div>\r\n      </span>\r\n    </tr>\r\n    </tbody>\r\n    <tr *ngIf=\"orders.length == 0 && searched\"><td colspan=\"4\">No Results Found</td></tr>\r\n    <div *ngIf=\"orders.length != 0\">\r\n      <ngb-pagination (pageChange)=\"setPages()\" [collectionSize]=\"orders.length\" [pageSize]=\"pageSize\" [(page)]=\"page\"></ngb-pagination>\r\n    </div>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_search_item_service__ = __webpack_require__("../../../../../src/app/service/search-item.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_debounceTime__ = __webpack_require__("../../../../rxjs/_esm5/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchComponent = (function () {
    function SearchComponent(searchItemService, config) {
        var _this = this;
        this.searchItemService = searchItemService;
        this.orders = [];
        this.regions = [];
        this.stations = [];
        this.itemId = [];
        this.sortByPrice = true;
        this.searched = false;
        this.page = 1;
        this.pageSize = 10;
        this.alertType = 'success';
        this.message = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["a" /* Subject */]();
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .map(function (term) { return term.length < 2 ? []
                : _this.itemId.filter(function (v) { return v.typeName.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); });
        };
        this.formatter = function (x) { return x.typeName; };
        config.autoClose = 'outside';
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.message.subscribe(function (message) { return _this.alertMessage = message; });
        __WEBPACK_IMPORTED_MODULE_4_rxjs_operator_debounceTime__["a" /* debounceTime */].call(this.message, 3000).subscribe(function () { return _this.alertMessage = null; });
        this.searchItemService.getItemId()
            .subscribe(function (itemId) { return _this.itemId = itemId; });
        this.searchItemService.getRegionId()
            .subscribe(function (regions) { return _this.regions = regions; });
        this.searchItemService.getStationId()
            .subscribe(function (stations) { return _this.stations = stations; });
        if (sessionStorage.getItem('cart')) {
            this.cart = JSON.parse(sessionStorage.getItem('cart'));
        }
        else {
            this.cart = [];
        }
    };
    SearchComponent.prototype.getOrder = function () {
        var _this = this;
        this.searchName = this.model.typeName;
        this.selectItem = this.model;
        this.searched = true;
        this.searchItemService.getOrders(this.regionID, this.model.typeID)
            .subscribe(function (orders) { return _this.orders = orders; }, function (error) { return console.log('Error'); }, function () { return _this.getStationName(); });
        this.page = 1;
    };
    SearchComponent.prototype.setPages = function () {
        var _this = this;
        setTimeout(function () {
            var begin = (_this.page - 1) * _this.pageSize;
            var end = begin + _this.pageSize;
            if (end > _this.orders.length) {
                end = _this.orders.length;
            }
            _this.pages = _this.orders.slice(begin, end);
        }, 100);
    };
    SearchComponent.prototype.addToCart = function (index, addButton) {
        if (this.pages[index].quantity != null) {
            if (this.checkCart(this.pages[index])) {
                this.alertType = 'success';
                this.message.next('Quantity updated to cart');
                addButton.innerHTML = 'Update';
            }
            else {
                this.cart.push(this.pages[index]);
                sessionStorage.setItem('cart', JSON.stringify(this.cart));
                this.alertType = 'success';
                this.message.next('Item added to cart');
                addButton.innerHTML = 'Update';
            }
        }
        else {
            this.alertType = 'warning';
            this.message.next('Select quantity to add to cart');
        }
        return false;
    };
    SearchComponent.prototype.getStationName = function () {
        var _this = this;
        var _loop_1 = function (i) {
            this_1.orders[i].item = this_1.selectItem;
            var station = this_1.stations.find(function (item) { return item.stationID === _this.orders[i].location_id; });
            if (station === undefined) {
                var tempStation_1;
                this_1.searchItemService.getNameById(this_1.orders[i].location_id).subscribe(function (reponse) { return tempStation_1 = reponse; }, function (error) { return console.log('Error'); }, function () { return _this.orders[i].stationName = tempStation_1[0].name; });
            }
            else {
                this_1.orders[i].stationName = station.stationName;
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.orders.length; i++) {
            _loop_1(i);
        }
        this.setPages();
    };
    SearchComponent.prototype.sortPrice = function () {
        if (this.sortByPrice) {
            this.orders.sort(function (order1, order2) { return order1.price - order2.price; });
            this.sortByPrice = false;
        }
        else {
            this.orders.reverse();
            this.sortByPrice = true;
        }
        this.setPages();
        return false;
    };
    SearchComponent.prototype.changeQuantity = function (ind, quantity) {
        if (this.pages[ind].volume_remain < quantity) {
            this.alertType = 'warning';
            this.message.next('Not enough quantity');
        }
        else {
            this.pages[ind].quantity = quantity;
        }
    };
    SearchComponent.prototype.enterAmount = function (ind, event, quantity, myDrop) {
        if (event.keyCode === 13) {
            if (this.pages[ind].volume_remain < quantity) {
                this.alertType = 'warning';
                this.message.next('Not enough quantity');
            }
            else {
                this.pages[ind].quantity = quantity;
                myDrop.close();
            }
        }
    };
    SearchComponent.prototype.checkCart = function (order) {
        for (var i = 0; i < this.cart.length; i++) {
            if (this.cart[i].order_id === order.order_id) {
                this.cart[i].quantity = order.quantity;
                sessionStorage.setItem('cart', JSON.stringify(this.cart));
                return true;
            }
        }
    };
    SearchComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-search',
            template: __webpack_require__("../../../../../src/app/search/search.component.html"),
            styles: [__webpack_require__("../../../../../src/app/search/search.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownConfig */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_search_item_service__["a" /* SearchItemService */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbDropdownConfig */]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "../../../../../src/app/service/search-item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchItemService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchItemService = (function () {
    function SearchItemService(http) {
        this.http = http;
    }
    SearchItemService.prototype.getOrders = function (regionId, itemId) {
        return this.http.get('https://esi.tech.ccp.is/latest/markets/' + regionId + '/orders/?datasource=tranquility&order_type=sell&page=1&type_id=' + itemId);
    };
    SearchItemService.prototype.getItemId = function () {
        return this.http.get('./assets/data/itemId.json');
    };
    SearchItemService.prototype.getRegionId = function () {
        return this.http.get('./assets/data/regionId.json');
    };
    SearchItemService.prototype.getStationId = function () {
        return this.http.get('./assets/data/stationId.json');
    };
    SearchItemService.prototype.getNameById = function (id) {
        return this.http.post('https://esi.tech.ccp.is/latest/universe/names/?datasource=tranquility', [id]);
    };
    SearchItemService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], SearchItemService);
    return SearchItemService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map