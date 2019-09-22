(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["components-reports-reports-module"],{

/***/ "./src/app/components/Resolver/reportUser.resolver.ts":
/*!************************************************************!*\
  !*** ./src/app/components/Resolver/reportUser.resolver.ts ***!
  \************************************************************/
/*! exports provided: ReportResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportResolver", function() { return ReportResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Service_report_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Service/report.service */ "./src/app/components/Service/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportResolver = /** @class */ (function () {
    function ReportResolver(reportService) {
        this.reportService = reportService;
    }
    ReportResolver.prototype.resolve = function (route) {
        var username = route.params.id;
        return this.reportService.reportUser(username);
    };
    ReportResolver = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_Service_report_service__WEBPACK_IMPORTED_MODULE_1__["ReportService"]])
    ], ReportResolver);
    return ReportResolver;
}());



/***/ }),

/***/ "./src/app/components/Service/report.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/Service/report.service.ts ***!
  \******************************************************/
/*! exports provided: ReportService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportService", function() { return ReportService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var URL = "https://api.github.com/";
var ReportService = /** @class */ (function () {
    function ReportService(http) {
        this.http = http;
    }
    ReportService.prototype.reportUser = function (username) {
        return this.http.get(URL + "users/" + username + "/repos");
    };
    ReportService.prototype.paginationReports = function (username, p, perPage) {
        return this.http.get("https://api.github.com/users/" + username + "/repos?per_page=" + p + "&page=" + perPage);
    };
    ReportService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ReportService);
    return ReportService;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/reports/reports.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Pagination Reports</h1>\r\n  <table class=\"table table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">name</th>\r\n        <th scope=\"col\">full name</th>\r\n        <th scope=\"col\">Image</th>\r\n        <th scope=\"col\">language</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr\r\n        *ngFor=\"\r\n          let res of pagination\r\n            | paginate: { itemsPerPage: perPage, currentPage: p };\r\n          let i = index\r\n        \"\r\n      >\r\n        <th scope=\"row\">{{ res.id }}</th>\r\n        <td>{{ res.name }}</td>\r\n        <td>{{ res.full_name }}</td>\r\n        <td>\r\n          <img\r\n            style=\"width: 68px;\"\r\n            src=\"{{ res.owner.avatar_url }}\"\r\n            alt=\"{{ res.name }}\"\r\n          />\r\n        </td>\r\n        <td>{{ res.language }}</td>\r\n        <td>{{ page }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <pagination-controls (pageChange)=\"p = $event\"> </pagination-controls>\r\n</div>\r\n<!-- \r\n    page = $event + 1\r\n -->\r\n<div class=\"container\">\r\n  <h1>Reports</h1>\r\n  <table class=\"table table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">#</th>\r\n        <th scope=\"col\">name</th>\r\n        <th scope=\"col\">full name</th>\r\n        <th scope=\"col\">Image</th>\r\n        <th scope=\"col\">language</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let res of Report\">\r\n        <th scope=\"row\">{{ res.id }}</th>\r\n        <td>{{ res.name }}</td>\r\n        <td>{{ res.full_name }}</td>\r\n        <td>\r\n          <img\r\n            style=\"width: 68px;\"\r\n            src=\"{{ res.owner.avatar_url }}\"\r\n            alt=\"{{ res.name }}\"\r\n          />\r\n        </td>\r\n        <td>{{ res.language }}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/reports/reports.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/reports/reports.component.ts ***!
  \*********************************************************/
/*! exports provided: ReportsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsComponent", function() { return ReportsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _Service_report_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Service/report.service */ "./src/app/components/Service/report.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReportsComponent = /** @class */ (function () {
    function ReportsComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
        this.p = 1;
    }
    ReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (res) {
            _this.login = res.id;
        });
        this.route.data.subscribe(function (res) {
            _this.Report = res.Report;
            _this.id = res.Report.length;
        });
        this.getReportsByPagination();
    };
    ReportsComponent.prototype.getReportsByPagination = function () {
        var _this = this;
        var p = this.id;
        this.page = p;
        this.perPage = 1;
        this.service
            .paginationReports(this.login, p, this.perPage)
            .subscribe(function (res) {
            _this.pagination = res;
        });
    };
    ReportsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "reports-root",
            template: __webpack_require__(/*! ./reports.component.html */ "./src/app/components/reports/reports.component.html")
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _Service_report_service__WEBPACK_IMPORTED_MODULE_2__["ReportService"]])
    ], ReportsComponent);
    return ReportsComponent;
}());



/***/ }),

/***/ "./src/app/components/reports/reports.module.ts":
/*!******************************************************!*\
  !*** ./src/app/components/reports/reports.module.ts ***!
  \******************************************************/
/*! exports provided: ReportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _reports_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reports.component */ "./src/app/components/reports/reports.component.ts");
/* harmony import */ var _Resolver_reportUser_resolver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Resolver/reportUser.resolver */ "./src/app/components/Resolver/reportUser.resolver.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    {
        path: "",
        component: _reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"],
        resolve: {
            Report: _Resolver_reportUser_resolver__WEBPACK_IMPORTED_MODULE_6__["ReportResolver"]
        }
    }
];
var ReportsModule = /** @class */ (function () {
    function ReportsModule() {
    }
    ReportsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [_reports_component__WEBPACK_IMPORTED_MODULE_5__["ReportsComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_4__["NgxPaginationModule"]
            ],
            entryComponents: [],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            providers: [_Resolver_reportUser_resolver__WEBPACK_IMPORTED_MODULE_6__["ReportResolver"]]
        })
    ], ReportsModule);
    return ReportsModule;
}());



/***/ })

}]);
//# sourceMappingURL=components-reports-reports-module.js.map