(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-service.service.ts":
/*!****************************************!*\
  !*** ./src/app/api-service.service.ts ***!
  \****************************************/
/*! exports provided: ApiServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServiceService", function() { return ApiServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
        this.Url = '../assets/data/product_inventory.json';
        this.likedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.shoppedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ApiServiceService.prototype.getProducts = function () {
        return this.http.get(this.Url);
    };
    ApiServiceService.prototype.sendLiked = function (message) {
        this.likedSubject.next({ liked: message });
    };
    ApiServiceService.prototype.getLiked = function () {
        return this.likedSubject.asObservable();
    };
    ApiServiceService.prototype.sendShopped = function (message) {
        console.log(message);
        this.shoppedSubject.next({ shopped: message });
    };
    ApiServiceService.prototype.getShopped = function () {
        console.log(this.shoppedSubject.asObservable());
        return this.shoppedSubject.asObservable();
    };
    ApiServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ApiServiceService);
    return ApiServiceService;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _liked_shopped_liked_shopped_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./liked-shopped/liked-shopped.component */ "./src/app/liked-shopped/liked-shopped.component.ts");







var routes = [
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    {
        path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    },
    {
        path: 'products', component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_4__["ProductListComponent"]
    },
    {
        path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]
    },
    {
        path: 'seleted-products/:value', component: _liked_shopped_liked_shopped_component__WEBPACK_IMPORTED_MODULE_6__["LikedShoppedComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".global_cover {\r\n    margin-top: 95px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5nbG9iYWxfY292ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOTVweDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<app-nav-bar> </app-nav-bar>\r\n<div class=\"global_cover\">\r\n    <router-outlet></router-outlet>\r\n</div>\r\n\r\n\r\n<app-footer> </app-footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'le-marche-angular';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-owl-carousel */ "./node_modules/ngx-owl-carousel/index.js");
/* harmony import */ var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-infinite-scroll */ "./node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./product-list/product-list.component */ "./src/app/product-list/product-list.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./nav-bar/nav-bar.component */ "./src/app/nav-bar/nav-bar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _liked_shopped_liked_shopped_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./liked-shopped/liked-shopped.component */ "./src/app/liked-shopped/liked-shopped.component.ts");



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductListComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"],
                _nav_bar_nav_bar_component__WEBPACK_IMPORTED_MODULE_14__["NavBarComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
                _liked_shopped_liked_shopped_component__WEBPACK_IMPORTED_MODULE_18__["LikedShoppedComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_4__["OwlModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_5__["InfiniteScrollModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__["BrowserAnimationsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_7__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
            ],
            providers: [_api_service_service__WEBPACK_IMPORTED_MODULE_16__["ApiServiceService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb-section.set-bg {\r\n  background-image: url('breadcrumb.jpg');\r\n}\r\n\r\n.map {\r\n  margin-top: 45px;\r\n}\r\n\r\n.contact-form form input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-form form small {\r\n  font-size: 14px;\r\n}\r\n\r\n.contact-form form .form-group label {\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n\r\n.form_container {\r\n  width: 45%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.form_btn {\r\n  background-color: #f06f30;\r\n  color: #fff;\r\n  padding: 5px 15px;\r\n  border-radius: 5px;\r\n  border: 1px solid #f06f30;\r\n  font-size: 16px;\r\n}\r\n\r\n.form_btn:disabled {\r\n  background-color: #6d6d6d;\r\n  border: 1px solid #6d6d6d;\r\n  color: #a2a2a2;\r\n}\r\n\r\n.second_form_container {\r\n  width: 85%;\r\n  margin: 0 auto;\r\n}\r\n\r\n.success_msg_container {\r\n  border: 3px solid #5c9407;\r\n  padding: 15px;\r\n  border-radius: 10px;\r\n}\r\n\r\n.success_msg_container img {\r\n    width: 30px;\r\n}\r\n\r\n.success_msg_container p {\r\n  color: #5c9407;\r\n  font-size: 18px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.map {\r\n  height: 320px;\r\n  margin-top: 20px;\r\n}\r\n\r\n.map .map-inside {\r\n  top: 3px;\r\n}\r\n\r\n.map .map-inside .inside-widget:after {\r\n  display: none;\r\n}\r\n\r\n.contact-form {\r\n  padding-top: 25px;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header {\r\n  pointer-events: none !important;\r\n}\r\n\r\n::ng-deep .mat-horizontal-stepper-header .mat-step-icon {\r\n  margin-right: 0 !important;\r\n}\r\n\r\n::ng-deep .mat-step-header .mat-step-label {\r\n  min-width: 0 !important;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .form_container {\r\n      width: 90%;\r\n    }\r\n}\r\n\r\n.order_btn {\r\n  border-color: #7eac39;\r\n  color: #fff;\r\n  box-shadow: 0 0 40px 40px #7eac39 inset, 0 0 0 0 #7eac39;\r\n  transition: all 150ms ease-in-out;\r\n  box-sizing: border-box;\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n  background-color: transparent;\r\n  border-radius: 0.6em;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-self: center;\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  line-height: 1;\r\n  margin: 20px;\r\n  padding: 1.2em 2.8em;\r\n  text-decoration: none;\r\n  text-align: center;\r\n  text-transform: uppercase;\r\n  font-family: 'Montserrat', sans-serif;\r\n  font-weight: 700;\r\n}\r\n\r\n.order_btn:hover {\r\n  box-shadow: 0 0 10px 0 #7eac39 inset, 0 0 10px 4px #7eac39;\r\n  color: #7eac39;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLCtCQUErQjtBQUNqQzs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFHQTtJQUNJO01BQ0UsVUFBVTtJQUNaO0FBQ0o7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLHdEQUF3RDtFQUV4RCxpQ0FBaUM7RUFDakMsc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLDZCQUE2QjtFQUM3QixvQkFBb0I7RUFDcEIsZUFBZTtFQUVmLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixxQ0FBcUM7RUFDckMsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsMERBQTBEO0VBQzFELGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLXNlY3Rpb24uc2V0LWJnIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvYnJlYWRjcnVtYi5qcGcnKTtcclxufVxyXG5cclxuLm1hcCB7XHJcbiAgbWFyZ2luLXRvcDogNDVweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIGlucHV0IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gc21hbGwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5cclxuLmNvbnRhY3QtZm9ybSBmb3JtIC5mb3JtLWdyb3VwIGxhYmVsIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxufVxyXG5cclxuLmZvcm1fY29udGFpbmVyIHtcclxuICB3aWR0aDogNDUlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4uZm9ybV9idG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMDZmMzA7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgcGFkZGluZzogNXB4IDE1cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMDZmMzA7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9ybV9idG46ZGlzYWJsZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM2ZDZkNmQ7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzZkNmQ2ZDtcclxuICBjb2xvcjogI2EyYTJhMjtcclxufVxyXG5cclxuLnNlY29uZF9mb3JtX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDg1JTtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnN1Y2Nlc3NfbXNnX2NvbnRhaW5lciB7XHJcbiAgYm9yZGVyOiAzcHggc29saWQgIzVjOTQwNztcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5zdWNjZXNzX21zZ19jb250YWluZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uc3VjY2Vzc19tc2dfY29udGFpbmVyIHAge1xyXG4gIGNvbG9yOiAjNWM5NDA3O1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICBoZWlnaHQ6IDMyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXAgLm1hcC1pbnNpZGUge1xyXG4gIHRvcDogM3B4O1xyXG59XHJcblxyXG4ubWFwIC5tYXAtaW5zaWRlIC5pbnNpZGUtd2lkZ2V0OmFmdGVyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciB7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtaG9yaXpvbnRhbC1zdGVwcGVyLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1sYWJlbCB7XHJcbiAgbWluLXdpZHRoOiAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA5MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5vcmRlcl9idG4ge1xyXG4gIGJvcmRlci1jb2xvcjogIzdlYWMzOTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBib3gtc2hhZG93OiAwIDAgNDBweCA0MHB4ICM3ZWFjMzkgaW5zZXQsIDAgMCAwIDAgIzdlYWMzOTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMTUwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMC42ZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxO1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBwYWRkaW5nOiAxLjJlbSAyLjhlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5vcmRlcl9idG46aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDAgIzdlYWMzOSBpbnNldCwgMCAwIDEwcHggNHB4ICM3ZWFjMzk7XHJcbiAgY29sb3I6ICM3ZWFjMzk7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"breadcrumb-section set-bg\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n              <div class=\"breadcrumb__text\">\r\n                  <h2>Nous contacter</h2>\r\n                  <div class=\"breadcrumb__option\">\r\n                      <a href=\"javascript:void(0);\" (click)=\"goToHome()\">Accueil</a>\r\n                      <span>Nous contacter</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<!-- Map Begin -->\r\n<div class=\"map\">\r\n    <!-- <iframe\r\n        src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49116.39176087041!2d-86.41867791216099!3d39.69977417971648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886ca48c841038a1%3A0x70cfba96bf847f0!2sPlainfield%2C%20IN%2C%20USA!5e0!3m2!1sen!2sbd!4v1586106673811!5m2!1sen!2sbd\"\r\n        height=\"500\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe> -->\r\n    <iframe src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10575.201998811724!2d1.9613835!3d48.4987174!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x835c3f154ce8d991!2sLe%20March%C3%A9%20De%20Garlande!5e0!3m2!1sen!2sin!4v1595921180561!5m2!1sen!2sin\" width=\"600\" height=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n    <!-- <div class=\"map-inside\">\r\n        <i class=\"icon_pin\"></i>\r\n        <div class=\"inside-widget\">\r\n            <h4>Le Marché De Garlande</h4>\r\n            <ul>\r\n                <li>2 Place Etienne de Garlande,</li>\r\n                <li>91410 Corbreuse, France</li>\r\n            </ul>\r\n        </div>\r\n    </div> -->\r\n</div>\r\n<!-- Map End -->\r\n\r\n<div class=\"contact-form spad\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"contact__form__title\">\r\n                    <h2>Leave Message</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6\">\r\n                    <input type=\"text\" placeholder=\"Customer Name\" id=\"customer-name\">\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6\">\r\n                    <input type=\"text\" placeholder=\"Customer Contact\" id=\"customer-contact\">\r\n                </div>\r\n                <div class=\"col-lg-12 text-center\">\r\n                    <textarea placeholder=\"Your message\" id=\"product-info\"></textarea>\r\n                    <button type=\"button\" onclick=\"sendEmail()\" class=\"site-btn send-message\">SEND MESSAGE</button>\r\n                </div>\r\n            </div>\r\n        </form> -->\r\n        <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n            <mat-step>\r\n                <form class=\"form_container\" [formGroup]=\"contactForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Nom </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                            id=\"name\" placeholder=\"Enter Nom\" />\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">  \r\n                            Nous ne partagerons jamais votre Nom avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Email </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                        id=\"email\" name=\"email\" placeholder=\"Enter Email\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre Email avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Numéro de portable </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"mobNum\"\r\n                        id=\"mobNum\" name=\"mobNum\" placeholder=\"Enter Numéro de portable\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre Numéro de portable avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Adresse </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"address\"\r\n                        id=\"address\" name=\"address\" placeholder=\"Enter Adresse\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre Adresse avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n                    \r\n                    <div class=\"d-flex align-items-center justify-content-end\">\r\n                        <button class=\"form_btn\" mat-button matStepperNext [disabled]=\"contactForm.status === 'INVALID'\">\r\n                            Next\r\n                        </button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n            <mat-step>\r\n                <div class=\"second_form_container\">\r\n\r\n                    <p> \r\n                        Le montant du produit sur ce site n'a peut-être pas été mis à jour récemment. \r\n                        Le montant total généré (Montant) ici est une valeur approximative. \r\n                        Si vous souhaitez connaître le montant total précis, veuillez contacter le 0953739158\r\n                    </p>\r\n                    <div class=\"d-flex align-items-center mb-4\">\r\n                        <input class=\"mr-3\" type=\"checkbox\" (change)=\"checkAccept($event)\" /> \r\n                        <p class=\"mb-0\"> J'accepte la déclaration ci-dessus </p>\r\n                    </div>\r\n                    <p> \r\n                        Après avoir cliqué sur le bouton d'achat, l'un de nos agents d'assistance clientèle vous rappellera. \r\n                    </p>\r\n\r\n                    <div class=\"d-flex align-items-center justify-content-between\">\r\n                        <button class=\"form_btn\" matStepperPrevious>Back</button>\r\n                        <button class=\"form_btn\" [disabled]=\"!acceptParam\" matStepperNext id=\"product-submit\">Soumettre la commande</button>\r\n                    </div> \r\n                </div>\r\n            </mat-step>\r\n            <mat-step>  \r\n                <div class=\"form_container\">\r\n\r\n                    <div class=\"success_msg_container d-flex \">\r\n                        <img class=\"mr-4\" src=\"assets/img/icons/tick.svg\" />\r\n                        <p> \r\n                            votre commande a été passée avec succès\r\n                        </p>\r\n                        <button class=\"btn order_btn\" (click)=\"gotoProduct()\">Revenir à la boutique</button>\r\n                    </div>\r\n                   \r\n                </div>\r\n            </mat-step>\r\n        </mat-horizontal-stepper>\r\n        \r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ContactComponent = /** @class */ (function () {
    function ContactComponent(router, _formBuilder) {
        this.router = router;
        this._formBuilder = _formBuilder;
        this.isLinear = true;
        this.acceptParam = false;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactComponent.prototype.initForm = function () {
        this.contactForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
            mobNum: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
            address: [''],
        });
    };
    ContactComponent.prototype.gotoProduct = function () {
        this.router.navigate(['home']);
        location.reload();
    };
    ContactComponent.prototype.goToHome = function () {
        this.router.navigate(['home']);
    };
    ContactComponent.prototype.checkAccept = function (event) {
        if (event.target.checked === true) {
            this.acceptParam = true;
        }
        else {
            this.acceptParam = false;
        }
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer {\r\n    background: #fff;\r\n    margin-top: auto;\r\n    width: 100%;\r\n}\r\n.footer-bottom-section  {\r\n    border-top: none;\r\n    padding: 0 !important;\r\n}\r\n.horizontal-scroll {\r\n    width: 100%;\r\n    height: 400px;\r\n    background: url('http://lemarchedegarlande.com/assets/img/footer/footer_fr.png');\r\n\r\n    -webkit-animation: backgroundScroll 400s linear infinite;\r\n    animation: backgroundScroll 60s linear infinite;\r\n    background-repeat: no-repeat;\r\n    }\r\n@-webkit-keyframes backgroundScroll {\r\n    from {background-position: 0 0;}\r\n    to {background-position: -600px 0;}\r\n    }\r\n@keyframes backgroundScroll {\r\n    from {background-position: 0 0;}\r\n    to {background-position: -2000px 0;}\r\n    }\r\n.horizontal-scroll2 {\r\n    width: 100%;\r\n    height: 400px;\r\n    background: url('http://lemarchedegarlande.com/assets/img/footer/footer_bg.png');\r\n    -webkit-animation: backgroundScroll2 400s linear infinite;\r\n    animation: backgroundScroll2 30s linear infinite;\r\n    background-repeat: no-repeat;\r\n    }\r\n@-webkit-keyframes backgroundScroll2 {\r\n    from {background-position: -1000px 0;}\r\n    to {background-position: 0 0;}\r\n    }\r\n@keyframes backgroundScroll2 {\r\n    from {background-position: -2000px 0;}\r\n    to {background-position: 0 0;}\r\n    }\r\n.site-footer hr\r\n{\r\n  border-top-color:#bbb;\r\n  opacity:0.5\r\n}\r\n.site-footer hr.small\r\n{\r\n  margin:20px 0\r\n}\r\n.site-footer h6\r\n{\r\n  color:#29aafe;\r\n  font-size:16px;\r\n  text-transform:uppercase;\r\n  margin-top:5px;\r\n  letter-spacing:2px\r\n}\r\n.site-footer a\r\n{\r\n  color:#737373;\r\n}\r\n.site-footer a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links\r\n{\r\n  padding-left:0;\r\n  list-style:none\r\n}\r\n.footer-links li\r\n{\r\n  display:block\r\n}\r\n.footer-links a\r\n{\r\n  color:#737373\r\n}\r\n.footer-links a:active,.footer-links a:focus,.footer-links a:hover\r\n{\r\n  color:#3366cc;\r\n  text-decoration:none;\r\n}\r\n.footer-links.inline li\r\n{\r\n  display:inline-block\r\n}\r\n.site-footer .social-icons\r\n{\r\n  text-align:right\r\n}\r\n.site-footer .social-icons a\r\n{\r\n  width:40px;\r\n  height:40px;\r\n  line-height:40px;\r\n  margin-left:6px;\r\n  margin-right:0;\r\n  border-radius:100%;\r\n  background-color:#33353d\r\n}\r\n.copyright-text\r\n{\r\n  margin:0\r\n}\r\n@media (max-width:991px)\r\n{\r\n  .site-footer [class^=col-]\r\n  {\r\n    margin-bottom:30px\r\n  }\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .site-footer\r\n  {\r\n    padding-bottom:0\r\n  }\r\n  .site-footer .copyright-text,.site-footer .social-icons\r\n  {\r\n    text-align:center\r\n  }\r\n}\r\n.social-icons\r\n{\r\n  padding-left:0;\r\n  margin-bottom:0;\r\n  list-style:none\r\n}\r\n.social-icons li\r\n{\r\n  display:inline-block;\r\n  margin-bottom:4px\r\n}\r\n.social-icons li.title\r\n{\r\n  margin-right:15px;\r\n  text-transform:uppercase;\r\n  color:#96a2b2;\r\n  font-weight:700;\r\n  font-size:13px\r\n}\r\n.social-icons a{\r\n  background-color:#eceeef;\r\n  color:#818a91;\r\n  font-size:16px;\r\n  display:inline-block;\r\n  line-height:44px;\r\n  width:44px;\r\n  height:44px;\r\n  text-align:center;\r\n  margin-right:8px;\r\n  border-radius:100%;\r\n  transition:all .2s linear\r\n}\r\n.social-icons a:active,.social-icons a:focus,.social-icons a:hover\r\n{\r\n  color:#fff;\r\n  background-color:#29aafe\r\n}\r\n.social-icons.size-sm a\r\n{\r\n  line-height:34px;\r\n  height:34px;\r\n  width:34px;\r\n  font-size:14px\r\n}\r\n.social-icons a.facebook:hover\r\n{\r\n  background-color:#3b5998\r\n}\r\n.social-icons a.twitter:hover\r\n{\r\n  background-color:#00aced\r\n}\r\n.social-icons a.linkedin:hover\r\n{\r\n  background-color:#007bb6\r\n}\r\n.social-icons a.dribbble:hover\r\n{\r\n  background-color:#ea4c89\r\n}\r\n@media (max-width:767px)\r\n{\r\n  .social-icons li.title\r\n  {\r\n    display:block;\r\n    margin-right:0;\r\n    font-weight:600\r\n  }\r\n}\r\n.footer-address {\r\n    position: relative;\r\n    top: 180px;\r\n    display: block;\r\n}\r\n.footer-address li {\r\n    font-size: 16px;\r\n    font-family: \"Cairo\", sans-serif;\r\n    color: #6f6f6f;\r\n    font-weight: 400;\r\n    line-height: 26px;\r\n    margin: 0 0 5px 0;\r\n}\r\n.copyright-section {\r\n    position: relative;\r\n    top: 180px;\r\n    display: block;\r\n    text-align: center;\r\n}\r\nul.footer-links {\r\n    margin-top: 15px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixxQkFBcUI7QUFDekI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0ZBQWdGOztJQUVoRix3REFBd0Q7SUFDeEQsK0NBQStDO0lBQy9DLDRCQUE0QjtJQUM1QjtBQUVBO0lBQ0EsTUFBTSx3QkFBd0IsQ0FBQztJQUMvQixJQUFJLDZCQUE2QixDQUFDO0lBQ2xDO0FBRUE7SUFDQSxNQUFNLHdCQUF3QixDQUFDO0lBQy9CLElBQUksOEJBQThCLENBQUM7SUFDbkM7QUFFQTtJQUNBLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0ZBQWdGO0lBQ2hGLHlEQUF5RDtJQUN6RCxnREFBZ0Q7SUFDaEQsNEJBQTRCO0lBQzVCO0FBRUE7SUFDQSxNQUFNLDhCQUE4QixDQUFDO0lBQ3JDLElBQUksd0JBQXdCLENBQUM7SUFDN0I7QUFFQTtJQUNBLE1BQU0sOEJBQThCLENBQUM7SUFDckMsSUFBSSx3QkFBd0IsQ0FBQztJQUM3QjtBQUlBOztFQUVGLHFCQUFxQjtFQUNyQjtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZDtBQUNGO0FBQ0E7O0VBRUUsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsYUFBYTtFQUNiLG9CQUFvQjtBQUN0QjtBQUNBOztFQUVFLGNBQWM7RUFDZDtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxhQUFhO0VBQ2Isb0JBQW9CO0FBQ3RCO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsY0FBYztFQUNkLGtCQUFrQjtFQUNsQjtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFOztJQUVFO0VBQ0Y7QUFDRjtBQUNBOztFQUVFOztJQUVFO0VBQ0Y7RUFDQTs7SUFFRTtFQUNGO0FBQ0Y7QUFDQTs7RUFFRSxjQUFjO0VBQ2QsZUFBZTtFQUNmO0FBQ0Y7QUFDQTs7RUFFRSxvQkFBb0I7RUFDcEI7QUFDRjtBQUNBOztFQUVFLGlCQUFpQjtFQUNqQix3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGVBQWU7RUFDZjtBQUNGO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsYUFBYTtFQUNiLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFHbEI7QUFDRjtBQUNBOztFQUVFLFVBQVU7RUFDVjtBQUNGO0FBQ0E7O0VBRUUsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxVQUFVO0VBQ1Y7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTtBQUNGO0FBQ0E7O0VBRUU7QUFDRjtBQUNBOztFQUVFO0FBQ0Y7QUFDQTs7RUFFRTs7SUFFRSxhQUFhO0lBQ2IsY0FBYztJQUNkO0VBQ0Y7QUFDRjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsZ0NBQWdDO0lBQ2hDLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG4uZm9vdGVyLWJvdHRvbS1zZWN0aW9uICB7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHJcbi5ob3Jpem9udGFsLXNjcm9sbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9sZW1hcmNoZWRlZ2FybGFuZGUuY29tL2Fzc2V0cy9pbWcvZm9vdGVyL2Zvb3Rlcl9mci5wbmcnKTtcclxuXHJcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogYmFja2dyb3VuZFNjcm9sbCA0MDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmFja2dyb3VuZFNjcm9sbCA2MHMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgQC13ZWJraXQta2V5ZnJhbWVzIGJhY2tncm91bmRTY3JvbGwge1xyXG4gICAgZnJvbSB7YmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO31cclxuICAgIHRvIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtNjAwcHggMDt9XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgQGtleWZyYW1lcyBiYWNrZ3JvdW5kU2Nyb2xsIHtcclxuICAgIGZyb20ge2JhY2tncm91bmQtcG9zaXRpb246IDAgMDt9XHJcbiAgICB0byB7YmFja2dyb3VuZC1wb3NpdGlvbjogLTIwMDBweCAwO31cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmhvcml6b250YWwtc2Nyb2xsMiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2h0dHA6Ly9sZW1hcmNoZWRlZ2FybGFuZGUuY29tL2Fzc2V0cy9pbWcvZm9vdGVyL2Zvb3Rlcl9iZy5wbmcnKTtcclxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBiYWNrZ3JvdW5kU2Nyb2xsMiA0MDBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGFuaW1hdGlvbjogYmFja2dyb3VuZFNjcm9sbDIgMzBzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIEAtd2Via2l0LWtleWZyYW1lcyBiYWNrZ3JvdW5kU2Nyb2xsMiB7XHJcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwMHB4IDA7fVxyXG4gICAgdG8ge2JhY2tncm91bmQtcG9zaXRpb246IDAgMDt9XHJcbiAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgQGtleWZyYW1lcyBiYWNrZ3JvdW5kU2Nyb2xsMiB7XHJcbiAgICBmcm9tIHtiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwMHB4IDA7fVxyXG4gICAgdG8ge2JhY2tncm91bmQtcG9zaXRpb246IDAgMDt9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgLnNpdGUtZm9vdGVyIGhyXHJcbntcclxuICBib3JkZXItdG9wLWNvbG9yOiNiYmI7XHJcbiAgb3BhY2l0eTowLjVcclxufVxyXG4uc2l0ZS1mb290ZXIgaHIuc21hbGxcclxue1xyXG4gIG1hcmdpbjoyMHB4IDBcclxufVxyXG4uc2l0ZS1mb290ZXIgaDZcclxue1xyXG4gIGNvbG9yOiMyOWFhZmU7XHJcbiAgZm9udC1zaXplOjE2cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06dXBwZXJjYXNlO1xyXG4gIG1hcmdpbi10b3A6NXB4O1xyXG4gIGxldHRlci1zcGFjaW5nOjJweFxyXG59XHJcbi5zaXRlLWZvb3RlciBhXHJcbntcclxuICBjb2xvcjojNzM3MzczO1xyXG59XHJcbi5zaXRlLWZvb3RlciBhOmhvdmVyXHJcbntcclxuICBjb2xvcjojMzM2NmNjO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGlua3Ncclxue1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIGxpc3Qtc3R5bGU6bm9uZVxyXG59XHJcbi5mb290ZXItbGlua3MgbGlcclxue1xyXG4gIGRpc3BsYXk6YmxvY2tcclxufVxyXG4uZm9vdGVyLWxpbmtzIGFcclxue1xyXG4gIGNvbG9yOiM3MzczNzNcclxufVxyXG4uZm9vdGVyLWxpbmtzIGE6YWN0aXZlLC5mb290ZXItbGlua3MgYTpmb2N1cywuZm9vdGVyLWxpbmtzIGE6aG92ZXJcclxue1xyXG4gIGNvbG9yOiMzMzY2Y2M7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuLmZvb3Rlci1saW5rcy5pbmxpbmUgbGlcclxue1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrXHJcbn1cclxuLnNpdGUtZm9vdGVyIC5zb2NpYWwtaWNvbnNcclxue1xyXG4gIHRleHQtYWxpZ246cmlnaHRcclxufVxyXG4uc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29ucyBhXHJcbntcclxuICB3aWR0aDo0MHB4O1xyXG4gIGhlaWdodDo0MHB4O1xyXG4gIGxpbmUtaGVpZ2h0OjQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6NnB4O1xyXG4gIG1hcmdpbi1yaWdodDowO1xyXG4gIGJvcmRlci1yYWRpdXM6MTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzMzM1M2RcclxufVxyXG4uY29weXJpZ2h0LXRleHRcclxue1xyXG4gIG1hcmdpbjowXHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6OTkxcHgpXHJcbntcclxuICAuc2l0ZS1mb290ZXIgW2NsYXNzXj1jb2wtXVxyXG4gIHtcclxuICAgIG1hcmdpbi1ib3R0b206MzBweFxyXG4gIH1cclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweClcclxue1xyXG4gIC5zaXRlLWZvb3RlclxyXG4gIHtcclxuICAgIHBhZGRpbmctYm90dG9tOjBcclxuICB9XHJcbiAgLnNpdGUtZm9vdGVyIC5jb3B5cmlnaHQtdGV4dCwuc2l0ZS1mb290ZXIgLnNvY2lhbC1pY29uc1xyXG4gIHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyXHJcbiAgfVxyXG59XHJcbi5zb2NpYWwtaWNvbnNcclxue1xyXG4gIHBhZGRpbmctbGVmdDowO1xyXG4gIG1hcmdpbi1ib3R0b206MDtcclxuICBsaXN0LXN0eWxlOm5vbmVcclxufVxyXG4uc29jaWFsLWljb25zIGxpXHJcbntcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW4tYm90dG9tOjRweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgbGkudGl0bGVcclxue1xyXG4gIG1hcmdpbi1yaWdodDoxNXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOnVwcGVyY2FzZTtcclxuICBjb2xvcjojOTZhMmIyO1xyXG4gIGZvbnQtd2VpZ2h0OjcwMDtcclxuICBmb250LXNpemU6MTNweFxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiNlY2VlZWY7XHJcbiAgY29sb3I6IzgxOGE5MTtcclxuICBmb250LXNpemU6MTZweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBsaW5lLWhlaWdodDo0NHB4O1xyXG4gIHdpZHRoOjQ0cHg7XHJcbiAgaGVpZ2h0OjQ0cHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OjhweDtcclxuICBib3JkZXItcmFkaXVzOjEwMCU7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgbGluZWFyO1xyXG4gIC1vLXRyYW5zaXRpb246YWxsIC4ycyBsaW5lYXI7XHJcbiAgdHJhbnNpdGlvbjphbGwgLjJzIGxpbmVhclxyXG59XHJcbi5zb2NpYWwtaWNvbnMgYTphY3RpdmUsLnNvY2lhbC1pY29ucyBhOmZvY3VzLC5zb2NpYWwtaWNvbnMgYTpob3ZlclxyXG57XHJcbiAgY29sb3I6I2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMyOWFhZmVcclxufVxyXG4uc29jaWFsLWljb25zLnNpemUtc20gYVxyXG57XHJcbiAgbGluZS1oZWlnaHQ6MzRweDtcclxuICBoZWlnaHQ6MzRweDtcclxuICB3aWR0aDozNHB4O1xyXG4gIGZvbnQtc2l6ZToxNHB4XHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmZhY2Vib29rOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OThcclxufVxyXG4uc29jaWFsLWljb25zIGEudHdpdHRlcjpob3ZlclxyXG57XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDBhY2VkXHJcbn1cclxuLnNvY2lhbC1pY29ucyBhLmxpbmtlZGluOmhvdmVyXHJcbntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiMwMDdiYjZcclxufVxyXG4uc29jaWFsLWljb25zIGEuZHJpYmJibGU6aG92ZXJcclxue1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2VhNGM4OVxyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOjc2N3B4KVxyXG57XHJcbiAgLnNvY2lhbC1pY29ucyBsaS50aXRsZVxyXG4gIHtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MDtcclxuICAgIGZvbnQtd2VpZ2h0OjYwMFxyXG4gIH1cclxufVxyXG4uZm9vdGVyLWFkZHJlc3Mge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5mb290ZXItYWRkcmVzcyBsaSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJDYWlyb1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgY29sb3I6ICM2ZjZmNmY7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBtYXJnaW46IDAgMCA1cHggMDtcclxufVxyXG4uY29weXJpZ2h0LXNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAxODBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbnVsLmZvb3Rlci1saW5rcyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"flex-rw site-footer\">\r\n  <section class=\"footer-bottom-section flex-rw\">\r\n    <div class=\"horizontal-scroll2\">\r\n      <div class=\"horizontal-scroll\">\r\n\r\n        <div class=\"container footer-address\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 col-md-6\">\r\n              <h6>ADDRESS</h6>\r\n              <p class=\"text-justify\">Le Marché De Garlande<br />\r\n                2 Place Etienne de Garlande,<br />91410 Corbreuse,<br />France<br />\r\n                Numéro de contact: 0953739158</p>\r\n            </div>\r\n\r\n            <div class=\"col-xs-6 col-md-3\">\r\n              <h6>Heures d'ouverture</h6>\r\n              <ul class=\"footer-links\">\r\n                <li>Du Lundi au Jeudi - de 8h à 21h</li>\r\n                <li>Le Vendredi au dimanche -8h à 21h 30</li>\r\n                <li>Sans interruption</li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"container copyright-section\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-8 col-sm-6 col-xs-12\">\r\n              <p class=\"copyright-text\">Copyright &copy; 2020 All Rights Reserved by \r\n           <a href=\"#\">KOA software</a>.\r\n              </p>\r\n            </div>\r\n            <div class=\"col-md-4 col-sm-6 col-xs-12\">\r\n              <ul class=\"social-icons\">\r\n                <li><a class=\"facebook\" href=\"https://www.facebook.com/Le-marche-de-Garlande-107085247416451/\" target=\"_blank\"><i class=\"fa fa-facebook\"></i></a></li>\r\n                <li><a class=\"twitter\" href=\"javscript:void(0);\" target=\"_blank\"><i class=\"fa fa-twitter\"></i></a></li>\r\n              </ul>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n\r\n      </div>\r\n    </div>\r\n  </section>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-owl-carousel {\r\n    position: relative;\r\n    margin-top: 40px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 450px;\r\n}\r\n\r\n.carousel-inner .carousel-item {\r\n    height: 100%;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-item .carousel-item {\r\n    position: relative;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-carousel-item .carousel-item > div > img {\r\n    box-shadow: 0 1px 5px 2px #bbb;\r\n    border-radius: 15px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-item .carousel-item h4 {\r\n    font-size: 18px;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 30px;\r\n    left: 10%;\r\n    background-color: #7eac39;\r\n    color: #fff;\r\n    border-radius: 5px;\r\n    padding: 7px 14px;\r\n    width: 80%;\r\n    box-shadow: 0 4px 7px 0px #4a4a4a;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev,\r\n.custom-owl-carousel ::ng-deep .owl-next {\r\n  position: absolute;\r\n  top: 35%;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev {\r\n  left: 20px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev:before,\r\n.custom-owl-carousel ::ng-deep .owl-next:before {\r\n    content: '';\r\n    background-image: url('back.svg');\r\n    left: 20%;\r\n    top: 36%;\r\n    background-size: 15px 15px;\r\n    position: absolute;\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-next:before {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-next {\r\n    right: 20px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-theme .owl-controls .owl-buttons div {\r\n    background-color: #fff;\r\n    border: 1px solid #333;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    width: 25px;\r\n    padding: 0;\r\n    text-indent: -9999px;\r\n    opacity: 1;\r\n}\r\n\r\n/* ISOTOPE FILTER's CSS  */\r\n\r\n.portfolio{\r\n\tmin-height: 100vh;\r\n\tpadding:50px 15px;\r\n\tbackground-color: #fff;\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n\r\n.heading{\r\n\twidth:100%;\r\n\tfloat: left;\r\n}\r\n\r\n.portfolio .heading h1{\r\n\tfont-size:35px;\r\n\tcolor:#333;\r\n\tmargin:0px 0px 20px ;\r\n\ttext-align: center;\r\n    letter-spacing:0.5px;\r\n    font-family: 'Cairo', sans-serif;\r\n    font-weight: 900;\r\n}\r\n\r\n.portfolio .filter-btn{\r\n\tfloat: left;\r\n\twidth:100%;\r\n\ttext-align: center;\r\n}\r\n\r\n.portfolio .filter-btn ul{\r\n\tlist-style: none;\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n\r\n.portfolio .filter-btn{\r\n\tpadding:30px 0px 20px;\r\n}\r\n\r\n.portfolio .filter-btn ul li{\r\n\tdisplay: inline-block;\r\n\tbackground-color:#fff;\r\n\tpadding:6px 15px;\r\n\tcolor:#333;\r\n\tborder-radius:5px;\r\n\tmargin:0px 1px;\r\n\tcursor: pointer;\r\n\tfont-size:16px;\r\n    position: relative;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.portfolio .filter-btn ul li:after {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #7fad39;\r\n    content: \"\";\r\n    opacity: 0;\r\n}\r\n\r\n.portfolio .filter-btn ul li.active:after {\r\n    opacity: 1 ;\r\n}\r\n\r\n.portfolio .items{\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n\r\n.portfolio .items .box {\r\n\tfloat: left;\r\n\twidth: 25%;\r\n\tpadding:15px;\r\n\ttransition: all 1s ease;\r\n}\r\n\r\n.portfolio .items .box .inner {\r\n    width: 70%;\r\n    margin: 0 auto;\r\n    cursor: pointer;\r\n}\r\n\r\n.portfolio .items .box .inner img{\r\n\twidth:100%;\r\n    display: block;\r\n    border-radius: 15px;\r\n}\r\n\r\n.carousel-inner .carousel-item {\r\n    position: relative;\r\n}\r\n\r\n.carousel-inner .carousel-item:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.carousel-inner .carousel-item .carousel-caption h3, \r\n.carousel-inner .carousel-item .carousel-caption p {\r\n    color: #fff;\r\n}\r\n\r\n::ng-deep .owl-carousel .owl-wrapper-outer {\r\n    overflow: initial;\r\n}\r\n\r\n.bg_img {\r\n\r\n}\r\n\r\n.bg_img.bg_img_1 {\r\n    background-image: url('slide1.jpg');\r\n}\r\n\r\n.bg_img.bg_img_2 {\r\n    background-image: url('slide2.jpg');\r\n}\r\n\r\n.bg_img.bg_img_3 {\r\n    background-image: url('slide3.jpg');\r\n}\r\n\r\n.carousel-inner {\r\n    background-image: url('overall_banner.jpg');\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .carousel-inner {\r\n        height: 241px;\r\n    }\r\n\r\n    .portfolio .items .box {\r\n        width: 50%;\r\n        padding: 8px;\r\n    }\r\n\r\n    .carousel-inner .carousel-item .carousel-caption h3 {\r\n        font-size: 22px;\r\n    }\r\n\r\n    .portfolio .items .box .inner {\r\n        width: 100%; \r\n    }\r\n\r\n    .portfolio .items .box {\r\n        width: 33%;\r\n    }\r\n\r\n    .portfolio .items .box .inner img {\r\n        border-radius: 7px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDhCQUE4QjtJQUM5QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osU0FBUztJQUNULHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsaUNBQWlDO0FBQ3JDOztBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7O0lBRUksV0FBVztJQUNYLGlDQUF3RDtJQUN4RCxTQUFTO0lBQ1QsUUFBUTtJQUNSLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsVUFBVTtJQUNWLG9CQUFvQjtJQUNwQixVQUFVO0FBQ2Q7O0FBRUEsMEJBQTBCOztBQUUxQjtDQUNDLGlCQUFpQjtDQUNqQixpQkFBaUI7Q0FDakIsc0JBQXNCO0NBQ3RCLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxVQUFVO0NBQ1YsV0FBVztBQUNaOztBQUVBO0NBQ0MsY0FBYztDQUNkLFVBQVU7Q0FDVixvQkFBb0I7Q0FDcEIsa0JBQWtCO0lBQ2Ysb0JBQW9CO0lBQ3BCLGdDQUFnQztJQUNoQyxnQkFBZ0I7QUFDcEI7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLGtCQUFrQjtBQUNuQjs7QUFDQTtDQUNDLGdCQUFnQjtDQUNoQixRQUFRO0NBQ1IsU0FBUztBQUNWOztBQUNBO0NBQ0MscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLHFCQUFxQjtDQUNyQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLGlCQUFpQjtDQUNqQixjQUFjO0NBQ2QsZUFBZTtDQUNmLGNBQWM7SUFDWCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osV0FBVztJQUNYLFdBQVc7SUFDWCxtQkFBbUI7SUFDbkIsV0FBVztJQUNYLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0FBQ1g7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsVUFBVTtDQUNWLFlBQVk7Q0FDWix1QkFBdUI7QUFDeEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGVBQWU7QUFDbkI7O0FBRUE7Q0FDQyxVQUFVO0lBQ1AsY0FBYztJQUNkLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLFdBQVc7QUFDZjs7QUFFQTs7SUFFSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0FBRUE7O0FBRUE7SUFDSSxtQ0FBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxtQ0FBb0Q7QUFDeEQ7O0FBRUE7SUFDSSxtQ0FBb0Q7QUFDeEQ7O0FBRUE7SUFDSSwyQ0FBNEQ7QUFDaEU7O0FBRUE7O0lBRUk7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztBQUVKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLW93bC1jYXJvdXNlbCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtaW5uZXIge1xyXG4gICAgaGVpZ2h0OiA0NTBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIC5jYXJvdXNlbC1pdGVtIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmN1c3RvbS1vd2wtY2Fyb3VzZWwgOjpuZy1kZWVwIC5vd2wtaXRlbSAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1jYXJvdXNlbC1pdGVtIC5jYXJvdXNlbC1pdGVtID4gZGl2ID4gaW1nIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDVweCAycHggI2JiYjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLWl0ZW0gLmNhcm91c2VsLWl0ZW0gaDQge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYWMzOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggN3B4IDBweCAjNGE0YTRhO1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1wcmV2LFxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNSU7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLXByZXYge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLXByZXY6YmVmb3JlLFxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9iYWNrLnN2ZycpO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWNvbnRyb2xzIC5vd2wtYnV0dG9ucyBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIElTT1RPUEUgRklMVEVSJ3MgQ1NTICAqL1xyXG5cclxuLnBvcnRmb2xpb3tcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRwYWRkaW5nOjUwcHggMTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8gLmhlYWRpbmcgaDF7XHJcblx0Zm9udC1zaXplOjM1cHg7XHJcblx0Y29sb3I6IzMzMztcclxuXHRtYXJnaW46MHB4IDBweCAyMHB4IDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzowLjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0bntcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9ydGZvbGlvIC5maWx0ZXItYnRuIHVse1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzowO1xyXG59XHJcbi5wb3J0Zm9saW8gLmZpbHRlci1idG57XHJcblx0cGFkZGluZzozMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIC5maWx0ZXItYnRuIHVsIGxpe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblx0cGFkZGluZzo2cHggMTVweDtcclxuXHRjb2xvcjojMzMzO1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdG1hcmdpbjowcHggMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6MTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0biB1bCBsaTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICM3ZmFkMzk7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0biB1bCBsaS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMSA7XHJcbn1cclxuLnBvcnRmb2xpbyAuaXRlbXN7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuaXRlbXMgLmJveCB7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6IDI1JTtcclxuXHRwYWRkaW5nOjE1cHg7XHJcblx0dHJhbnNpdGlvbjogYWxsIDFzIGVhc2U7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8gLml0ZW1zIC5ib3ggLmlubmVyIHtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuaXRlbXMgLmJveCAuaW5uZXIgaW1ne1xyXG5cdHdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMywgXHJcbi5jYXJvdXNlbC1pbm5lciAuY2Fyb3VzZWwtaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm93bC1jYXJvdXNlbCAub3dsLXdyYXBwZXItb3V0ZXIge1xyXG4gICAgb3ZlcmZsb3c6IGluaXRpYWw7XHJcbn1cclxuXHJcbi5iZ19pbWcge1xyXG5cclxufVxyXG5cclxuLmJnX2ltZy5iZ19pbWdfMSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvc2xpZGUxLmpwZycpO1xyXG59XHJcblxyXG4uYmdfaW1nLmJnX2ltZ18yIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9zbGlkZTIuanBnJyk7XHJcbn1cclxuXHJcbi5iZ19pbWcuYmdfaW1nXzMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi9hc3NldHMvaW1nL3NsaWRlMy5qcGcnKTtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9vdmVyYWxsX2Jhbm5lci5qcGcnKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5jYXJvdXNlbC1pbm5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAyNDFweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9ydGZvbGlvIC5pdGVtcyAuYm94IHtcclxuICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgIH1cclxuXHJcbiAgICAuY2Fyb3VzZWwtaW5uZXIgLmNhcm91c2VsLWl0ZW0gLmNhcm91c2VsLWNhcHRpb24gaDMge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAucG9ydGZvbGlvIC5pdGVtcyAuYm94IC5pbm5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IFxyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8gLml0ZW1zIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBvcnRmb2xpbyAuaXRlbXMgLmJveCAuaW5uZXIgaW1nIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"carousel-item active\" (click)=\"goToShopPage()\">\r\n      <img class=\"d-block w-100\" src=\"assets/img/slide1.jpg\" alt=\"First slide\">\r\n      <div class=\"carousel-caption\">\r\n          <!-- <h3>Votre source de motivation est l’ingrédient qui peut faire toute la différence</h3> -->\r\n          <!-- <p>LA is always so much fun!</p> -->\r\n          <h3> Le Marché De Garlande </h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"carousel-item\" (click)=\"goToShopPage()\">\r\n      <img class=\"d-block w-100\" src=\"assets/img/slide2.jpg\" alt=\"Second slide\">\r\n      <div class=\"carousel-caption\">\r\n          <!-- <h3>Votre source de motivation est l’ingrédient qui peut faire toute la différence</h3> -->\r\n          <!-- <p>LA is always so much fun!</p> -->\r\n          <h3> Le Marché De Garlande </h3>\r\n        </div>\r\n    </div>\r\n    <div class=\"carousel-item\" (click)=\"goToShopPage()\">\r\n      <img class=\"d-block w-100\" src=\"assets/img/slide3.jpg\" alt=\"Third slide\">\r\n      <div class=\"carousel-caption\">\r\n          <!-- <h3>Votre source de motivation est l’ingrédient qui peut faire toute la différence</h3> -->\r\n          <!-- <p>LA is always so much fun!</p> -->\r\n          <h3> Le Marché De Garlande </h3>\r\n        </div>\r\n    </div>\r\n  </div>\r\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\r\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\r\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n\r\n<div class='container-fluid custom-owl-carousel'>\r\n<owl-carousel [options]=\"SlideOptions\" [items]=\"Images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\r\n  <div class=\"item\" (click)=\"goToShopPage()\" *ngFor=\"let item of products\" style=\"text-align:center;\">\r\n    <div style=\"align-content: center; cursor: pointer;\">\r\n        <img style=\"height: 300px;width:300px\"src={{item.img}}/>\r\n        <h4> {{item.proName}} </h4>\r\n    </div>\r\n  </div>\r\n</owl-carousel>\r\n</div>\r\n\r\n<!-- Featured Products -->\r\n<section class=\"portfolio\">\r\n <div class=\"container\">\r\n     <div class=\"heading\">\r\n         <h1> Featured Product </h1>\r\n     </div>\r\n     <div class=\"filter-btn\">\r\n        <ul id=\"buttons\">\r\n            <li [ngClass]=\"{'active': istopeValue === 'all'}\" data-target=\"all\" value=\"all\" (click)=\"selectIsotop($event)\">All</li>\r\n            <li [ngClass]=\"{'active': istopeValue === 'fruits'}\" data-target=\"fruits\" value=\"fruits\" (click)=\"selectIsotop($event)\">Fruits</li>\r\n          <li [ngClass]=\"{'active': istopeValue === 'vegetables'}\" data-target=\"vegetables\" value=\"vegetables\" (click)=\"selectIsotop($event)\">Vegetables</li> \r\n        </ul>\r\n     </div>\r\n     <div class=\"items\">\r\n        <div class=\"box\" data-id=\"fruits\">\r\n           <div class=\"inner\" (click)=\"goToShopPage()\">\r\n              <img src=\"assets/img/products_images/fruits/cirtus/orri.png\" alt=\"portfolio\" />\r\n           </div>\r\n        </div>\r\n        <div class=\"box\" data-id=\"vegetables\">\r\n          <div class=\"inner\" (click)=\"goToShopPage()\">\r\n             <img src=\"assets/img/products_images/vegetables/fruit_vegetables/cherry_tomato.png\" alt=\"portfolio\" />\r\n          </div>\r\n       </div>\r\n        <div class=\"box\" data-id=\"fruits\">\r\n           <div class=\"inner\">\r\n              <img src=\"assets/img/products_images/fruits/red_fruits/blueberries.png\" alt=\"portfolio\" />\r\n           </div>\r\n        </div>\r\n      <div class=\"box\" data-id=\"vegetables\">\r\n          <div class=\"inner\" (click)=\"goToShopPage()\">\r\n             <img src=\"assets/img/products_images/vegetables/potatoes/yam.png\" alt=\"portfolio\" />\r\n          </div>\r\n      </div>\r\n        <div class=\"box\" data-id=\"fruits\">\r\n           <div class=\"inner\" (click)=\"goToShopPage()\">\r\n              <img src=\"assets/img/products_images/fruits/red_fruits/gooseberry.png\" alt=\"portfolio\" />\r\n           </div>\r\n        </div>\r\n      <div class=\"box\" data-id=\"vegetables\">\r\n          <div class=\"inner\" (click)=\"goToShopPage()\">\r\n               <img src=\"assets/img/products_images/vegetables/herbs/mint.png\" alt=\"portfolio\" />\r\n          </div>\r\n      </div>\r\n        <div class=\"box\" data-id=\"fruits\">\r\n           <div class=\"inner\" (click)=\"goToShopPage()\">\r\n              <img src=\"assets/img/products_images/fruits/red_fruits/cherry_red.png\" alt=\"portfolio\" />\r\n           </div>\r\n        </div>\r\n       <div class=\"box\" data-id=\"vegetables\">\r\n        <div class=\"inner\" (click)=\"goToShopPage()\">\r\n            <img src=\"assets/img/products_images/vegetables/root_vegetables/pink_radish.png\" alt=\"portfolio\" />\r\n        </div>\r\n      </div>    \r\n        \r\n      \r\n     \r\n     </div>\r\n </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var HomeComponent = /** @class */ (function () {
    // CarouselOptions = { items: 3, dots: true, nav: true };
    function HomeComponent(router) {
        this.router = router;
        this.Images = ['assets/img/product/categories/cat-1.jpg',
            'assets/img/product/categories/cat-2.jpg',
            'assets/img/product/categories/cat-3.jpg',
            'assets/img/product/categories/cat-4.jpg',
            'assets/img/product/categories/cat-5.jpg'];
        this.products = [
            {
                proName: 'Royal Gala',
                img: 'assets/img/products_images/fruits/apple/apple_gala.png'
            },
            {
                proName: 'Dried Fruits',
                img: 'assets/img/products_images/vegetables/fruit_vegetables/round_tomato.png'
            },
            {
                proName: 'Mandarine',
                img: 'assets/img/products_images/fruits/cirtus/mandarine.png'
            },
            {
                proName: 'Rattu du tuquet',
                img: 'assets/img/products_images/vegetables/potatoes/rattu_du_tuquet.png'
            },
            {
                proName: 'Banane bio',
                img: 'assets/img/products_images/fruits/other_fruits/banana.png'
            },
            {
                proName: 'Oignons Rouge',
                img: 'assets/img/products_images/vegetables/onions_garlic/red_onion.png'
            },
            {
                proName: 'Pasteque',
                img: 'assets/img/products_images/fruits/other_fruits/watermelon.png'
            },
            {
                proName: 'Carotte',
                img: 'assets/img/products_images/vegetables/root_vegetables/carrot.png'
            }
        ];
        this.SlideOptions = { items: 4, dots: true, nav: true, navigation: true };
        this.istopeValue = 'all';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.selectIsotop = function (event) {
        this.istopeValue = event.target.dataset.target;
        var items = document.querySelector('.items').children;
        var target = event.target.dataset.target;
        for (var k = 0; k < items.length; k++) {
            items[k]['style'].opacity = '0';
            items[k]['style'].transform = 'scale(0)';
            items[k]['style'].display = 'none';
            // setTimeout(function() {
            // // items[k]['style'].display='none';
            //   // items[k]['style'].height='0';
            //   // items[k]['style'].width='0';
            //   items[k]['style'].padding='0';
            //   items[k]['style'].visibility='hidden';
            // }, 1000);
            if (items[k].getAttribute('data-id') === target) {
                items[k]['style'].opacity = '1';
                items[k]['style'].transform = 'scale(1)';
                items[k]['style'].display = 'block';
                // setTimeout(function() {
                // // items[k]['style'].display='inline-block';
                //   // items[k]['style'].height='25%';
                //   // items[k]['style'].width='25%';
                //   items[k]['style'].padding='15px';
                //   items[k]['style'].visibility='visible';
                // }, 1000)
            }
            if (target == 'all') {
                items[k]['style'].opacity = '1';
                items[k]['style'].transform = 'scale(1)';
                items[k]['style'].display = 'block';
                // setTimeout(function() {
                // // items[k]['style'].display='inline-block';
                // // items[k]['style'].height='25%';
                // // items[k]['style'].width='25%';
                // items[k]['style'].padding='15px';
                // items[k]['style'].visibility='visible';
                // }, 1000)
            }
        }
    };
    HomeComponent.prototype.goToShopPage = function () {
        this.router.navigate(['/products']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/liked-shopped/liked-shopped.component.css":
/*!***********************************************************!*\
  !*** ./src/app/liked-shopped/liked-shopped.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".outer_table_wrapper {\r\n    padding-top: 1px;\r\n}\r\n\r\n.table_wrapper {\r\n    width: 90%;\r\n    margin: 20px auto;\r\n    padding-top: 0px;\r\n    overflow-x: auto;\r\n    height: calc(100vh - 240px);    \r\n}\r\n\r\n.prod_container {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    justify-content: space-between;\r\n}\r\n\r\n.table_wrapper table {\r\n    width: 100%;\r\n}\r\n\r\n.table_icon {\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.table_img_wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-shadow: 0 1px 2px 1px #333;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table_img_wrapper img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table_wrapper table tr th {\r\n    padding: 10px;\r\n    background-color: #f06f30;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border: 1px solid #f06f30;\r\n}\r\n\r\n.table_wrapper table tr td {\r\n    padding: 15px 10px;\r\n    border-bottom: 1px solid #333;\r\n\r\n}\r\n\r\n.table_wrapper table tr td:first-child {\r\n    border-left: 1px solid #333;\r\n}\r\n\r\n.table_wrapper table tr td:last-child {\r\n    border-right: 1px solid #333;\r\n}\r\n\r\n.total_row h1 {\r\n    font-size: 34px;\r\n}\r\n\r\n.total_row h2 {\r\n    font-size: 22px;\r\n    text-align: right;\r\n}\r\n\r\n.no_data {\r\n    padding: 20px 10px;\r\n    font-size: 22px;\r\n    border: 1px solid #333;\r\n}\r\n\r\n.order_btn {\r\n    border-color: #7eac39;\r\n    color: #fff;\r\n    box-shadow: 0 0 40px 40px #7eac39 inset, 0 0 0 0 #7eac39;\r\n    transition: all 150ms ease-in-out;\r\n    box-sizing: border-box;\r\n    -webkit-appearance: none;\r\n    -moz-appearance: none;\r\n    appearance: none;\r\n    background-color: transparent;\r\n    border-radius: 0.6em;\r\n    cursor: pointer;\r\n    display: flex;\r\n    align-self: center;\r\n    font-size: 14px;\r\n    font-weight: 400;\r\n    line-height: 1;\r\n    margin: 20px;\r\n    padding: 1.2em 2.8em;\r\n    text-decoration: none;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight: 700;\r\n}\r\n\r\n.order_btn:hover {\r\n    box-shadow: 0 0 10px 0 #7eac39 inset, 0 0 10px 4px #7eac39;\r\n    color: #7eac39;\r\n}\r\n\r\n.total-price {\r\n    text-align: center !important;\r\n    font-weight: bold;\r\n    font-size: 27px;\r\n}\r\n\r\n.total-button {\r\n    margin: 20px 40px auto;\r\n    float: right;\r\n}\r\n\r\n.total-text {\r\n    background-color: transparent !important;\r\n    font-size: 16px !important;\r\n}\r\n\r\n.shop_box {\r\n    display: flex;\r\n    border: 1px solid #ccc;\r\n    margin-bottom: 15px;\r\n    justify-content: space-between;\r\n    width: 48%;\r\n    height: auto;\r\n    max-height: 164px;\r\n}\r\n\r\n.shop_box > img {\r\n    width: 25%;\r\n    border-right: 1px solid #ccc;\r\n}\r\n\r\n.shop_box .box_content {\r\n    width: 100%;\r\n    /* padding: 10px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shop_box .func_wrapper {\r\n    width: 40%;\r\n    border-left: 1px solid #ccc;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n}\r\n\r\n.shop_box .box_content > div {\r\n    padding: 5px 10px;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid #ccc;\r\n}\r\n\r\n.shop_box .box_content > h2,\r\n.shop_box .box_content > h5 {\r\n    padding: 5px 10px;\r\n}\r\n\r\n.shop_box .box_content > h2 {\r\n    font-size: 24px;\r\n}\r\n\r\n.shop_box .func_wrapper > div {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    padding: 10px;\r\n}\r\n\r\n.shop_box .func_wrapper button {\r\n\r\n}\r\n\r\n.shop_box .box_content button {\r\n    width: 100%;\r\n    font-size: 12px;\r\n    background-color: #7eac39;\r\n    color: #fff;\r\n    border: transparent;\r\n    padding: 7px 10px;\r\n    position: relative;\r\n    transition-duration: 0.3s;\r\n    transform: perspective(1px) translateZ(0);\r\n}\r\n\r\n.shop_box .box_content button:before {\r\n    content: '';\r\n    background-color: #f06f30;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    z-index: -1;\r\n    transform: scaleX(0);\r\n    transform-origin: 50%;\r\n    transition-property: transform;\r\n    transition-duration: 0.3s;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n.shop_box .box_content button:hover:before {\r\n    transform: scaleX(1);\r\n}\r\n\r\n.shop_box .box_content > div > span.quant_measure {\r\n    font-size: 12px;\r\n}\r\n\r\n.min_plu_icon {\r\n    display: inline-block;\r\n}\r\n\r\n.min_plu_icon.plus {\r\n\r\n}\r\n\r\n.min_plu_icon.minus {\r\n\r\n}\r\n\r\n.min_plu_icon .fa {\r\n    padding: 10px;\r\n    border-radius: 5px;\r\n    transition: 0.5s ease-in;\r\n    position: relative;\r\n    overflow: hidden;\r\n    cursor: pointer;\r\n    /* color: #fff; */\r\n}\r\n\r\n.min_plu_icon .fa.fa-minus {\r\n    /* background-color: #ee3f2a; */\r\n    border: 2px solid #ee3f2a;\r\n    color: #ee3f2a;\r\n}\r\n\r\n.min_plu_icon .fa.fa-plus {\r\n    /* background-color: #7eac39; */\r\n    border: 2px solid #7eac39;\r\n    color: #7eac39;\r\n}\r\n\r\n.min_plu_icon .fa:before {\r\n    position: relative;\r\n    z-index: 2;\r\n}\r\n\r\n.min_plu_icon:hover .fa:before {\r\n    transition: 0.5s ease-in;\r\n    transform: scale(1.5);\r\n    color: #fff;\r\n}\r\n\r\n.min_plu_icon .fa:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 120%;\r\n    height: 120%;\r\n    transform: rotate(45deg);\r\n    left: -110%;\r\n    top: 90%;\r\n    z-index: 1;\r\n}\r\n\r\n.min_plu_icon:hover .fa:after {\r\n    -webkit-animation: aaa 0.7s 1;\r\n            animation: aaa 0.7s 1;\r\n    top: -10%;\r\n    left: -10%;\r\n}\r\n\r\n.min_plu_icon:hover .fa.fa-plus:after {\r\n    background-color: #7eac39;\r\n}\r\n\r\n.min_plu_icon:hover .fa.fa-minus:after {\r\n    background-color: #ee3f2a;\r\n}\r\n\r\n.min_plu_icon:hover .fa {\r\n    color: #fff;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n    .shop_box .box_content > h2 {\r\n        font-size: 20px;\r\n    }\r\n    .shop_box {\r\n        width: 100%;\r\n    }\r\n}\r\n\r\n@-webkit-keyframes aaa {\r\n    0% {\r\n        \r\n        top: -110%;\r\n        left: 90%;\r\n\r\n    } 50% {\r\n\r\n        top: 10%;\r\n        left: -30%;\r\n\r\n    } 100% {\r\n\r\n        top: -10%;\r\n        left: -10%;\r\n\r\n    }\r\n}\r\n\r\n@keyframes aaa {\r\n    0% {\r\n        \r\n        top: -110%;\r\n        left: 90%;\r\n\r\n    } 50% {\r\n\r\n        top: 10%;\r\n        left: -30%;\r\n\r\n    } 100% {\r\n\r\n        top: -10%;\r\n        left: -10%;\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZWQtc2hvcHBlZC9saWtlZC1zaG9wcGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiw2QkFBNkI7O0FBRWpDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsd0RBQXdEO0lBRXhELGlDQUFpQztJQUNqQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLG9CQUFvQjtJQUNwQixlQUFlO0lBRWYsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxZQUFZO0lBQ1osb0JBQW9CO0lBQ3BCLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLHFDQUFxQztJQUNyQyxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSwwREFBMEQ7SUFDMUQsY0FBYztBQUNsQjs7QUFDQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCOztBQUNBO0lBQ0ksd0NBQXdDO0lBQ3hDLDBCQUEwQjtBQUM5Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixVQUFVO0lBQ1YsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFVBQVU7SUFDViw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLDZCQUE2QjtBQUNqQzs7QUFFQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixhQUFhO0FBQ2pCOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUVYLG9CQUFvQjtJQUVwQixxQkFBcUI7SUFFckIsOEJBQThCO0lBRTlCLHlCQUF5QjtJQUV6QixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLHlCQUF5QjtJQUN6QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4QixxQkFBcUI7SUFDckIsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsUUFBUTtJQUNSLFVBQVU7QUFDZDs7QUFFQTtJQUNJLDZCQUFxQjtZQUFyQixxQkFBcUI7SUFDckIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0o7O0FBRUE7SUFDSTs7UUFFSSxVQUFVO1FBQ1YsU0FBUzs7SUFFYixFQUFFOztRQUVFLFFBQVE7UUFDUixVQUFVOztJQUVkLEVBQUU7O1FBRUUsU0FBUztRQUNULFVBQVU7O0lBRWQ7QUFDSjs7QUFqQkE7SUFDSTs7UUFFSSxVQUFVO1FBQ1YsU0FBUzs7SUFFYixFQUFFOztRQUVFLFFBQVE7UUFDUixVQUFVOztJQUVkLEVBQUU7O1FBRUUsU0FBUztRQUNULFVBQVU7O0lBRWQ7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2xpa2VkLXNob3BwZWQvbGlrZWQtc2hvcHBlZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm91dGVyX3RhYmxlX3dyYXBwZXIge1xyXG4gICAgcGFkZGluZy10b3A6IDFweDtcclxufVxyXG5cclxuLnRhYmxlX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNDBweCk7ICAgIFxyXG59XHJcblxyXG4ucHJvZF9jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnRhYmxlX3dyYXBwZXIgdGFibGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi50YWJsZV9pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGFibGVfaW1nX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMXB4IDJweCAxcHggIzMzMztcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRhYmxlX2ltZ193cmFwcGVyIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnRhYmxlX3dyYXBwZXIgdGFibGUgdHIgdGgge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMDZmMzA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMDZmMzA7XHJcbn1cclxuXHJcbi50YWJsZV93cmFwcGVyIHRhYmxlIHRyIHRkIHtcclxuICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzMzO1xyXG5cclxufVxyXG5cclxuLnRhYmxlX3dyYXBwZXIgdGFibGUgdHIgdGQ6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMzMzO1xyXG59XHJcblxyXG4udGFibGVfd3JhcHBlciB0YWJsZSB0ciB0ZDpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi50b3RhbF9yb3cgaDEge1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG59XHJcblxyXG4udG90YWxfcm93IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4ubm9fZGF0YSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMzMzO1xyXG59XHJcblxyXG4ub3JkZXJfYnRuIHtcclxuICAgIGJvcmRlci1jb2xvcjogIzdlYWMzOTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDQwcHggNDBweCAjN2VhYzM5IGluc2V0LCAwIDAgMCAwICM3ZWFjMzk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAxNTBtcyBlYXNlLWluLW91dDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjZlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIG1hcmdpbjogMjBweDtcclxuICAgIHBhZGRpbmc6IDEuMmVtIDIuOGVtO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcbi5vcmRlcl9idG46aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCAjN2VhYzM5IGluc2V0LCAwIDAgMTBweCA0cHggIzdlYWMzOTtcclxuICAgIGNvbG9yOiAjN2VhYzM5O1xyXG59XHJcbi50b3RhbC1wcmljZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi50b3RhbC1idXR0b24ge1xyXG4gICAgbWFyZ2luOiAyMHB4IDQwcHggYXV0bztcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG4udG90YWwtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zaG9wX2JveCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWF4LWhlaWdodDogMTY0cHg7XHJcbn1cclxuXHJcbi5zaG9wX2JveCA+IGltZyB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2NjYztcclxufVxyXG5cclxuLnNob3BfYm94IC5ib3hfY29udGVudCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC8qIHBhZGRpbmc6IDEwcHg7ICovXHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLnNob3BfYm94IC5mdW5jX3dyYXBwZXIge1xyXG4gICAgd2lkdGg6IDQwJTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uc2hvcF9ib3ggLmJveF9jb250ZW50ID4gZGl2IHtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG4uc2hvcF9ib3ggLmJveF9jb250ZW50ID4gaDIsXHJcbi5zaG9wX2JveCAuYm94X2NvbnRlbnQgPiBoNSB7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLnNob3BfYm94IC5ib3hfY29udGVudCA+IGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnNob3BfYm94IC5mdW5jX3dyYXBwZXIgPiBkaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbi5zaG9wX2JveCAuZnVuY193cmFwcGVyIGJ1dHRvbiB7XHJcblxyXG59XHJcblxyXG4uc2hvcF9ib3ggLmJveF9jb250ZW50IGJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWFjMzk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDFweCkgdHJhbnNsYXRlWigwKTtcclxufVxyXG5cclxuLnNob3BfYm94IC5ib3hfY29udGVudCBidXR0b246YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNmYzMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHotaW5kZXg6IC0xO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgwKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4zcztcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuM3M7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcclxufVxyXG5cclxuLnNob3BfYm94IC5ib3hfY29udGVudCBidXR0b246aG92ZXI6YmVmb3JlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xyXG59XHJcblxyXG4uc2hvcF9ib3ggLmJveF9jb250ZW50ID4gZGl2ID4gc3Bhbi5xdWFudF9tZWFzdXJlIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLm1pbl9wbHVfaWNvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb24ucGx1cyB7XHJcblxyXG59XHJcblxyXG4ubWluX3BsdV9pY29uLm1pbnVzIHtcclxuXHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb24gLmZhIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgLyogY29sb3I6ICNmZmY7ICovXHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb24gLmZhLmZhLW1pbnVzIHtcclxuICAgIC8qIGJhY2tncm91bmQtY29sb3I6ICNlZTNmMmE7ICovXHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZWUzZjJhO1xyXG4gICAgY29sb3I6ICNlZTNmMmE7XHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb24gLmZhLmZhLXBsdXMge1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogIzdlYWMzOTsgKi9cclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM3ZWFjMzk7XHJcbiAgICBjb2xvcjogIzdlYWMzOTtcclxufVxyXG5cclxuLm1pbl9wbHVfaWNvbiAuZmE6YmVmb3JlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb246aG92ZXIgLmZhOmJlZm9yZSB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzIGVhc2UtaW47XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLm1pbl9wbHVfaWNvbiAuZmE6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMjAlO1xyXG4gICAgaGVpZ2h0OiAxMjAlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gICAgbGVmdDogLTExMCU7XHJcbiAgICB0b3A6IDkwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb246aG92ZXIgLmZhOmFmdGVyIHtcclxuICAgIGFuaW1hdGlvbjogYWFhIDAuN3MgMTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbi5taW5fcGx1X2ljb246aG92ZXIgLmZhLmZhLXBsdXM6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYWMzOTtcclxufVxyXG5cclxuLm1pbl9wbHVfaWNvbjpob3ZlciAuZmEuZmEtbWludXM6YWZ0ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlM2YyYTtcclxufVxyXG5cclxuLm1pbl9wbHVfaWNvbjpob3ZlciAuZmEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLnNob3BfYm94IC5ib3hfY29udGVudCA+IGgyIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuc2hvcF9ib3gge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFhYSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdG9wOiAtMTEwJTtcclxuICAgICAgICBsZWZ0OiA5MCU7XHJcblxyXG4gICAgfSA1MCUge1xyXG5cclxuICAgICAgICB0b3A6IDEwJTtcclxuICAgICAgICBsZWZ0OiAtMzAlO1xyXG5cclxuICAgIH0gMTAwJSB7XHJcblxyXG4gICAgICAgIHRvcDogLTEwJTtcclxuICAgICAgICBsZWZ0OiAtMTAlO1xyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/liked-shopped/liked-shopped.component.html":
/*!************************************************************!*\
  !*** ./src/app/liked-shopped/liked-shopped.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer_table_wrapper\">\r\n  <div class=\"table_wrapper\" [ngClass]=\"{'prod_container': shoppedArr.length > 0}\">\r\n      <!-- <table>\r\n          <tr> \r\n              <th> S No </th>\r\n              <th class=\"text-center\"> Product Image </th>\r\n              <th> Product Name </th>\r\n              <th> Price </th>\r\n              <th> Quantity </th>\r\n              <th class=\"text-center\"> Action </th>\r\n          </tr>\r\n          <tr *ngFor=\"let item of shoppedArr;let i = index;\"> \r\n              <td> {{i+1}} </td>\r\n              <td>  \r\n                <div class=\"table_img_wrapper text-center m-auto\">\r\n                    <img [src]=\"'assets/'+ item.image_url\">\r\n                </div>\r\n              </td>\r\n              <td>  \r\n                {{item.product_name}}                \r\n              </td>\r\n              <td> &euro; {{item.chagedPrice}} </td>\r\n              <td> {{item.changedQuantity}} {{item.measure_scale}}  </td>\r\n              <td>  \r\n                <div class=\"d-flex text-center justify-content-center\">\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/minus.svg\" (click)=\"incDecProd('dec', item.product_id)\" />\r\n                  <img class=\"table_icon ml-3\" src=\"assets/img/icons/plus.svg\" (click)=\"incDecProd('inc', item.product_id)\" />\r\n                </div>\r\n              </td>\r\n          </tr>\r\n      </table> -->\r\n\r\n      <div class=\"shop_box\" *ngFor=\"let item of shoppedArr;\">\r\n          <img [src]=\"'assets/'+ item.image_url\" />\r\n          <div class=\"box_content\">\r\n              <div>\r\n                  <!-- <img class=\"table_icon\" src=\"assets/img/icons/minus.svg\" (click)=\"incDecProd('dec', item.product_id)\" /> -->\r\n                  <span class=\"min_plu_icon minus\" (click)=\"incDecProd('dec', item.product_id)\"> \r\n                    <i class=\"fa fa-minus\"></i> \r\n                  </span>\r\n                  <span class=\"quant_measure\"> {{item.changedQuantity}} {{item.measure_scale}} </span>\r\n                  <!-- <img class=\"table_icon ml-3\" src=\"assets/img/icons/plus.svg\" (click)=\"incDecProd('inc', item.product_id)\" /> -->\r\n                  <span class=\"min_plu_icon plus\" (click)=\"incDecProd('inc', item.product_id)\"> \r\n                    <i class=\"fa fa-plus\"></i> \r\n                  </span>\r\n              </div>\r\n              <h2> {{item.product_name}} </h2>\r\n              <h5 class=\"text-right\"> &euro; {{item.chagedPrice}} </h5>\r\n              <button (click)=\"removeProduct(item.product_id)\"> \r\n                  Supprimer le produit\r\n              </button>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"text-center no_data\" *ngIf=\"!shoppedArr || shoppedArr.length === 0\"> \r\n        No Data Available\r\n      </div>\r\n\r\n  </div>\r\n\r\n  <div *ngIf=\"shoppedArr.length > 0\" class=\"total_row total_width d-flex align-items-center justify-content-between total-button\">\r\n      <div>\r\n      <h2 class=\"total-price\">\r\n        <code class=\"total-text\">Prix total approximatif</code> \r\n        <code>&euro; {{totalPrice}}</code> \r\n      </h2>\r\n      <button class=\"btn order_btn\" (click)=\"goContactPage()\">Endroit commander</button>\r\n\r\n      </div>\r\n  </div>\r\n  \r\n  <!-- <div class=\"table_wrapper\">\r\n      <table>\r\n          <tr> \r\n              <th> S No </th>\r\n              <th> Product Image </th>\r\n              <th> Product Name </th>\r\n              <th> Price </th>\r\n              <th> Quantity </th>\r\n              <th> Action </th>\r\n          </tr>\r\n          <tr> \r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  \r\n                <div class=\"d-flex\">\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/minus.svg\" />\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/plus.svg\" />\r\n                </div>\r\n              </td>\r\n          </tr>\r\n      </table>\r\n  </div> -->\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/liked-shopped/liked-shopped.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/liked-shopped/liked-shopped.component.ts ***!
  \**********************************************************/
/*! exports provided: LikedShoppedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LikedShoppedComponent", function() { return LikedShoppedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");




var LikedShoppedComponent = /** @class */ (function () {
    function LikedShoppedComponent(route, router, apiService) {
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.likedArr = [];
        this.shoppedArr = [];
    }
    LikedShoppedComponent.prototype.ngOnInit = function () {
        this.readParam();
        this.getFromLocal();
    };
    LikedShoppedComponent.prototype.readParam = function () {
        var _this = this;
        console.log(this.route, this.route.params['_value'].value);
        this.route.queryParams.subscribe(function (params) {
            console.log(params);
            _this.paramValue = params['value'];
        });
        this.paramValue = this.route.snapshot.paramMap.get('value');
        console.log(this.paramValue);
    };
    LikedShoppedComponent.prototype.getFromLocal = function () {
        console.log(JSON.parse(localStorage.getItem(this.paramValue)), this.paramValue);
        if (localStorage.getItem(this.paramValue) !== null) {
            if (this.paramValue === 'liked') {
                this.likedArr = JSON.parse(localStorage.getItem(this.paramValue));
                console.log(this.likedArr);
            }
            else if (this.paramValue === 'shopped') {
                this.shoppedArr = JSON.parse(localStorage.getItem(this.paramValue)).map(function (item) {
                    var obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                    if (!obj.hasOwnProperty('chagedPrice') && !obj.hasOwnProperty('changedQuantity')) {
                        obj.chagedPrice = item.price;
                        obj.changedQuantity = item.quantity;
                    }
                    return obj;
                });
                this.totalPrice = this.shoppedArr.reduce(function (acc, curr) {
                    return acc + parseFloat(curr.chagedPrice);
                }, 0);
                this.totalPrice = this.totalPrice.toFixed(2);
                console.log(this.shoppedArr, this.totalPrice);
                localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
            }
        }
    };
    LikedShoppedComponent.prototype.incDecProd = function (value, id) {
        if (value === 'inc') {
            this.shoppedArr = this.shoppedArr.map(function (item) {
                var obj;
                if (id === item.product_id) {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                    obj.chagedPrice = Number(parseFloat(obj.chagedPrice).toFixed(2)) + Number(parseFloat(obj.price).toFixed(2));
                    obj.changedQuantity = parseInt(obj.changedQuantity, 10) + parseInt(obj.quantity, 10);
                }
                else {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                }
                return obj;
            });
        }
        else if (value === 'dec') {
            this.shoppedArr = this.shoppedArr.map(function (item) {
                var obj;
                if (id === item.product_id) {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                    if (Number(parseInt(obj.chagedPrice, 10)) > Number(parseFloat(obj.price).toFixed(2))) {
                        obj.chagedPrice = Number(parseFloat(obj.chagedPrice).toFixed(2)) - Number(parseFloat(obj.price).toFixed(2));
                    }
                    if (parseInt(obj.changedQuantity, 10) > parseInt(obj.quantity, 10)) {
                        obj.changedQuantity = parseInt(obj.changedQuantity, 10) - parseInt(obj.quantity, 10);
                    }
                }
                else {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item);
                }
                return obj;
            });
        }
        this.totalPrice = this.shoppedArr.reduce(function (acc, curr) {
            return acc + parseFloat(curr.chagedPrice);
        }, 0);
        this.totalPrice = this.totalPrice.toFixed(2);
        localStorage.setItem('totalPrice', JSON.stringify(this.totalPrice));
        localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
    };
    LikedShoppedComponent.prototype.goContactPage = function () {
        this.router.navigate(['contact']);
    };
    LikedShoppedComponent.prototype.removeProduct = function (id) {
        var index = this.shoppedArr.findIndex(function (item) { return item.product_id === id; });
        this.shoppedArr.splice(index, 1);
        localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
        this.apiService.sendShopped(JSON.parse(localStorage.getItem('shopped')));
        console.log(this.shoppedArr);
        console.log(index);
    };
    LikedShoppedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liked-shopped',
            template: __webpack_require__(/*! ./liked-shopped.component.html */ "./src/app/liked-shopped/liked-shopped.component.html"),
            styles: [__webpack_require__(/*! ./liked-shopped.component.css */ "./src/app/liked-shopped/liked-shopped.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _api_service_service__WEBPACK_IMPORTED_MODULE_3__["ApiServiceService"]])
    ], LikedShoppedComponent);
    return LikedShoppedComponent;
}());



/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.css":
/*!***********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__logo a {\r\n    width: 65px;\r\n}\r\n\r\n.humberger__open img {\r\n    width: 20px;\r\n}\r\n\r\n.visibility_visible {\r\n    visibility: visible;\r\n}\r\n\r\n.visible_menu {\r\n    left: 0 !important;\r\n    opacity: 1 !important;\r\n}\r\n\r\n.nav_icon {\r\n    width: 100px;\r\n    max-width: 25px;\r\n}\r\n\r\nli {\r\n    cursor: pointer;\r\n}\r\n\r\n.number-count {\r\n    position: absolute;\r\n    right: -12px;\r\n    top: -12px;\r\n    background-color: #ff1b00;\r\n    color: #fff;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-size: 10px;\r\n}\r\n\r\nheader.header {\r\n    position: fixed;\r\n    /* width: calc(100vw - 15px); */\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #fff;\r\n    z-index: 2;\r\n    box-shadow: 0 0px 8px 1px #333;\r\n}\r\n\r\n.humberger__menu__nav ul li a {\r\n    position: relative;\r\n    display: inline-block;\r\n    padding-bottom: 5px;\r\n    border-bottom: 3px solid transparent;\r\n}\r\n\r\n.humberger__menu__nav ul li.active a {\r\n    border-bottom: 3px solid #7dac39;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .humberger__open {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border-radius: 4px;\r\n    }   \r\n    .humberger__menu__logo {\r\n        width: 100px;\r\n        margin: 0 auto; \r\n    }\r\n    .humberger__menu__nav ul {\r\n        margin-top: 10px;\r\n    }\r\n    .humberger__menu__nav ul li {\r\n        font-size: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .humberger__menu__nav ul li a {\r\n        color: #333;\r\n    }\r\n    header.header {\r\n        width: 100vw;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsK0JBQStCO0lBQy9CLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLHNCQUFzQjtJQUN0QixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixrQkFBa0I7SUFDdEI7SUFDQTtRQUNJLFlBQVk7UUFDWixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksWUFBWTtJQUNoQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyX19sb2dvIGEge1xyXG4gICAgd2lkdGg6IDY1cHg7XHJcbn1cclxuXHJcbi5odW1iZXJnZXJfX29wZW4gaW1nIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4udmlzaWJpbGl0eV92aXNpYmxlIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbi52aXNpYmxlX21lbnUge1xyXG4gICAgbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2X2ljb24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgbWF4LXdpZHRoOiAyNXB4O1xyXG59XHJcblxyXG5saSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5udW1iZXItY291bnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IC0xMnB4O1xyXG4gICAgdG9wOiAtMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjFiMDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbmhlYWRlci5oZWFkZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLyogd2lkdGg6IGNhbGMoMTAwdncgLSAxNXB4KTsgKi9cclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgYm94LXNoYWRvdzogMCAwcHggOHB4IDFweCAjMzMzO1xyXG59XHJcblxyXG4uaHVtYmVyZ2VyX19tZW51X19uYXYgdWwgbGkgYSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG59XHJcblxyXG4uaHVtYmVyZ2VyX19tZW51X19uYXYgdWwgbGkuYWN0aXZlIGEge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICM3ZGFjMzk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5odW1iZXJnZXJfX29wZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICB9ICAgXHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19sb2dvIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87IFxyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fbmF2IHVsIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fbmF2IHVsIGxpIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICAgIC5odW1iZXJnZXJfX21lbnVfX25hdiB1bCBsaSBhIHtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgIH1cclxuICAgIGhlYWRlci5oZWFkZXIge1xyXG4gICAgICAgIHdpZHRoOiAxMDB2dztcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Humberger Begin -->\r\n <div class=\"humberger__menu__overlay\" [ngClass]=\"{'visibility_visible': openMenuParam}\" (click)=\"closeMobileMenu()\"></div>\r\n <div class=\"humberger__menu__wrapper\" [ngClass]=\"{'visible_menu': openMenuParam}\">\r\n     <div class=\"humberger__menu__logo\">\r\n         <a [routerLink]=\"['/home']\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\r\n     </div>\r\n     <nav class=\"humberger__menu__nav mobile-menu\" [ngClass]=\"{'d-block': openMenuParam}\">\r\n         <ul>\r\n             <li routerLinkActive=\"active\">\r\n                 <a [routerLink]=\"['/home']\" (click)=\"closeMobileMenu()\">Home</a>\r\n             </li>\r\n             <li routerLinkActive=\"active\">\r\n                 <a [routerLink]=\"['/products']\" (click)=\"closeMobileMenu()\">Shop</a>\r\n             </li>\r\n             <li routerLinkActive=\"active\" class=\"mb-5\">\r\n                 <a [routerLink]=\"['/contact']\" (click)=\"closeMobileMenu()\">Contact</a>\r\n             </li>\r\n             <li (click)=\"goToShopList('shopped')\" class=\"mb-5\"> \r\n                <div class=\"position-relative d-inline-block\">            \r\n                    <span *ngIf=\"shoppedLength\" class=\"number-count\"> {{shoppedLength}} </span>\r\n                    <img *ngIf=\"shopped?.length === 0 || !shopped\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-outline.svg\" />\r\n                    <img *ngIf=\"shopped?.length > 0\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-cart.svg\" />\r\n                </div>\r\n            </li>\r\n         </ul>\r\n         <h5>0953739158</h5>\r\n     </nav>\r\n     <div id=\"mobile-menu-wrap\"></div>\r\n     \r\n </div>\r\n <!-- Humberger End -->\r\n\r\n <!-- Header Section Begin -->\r\n <header class=\"header\">\r\n     <div class=\"container\">\r\n         <div class=\"d-flex align-items-center justify-content-between\">\r\n             <div class=\"col-lg-3\">\r\n                 <div class=\"header__logo\">\r\n                     <a [routerLink]=\"['/home']\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\r\n                 </div>\r\n             </div>\r\n             <div class=\"col-lg-6\">\r\n                 <nav class=\"header__menu\">\r\n                     <ul class=\"d-flex justify-content-end\">\r\n                         <li routerLinkActive=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\r\n                         <li routerLinkActive=\"active\"><a [routerLink]=\"['/products']\">Shop</a></li>\r\n                         <li class=\"position-relative\" (click)=\"goToShopList('shopped')\"> \r\n                            \r\n                                <span *ngIf=\"shoppedLength\" class=\"number-count\"> {{shoppedLength}} </span>\r\n                                <img *ngIf=\"shopped?.length === 0 || !shopped\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-outline.svg\" />\r\n                                <img *ngIf=\"shopped?.length > 0\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-cart.svg\" />\r\n                            \r\n                        </li>\r\n                     </ul>\r\n                 </nav>\r\n             </div>\r\n         </div>\r\n         <div class=\"humberger__open\" (click)=\"openMenu()\">\r\n             <img src=\"assets/img/icons/grey-open-menu.svg\" />\r\n         </div>\r\n     </div>\r\n </header>\r\n <!-- Header Section End -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.ts ***!
  \**********************************************/
/*! exports provided: NavBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavBarComponent", function() { return NavBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var NavBarComponent = /** @class */ (function () {
    function NavBarComponent(apiService, router) {
        var _this = this;
        this.apiService = apiService;
        this.router = router;
        this.openMenuParam = false;
        this.apiService.getLiked().subscribe(function (res) {
            console.log(res);
            _this.liked = res.liked;
            _this.likedLength = _this.liked.length;
        });
        this.apiService.getShopped().subscribe(function (res) {
            console.log(res);
            _this.shopped = res.shopped;
            _this.purchasedItem = res.shopped;
            _this.shoppedLength = _this.shopped.length;
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
        if (localStorage.getItem('liked') !== null) {
            this.liked = JSON.parse(localStorage.getItem('liked'));
            console.log(this.liked);
            this.likedLength = this.liked.length;
        }
        if (localStorage.getItem('shopped') !== null) {
            this.shopped = JSON.parse(localStorage.getItem('shopped'));
            console.log(this.shopped);
            this.shoppedLength = this.shopped.length;
        }
    };
    NavBarComponent.prototype.openMenu = function () {
        console.log('opening');
        this.openMenuParam = true;
    };
    NavBarComponent.prototype.closeMobileMenu = function () {
        this.openMenuParam = false;
    };
    NavBarComponent.prototype.goToShopList = function (value) {
        this.router.navigate(['/seleted-products/' + value]);
        this.closeMobileMenu();
    };
    NavBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nav-bar',
            template: __webpack_require__(/*! ./nav-bar.component.html */ "./src/app/nav-bar/nav-bar.component.html"),
            styles: [__webpack_require__(/*! ./nav-bar.component.css */ "./src/app/nav-bar/nav-bar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], NavBarComponent);
    return NavBarComponent;
}());



/***/ }),

/***/ "./src/app/product-list/product-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/product-list/product-list.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".breadcrumb-section.set-bg {\r\n    background-image: url('breadcrumb.jpg');\r\n}\r\n\r\n.product {\r\n    padding-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n.filter__item {\r\n    border-top: none;\r\n}\r\n\r\n.hero__categories__all:after {\r\n    display: none;\r\n}\r\n\r\n.product__item__pic {\r\n    background-color: transparent;\r\n    position: relative;\r\n    border: 1px solid #ccc;\r\n    border-radius: 0px;\r\n}\r\n\r\n.product__item__pic > h6,\r\n.product__item__pic > h5 {\r\n    position: absolute;\r\n    left: 0;\r\n    width: 100%;\r\n    padding: 5px;\r\n    text-align: center;\r\n    background-color: rgba(0,0,0,0.5);\r\n    color: #fff;\r\n}\r\n\r\n.product__item__pic > h6 {\r\n    top: 0;\r\n}\r\n\r\n.product__item__pic > h5 {\r\n    bottom: 0;\r\n}\r\n\r\n.product__item__pic > img.thumb_img {\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: all ease 0.5s;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    box-sizing: content-box;\r\n    border: 1px solid #333;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n\r\n    /* animation: pulse 2s infinite; */\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper.active {\r\n    background-color: #ee3f2a;\r\n    border: 1px solid #ee3f2a;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper:active,\r\n.product__item__pic .like_icon_wrapper:hover {\r\n    -webkit-animation: pulse 2s infinite;\r\n            animation: pulse 2s infinite;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper img.like_icon {\r\n    width: 20px;\r\n    \r\n}\r\n\r\n.product__item__pic__hover {\r\n    position: absolute;\r\n    left: 0;\r\n    /* top: 0; */\r\n    right: 0;\r\n    bottom: -100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n    z-index: 1;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n}\r\n\r\n.product__item:hover .product__item__pic .product__item__pic__hover {\r\n    bottom: 0;\r\n}\r\n\r\n.product__item__pic__hover li {\r\n    background-color: #333;\r\n    padding: 8px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.product__item__pic__hover li img {\r\n    width: 15px;\r\n}\r\n\r\n.product__item:hover .product__item__pic > img {\r\n    transition: all ease 0.5s;\r\n    /* transform: scale(1.5); */\r\n}\r\n\r\n.product__item__pic__hover li {\r\n    cursor: pointer;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.green_bg {\r\n    background-color: #7fad39 !important;\r\n    border: 1px solid #fff !important;\r\n}\r\n\r\n.down_arrow_mob {\r\n    display: none;\r\n}\r\n\r\n.load_more_btn {\r\n    display: block;\r\n    background-color: #7eac39;\r\n    font-size: 16px;\r\n    color: #fff;\r\n    padding: 10px 15px;\r\n    border-radius: 5px;\r\n    margin: auto;\r\n    border: 1px solid #7eac39;\r\n}\r\n\r\n.shop_btn {\r\n    position: relative;\r\n    font-size: 20px;\r\n    background-color: #ccc;\r\n    border: none;\r\n    height: 40px;\r\n    width: 55px;\r\n}\r\n\r\n.shop_btn .before {\r\n    content: attr(data-text);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    line-height: 35px;\r\n    background-color: #ff6114;\r\n    color: #fff;\r\n    transition: 0.5s;\r\n    transform-origin: top;\r\n    transform: translateY(100%) rotateX(90deg);\r\n}\r\n\r\n.shop_btn:hover .before {\r\n    transform: translateY(0) rotateX(0);\r\n}\r\n\r\n.shop_btn .after {\r\n    content: attr(data-text);\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    line-height: 35px;\r\n    background-color: #f58b36;\r\n    color: #fff;\r\n    transition: 0.5s;\r\n    transform-origin: bottom;\r\n    transform: translateY(0) rotateX(0);\r\n}\r\n\r\n.shop_btn.selected .before {\r\n    background-color: #c4352e;\r\n}\r\n\r\n.shop_btn.selected .after {\r\n    background-color: #ff4f3a;\r\n}\r\n\r\n.shop_btn:hover .after {\r\n    transform: translateY(-100%) rotateX(90deg);\r\n  }\r\n\r\n.shop_btn img {\r\n    width: 20px;\r\n}\r\n\r\n.product__item .shop_overlay {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    bottom: 0;\r\n    right: 0;\r\n    display: flex;\r\n    /* align-items: center; */\r\n    justify-content: flex-end;\r\n    transition: 0.5s ease;\r\n    padding-top: 35px;\r\n    padding-right: 10px;\r\n}\r\n\r\n.product__item:hover .shop_overlay {\r\n    bottom: 0;\r\n    transition: 0.5s ease;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\r\n    .down_arrow_mob.open {\r\n        display: inline-block;\r\n        width: 17px;\r\n        float: right;\r\n        margin-right: 10px;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    .mob_accord_product {\r\n        display: none;\r\n    }\r\n\r\n    .mob_accord_product.open {\r\n        display: block;\r\n    }\r\n\r\n    .down_arrow_mob.rotate {\r\n        transform: rotate(180deg);   \r\n    }\r\n\r\n    .prod_mob_layout {\r\n        width: 85%;\r\n        margin: auto;\r\n    }\r\n    \r\n}\r\n\r\n/* pulse Animation effect */\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    35% {\r\n        box-shadow: 0 0 0 10px rgba(238, 63, 42, 0.6);\r\n    }\r\n\r\n    70% {\r\n        box-shadow: 0 0 0 20px rgba(238, 63, 42, 0.5);\r\n    }\r\n\r\n    90% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    35% {\r\n        box-shadow: 0 0 0 10px rgba(238, 63, 42, 0.6);\r\n    }\r\n\r\n    70% {\r\n        box-shadow: 0 0 0 20px rgba(238, 63, 42, 0.5);\r\n    }\r\n\r\n    90% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXdEO0FBQzVEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsV0FBVztBQUNmOztBQUVBO0lBQ0ksTUFBTTtBQUNWOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGVBQWU7O0lBRWYsa0NBQWtDO0FBQ3RDOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxvQ0FBNEI7WUFBNUIsNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsWUFBWTtJQUNaLFFBQVE7SUFDUixhQUFhO0lBQ2IsaUNBQWlDO0lBQ2pDLFVBQVU7SUFDVixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksZUFBZTtJQUNmLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsMENBQTBDO0FBQzlDOztBQUVBO0lBQ0ksbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQix3QkFBd0I7SUFDeEIsbUNBQW1DO0FBQ3ZDOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVFO0lBQ0UsMkNBQTJDO0VBQzdDOztBQUVGO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04sU0FBUztJQUNULFFBQVE7SUFDUixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxxQkFBcUI7QUFDekI7O0FBSUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0FBRUo7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0kseUNBQXlDO0lBQzdDO0FBQ0o7O0FBcEJBO0lBQ0k7UUFDSSw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLXNlY3Rpb24uc2V0LWJnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9icmVhZGNydW1iLmpwZycpO1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4uZmlsdGVyX19pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5oZXJvX19jYXRlZ29yaWVzX19hbGw6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMgPiBoNixcclxuLnByb2R1Y3RfX2l0ZW1fX3BpYyA+IGg1IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljID4gaDYge1xyXG4gICAgdG9wOiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljID4gaDUge1xyXG4gICAgYm90dG9tOiAwO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljID4gaW1nLnRodW1iX2ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLyogYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTsgKi9cclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpYyAubGlrZV9pY29uX3dyYXBwZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTNmMmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWUzZjJhO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljIC5saWtlX2ljb25fd3JhcHBlcjphY3RpdmUsXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyIGltZy5saWtlX2ljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIHRvcDogMDsgKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW06aG92ZXIgLnByb2R1Y3RfX2l0ZW1fX3BpYyAucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciB7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIGxpIGltZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW06aG92ZXIgLnByb2R1Y3RfX2l0ZW1fX3BpYyA+IGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xyXG4gICAgLyogdHJhbnNmb3JtOiBzY2FsZSgxLjUpOyAqL1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmdyZWVuX2JnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmFkMzkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRvd25fYXJyb3dfbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2FkX21vcmVfYnRuIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdlYWMzOTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzdlYWMzOTtcclxufVxyXG5cclxuLnNob3BfYnRuIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogNTVweDtcclxufVxyXG5cclxuLnNob3BfYnRuIC5iZWZvcmUge1xyXG4gICAgY29udGVudDogYXR0cihkYXRhLXRleHQpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2MTE0O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG59XHJcblxyXG4uc2hvcF9idG46aG92ZXIgLmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWCgwKTtcclxufVxyXG5cclxuLnNob3BfYnRuIC5hZnRlciB7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGV4dCk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNThiMzY7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBib3R0b207XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCkgcm90YXRlWCgwKTtcclxufVxyXG5cclxuLnNob3BfYnRuLnNlbGVjdGVkIC5iZWZvcmUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2M0MzUyZTtcclxufVxyXG5cclxuLnNob3BfYnRuLnNlbGVjdGVkIC5hZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY0ZjNhO1xyXG59XHJcbiAgXHJcbiAgLnNob3BfYnRuOmhvdmVyIC5hZnRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpIHJvdGF0ZVgoOTBkZWcpO1xyXG4gIH1cclxuXHJcbi5zaG9wX2J0biBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtIC5zaG9wX292ZXJsYXkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8qIGFsaWduLWl0ZW1zOiBjZW50ZXI7ICovXHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cyBlYXNlO1xyXG4gICAgcGFkZGluZy10b3A6IDM1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbTpob3ZlciAuc2hvcF9vdmVybGF5IHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcclxufVxyXG5cclxuXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuXHJcbiAgICAuZG93bl9hcnJvd19tb2Iub3BlbiB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tb2JfYWNjb3JkX3Byb2R1Y3Qge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYl9hY2NvcmRfcHJvZHVjdC5vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAuZG93bl9hcnJvd19tb2Iucm90YXRlIHtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyAgIFxyXG4gICAgfVxyXG5cclxuICAgIC5wcm9kX21vYl9sYXlvdXQge1xyXG4gICAgICAgIHdpZHRoOiA4NSU7XHJcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbi8qIHB1bHNlIEFuaW1hdGlvbiBlZmZlY3QgKi9cclxuXHJcbkBrZXlmcmFtZXMgcHVsc2Uge1xyXG4gICAgMCUge1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDJweCByZ2JhKDIzOCwgNjMsIDQyLCAwLjcpO1xyXG4gICAgfVxyXG5cclxuICAgIDM1JSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMTBweCByZ2JhKDIzOCwgNjMsIDQyLCAwLjYpO1xyXG4gICAgfVxyXG5cclxuICAgIDcwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMjBweCByZ2JhKDIzOCwgNjMsIDQyLCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIDkwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjM4LCA2MywgNDIsIDAuNyk7XHJcbiAgICB9XHJcblxyXG4gICAgMTAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDQ2LCAyMDQsIDExMywgMCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (scroll)=\"scrollHandler($event)\">\r\n<!-- Breadcrumb Section Begin (scroll)=\"scrollHandler($event)\" -->\r\n<section class=\"breadcrumb-section set-bg\" data-setbg=\"img/breadcrumb.jpg\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n              <div class=\"breadcrumb__text\">\r\n                  <h2>Organi Shop</h2>\r\n                  <div class=\"breadcrumb__option\">\r\n                      <a href=\"./index.html\">Home</a>\r\n                      <span>Shop</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- Breadcrumb Section End -->\r\n\r\n<!-- Product Section Begin -->\r\n<section class=\"product spad\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-5\">\r\n              <div class=\"hero__categories\">\r\n                  <div class=\"hero__categories__all\">\r\n                      <span>All Categories</span>\r\n                  </div>\r\n\r\n                  <section class=\"example-section\">\r\n                    <div *ngFor=\"let item of categoryArr;\">\r\n                        <div class=\"example-list-section\">\r\n                            <mat-checkbox class=\"example-margin\"\r\n                                [value]=\"item.main_category\"\r\n                                [checked]=\"item.checked\"\r\n                                (change)=\"selectAll($event)\">\r\n                                {{item.main_category}}\r\n                            </mat-checkbox>\r\n                            <img (click)=\"openProdFilter(item.main_category)\" [ngClass]=\"{'open': openProdFilterAccord !== item.main_category}\"\r\n                                    class=\"down_arrow_mob\" src=\"assets/img/icons/down-arrow.svg\" />\r\n                            <img (click)=\"closeProdFilter()\" [ngClass]=\"{'open': openProdFilterAccord === item.main_category}\" \r\n                                    class=\"down_arrow_mob rotate\" src=\"assets/img/icons/down-arrow.svg\" />\r\n                        </div>\r\n                        <div class=\"example-list-section mob_accord_product\" [ngClass]=\"{'open': openProdFilterAccord === item.main_category}\">\r\n                            <ul>\r\n                                <li *ngFor=\"let subItem of item.sub_category\"\r\n                                    >\r\n                                    <mat-checkbox [value]=\"subItem.name\" \r\n                                        [checked]=\"subItem.checked\" \r\n                                        (change)=\"selectSingle($event)\">\r\n                                        {{subItem.name}}\r\n                                    </mat-checkbox>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                  </section>\r\n                  \r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-9 col-md-7\">\r\n              <!-- <div class=\"product__discount\">\r\n                  <div class=\"section-title product__discount__title\">\r\n                      <h2>Sale Off</h2>\r\n                  </div>\r\n              </div> -->\r\n              <!-- <div class=\"filter__item\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-4 col-md-5\">\r\n                          <div class=\"filter__sort\">\r\n                              <span>Sort By</span>\r\n                              <select>\r\n                                  <option value=\"0\">Default</option>\r\n                                  <option value=\"0\">Default</option>\r\n                              </select>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4\">\r\n                          <div class=\"filter__found\">\r\n                              <h6><span>16</span> Products found</h6>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-3\">\r\n                          <div class=\"filter__option\">\r\n                              <span class=\"icon_grid-2x2\"></span>\r\n                              <span class=\"icon_ul\"></span>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-6 col-sm-6 prod_mob_layout\" *ngFor=\"let item of productList\">\r\n                    <div class=\"product__item\">\r\n                        <!-- [style.backgroundImage]=\"'url(assets/'+ item.image_url +')'\" -->\r\n                        <div class=\"product__item__pic set-bg\">\r\n                            <img class=\"thumb_img\" [src]=\"'assets/'+ item.image_url\" />\r\n                            <div class=\"like_icon_wrapper d-none\" (click)=\"shoppedProduct(item.product_id)\" [ngClass]=\"{'active': item.shopped === true}\">\r\n                                <img *ngIf=\"item.shopped === false\" class=\"like_icon\" src=\"assets/img/icons/light-grey-shopping-outline.svg\" /> \r\n                                <img *ngIf=\"item.shopped === true\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-outline.svg\" /> \r\n                            </div>\r\n                            <!-- <img class=\"like_icon\" src=\"assets/red-heart-outline.svg\" /> -->\r\n                            <h6> {{item.product_name}} </h6>\r\n                            <h5> &euro; {{item.price}} </h5>\r\n                            <ul class=\"product__item__pic__hover d-none\">\r\n                                <li [ngClass]=\"{'green_bg': item.liked === true}\" (click)=\"likeProduct(item.product_id)\">\r\n                                    \r\n                                    <img *ngIf=\"item.liked === false\" src=\"assets/img/icons/white-heart-outline.svg\" />\r\n                                    <img *ngIf=\"item.liked === true\" src=\"assets/img/icons/white-heart-fill.svg\" />\r\n                                \r\n                                </li>\r\n\r\n                                <li>\r\n                                    \r\n                                    <img src=\"assets/img/icons/white-retweet.svg\" />\r\n                                    \r\n                                </li>\r\n\r\n                                <li [ngClass]=\"{'green_bg': item.shopped === true}\" >\r\n                                    \r\n                                    <img *ngIf=\"item.shopped === false\" src=\"assets/img/icons/white-shopping-outline.svg\" />\r\n                                    <img *ngIf=\"item.shopped === true\" src=\"assets/img/icons/white-shopping-cart.svg\" />\r\n\r\n                                </li>\r\n                                \r\n                            </ul>\r\n                            <div class=\"shop_overlay\">\r\n                                <button (click)=\"shoppedProduct(item.product_id)\" \r\n                                    [ngClass]=\"{'active selected': item.shopped === true }\" \r\n                                    class=\"shop_btn\">\r\n                                    <span class=\"before\"> \r\n                                        <img *ngIf=\"item.shopped === false\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-outline.svg\" /> \r\n                                        <img *ngIf=\"item.shopped === true\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-cart.svg\" />\r\n                                    </span>\r\n                                    \r\n                                    <span class=\"after\"> \r\n                                        <img *ngIf=\"item.shopped === false\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-outline.svg\" /> \r\n                                        <img *ngIf=\"item.shopped === true\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-cart.svg\" />\r\n                                    </span>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"product__item__text\">\r\n                            \r\n                            \r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <button class=\"load_more_btn\" (click)=\"scrollHandler()\" \r\n                *ngIf=\"allProducts.length !== productList.length + 1\"> \r\n                Load More \r\n            </button>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- Product Section End -->\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/product-list/product-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/product-list/product-list.component.ts ***!
  \********************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _api_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api-service.service */ "./src/app/api-service.service.ts");



var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(apiService) {
        this.apiService = apiService;
        this.productList = [];
        this.allProducts = [];
        this.notEmptyPost = true;
        this.notScrolly = true;
        this.categoryArr = [];
        this.allDataCopy = [];
        this.subCateArr = [];
        this.likedArray = [];
        this.shoppedArray = [];
        this.openProdFilterAccord = false;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.getProducts();
        // window.addEventListener('scroll', this.scrollHandler.bind(this), false);
    };
    ProductListComponent.prototype.getProducts = function () {
        var _this = this;
        this.categoryArr = [];
        this.apiService.getProducts().subscribe(function (res) {
            _this.allProducts = res['Sheet1'];
            _this.allProducts = _this.allProducts.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { liked: false, shopped: false });
            });
            console.log(_this.allProducts);
            if (localStorage.getItem('liked') !== null) {
                var likedFromLocal_1 = JSON.parse(localStorage.getItem('liked'));
                _this.likedArray = likedFromLocal_1;
                _this.allProducts.forEach(function (item) {
                    likedFromLocal_1.forEach(function (subItem) {
                        if (subItem.product_id === item.product_id) {
                            item.liked = true;
                        }
                    });
                });
            }
            if (localStorage.getItem('shopped') !== null) {
                var shoppedFromLocal_1 = JSON.parse(localStorage.getItem('shopped'));
                // shoppedFromLocal.
                //   if (!obj.hasOwnProperty('chagedPrice') && !obj.hasOwnProperty('changedQuantity')) {
                //     obj.chagedPrice = item.price;
                //     obj.changedQuantity = item.quantity;
                // }
                _this.shoppedArray = shoppedFromLocal_1;
                console.log(_this.shoppedArray);
                _this.allProducts.forEach(function (item) {
                    shoppedFromLocal_1.forEach(function (subItem) {
                        if (subItem.product_id === item.product_id) {
                            item.shopped = true;
                        }
                    });
                });
            }
            _this.allDataCopy = JSON.parse(JSON.stringify(_this.allProducts));
            console.log(_this.allDataCopy);
            _this.productList = _this.allProducts.slice(0, 6);
            var catArr = [];
            var categoryObj = {
                main_category: '',
                sub_category: []
            };
            _this.allProducts.forEach(function (item) {
                var catValue = item.main_category;
                if (catArr) {
                }
                catArr.push(catValue);
            });
            catArr = catArr.filter(function (el, i, a) { return i === a.indexOf(el); });
            catArr.forEach(function (item) {
                _this.categoryArr.push({
                    main_category: item,
                    sub_category: [],
                    checked: false
                });
            });
            _this.allProducts.forEach(function (item) {
                _this.categoryArr.forEach(function (subItem) {
                    if (subItem.main_category === item.main_category) {
                        if (subItem.sub_category.indexOf(item.sub_name_french) === -1) {
                            subItem.sub_category.push(item.sub_name_french);
                        }
                    }
                });
            });
            _this.categoryArr.forEach(function (item) {
                var mapped = item.sub_category.map(function (subItem) {
                    return {
                        name: subItem,
                        checked: false
                    };
                });
                item.sub_category = mapped;
            });
            console.log(_this.categoryArr);
            // if () {
            // }
        }, function (err) {
            console.log(err);
        });
    };
    ProductListComponent.prototype.onScroll = function () {
        if (this.notEmptyPost && this.notScrolly) {
            this.notScrolly = false;
        }
    };
    ProductListComponent.prototype.loadProducts = function () {
        var _this = this;
        console.log('Length Else');
        this.allProducts.slice(this.productList.length + 1, this.productList.length + 7).forEach(function (item) {
            _this.productList.push(item);
        });
    };
    ProductListComponent.prototype.scrollHandler = function (event) {
        this.scrollable = document.documentElement.scrollHeight - window.innerHeight;
        console.log(document.documentElement.scrollHeight, window.innerHeight, window.screen.height, window.screen.width, window.scrollY, this.scrollable);
        this.scrolled = window.scrollY;
        // if (this.scrolled === this.scrollable) {
        //   console.log(document.documentElement.scrollHeight, window.innerHeight);
        //   this.loadProducts();
        // }
        this.loadProducts();
    };
    ProductListComponent.prototype.selectAll = function (event) {
        var _this = this;
        console.log(event, event.source.value, this.allProducts, this.categoryArr);
        this.allProducts = this.allDataCopy;
        if (event.checked) {
            this.categoryArr.forEach(function (item) {
                if (event.source.value === item.main_category) {
                    item.checked = true;
                    item.sub_category.forEach(function (subItem) {
                        subItem.checked = true;
                        _this.subCateArr.push(subItem.name);
                    });
                }
            });
            console.log(this.subCateArr);
            this.allProducts = this.allProducts.filter(function (item) {
                return item.main_category === event.source.value;
            });
            this.productList = this.allProducts.slice(0, 6);
            console.log(this.allProducts);
        }
        else {
            this.categoryArr.forEach(function (item) {
                if (event.source.value === item.main_category) {
                    item.checked = false;
                    item.sub_category.forEach(function (subItem) {
                        subItem.checked = false;
                        _this.subCateArr = [];
                    });
                }
            });
            this.getProducts();
            console.log(this.allProducts);
        }
    };
    ProductListComponent.prototype.selectSingle = function (event) {
        var _this = this;
        console.log(event);
        var allCheckUncheck;
        this.allProducts = this.allDataCopy;
        console.log(this.allProducts);
        if (event.checked === true) {
            this.categoryArr.forEach(function (item) {
                item.sub_category.forEach(function (subItem) {
                    if (subItem.name === event.source.value) {
                        subItem.checked = true;
                    }
                });
                allCheckUncheck = item.sub_category.every(function (subItem) {
                    return subItem.checked === true;
                });
                console.log(allCheckUncheck);
                if (allCheckUncheck) {
                    item.checked = true;
                }
            });
            this.subCateArr.push(event.source.value);
            console.log(this.subCateArr);
        }
        else if (event.checked === false) {
            var index = this.subCateArr.indexOf(event.source.value);
            this.subCateArr.splice(index, 1);
            console.log(this.subCateArr);
            this.categoryArr.forEach(function (item) {
                item.sub_category.forEach(function (subItem) {
                    if (subItem.name === event.source.value) {
                        subItem.checked = false;
                    }
                });
                allCheckUncheck = item.sub_category.every(function (subItem) {
                    return subItem.checked === true;
                });
                console.log(allCheckUncheck);
                console.log(!allCheckUncheck);
                console.log(item);
                if (!allCheckUncheck) {
                    item.checked = false;
                }
            });
            this.categoryArr = this.categoryArr;
            console.log(this.categoryArr);
        }
        this.allProducts = this.allProducts.reduce(function (acc, curr) {
            if (_this.subCateArr.includes(curr.sub_name_french)) {
                acc.push(curr);
            }
            return acc;
        }, []);
        if (this.subCateArr.length === 0) {
            this.allProducts = this.allDataCopy;
        }
        this.productList = this.allProducts.slice(0, 6);
        console.log(this.categoryArr, this.allProducts);
    };
    ProductListComponent.prototype.likeProduct = function (id) {
        var _this = this;
        this.productList = this.productList.map(function (item) {
            var obj;
            if (item.product_id === id) {
                if (item.liked === false) {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { liked: true });
                    _this.likedArray.push(item);
                }
                else {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { liked: false });
                    _this.likedArray.splice(_this.likedArray.indexOf(item), 1);
                }
            }
            else {
                obj = item;
            }
            return obj;
        });
        localStorage.setItem('liked', JSON.stringify(this.likedArray));
        console.log(this.productList, this.likedArray);
        this.apiService.sendLiked(JSON.parse(localStorage.getItem('liked')));
    };
    ProductListComponent.prototype.shoppedProduct = function (id) {
        var _this = this;
        this.productList = this.productList.map(function (item) {
            var obj;
            if (item.product_id === id) {
                if (item.shopped === false) {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { shopped: true });
                    _this.shoppedArray.push(item);
                }
                else {
                    obj = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, item, { shopped: false });
                    var index = _this.shoppedArray.findIndex(function (indItem) { return item.product_id === indItem.product_id; });
                    console.log(_this.shoppedArray, index, item);
                    _this.shoppedArray.splice(index, 1);
                }
            }
            else {
                obj = item;
            }
            return obj;
        });
        localStorage.setItem('shopped', JSON.stringify(this.shoppedArray));
        this.apiService.sendShopped(JSON.parse(localStorage.getItem('shopped')));
    };
    ProductListComponent.prototype.storageEvent = function () {
        window.addEventListener('storage', function (event) {
            console.log(event);
        });
    };
    ProductListComponent.prototype.openProdFilter = function (value) {
        this.openProdFilterAccord = value;
    };
    ProductListComponent.prototype.closeProdFilter = function () {
        this.openProdFilterAccord = false;
    };
    ProductListComponent.prototype.shopBtn = function () {
        console.log('Shopping Button');
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__(/*! ./product-list.component.css */ "./src/app/product-list/product-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_api_service_service__WEBPACK_IMPORTED_MODULE_2__["ApiServiceService"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Le_marche_Angular2+\le-marche-angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map