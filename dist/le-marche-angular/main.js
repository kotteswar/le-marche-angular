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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
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

module.exports = ".breadcrumb-section.set-bg {\r\n  background-image: url('breadcrumb.jpg');\r\n}\r\n\r\n.map {\r\n  margin-top: 45px;\r\n}\r\n\r\n.contact-form form input {\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.contact-form form small {\r\n  font-size: 14px;\r\n}\r\n\r\n.contact-form form .form-group label {\r\n  font-size: 16px;\r\n  font-weight: normal;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1Q0FBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWItc2VjdGlvbi5zZXQtYmcge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9icmVhZGNydW1iLmpwZycpO1xyXG59XHJcblxyXG4ubWFwIHtcclxuICBtYXJnaW4tdG9wOiA0NXB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gaW5wdXQge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5jb250YWN0LWZvcm0gZm9ybSBzbWFsbCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4uY29udGFjdC1mb3JtIGZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"breadcrumb-section set-bg\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n              <div class=\"breadcrumb__text\">\r\n                  <h2>Contact Us</h2>\r\n                  <div class=\"breadcrumb__option\">\r\n                      <a href=\"./index.html\">Home</a>\r\n                      <span>Contact Us</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n\r\n<div class=\"contact-form spad\">\r\n    <div class=\"container\">\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col-lg-12\">\r\n                <div class=\"contact__form__title\">\r\n                    <h2>Leave Message</h2>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <form>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-6\">\r\n                    <input type=\"text\" placeholder=\"Customer Name\" id=\"customer-name\">\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-6\">\r\n                    <input type=\"text\" placeholder=\"Customer Contact\" id=\"customer-contact\">\r\n                </div>\r\n                <div class=\"col-lg-12 text-center\">\r\n                    <textarea placeholder=\"Your message\" id=\"product-info\"></textarea>\r\n                    <button type=\"button\" onclick=\"sendEmail()\" class=\"site-btn send-message\">SEND MESSAGE</button>\r\n                </div>\r\n            </div>\r\n        </form> -->\r\n        <mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n            <mat-step>\r\n                <form [formGroup]=\"contactForm\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Nom </label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"name\"\r\n                            id=\"name\" placeholder=\"Enter name\" />\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">  \r\n                            Nous ne partagerons jamais votre e-mail avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Email </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                        id=\"name\" placeholder=\"Enter Email\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre e-mail avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Numéro de portable </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                        id=\"name\" placeholder=\"Enter Mobile number\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre e-mail avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n                    \r\n                    <div class=\"form-group\">\r\n                        <label for=\"exampleInputEmail1\"> Adresse </label>\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                        id=\"name\" placeholder=\"Enter Mobile number\">\r\n                        <small id=\"emailHelp\" class=\"form-text text-muted\">\r\n                            Nous ne partagerons jamais votre e-mail avec qui que ce soit.\r\n                        </small>\r\n                    </div>\r\n                    \r\n                    <div>\r\n                        <button matStepperNext mat-button matStepperNext>Next</button>\r\n                    </div>\r\n                </form>\r\n            </mat-step>\r\n            <mat-step>\r\n                \r\n                <div>\r\n                    <button matStepperPrevious>Back</button>\r\n                    <button matStepperNext>Next</button>\r\n                </div>\r\n            </mat-step>\r\n            <mat-step>\r\n                <div>\r\n                    <button matStepperPrevious type=\"button\">Back</button>\r\n                    <button matStepperNext type=\"button\">Next</button>\r\n                </div>\r\n            </mat-step>\r\n        </mat-horizontal-stepper>\r\n        \r\n    </div>\r\n</div>\r\n"

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



