(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-last-users-seen-last-users-seen-module"],{

/***/ "./src/app/components/last-users-seen/last-users-seen.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/components/last-users-seen/last-users-seen.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-striped table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">login</th>\r\n        <th scope=\"col\">image</th>\r\n        <th scope=\"col\">type</th>\r\n        <th scope=\"col\">profile</th>\r\n        <th scope=\"col\">github</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let res of UsersSeen\r\n            | paginate: { itemsPerPage: perPage, currentPage: id }\r\n        \"\r\n      >\r\n        <th scope=\"row\">{{ res.id }}</th>\r\n        <td>{{ res.login }}</td>\r\n        <td><img style=\"width: 60px;\" src=\"{{ res.avatar_url }}\" alt=\"\" /></td>\r\n        <td>{{ res.type }}</td>\r\n        <td><button type=\"button\" class=\"btn btn-primary\">profile</button></td>\r\n        <td>\r\n          <a type=\"button\" href=\"{{ res.html_url }}\" class=\"btn btn-secondary\"\r\n            >github</a\r\n          >\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"id = $event\"></pagination-controls>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/last-users-seen/last-users-seen.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/components/last-users-seen/last-users-seen.component.ts ***!
  \*************************************************************************/
/*! exports provided: LastUsersSeenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastUsersSeenComponent", function() { return LastUsersSeenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/user.service */ "./src/app/components/Service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LastUsersSeenComponent = /** @class */ (function () {
    function LastUsersSeenComponent(route, service) {
        this.route = route;
        this.service = service;
        this.p = 1;
    }
    LastUsersSeenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getPaginationUser(this.id, this.perPage).subscribe(function (res) {
            _this.UsersSeen = res;
            _this.perPage = 5;
            _this.id = _this.UsersSeen.length;
        });
    };
    LastUsersSeenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "last-users-seen-root",
            template: __webpack_require__(/*! ./last-users-seen.component.html */ "./src/app/components/last-users-seen/last-users-seen.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], LastUsersSeenComponent);
    return LastUsersSeenComponent;
}());



/***/ }),

/***/ "./src/app/components/last-users-seen/last-users-seen.module.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/last-users-seen/last-users-seen.module.ts ***!
  \**********************************************************************/
/*! exports provided: LastUsersSeenModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LastUsersSeenModule", function() { return LastUsersSeenModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _last_users_seen_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./last-users-seen.component */ "./src/app/components/last-users-seen/last-users-seen.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    {
        path: "",
        component: _last_users_seen_component__WEBPACK_IMPORTED_MODULE_5__["LastUsersSeenComponent"]
    }
];
var LastUsersSeenModule = /** @class */ (function () {
    function LastUsersSeenModule() {
    }
    LastUsersSeenModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_last_users_seen_component__WEBPACK_IMPORTED_MODULE_5__["LastUsersSeenComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: []
        })
    ], LastUsersSeenModule);
    return LastUsersSeenModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-last-users-seen-last-users-seen-module.js.map