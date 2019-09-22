(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-register-register-module"],{

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\"\r\n          >login</a\r\n        >\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/register\" routerLinkActive=\"active\"\r\n          >register</a\r\n        >\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container\">\r\n  <form #frm=\"ngForm\" style=\"margin-top: 110px;\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Username\">Username</label>\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            id=\"Username\"\r\n            placeholder=\"Username\"\r\n            name=\"username\"\r\n            [(ngModel)]=\"User.username\"\r\n            #username=\"ngModel\"\r\n            required\r\n          />\r\n          <div *ngIf=\"frm.submitted && username.errors?.required\">\r\n            <div\r\n              *ngIf=\"username.touched\"\r\n              class=\"alert alert-danger\"\r\n              role=\"alert\"\r\n            >\r\n              يرجى ادخال الاسم\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <img [src]=\"imageUrl\" style=\"width: 150px;height: 150px;\" alt=\"\" />\r\n          <input\r\n            style=\"width: 80%;\"\r\n            type=\"file\"\r\n            (change)=\"handelFileInput($event.target.files)\"\r\n            accept=\"image/\"\r\n            id=\"exampleInputFile\"\r\n            name=\"photo\"\r\n          />\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Email1\">Email</label>\r\n          <input\r\n            type=\"email\"\r\n            class=\"form-control\"\r\n            id=\"Email1\"\r\n            placeholder=\"Email\"\r\n            name=\"email\"\r\n            [(ngModel)]=\"User.email\"\r\n            #email=\"ngModel\"\r\n            required\r\n          />\r\n          <div *ngIf=\"frm.submitted && email.errors?.required\">\r\n            <div *ngIf=\"email.touched\" class=\"alert alert-danger\" role=\"alert\">\r\n              يرجى ادخال البريد الالكتروني\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Password\">gender</label>\r\n          <select\r\n            name=\"\"\r\n            class=\"form-control\"\r\n            [(ngModel)]=\"User.gender\"\r\n            #gender=\"ngModel\"\r\n            name=\"gender\"\r\n            required\r\n          >\r\n            <option *ngFor=\"let res of genders\" [value]=\"res.id\">{{\r\n              res.name\r\n            }}</option>\r\n          </select>\r\n          <div *ngIf=\"frm.submitted && gender.errors?.required\">\r\n            <div *ngIf=\"gender.touched\" class=\"alert alert-danger\" role=\"alert\">\r\n              يرجى ادخال النوع\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <div class=\"form-group\">\r\n          <label for=\"Password\">Password</label>\r\n          <input\r\n            type=\"password\"\r\n            class=\"form-control\"\r\n            id=\"Password\"\r\n            placeholder=\"Password\"\r\n            name=\"password\"\r\n            [(ngModel)]=\"User.password\"\r\n            #password=\"ngModel\"\r\n            required\r\n          />\r\n          <div *ngIf=\"frm.submitted && password.errors?.required\">\r\n            <div\r\n              *ngIf=\"password.touched\"\r\n              class=\"alert alert-danger\"\r\n              role=\"alert\"\r\n            >\r\n              يرجى ادخال الرقم السري\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-12\">\r\n        <button type=\"submit\" (click)=\"Submit(frm)\" class=\"btn btn-primary\">\r\n          Submit\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
        this.User = {
            email: null,
            username: null,
            password: null,
            fileToUploadL: null,
            gender: null
        };
        this.genders = [{ name: "male", id: 1 }, { name: "famale", id: 2 }];
        this.imageUrl = "/assets/images/Flag_of_None.svg.png";
    }
    RegisterComponent.prototype.ngOnInit = function () { };
    RegisterComponent.prototype.handelFileInput = function (file) {
        var _this = this;
        this.User.fileToUploadL = file.item(0);
        var reader = new FileReader();
        reader.onload = function (event) {
            _this.imageUrl = event.target.result;
        };
        reader.readAsDataURL(this.User.fileToUploadL);
    };
    RegisterComponent.prototype.Submit = function (frm) {
        console.log(this.User);
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "register-root",
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.module.ts":
/*!********************************************************!*\
  !*** ./src/app/components/register/register.module.ts ***!
  \********************************************************/
/*! exports provided: RegisterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterModule", function() { return RegisterModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register.component */ "./src/app/components/register/register.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: "",
        component: _register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }
];
var RegisterModule = /** @class */ (function () {
    function RegisterModule() {
    }
    RegisterModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], RegisterModule);
    return RegisterModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-register-register-module.js.map