var ContactComponent = /** @class */ (function () {
    function ContactComponent(_formBuilder) {
        this._formBuilder = _formBuilder;
        this.isLinear = true;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.initForm();
    };
    ContactComponent.prototype.initForm = function () {
        this.contactForm = this._formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
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

module.exports = ".footer-bottom-section {\r\n    margin-top: 0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItYm90dG9tLXNlY3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"flex-rw\">\r\n  <section class=\"footer-bottom-section flex-rw\">\r\n    <div class=\"footer-bottom-wrapper\">\r\n     <span> \t&copy; </span>\r\n      \r\n      2019 LE MARCHE DE GARLANDE \r\n        <!-- <address class=\"footer-address\" role=\"company address\">Bergen, NY</address><span class=\"footer-bottom-rights\"> - All Rights Reserved - </span> -->\r\n    </div>\r\n    <!-- <div class=\"footer-bottom-wrapper\">\r\n      <a href=\"/terms-of-use.html\" class=\"generic-anchor\" rel=\"nofollow\">Terms</a> | <a href=\"/privacy-policy.html\" class=\"generic-anchor\" rel=\"nofollow\">Privacy</a>\r\n    </div> -->\r\n  </section>\r\n</footer>\r\n"

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

module.exports = ".custom-owl-carousel {\r\n    position: relative;\r\n    margin-top: 40px;\r\n}\r\n\r\n.carousel-inner {\r\n    height: 450px;\r\n}\r\n\r\n.carousel-inner .item {\r\n    height: 100%;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-item .item {\r\n    position: relative;\r\n    padding-left: 15px;\r\n    padding-right: 15px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-item .item h4 {\r\n    font-size: 20px;\r\n    text-align: center;\r\n    position: absolute;\r\n    bottom: 10px;\r\n    left: 10%;\r\n    background-color: #fff;\r\n    padding: 7px 14px;\r\n    width: 80%;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev,\r\n.custom-owl-carousel ::ng-deep .owl-next {\r\n  position: absolute;\r\n  top: 35%;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev {\r\n  left: 20px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-prev:before,\r\n.custom-owl-carousel ::ng-deep .owl-next:before {\r\n    content: '';\r\n    background-image: url('back.svg');\r\n    left: 20%;\r\n    top: 36%;\r\n    background-size: 15px 15px;\r\n    position: absolute;\r\n    height: 15px;\r\n    width: 15px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-next:before {\r\n    transform: rotate(180deg);\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-next {\r\n    right: 20px;\r\n}\r\n\r\n.custom-owl-carousel ::ng-deep .owl-theme .owl-controls .owl-buttons div {\r\n    background-color: #fff;\r\n    border: 1px solid #333;\r\n    height: 50px;\r\n    border-radius: 5px;\r\n    width: 25px;\r\n    padding: 0;\r\n    text-indent: -9999px;\r\n    opacity: 1;\r\n}\r\n\r\n/* ISOTOPE FILTER's CSS  */\r\n\r\n.portfolio{\r\n\tmin-height: 100vh;\r\n\tpadding:50px 15px;\r\n\tbackground-color: #fff;\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n\r\n.heading{\r\n\twidth:100%;\r\n\tfloat: left;\r\n}\r\n\r\n.portfolio .heading h1{\r\n\tfont-size:35px;\r\n\tcolor:#333;\r\n\tmargin:0px 0px 20px ;\r\n\ttext-align: center;\r\n    letter-spacing:0.5px;\r\n    font-family: 'Cairo', sans-serif;\r\n    font-weight: 900;\r\n}\r\n\r\n.portfolio .filter-btn{\r\n\tfloat: left;\r\n\twidth:100%;\r\n\ttext-align: center;\r\n}\r\n\r\n.portfolio .filter-btn ul{\r\n\tlist-style: none;\r\n\tmargin:0;\r\n\tpadding:0;\r\n}\r\n\r\n.portfolio .filter-btn{\r\n\tpadding:30px 0px 20px;\r\n}\r\n\r\n.portfolio .filter-btn ul li{\r\n\tdisplay: inline-block;\r\n\tbackground-color:#fff;\r\n\tpadding:6px 15px;\r\n\tcolor:#333;\r\n\tborder-radius:5px;\r\n\tmargin:0px 1px;\r\n\tcursor: pointer;\r\n\tfont-size:16px;\r\n    position: relative;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.portfolio .filter-btn ul li:after {\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: -2px;\r\n    width: 100%;\r\n    height: 2px;\r\n    background: #7fad39;\r\n    content: \"\";\r\n    opacity: 0;\r\n}\r\n\r\n.portfolio .filter-btn ul li.active:after {\r\n    opacity: 1 ;\r\n}\r\n\r\n.portfolio .items{\r\n\tfloat: left;\r\n\twidth:100%;\r\n}\r\n\r\n.portfolio .items .box{\r\n\tfloat: left;\r\n\twidth: 25%;\r\n\tpadding:15px;\r\n\ttransition: all 1s ease;\r\n}\r\n\r\n.portfolio .items .box .inner img{\r\n\twidth:100%;\r\n\tdisplay: block;\r\n}\r\n\r\n.carousel-inner .item {\r\n    position: relative;\r\n}\r\n\r\n.carousel-inner .item:before {\r\n    content: '';\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    background-color: rgba(0,0,0,0.5);\r\n    height: 100%;\r\n    width: 100%;\r\n}\r\n\r\n.carousel-inner .item .carousel-caption h3, \r\n.carousel-inner .item .carousel-caption p {\r\n    color: #fff;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n\r\n    .carousel-inner {\r\n        height: 241px;\r\n    }\r\n\r\n    .portfolio .items .box {\r\n        width: 50%;\r\n        padding: 8px;\r\n    }\r\n\r\n    .carousel-inner .item .carousel-caption h3 {\r\n        font-size: 22px;\r\n    }\r\n\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsaUNBQXdEO0lBQ3hELFNBQVM7SUFDVCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osV0FBVztBQUNmOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLFVBQVU7QUFDZDs7QUFFQSwwQkFBMEI7O0FBRTFCO0NBQ0MsaUJBQWlCO0NBQ2pCLGlCQUFpQjtDQUNqQixzQkFBc0I7Q0FDdEIsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFVBQVU7Q0FDVixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxjQUFjO0NBQ2QsVUFBVTtDQUNWLG9CQUFvQjtDQUNwQixrQkFBa0I7SUFDZixvQkFBb0I7SUFDcEIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtBQUNwQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1Ysa0JBQWtCO0FBQ25COztBQUNBO0NBQ0MsZ0JBQWdCO0NBQ2hCLFFBQVE7Q0FDUixTQUFTO0FBQ1Y7O0FBQ0E7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyxxQkFBcUI7Q0FDckIscUJBQXFCO0NBQ3JCLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YsaUJBQWlCO0NBQ2pCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsY0FBYztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsVUFBVTtBQUNkOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUNBO0NBQ0MsV0FBVztDQUNYLFVBQVU7QUFDWDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxVQUFVO0NBQ1YsWUFBWTtDQUNaLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixjQUFjO0FBQ2Y7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxNQUFNO0lBQ04saUNBQWlDO0lBQ2pDLFlBQVk7SUFDWixXQUFXO0FBQ2Y7O0FBRUE7O0lBRUksV0FBVztBQUNmOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmN1c3RvbS1vd2wtY2Fyb3VzZWwge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxuLmNhcm91c2VsLWlubmVyIHtcclxuICAgIGhlaWdodDogNDUwcHg7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLWl0ZW0gLml0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxufVxyXG5cclxuLmN1c3RvbS1vd2wtY2Fyb3VzZWwgOjpuZy1kZWVwIC5vd2wtaXRlbSAuaXRlbSBoNCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogN3B4IDE0cHg7XHJcbiAgICB3aWR0aDogODAlO1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1wcmV2LFxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAzNSU7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLXByZXYge1xyXG4gIGxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5jdXN0b20tb3dsLWNhcm91c2VsIDo6bmctZGVlcCAub3dsLXByZXY6YmVmb3JlLFxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0OmJlZm9yZSB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9pY29ucy9iYWNrLnN2ZycpO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAzNiU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDE1cHggMTVweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIHdpZHRoOiAxNXB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0OmJlZm9yZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC1uZXh0IHtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4uY3VzdG9tLW93bC1jYXJvdXNlbCA6Om5nLWRlZXAgLm93bC10aGVtZSAub3dsLWNvbnRyb2xzIC5vd2wtYnV0dG9ucyBkaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB0ZXh0LWluZGVudDogLTk5OTlweDtcclxuICAgIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qIElTT1RPUEUgRklMVEVSJ3MgQ1NTICAqL1xyXG5cclxuLnBvcnRmb2xpb3tcclxuXHRtaW4taGVpZ2h0OiAxMDB2aDtcclxuXHRwYWRkaW5nOjUwcHggMTVweDtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5oZWFkaW5ne1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbi5wb3J0Zm9saW8gLmhlYWRpbmcgaDF7XHJcblx0Zm9udC1zaXplOjM1cHg7XHJcblx0Y29sb3I6IzMzMztcclxuXHRtYXJnaW46MHB4IDBweCAyMHB4IDtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzowLjVweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ2Fpcm8nLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0bntcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDoxMDAlO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ucG9ydGZvbGlvIC5maWx0ZXItYnRuIHVse1xyXG5cdGxpc3Qtc3R5bGU6IG5vbmU7XHJcblx0bWFyZ2luOjA7XHJcblx0cGFkZGluZzowO1xyXG59XHJcbi5wb3J0Zm9saW8gLmZpbHRlci1idG57XHJcblx0cGFkZGluZzozMHB4IDBweCAyMHB4O1xyXG59XHJcblxyXG4ucG9ydGZvbGlvIC5maWx0ZXItYnRuIHVsIGxpe1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XHJcblx0cGFkZGluZzo2cHggMTVweDtcclxuXHRjb2xvcjojMzMzO1xyXG5cdGJvcmRlci1yYWRpdXM6NXB4O1xyXG5cdG1hcmdpbjowcHggMXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRmb250LXNpemU6MTZweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0biB1bCBsaTphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAtMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDJweDtcclxuICAgIGJhY2tncm91bmQ6ICM3ZmFkMzk7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuZmlsdGVyLWJ0biB1bCBsaS5hY3RpdmU6YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMSA7XHJcbn1cclxuLnBvcnRmb2xpbyAuaXRlbXN7XHJcblx0ZmxvYXQ6IGxlZnQ7XHJcblx0d2lkdGg6MTAwJTtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuaXRlbXMgLmJveHtcclxuXHRmbG9hdDogbGVmdDtcclxuXHR3aWR0aDogMjUlO1xyXG5cdHBhZGRpbmc6MTVweDtcclxuXHR0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZTtcclxufVxyXG5cclxuLnBvcnRmb2xpbyAuaXRlbXMgLmJveCAuaW5uZXIgaW1ne1xyXG5cdHdpZHRoOjEwMCU7XHJcblx0ZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuaXRlbSB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuaXRlbTpiZWZvcmUge1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5jYXJvdXNlbC1pbm5lciAuaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMywgXHJcbi5jYXJvdXNlbC1pbm5lciAuaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcblxyXG4gICAgLmNhcm91c2VsLWlubmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDI0MXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5wb3J0Zm9saW8gLml0ZW1zIC5ib3gge1xyXG4gICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgcGFkZGluZzogOHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJvdXNlbC1pbm5lciAuaXRlbSAuY2Fyb3VzZWwtY2FwdGlvbiBoMyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n\r\n  <!-- Wrapper for slides -->\r\n  <div class=\"carousel-inner\">\r\n    <div class=\"item active\">\r\n      <img src=\"assets/img/slide1.jpg\" alt=\"Chania\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Votre source de motivation est l’ingrédient qui peut faire toute la différence</h3>\r\n        <!-- <p>LA is always so much fun!</p> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/img/slide3.jpg\" alt=\"Chicago\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>Vous n’êtes pas encore arrivés mais vous êtes plus proche qu’hier</h3>\r\n        <!-- <p>Thank you, Chicago!</p> -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"item\">\r\n      <img src=\"assets/img/slide2.jpg\" alt=\"New York\">\r\n      <div class=\"carousel-caption\">\r\n        <h3>C’est toujours le bon moment</h3>\r\n        <!-- <p>We love the Big Apple!</p> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Left and right controls -->\r\n  <a class=\"left carousel-control\" href=\"#myCarousel\" data-slide=\"prev\">\r\n    <span class=\"glyphicon glyphicon-chevron-left\"></span>\r\n    <span class=\"sr-only\">Previous</span>\r\n  </a>\r\n  <a class=\"right carousel-control\" href=\"#myCarousel\" data-slide=\"next\">\r\n    <span class=\"glyphicon glyphicon-chevron-right\"></span>\r\n    <span class=\"sr-only\">Next</span>\r\n  </a>\r\n</div>\r\n\r\n<div class='container-fluid custom-owl-carousel'>\r\n  <owl-carousel [options]=\"SlideOptions\" [items]=\"Images\" [carouselClasses]=\"['owl-theme', 'sliding']\" >\r\n    <div class=\"item\" *ngFor=\"let item of products\">\r\n      <div style=\"align-content: center\">\r\n          <img style=\"height: 260px;width:100%\"src={{item.img}}/>\r\n          <h4> {{item.proName}} </h4>\r\n      </div>\r\n    </div>\r\n  </owl-carousel>\r\n</div>\r\n\r\n<!-- Featured Products -->\r\n<section class=\"portfolio\">\r\n   <div class=\"container\">\r\n   \t  <div class=\"heading\">\r\n   \t  \t  <h1> Featured Product </h1>\r\n   \t  </div>\r\n   \t  <div class=\"filter-btn\">\r\n   \t  \t <ul id=\"buttons\">\r\n   \t  \t \t<li [ngClass]=\"{'active': istopeValue === 'all'}\" data-target=\"all\" value=\"all\" (click)=\"selectIsotop($event)\">All</li>\r\n   \t  \t \t<li [ngClass]=\"{'active': istopeValue === 'fruits'}\" data-target=\"fruits\" value=\"fruits\" (click)=\"selectIsotop($event)\">Oranges</li>\r\n   \t  \t \t<li [ngClass]=\"{'active': istopeValue === 'freshmeat'}\" data-target=\"freshmeat\" value=\"freshmeat\" (click)=\"selectIsotop($event)\">Fresh Meat</li>\r\n            <li [ngClass]=\"{'active': istopeValue === 'vegetables'}\" data-target=\"vegetables\" value=\"vegetables\" (click)=\"selectIsotop($event)\">Vegetables</li>\r\n            <li [ngClass]=\"{'active': istopeValue === 'fastfoods'}\" data-target=\"fastfoods\" value=\"fastfoods\" (click)=\"selectIsotop($event)\">Fastfoods</li>\r\n   \t  \t </ul>\r\n   \t  </div>\r\n   \t  <div class=\"items\">\r\n   \t  \t <div class=\"box\" data-id=\"freshmeat\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-1.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n   \t  \t </div>\r\n   \t  \t <div class=\"box\" data-id=\"fruits\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-2.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n   \t  \t </div>\r\n   \t  \t <div class=\"box\" data-id=\"fruits\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-3.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n   \t  \t </div>\r\n   \t  \t <div class=\"box\" data-id=\"fastfoods\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-4.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n   \t  \t </div>\r\n   \t  \t <div class=\"box\" data-id=\"fastfoods\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-5.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n   \t  \t </div>\r\n   \t  \t <div class=\"box\" data-id=\"vegetables\">\r\n   \t  \t \t <div class=\"inner\">\r\n   \t  \t \t \t <img src=\"assets/img/product/featured/feature-6.jpg\" alt=\"portfolio\" />\r\n   \t  \t \t </div>\r\n        </div>\r\n        <div class=\"box\" data-id=\"vegetables\">\r\n            <div class=\"inner\">\r\n                 <img src=\"assets/img/product/featured/feature-7.jpg\" alt=\"portfolio\" />\r\n            </div>\r\n       </div>\r\n       <div class=\"box\" data-id=\"vegetables\">\r\n            <div class=\"inner\">\r\n                <img src=\"assets/img/product/featured/feature-8.jpg\" alt=\"portfolio\" />\r\n            </div>\r\n       </div>    \r\n   \t  </div>\r\n   </div>\r\n</section>\r\n\r\n\r\n\r\n\r\n\r\n"

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


var HomeComponent = /** @class */ (function () {
    // CarouselOptions = { items: 3, dots: true, nav: true };
    function HomeComponent() {
        this.Images = ['assets/img/product/categories/cat-1.jpg',
            'assets/img/product/categories/cat-2.jpg',
            'assets/img/product/categories/cat-3.jpg',
            'assets/img/product/categories/cat-4.jpg',
            'assets/img/product/categories/cat-5.jpg'];
        this.products = [
            {
                proName: 'Fresh Fruits',
                img: 'assets/img/product/categories/cat-1.jpg'
            },
            {
                proName: 'Dried Fruits',
                img: 'assets/img/product/categories/cat-2.jpg'
            },
            {
                proName: 'Vegetables',
                img: 'assets/img/product/categories/cat-3.jpg'
            },
            {
                proName: 'Drink Fruits',
                img: 'assets/img/product/categories/cat-4.jpg'
            },
            {
                proName: 'Meats',
                img: 'assets/img/product/categories/cat-5.jpg'
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
        var _loop_1 = function (k) {
            items[k]['style'].opacity = '0';
            items[k]['style'].transform = 'scale(0)';
            items[k]['style'].display = 'none';
            setTimeout(function () {
                // items[k]['style'].display='none';
                // items[k]['style'].height='0';
                // items[k]['style'].width='0';
                items[k]['style'].padding = '0';
                items[k]['style'].visibility = 'hidden';
            }, 1000);
            if (items[k].getAttribute('data-id') === target) {
                items[k]['style'].opacity = '1';
                items[k]['style'].transform = 'scale(1)';
                items[k]['style'].display = 'block';
                setTimeout(function () {
                    // items[k]['style'].display='inline-block';
                    // items[k]['style'].height='25%';
                    // items[k]['style'].width='25%';
                    items[k]['style'].padding = '15px';
                    items[k]['style'].visibility = 'visible';
                }, 1000);
            }
            if (target == 'all') {
                items[k]['style'].opacity = '1';
                items[k]['style'].transform = 'scale(1)';
                items[k]['style'].display = 'block';
                setTimeout(function () {
                    // items[k]['style'].display='inline-block';
                    // items[k]['style'].height='25%';
                    // items[k]['style'].width='25%';
                    items[k]['style'].padding = '15px';
                    items[k]['style'].visibility = 'visible';
                }, 1000);
            }
        };
        for (var k = 0; k < items.length; k++) {
            _loop_1(k);
        }
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
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

module.exports = ".outer_table_wrapper {\r\n    padding-top: 1px;\r\n}\r\n\r\n.table_wrapper {\r\n    width: 85%;\r\n    margin: 20px auto;\r\n    padding-top: 0px;\r\n    overflow-x: auto;\r\n    height: calc(100vh - 233px);\r\n}\r\n\r\n.table_wrapper table {\r\n    width: 100%;\r\n}\r\n\r\n.table_icon {\r\n    width: 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.table_img_wrapper {\r\n    width: 100px;\r\n    height: 100px;\r\n    box-shadow: 0 1px 2px 1px #333;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table_img_wrapper img {\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: 5px;\r\n}\r\n\r\n.table_wrapper table tr th {\r\n    padding: 10px;\r\n    background-color: #f06f30;\r\n    color: #fff;\r\n    font-size: 14px;\r\n    border: 1px solid #f06f30;\r\n}\r\n\r\n.table_wrapper table tr td {\r\n    padding: 15px 10px;\r\n    border-bottom: 1px solid #333;\r\n\r\n}\r\n\r\n.table_wrapper table tr td:first-child {\r\n    border-left: 1px solid #333;\r\n}\r\n\r\n.table_wrapper table tr td:last-child {\r\n    border-right: 1px solid #333;\r\n}\r\n\r\n.total_row h1 {\r\n    font-size: 34px;\r\n}\r\n\r\n.total_row h2 {\r\n    font-size: 30px;   \r\n}\r\n\r\n.total_width {\r\n    width: 85%;\r\n    margin: 20px auto;   \r\n}\r\n\r\n.no_data {\r\n    padding: 20px 10px;\r\n    font-size: 22px;\r\n    border-left: 1px solid #333;\r\n    border-right: 1px solid #333;\r\n    border-bottom: 1px solid #333;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGlrZWQtc2hvcHBlZC9saWtlZC1zaG9wcGVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsV0FBVztJQUNYLGVBQWU7SUFDZix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsNkJBQTZCOztBQUVqQzs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQTJCO0lBQzNCLDRCQUE0QjtJQUM1Qiw2QkFBNkI7QUFDakMiLCJmaWxlIjoic3JjL2FwcC9saWtlZC1zaG9wcGVkL2xpa2VkLXNob3BwZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5vdXRlcl90YWJsZV93cmFwcGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiAxcHg7XHJcbn1cclxuXHJcbi50YWJsZV93cmFwcGVyIHtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjMzcHgpO1xyXG59XHJcblxyXG4udGFibGVfd3JhcHBlciB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLnRhYmxlX2ljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YWJsZV9pbWdfd3JhcHBlciB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAxcHggMnB4IDFweCAjMzMzO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFibGVfaW1nX3dyYXBwZXIgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4udGFibGVfd3JhcHBlciB0YWJsZSB0ciB0aCB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwNmYzMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2YwNmYzMDtcclxufVxyXG5cclxuLnRhYmxlX3dyYXBwZXIgdGFibGUgdHIgdGQge1xyXG4gICAgcGFkZGluZzogMTVweCAxMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcblxyXG59XHJcblxyXG4udGFibGVfd3JhcHBlciB0YWJsZSB0ciB0ZDpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcbi50YWJsZV93cmFwcGVyIHRhYmxlIHRyIHRkOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzMzMztcclxufVxyXG5cclxuLnRvdGFsX3JvdyBoMSB7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuXHJcbi50b3RhbF9yb3cgaDIge1xyXG4gICAgZm9udC1zaXplOiAzMHB4OyAgIFxyXG59XHJcblxyXG4udG90YWxfd2lkdGgge1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvOyAgIFxyXG59XHJcblxyXG4ubm9fZGF0YSB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjMzMzO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMzM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/liked-shopped/liked-shopped.component.html":
/*!************************************************************!*\
  !*** ./src/app/liked-shopped/liked-shopped.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"outer_table_wrapper\">\r\n  <div class=\"table_wrapper\">\r\n      <table>\r\n          <tr> \r\n              <th> S No </th>\r\n              <th class=\"text-center\"> Product Image </th>\r\n              <th> Product Name </th>\r\n              <th> Price </th>\r\n              <th> Quantity </th>\r\n              <th class=\"text-center\"> Action </th>\r\n          </tr>\r\n          <tr *ngFor=\"let item of shoppedArr;let i = index;\"> \r\n              <td> {{i+1}} </td>\r\n              <td>  \r\n                <div class=\"table_img_wrapper text-center m-auto\">\r\n                    <img [src]=\"'assets/'+ item.image_url\">\r\n                </div>\r\n              </td>\r\n              <td>  \r\n                {{item.product_name}}                \r\n              </td>\r\n              <td> &euro; {{item.chagedPrice}} </td>\r\n              <td> {{item.changedQuantity}} {{item.measure_scale}}  </td>\r\n              <td>  \r\n                <div class=\"d-flex text-center justify-content-center\">\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/minus.svg\" (click)=\"incDecProd('dec', item.product_id)\" />\r\n                  <img class=\"table_icon ml-3\" src=\"assets/img/icons/plus.svg\" (click)=\"incDecProd('inc', item.product_id)\" />\r\n                </div>\r\n              </td>\r\n          </tr>\r\n      </table>\r\n      <div class=\"text-center no_data\" *ngIf=\"!shoppedArr || shoppedArr.length === 0\"> \r\n        No Data Available\r\n      </div>\r\n  </div>\r\n\r\n  <div *ngIf=\"shoppedArr.length > 0\" class=\"total_row total_width d-flex align-items-center justify-content-between\">\r\n      <h1> Total </h1>\r\n      <h2> &euro; {{totalPrice}} </h2>\r\n  </div>\r\n  \r\n  <!-- <div class=\"table_wrapper\">\r\n      <table>\r\n          <tr> \r\n              <th> S No </th>\r\n              <th> Product Image </th>\r\n              <th> Product Name </th>\r\n              <th> Price </th>\r\n              <th> Quantity </th>\r\n              <th> Action </th>\r\n          </tr>\r\n          <tr> \r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  </td>\r\n              <td>  \r\n                <div class=\"d-flex\">\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/minus.svg\" />\r\n                  <img class=\"table_icon\" src=\"assets/img/icons/plus.svg\" />\r\n                </div>\r\n              </td>\r\n          </tr>\r\n      </table>\r\n  </div> -->\r\n</div>\r\n"

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



var LikedShoppedComponent = /** @class */ (function () {
    function LikedShoppedComponent(route) {
        this.route = route;
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
        localStorage.setItem('shopped', JSON.stringify(this.shoppedArr));
    };
    LikedShoppedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-liked-shopped',
            template: __webpack_require__(/*! ./liked-shopped.component.html */ "./src/app/liked-shopped/liked-shopped.component.html"),
            styles: [__webpack_require__(/*! ./liked-shopped.component.css */ "./src/app/liked-shopped/liked-shopped.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
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

module.exports = ".header__logo a {\r\n    width: 65px;\r\n}\r\n\r\n.humberger__open img {\r\n    width: 20px;\r\n}\r\n\r\n.visibility_visible {\r\n    visibility: visible;\r\n}\r\n\r\n.visible_menu {\r\n    left: 0 !important;\r\n    opacity: 1 !important;\r\n}\r\n\r\n.nav_icon {\r\n    width: 100px;\r\n    max-width: 25px;\r\n}\r\n\r\nli {\r\n    cursor: pointer;\r\n}\r\n\r\n.number-count {\r\n    position: absolute;\r\n    right: -12px;\r\n    top: -12px;\r\n    background-color: #ff1b00;\r\n    color: #fff;\r\n    width: 20px;\r\n    height: 20px;\r\n    border-radius: 50%;\r\n    text-align: center;\r\n    line-height: 20px;\r\n    font-size: 10px;\r\n}\r\n\r\nheader.header {\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0;\r\n    background-color: #fff;\r\n    z-index: 2;\r\n    box-shadow: 0 0px 8px 1px #333;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n    .humberger__open {\r\n        display: flex;\r\n        align-items: center;\r\n        justify-content: center;\r\n        border-radius: 4px;\r\n    }   \r\n    .humberger__menu__logo {\r\n        width: 100px;\r\n        margin: 0 auto; \r\n    }\r\n    .humberger__menu__nav ul {\r\n        margin-top: 10px;\r\n    }\r\n    .humberger__menu__nav ul li {\r\n        font-size: 20px;\r\n        margin-bottom: 10px;\r\n    }\r\n    .humberger__menu__nav ul li a {\r\n        color: #333;\r\n    }\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LWJhci9uYXYtYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxRQUFRO0lBQ1Isc0JBQXNCO0lBQ3RCLFVBQVU7SUFDViw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7UUFDbkIsdUJBQXVCO1FBQ3ZCLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksWUFBWTtRQUNaLGNBQWM7SUFDbEI7SUFDQTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLG1CQUFtQjtJQUN2QjtJQUNBO1FBQ0ksV0FBVztJQUNmO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYtYmFyL25hdi1iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJfX2xvZ28gYSB7XHJcbiAgICB3aWR0aDogNjVweDtcclxufVxyXG5cclxuLmh1bWJlcmdlcl9fb3BlbiBpbWcge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi52aXNpYmlsaXR5X3Zpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG5cclxuLnZpc2libGVfbWVudSB7XHJcbiAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXZfaWNvbiB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1cHg7XHJcbn1cclxuXHJcbmxpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLm51bWJlci1jb3VudCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogLTEycHg7XHJcbiAgICB0b3A6IC0xMnB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMWIwMDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuaGVhZGVyLmhlYWRlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJveC1zaGFkb3c6IDAgMHB4IDhweCAxcHggIzMzMztcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmh1bWJlcmdlcl9fb3BlbiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH0gICBcclxuICAgIC5odW1iZXJnZXJfX21lbnVfX2xvZ28ge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgXHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19uYXYgdWwge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuaHVtYmVyZ2VyX19tZW51X19uYXYgdWwgbGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmh1bWJlcmdlcl9fbWVudV9fbmF2IHVsIGxpIGEge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/nav-bar/nav-bar.component.html":
/*!************************************************!*\
  !*** ./src/app/nav-bar/nav-bar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " <!-- Humberger Begin -->\r\n <div class=\"humberger__menu__overlay\" [ngClass]=\"{'visibility_visible': openMenuParam}\" (click)=\"closeMobileMenu()\"></div>\r\n <div class=\"humberger__menu__wrapper\" [ngClass]=\"{'visible_menu': openMenuParam}\">\r\n     <div class=\"humberger__menu__logo\">\r\n         <a href=\"#\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\r\n     </div>\r\n     <nav class=\"humberger__menu__nav mobile-menu\" [ngClass]=\"{'d-block': openMenuParam}\">\r\n         <ul>\r\n             <li routerLinkActive=\"active\">\r\n                 <a [routerLink]=\"['/home']\" (click)=\"closeMobileMenu()\">Home</a>\r\n             </li>\r\n             <li routerLinkActive=\"active\">\r\n                 <a [routerLink]=\"['/products']\" (click)=\"closeMobileMenu()\">Shop</a>\r\n             </li>\r\n             <!-- <li><a href=\"#\">Pages</a>\r\n                 <ul class=\"header__menu__dropdown\">\r\n                     <li><a href=\"./shop-details.html\">Shop Details</a></li>\r\n                     <li><a href=\"./shoping-cart.html\">Shoping Cart</a></li>\r\n                     <li><a href=\"./checkout.html\">Check Out</a></li>\r\n                     <li><a href=\"./blog-details.html\">Blog Details</a></li>\r\n                 </ul>\r\n             </li> -->\r\n             <!-- <li><a href=\"./blog.html\">Blog</a></li> -->\r\n             <li routerLinkActive=\"active\" class=\"mb-5\">\r\n                 <a [routerLink]=\"['/contact']\" (click)=\"closeMobileMenu()\">Contact</a>\r\n             </li>\r\n             <li (click)=\"goToShopList('shopped')\" class=\"mb-5\"> \r\n                <div class=\"position-relative d-inline-block\">            \r\n                    <span *ngIf=\"shoppedLength\" class=\"number-count\"> {{shoppedLength}} </span>\r\n                    <img *ngIf=\"shopped?.length === 0 || !shopped\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-outline.svg\" />\r\n                    <img *ngIf=\"shopped?.length > 0\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-cart.svg\" />\r\n                </div>\r\n            </li>\r\n         </ul>\r\n         <h5>+91 9080674229</h5>\r\n         <span>support 24/7 time</span>\r\n     </nav>\r\n     <div id=\"mobile-menu-wrap\"></div>\r\n     <div class=\"header__top__right__social\">\r\n         <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\r\n         <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\r\n         <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\r\n         <a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a>\r\n     </div>\r\n     <div class=\"humberger__menu__contact\">\r\n         <ul>\r\n             <li><i class=\"fa fa-envelope\"></i> hello@lemarchedegarlande.com</li>\r\n             <li>Free Shipping for all Order of $99</li>\r\n         </ul>\r\n     </div>\r\n </div>\r\n <!-- Humberger End -->\r\n\r\n <!-- Header Section Begin -->\r\n <header class=\"header\">\r\n     <div class=\"container\">\r\n         <div class=\"d-flex align-items-center justify-content-between\">\r\n             <div class=\"col-lg-3\">\r\n                 <div class=\"header__logo\">\r\n                     <a href=\"./index.html\"><img src=\"assets/img/logo.png\" alt=\"\"></a>\r\n                 </div>\r\n             </div>\r\n             <div class=\"col-lg-6\">\r\n                 <nav class=\"header__menu\">\r\n                     <ul class=\"d-flex justify-content-end\">\r\n                         <li routerLinkActive=\"active\"><a [routerLink]=\"['/home']\">Home</a></li>\r\n                         <li routerLinkActive=\"active\"><a [routerLink]=\"['/products']\">Shop</a></li>\r\n                         <!-- <li><a href=\"#\">Pages</a>\r\n                             <ul class=\"header__menu__dropdown\">\r\n                                 <li><a href=\"./shop-details.html\">Shop Details</a></li>\r\n                                 <li><a href=\"./shoping-cart.html\">Shoping Cart</a></li>\r\n                                 <li><a href=\"./checkout.html\">Check Out</a></li>\r\n                                 <li><a href=\"./blog-details.html\">Blog Details</a></li>\r\n                             </ul>\r\n                         </li> -->\r\n                         <!-- <li><a href=\"./blog.html\">Blog</a></li> -->\r\n                         <li routerLinkActive=\"active\">\r\n                             <a [routerLink]=\"['/contact']\">Contact</a>\r\n                         </li>\r\n                         <!-- (click)=\"goToShopList('liked')\" -->\r\n                         <!-- <li class=\"position-relative\">\r\n                                \r\n                                <span *ngIf=\"likedLength\" class=\"number-count\"> {{likedLength}} </span>\r\n                                <img *ngIf=\"liked?.length === 0 || !liked\" class=\"nav_icon\"  src=\"assets/img/icons/green-heart-outline.svg\" />\r\n                                <img *ngIf=\"liked?.length > 0\" class=\"nav_icon\" src=\"assets/img/icons/green-heart-fill.svg\" />\r\n                             \r\n                        </li> -->\r\n                         <li class=\"position-relative\" (click)=\"goToShopList('shopped')\"> \r\n                            \r\n                                <span *ngIf=\"shoppedLength\" class=\"number-count\"> {{shoppedLength}} </span>\r\n                                <img *ngIf=\"shopped?.length === 0 || !shopped\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-outline.svg\" />\r\n                                <img *ngIf=\"shopped?.length > 0\" class=\"nav_icon\" src=\"assets/img/icons/green-shopping-cart.svg\" />\r\n                            \r\n                        </li>\r\n                     </ul>\r\n                 </nav>\r\n             </div>\r\n         </div>\r\n         <div class=\"humberger__open\" (click)=\"openMenu()\">\r\n             <img src=\"assets/img/icons/grey-open-menu.svg\" />\r\n         </div>\r\n     </div>\r\n </header>\r\n <!-- Header Section End -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n"

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

module.exports = ".breadcrumb-section.set-bg {\r\n    background-image: url('breadcrumb.jpg');\r\n}\r\n\r\n.product {\r\n    padding-top: 30px;\r\n    padding-bottom: 80px;\r\n}\r\n\r\n.filter__item {\r\n    border-top: none;\r\n}\r\n\r\n.hero__categories__all:after {\r\n    display: none;\r\n}\r\n\r\n.product__item__pic {\r\n    background-color: transparent;\r\n    position: relative;\r\n    border: 6px solid #f58b36;\r\n    border-radius: 15px;\r\n}\r\n\r\n.product__item__pic > img.thumb_img {\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: all ease 0.5s;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper {\r\n    position: absolute;\r\n    right: 10px;\r\n    top: 10px;\r\n    background-color: #fff;\r\n    padding: 10px;\r\n    box-sizing: content-box;\r\n    border: 1px solid #333;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n\r\n    /* animation: pulse 2s infinite; */\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper.active {\r\n    background-color: #ee3f2a;\r\n    border: 1px solid #ee3f2a;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper:active,\r\n.product__item__pic .like_icon_wrapper:hover {\r\n    -webkit-animation: pulse 2s infinite;\r\n            animation: pulse 2s infinite;\r\n}\r\n\r\n.product__item__pic .like_icon_wrapper img.like_icon {\r\n    width: 20px;\r\n    \r\n}\r\n\r\n.product__item__pic__hover {\r\n    position: absolute;\r\n    left: 0;\r\n    /* top: 0; */\r\n    right: 0;\r\n    bottom: -100%;\r\n    background-color: rgba(0,0,0,0.3);\r\n    z-index: 1;\r\n    padding: 10px;\r\n    border-radius: 0;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    justify-content: center;\r\n}\r\n\r\n.product__item:hover .product__item__pic .product__item__pic__hover {\r\n    bottom: 0;\r\n}\r\n\r\n.product__item__pic__hover li {\r\n    background-color: #333;\r\n    padding: 8px;\r\n    border-radius: 50%;\r\n}\r\n\r\n.product__item__pic__hover li img {\r\n    width: 15px;\r\n}\r\n\r\n.product__item:hover .product__item__pic > img {\r\n    transition: all ease 0.5s;\r\n    transform: scale(1.5);\r\n}\r\n\r\n.product__item__pic__hover li {\r\n    cursor: pointer;\r\n    border: 1px solid transparent;\r\n}\r\n\r\n.green_bg {\r\n    background-color: #7fad39 !important;\r\n    border: 1px solid #fff !important;\r\n}\r\n\r\n.down_arrow_mob {\r\n    display: none;\r\n}\r\n\r\n@media (max-width: 767px) {\r\n\r\n    .down_arrow_mob.open {\r\n        display: inline-block;\r\n        width: 17px;\r\n        float: right;\r\n        margin-right: 10px;\r\n        margin-top: 5px;\r\n    }\r\n\r\n    .mob_accord_product {\r\n        display: none;\r\n    }\r\n\r\n    .mob_accord_product.open {\r\n        display: block;\r\n    }\r\n\r\n    .down_arrow_mob.rotate {\r\n        transform: rotate(180deg);   \r\n    }\r\n\r\n    .prod_mob_layout {\r\n        width: 85%;\r\n        margin: auto;\r\n    }\r\n    \r\n}\r\n\r\n/* pulse Animation effect */\r\n\r\n@-webkit-keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    35% {\r\n        box-shadow: 0 0 0 10px rgba(238, 63, 42, 0.6);\r\n    }\r\n\r\n    70% {\r\n        box-shadow: 0 0 0 20px rgba(238, 63, 42, 0.5);\r\n    }\r\n\r\n    90% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);\r\n    }\r\n}\r\n\r\n@keyframes pulse {\r\n    0% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    35% {\r\n        box-shadow: 0 0 0 10px rgba(238, 63, 42, 0.6);\r\n    }\r\n\r\n    70% {\r\n        box-shadow: 0 0 0 20px rgba(238, 63, 42, 0.5);\r\n    }\r\n\r\n    90% {\r\n        box-shadow: 0 0 0 2px rgba(238, 63, 42, 0.7);\r\n    }\r\n\r\n    100% {\r\n        box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZHVjdC1saXN0L3Byb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksdUNBQXdEO0FBQzVEOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0Isa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTs7SUFFZixrQ0FBa0M7QUFDdEM7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLG9DQUE0QjtZQUE1Qiw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxZQUFZO0lBQ1osUUFBUTtJQUNSLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHFCQUFxQjtJQUNyQix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0FBQ2pDOztBQUVBO0lBQ0ksb0NBQW9DO0lBQ3BDLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7O0lBRUk7UUFDSSxxQkFBcUI7UUFDckIsV0FBVztRQUNYLFlBQVk7UUFDWixrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLFlBQVk7SUFDaEI7O0FBRUo7O0FBRUEsMkJBQTJCOztBQUUzQjtJQUNJO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEOztJQUVBO1FBQ0ksNkNBQTZDO0lBQ2pEOztJQUVBO1FBQ0ksNENBQTRDO0lBQ2hEOztJQUVBO1FBQ0kseUNBQXlDO0lBQzdDO0FBQ0o7O0FBcEJBO0lBQ0k7UUFDSSw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSw2Q0FBNkM7SUFDakQ7O0lBRUE7UUFDSSw0Q0FBNEM7SUFDaEQ7O0lBRUE7UUFDSSx5Q0FBeUM7SUFDN0M7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3QtbGlzdC9wcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iLXNlY3Rpb24uc2V0LWJnIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL2ltZy9icmVhZGNydW1iLmpwZycpO1xyXG59XHJcblxyXG4ucHJvZHVjdCB7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG59XHJcblxyXG4uZmlsdGVyX19pdGVtIHtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbn1cclxuXHJcbi5oZXJvX19jYXRlZ29yaWVzX19hbGw6YWZ0ZXIge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpYyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlcjogNnB4IHNvbGlkICNmNThiMzY7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljID4gaW1nLnRodW1iX2ltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuNXM7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMzM7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgLyogYW5pbWF0aW9uOiBwdWxzZSAycyBpbmZpbml0ZTsgKi9cclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpYyAubGlrZV9pY29uX3dyYXBwZXIuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZTNmMmE7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZWUzZjJhO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljIC5saWtlX2ljb25fd3JhcHBlcjphY3RpdmUsXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyOmhvdmVyIHtcclxuICAgIGFuaW1hdGlvbjogcHVsc2UgMnMgaW5maW5pdGU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWMgLmxpa2VfaWNvbl93cmFwcGVyIGltZy5saWtlX2ljb24ge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW1fX3BpY19faG92ZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIC8qIHRvcDogMDsgKi9cclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAtMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC4zKTtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW06aG92ZXIgLnByb2R1Y3RfX2l0ZW1fX3BpYyAucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciB7XHJcbiAgICBib3R0b206IDA7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIGxpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0X19pdGVtX19waWNfX2hvdmVyIGxpIGltZyB7XHJcbiAgICB3aWR0aDogMTVweDtcclxufVxyXG5cclxuLnByb2R1Y3RfX2l0ZW06aG92ZXIgLnByb2R1Y3RfX2l0ZW1fX3BpYyA+IGltZyB7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZSAwLjVzO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4ucHJvZHVjdF9faXRlbV9fcGljX19ob3ZlciBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLmdyZWVuX2JnIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZmFkMzkgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmYgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmRvd25fYXJyb3dfbW9iIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG5cclxuICAgIC5kb3duX2Fycm93X21vYi5vcGVuIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgd2lkdGg6IDE3cHg7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm1vYl9hY2NvcmRfcHJvZHVjdCB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICAubW9iX2FjY29yZF9wcm9kdWN0Lm9wZW4ge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5kb3duX2Fycm93X21vYi5yb3RhdGUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7ICAgXHJcbiAgICB9XHJcblxyXG4gICAgLnByb2RfbW9iX2xheW91dCB7XHJcbiAgICAgICAgd2lkdGg6IDg1JTtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLyogcHVsc2UgQW5pbWF0aW9uIGVmZmVjdCAqL1xyXG5cclxuQGtleWZyYW1lcyBwdWxzZSB7XHJcbiAgICAwJSB7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDAgMnB4IHJnYmEoMjM4LCA2MywgNDIsIDAuNyk7XHJcbiAgICB9XHJcblxyXG4gICAgMzUlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxMHB4IHJnYmEoMjM4LCA2MywgNDIsIDAuNik7XHJcbiAgICB9XHJcblxyXG4gICAgNzAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAyMHB4IHJnYmEoMjM4LCA2MywgNDIsIDAuNSk7XHJcbiAgICB9XHJcblxyXG4gICAgOTAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAycHggcmdiYSgyMzgsIDYzLCA0MiwgMC43KTtcclxuICAgIH1cclxuXHJcbiAgICAxMDAlIHtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAwIHJnYmEoNDYsIDIwNCwgMTEzLCAwKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/product-list/product-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/product-list/product-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (scroll)=\"scrollHandler($event)\">\r\n<!-- Breadcrumb Section Begin (scroll)=\"scrollHandler($event)\" -->\r\n<section class=\"breadcrumb-section set-bg\" data-setbg=\"img/breadcrumb.jpg\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-12 text-center\">\r\n              <div class=\"breadcrumb__text\">\r\n                  <h2>Organi Shop</h2>\r\n                  <div class=\"breadcrumb__option\">\r\n                      <a href=\"./index.html\">Home</a>\r\n                      <span>Shop</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- Breadcrumb Section End -->\r\n\r\n<!-- Product Section Begin -->\r\n<section class=\"product spad\">\r\n  <div class=\"container\">\r\n      <div class=\"row\">\r\n          <div class=\"col-lg-3 col-md-5\">\r\n              <div class=\"hero__categories\">\r\n                  <div class=\"hero__categories__all\">\r\n                      <span>All Categories</span>\r\n                  </div>\r\n\r\n                  <section class=\"example-section\">\r\n                    <div *ngFor=\"let item of categoryArr;\">\r\n                        <div class=\"example-list-section\">\r\n                            <mat-checkbox class=\"example-margin\"\r\n                                [value]=\"item.main_category\"\r\n                                [checked]=\"item.checked\"\r\n                                (change)=\"selectAll($event)\">\r\n                                {{item.main_category}}\r\n                            </mat-checkbox>\r\n                            <img (click)=\"openProdFilter(item.main_category)\" [ngClass]=\"{'open': openProdFilterAccord !== item.main_category}\"\r\n                                    class=\"down_arrow_mob\" src=\"assets/img/icons/down-arrow.svg\" />\r\n                            <img (click)=\"closeProdFilter()\" [ngClass]=\"{'open': openProdFilterAccord === item.main_category}\" \r\n                                    class=\"down_arrow_mob rotate\" src=\"assets/img/icons/down-arrow.svg\" />\r\n                        </div>\r\n                        <div class=\"example-list-section mob_accord_product\" [ngClass]=\"{'open': openProdFilterAccord === item.main_category}\">\r\n                            <ul>\r\n                                <li *ngFor=\"let subItem of item.sub_category\"\r\n                                    >\r\n                                    <mat-checkbox [value]=\"subItem.name\" \r\n                                        [checked]=\"subItem.checked\" \r\n                                        (change)=\"selectSingle($event)\">\r\n                                        {{subItem.name}}\r\n                                    </mat-checkbox>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                  </section>\r\n                  \r\n              </div>\r\n          </div>\r\n          <div class=\"col-lg-9 col-md-7\">\r\n              <!-- <div class=\"product__discount\">\r\n                  <div class=\"section-title product__discount__title\">\r\n                      <h2>Sale Off</h2>\r\n                  </div>\r\n              </div> -->\r\n              <!-- <div class=\"filter__item\">\r\n                  <div class=\"row\">\r\n                      <div class=\"col-lg-4 col-md-5\">\r\n                          <div class=\"filter__sort\">\r\n                              <span>Sort By</span>\r\n                              <select>\r\n                                  <option value=\"0\">Default</option>\r\n                                  <option value=\"0\">Default</option>\r\n                              </select>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-4\">\r\n                          <div class=\"filter__found\">\r\n                              <h6><span>16</span> Products found</h6>\r\n                          </div>\r\n                      </div>\r\n                      <div class=\"col-lg-4 col-md-3\">\r\n                          <div class=\"filter__option\">\r\n                              <span class=\"icon_grid-2x2\"></span>\r\n                              <span class=\"icon_ul\"></span>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-6 col-sm-6 prod_mob_layout\" *ngFor=\"let item of productList\">\r\n                    <div class=\"product__item\">\r\n                        <!-- [style.backgroundImage]=\"'url(assets/'+ item.image_url +')'\" -->\r\n                        <div class=\"product__item__pic set-bg\">\r\n                            <img class=\"thumb_img\" [src]=\"'assets/'+ item.image_url\" />\r\n                            <div class=\"like_icon_wrapper\" (click)=\"shoppedProduct(item.product_id)\" [ngClass]=\"{'active': item.shopped === true}\">\r\n                                <img *ngIf=\"item.shopped === false\" class=\"like_icon\" src=\"assets/img/icons/light-grey-shopping-outline.svg\" /> \r\n                                <img *ngIf=\"item.shopped === true\" class=\"like_icon\" src=\"assets/img/icons/white-shopping-outline.svg\" /> \r\n                            </div>\r\n                            <!-- <img class=\"like_icon\" src=\"assets/red-heart-outline.svg\" /> -->\r\n                            <ul class=\"product__item__pic__hover d-none\">\r\n                                <li [ngClass]=\"{'green_bg': item.liked === true}\" (click)=\"likeProduct(item.product_id)\">\r\n                                    \r\n                                    <img *ngIf=\"item.liked === false\" src=\"assets/img/icons/white-heart-outline.svg\" />\r\n                                    <img *ngIf=\"item.liked === true\" src=\"assets/img/icons/white-heart-fill.svg\" />\r\n                                \r\n                                </li>\r\n\r\n                                <li>\r\n                                    \r\n                                    <img src=\"assets/img/icons/white-retweet.svg\" />\r\n                                    \r\n                                </li>\r\n\r\n                                <li [ngClass]=\"{'green_bg': item.shopped === true}\" >\r\n                                    \r\n                                    <img *ngIf=\"item.shopped === false\" src=\"assets/img/icons/white-shopping-outline.svg\" />\r\n                                    <img *ngIf=\"item.shopped === true\" src=\"assets/img/icons/white-shopping-cart.svg\" />\r\n\r\n                                </li>\r\n                                \r\n                            </ul>\r\n                        </div>\r\n                        <div class=\"product__item__text\">\r\n                            <h6><a href=\"#\"> {{item.product_name}} </a></h6>\r\n                            <h5> &euro; {{item.price}} </h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n          </div>\r\n      </div>\r\n  </div>\r\n</section>\r\n<!-- Product Section End -->\r\n</div>\r\n\r\n"

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
        window.addEventListener('scroll', this.scrollHandler.bind(this), false);
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
        this.allProducts.slice(this.productList.length + 1, this.productList.length + 6).forEach(function (item) {
            _this.productList.push(item);
        });
    };
    ProductListComponent.prototype.scrollHandler = function (event) {
        var scrollable = document.documentElement.scrollHeight - window.innerHeight;
        var scrolled = window.scrollY;
        if (scrolled === scrollable) {
            this.loadProducts();
        }
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