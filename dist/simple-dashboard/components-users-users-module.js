(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-users-users-module"],{

/***/ "./src/app/components/Resolver/dataUsers.resolver.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/Resolver/dataUsers.resolver.ts ***!
  \***********************************************************/
/*! exports provided: DataUsersResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataUsersResolver", function() { return DataUsersResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/user.service */ "./src/app/components/Service/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataUsersResolver = /** @class */ (function () {
    function DataUsersResolver(userService) {
        this.userService = userService;
    }
    DataUsersResolver.prototype.resolve = function () {
        return this.userService.getDataUsers();
    };
    DataUsersResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Service_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], DataUsersResolver);
    return DataUsersResolver;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <table class=\"table table-striped table-dark\">\r\n    <thead>\r\n      <div class=\"col-md-12\">\r\n        <div class=\"form-group\">\r\n          <input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            placeholder=\"Search\"\r\n            name=\"Search\"\r\n            [(ngModel)]=\"User.q\"\r\n          />\r\n        </div>\r\n        <button (click)=\"FilterUsers()\" type=\"button\" class=\"btn btn-info\">\r\n          Search\r\n        </button>\r\n      </div>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">login</th>\r\n        <th scope=\"col\">image</th>\r\n        <th scope=\"col\">type</th>\r\n        <th scope=\"col\">Last Seen Users</th>\r\n        <th scope=\"col\">profile</th>\r\n        <th scope=\"col\">github</th>\r\n        <th>favorites</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let res of Users\r\n            | paginate: { itemsPerPage: perPage, currentPage: id }\r\n        \"\r\n      >\r\n        <th scope=\"row\">{{ res.id }}</th>\r\n        <td>{{ res.login }}</td>\r\n        <td><img style=\"width: 60px;\" src=\"{{ res.avatar_url }}\" alt=\"\" /></td>\r\n        <td>{{ res.type }}</td>\r\n        <td>\r\n          <button (click)=\"LastSeenUsers()\" type=\"button\" class=\"btn btn-info\">\r\n            Last Seen\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <button\r\n            (click)=\"ViewProfile(res.login)\"\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n          >\r\n            profile\r\n          </button>\r\n        </td>\r\n        <td>\r\n          <a type=\"button\" href=\"{{ res.html_url }}\" class=\"btn btn-secondary\"\r\n            >github</a\r\n          >\r\n        </td>\r\n        <td>\r\n          <button\r\n            (click)=\"ViewFavorites(res.login)\"\r\n            type=\"button\"\r\n            class=\"btn btn-primary\"\r\n          >\r\n            favorites\r\n          </button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"id = $event\"></pagination-controls>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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



var UsersComponent = /** @class */ (function () {
    function UsersComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.p = 1;
        this.User = {
            q: null
        };
        this.simpleDrop = null;
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (res) {
            _this.Users = res.DataUsers;
        });
    };
    UsersComponent.prototype.FilterUsers = function () {
        var _this = this;
        this.service
            .FilterDAtaUsers(this.User.q, this.perPage, this.id)
            .subscribe(function (res) {
            _this.Users = res["items"];
            _this.perPage = 1;
            _this.id = _this.Users.length;
        });
    };
    UsersComponent.prototype.LastSeenUsers = function () {
        this.router.navigate(["./last-users-seen"]);
    };
    UsersComponent.prototype.ViewProfile = function (login) {
        this.router.navigate(["./profile/" + login]);
    };
    UsersComponent.prototype.ViewFavorites = function (login) {
        this.router.navigate(["./favorites/" + login]);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "users-root",
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/components/users/users.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Service_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.module.ts":
/*!**************************************************!*\
  !*** ./src/app/components/users/users.module.ts ***!
  \**************************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.component */ "./src/app/components/users/users.component.ts");
/* harmony import */ var _Resolver_dataUsers_resolver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Resolver/dataUsers.resolver */ "./src/app/components/Resolver/dataUsers.resolver.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: _users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"],
        resolve: {
            DataUsers: _Resolver_dataUsers_resolver__WEBPACK_IMPORTED_MODULE_5__["DataUsersResolver"]
        }
    }
];
var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_4__["UsersComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_6__["NgxPaginationModule"]
            ],
            entryComponents: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_Resolver_dataUsers_resolver__WEBPACK_IMPORTED_MODULE_5__["DataUsersResolver"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-users-users-module.js.map