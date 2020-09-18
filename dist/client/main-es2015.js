(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api.service.ts":
/*!********************************!*\
  !*** ./src/app/api.service.ts ***!
  \********************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class ApiService {
    constructor(_http) {
        this._http = _http;
        this.projects = [
            {
                'title': 'INI Services',
                'description': "Developed from concept to completion for a home improvement company. Used javascript for all animations. Used Ajax to prevent page reload when submitting form. Django handles contact form submission and sends it to the client's email and the review creation. Used responsive design",
                'img': '../../assets/img/ini.png',
                'frontEnd': ['HTML', 'CSS', 'JavaScript', 'GSAP', 'AJAX', 'JQUERY'],
                'backEnd': ['Python', 'Django'],
                'deployment': ['Linode Linux cloud server'],
                'demoLink': 'https://www.iniservices.com/',
                'codeLink': 'https://github.com/nricaldi/ini'
            },
            {
                'title': 'Travel Buddy',
                'description': "Responsive travel planner app where users can register and login, they can create a trip with start date and end date, view other users trips and join other users trips.",
                'img': '../../assets/img/travel-buddy.png',
                'frontEnd': ['HTML', 'CSS', 'JavaScript'],
                'backEnd': ['Python', 'Django'],
                'deployment': ['AWS EC2 server'],
                'demoLink': 'http://18.223.149.119/',
                'codeLink': 'https://github.com/nricaldi/travel-buddy'
            },
            {
                'title': 'Movie Rater',
                'description': "Front end app using angular. Users can create, update and delete movies. Users can also rate movies and view the average rating. Back end api created using Django REST framework. Users can create, update and delete movies. Users can also rate movies and view the average rating.",
                'img': '../../assets/img/movie-rater.png',
                'frontEnd': ['Angular'],
                'backEnd': ['Python', 'Django', 'Django REST framework'],
                'deployment': ['Firebase', 'Heroku'],
                'demoLink': 'https://movie-rater-bb900.web.app/auth',
                'codeLink': 'https://github.com/nricaldi/movieRater'
            },
            {
                'title': 'OSA',
                'description': "Designed the site for a local martial arts school. Used responsive design",
                'img': '../../assets/img/osa.png',
                'frontEnd': ['HTML', 'CSS', 'JavaScript', 'JQUERY'],
                'backEnd': ['None'],
                'deployment': ['Github pages'],
                'demoLink': 'https://nricaldi.github.io/osa/',
                'codeLink': 'https://github.com/nricaldi/osa'
            },
        ];
        this.baseUrl = 'http://127.0.0.1:8000/';
    }
    getProject(_id) {
        const proj = this.projects[_id - 1];
        return proj;
    }
    sendMail(email) {
        console.log('hello from service');
        return this._http.post(`${this.baseUrl}send`, email);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");






const routes = [
    { path: '', pathMatch: 'full', component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"] },
    { path: 'project/:id', component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");





class AppComponent {
    constructor() {
        this.title = 'client';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "router"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: [".router[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100vh;\n    padding-bottom: 150px;\n}\n\n.footer[_ngcontent-%COMP%] {   \n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm91dGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG4uZm9vdGVyIHsgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main/main.module */ "./src/app/main/main.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_8__["ProjectComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class FooterComponent {
    constructor() {
        this.year = new Date().getFullYear();
    }
    ngOnInit() {
    }
    scrollToElement(element) {
        const destination = document.getElementById(element);
        console.log(element);
        if (destination)
            destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 1, consts: [["id", "footer"], [1, "footer-content"], [3, "click"], ["routerLink", ""], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_li_click_3_listener() { return ctx.scrollToElement("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_li_click_6_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_li_click_13_listener() { return ctx.scrollToElement("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_li_click_16_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\t\u00A9 Copyright Nicolas Ricaldi ", ctx.year, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#footer[_ngcontent-%COMP%] {\n    background: var(--main-bg);\n}\n\n.footer-content[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.logo-blue[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\nul[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    background: url('logo-blue.svg') no-repeat;\n    background-position: center;\n    padding: 2rem 0;\n}\n\n@media(min-width: 1024px) {\n    .footer-content[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        margin: 0 3rem;\n    }\n\n    ul[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0 1rem;\n        font-weight: 600;\n        cursor: pointer\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: var(--dark-gray)\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEyRDtJQUMzRCwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZyk7XG59XG5cbi5mb290ZXItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuLmxvZ28tYmx1ZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ28tYmx1ZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvb3Rlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgdWwgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIHVsIGxpIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KVxuICAgIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/main/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AboutComponent {
    constructor() { }
    ngOnInit() {
        const aboutSubs = document.querySelectorAll('.about-anim');
        const observer = new IntersectionObserver((entries) => {
            let i = 1;
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('about-animation' + i);
                    i++;
                }
            });
        });
        aboutSubs.forEach(aboutSub => {
            observer.observe(aboutSub);
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 16, vars: 0, consts: [["id", "about"], [1, "about-content", "container"], [1, "line"], [1, "title"], [1, "about-info"], [1, "who", "about-anim"], [1, "what", "about-anim"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "About");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Who am I?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "I am a full stack developer based in northern Virginia. I have a computer science background and I am a coding bootcamp graduate.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "What do I do?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "I build full stack applications from concept to completion. From designing to developing and deploying. I can do it all!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#about[_ngcontent-%COMP%] {\n    background: var(--dark-bg);\n} \n\n.about-content[_ngcontent-%COMP%] {\n    max-width: 2000px;\n} \n\n.about-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n} \n\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    color: var(--dark-gray);\n    line-height: 28px;\n    font-size: 14px;\n} \n\n.who[_ngcontent-%COMP%] {\n    margin-bottom: 2rem\n} \n\n@media(min-width: 425px) {\n    #about[_ngcontent-%COMP%] {\n        background: var(--dark-bg);\n    }\n    \n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 28px;\n        font-size: 1rem;\n    }\n    \n    .who[_ngcontent-%COMP%] {\n        margin-bottom: 2rem\n    }\n} \n\n@media(min-width: 1024px) {\n\n    #about[_ngcontent-%COMP%] {\n        height: 500px;\n        display: flex;\n        align-items: center;\n    }\n\n    .about-content[_ngcontent-%COMP%] {\n        width: 100%;\n    }\n    .about-info[_ngcontent-%COMP%] {   \n        display: flex;\n        justify-content: space-between;\n    }\n\n    .who[_ngcontent-%COMP%], .what[_ngcontent-%COMP%] {\n        max-width: 750px;\n        \n    }\n\n    .who[_ngcontent-%COMP%] {\n        padding-right: 1rem;\n    }\n    \n    .what[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n    }\n\n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 32px;\n        font-size: 1rem;\n    }\n    \n    \n} \n\n@media(min-width: 2000px) {\n    .about-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n} \n\n.about-anim[_ngcontent-%COMP%] {\n    opacity: 0;\n} \n\n.about-animation1[_ngcontent-%COMP%] {\n    -webkit-animation: aboutAnimation 2s .25s forwards ease-out;\n            animation: aboutAnimation 2s .25s forwards ease-out;\n} \n\n.about-animation2[_ngcontent-%COMP%] {\n    -webkit-animation: aboutAnimation 2s .5s forwards ease-out;\n            animation: aboutAnimation 2s .5s forwards ease-out;\n} \n\n@-webkit-keyframes aboutAnimation{\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n} \n\n@keyframes aboutAnimation{\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFJQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7O1FBRUksZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7O0FBR0o7O0FBR0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLDJEQUFtRDtZQUFuRCxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSwwREFBa0Q7WUFBbEQsa0RBQWtEO0FBQ3REOztBQUdBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKOztBQVBBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7SUFDQTtRQUNJLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcbn0gXG5cbi5hYm91dC1jb250ZW50IHtcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcbn0gXG5cbi5hYm91dC1jb250ZW50IGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uYWJvdXQtY29udGVudCBwIHsgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ud2hvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXG59XG5cblxuXG5AbWVkaWEobWluLXdpZHRoOiA0MjVweCkge1xuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtY29udGVudCBwIHsgXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAud2hvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAjYWJvdXQge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5hYm91dC1jb250ZW50IHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICAgIC5hYm91dC1pbmZvIHsgICBcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC53aG8sXG4gICAgLndoYXQge1xuICAgICAgICBtYXgtd2lkdGg6IDc1MHB4O1xuICAgICAgICBcbiAgICB9XG5cbiAgICAud2hvIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgLndoYXQge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRlbnQgcCB7IFxuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMycHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG4gICAgXG4gICAgXG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLmFib3V0LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG59XG5cbi5hYm91dC1hbmltIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG5cbi5hYm91dC1hbmltYXRpb24xIHtcbiAgICBhbmltYXRpb246IGFib3V0QW5pbWF0aW9uIDJzIC4yNXMgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbi5hYm91dC1hbmltYXRpb24yIHtcbiAgICBhbmltYXRpb246IGFib3V0QW5pbWF0aW9uIDJzIC41cyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuXG5Aa2V5ZnJhbWVzIGFib3V0QW5pbWF0aW9ue1xuICAgIGZyb20ge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/main/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../api.service */ "./src/app/api.service.ts");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");











function ContactComponent_span_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_span_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_span_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Enter valid email address");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Email must be at least 5 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_span_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ContactComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Message must be at least 10 characters");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ContactComponent {
    constructor(fb, apiService, recaptchaV3Service) {
        this.fb = fb;
        this.apiService = apiService;
        this.recaptchaV3Service = recaptchaV3Service;
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faDribbble = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDribbble"];
    }
    // constructor(private fb: FormBuilder) { }
    ngOnInit() {
        this.initializeForm();
    }
    executeImportantAction() {
        this.recaptchaV3Service.execute('importantAction')
            .subscribe((token) => console.log(token));
        // .subscribe((token) => this.handleToken(token));
    }
    initializeForm() {
        this.contactForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
        });
    }
    onSubmit() {
        if (this.contactForm.valid) {
            console.log(this.contactForm);
            console.log(this.contactForm.value);
            this.apiService.sendMail(this.contactForm.value);
            let observable = this.apiService.sendMail(this.contactForm.value);
            observable.subscribe(res => console.log(res), err => console.log(err));
            this.contactForm.reset();
        }
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaV3Service"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 57, vars: 11, consts: [["id", "contact"], [1, "contact-content", "container"], [1, "line"], [1, "title"], [1, "flex-area"], ["method", "POST", 1, "contact-form", 3, "formGroup", "ngSubmit"], ["for", "name"], ["type", "text", "formControlName", "name"], ["class", "form-error", 4, "ngIf"], ["for", "email"], ["type", "email", "formControlName", "email"], ["for", "message"], ["name", "message", "cols", "30", "rows", "10", "formControlName", "message"], [1, "button-red", 3, "disabled", "click"], [1, "my-info"], [1, "left"], [1, "info"], ["href", "mailto:nricaldi.nr@gmail.com"], ["href", "tel: +1-571-288-4243"], [1, "right"], ["href", "https://www.linkedin.com/in/nicolas-ricaldi/", "target", "_blank"], [1, "icons", 3, "icon"], ["href", "https://github.com/nricaldi", "target", "_blank"], ["href", "https://dribbble.com/nricaldi", "target", "_blank"], [1, "form-error"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ContactComponent_Template_form_ngSubmit_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ContactComponent_span_11_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ContactComponent_span_16_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ContactComponent_span_17_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ContactComponent_span_18_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "textarea", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, ContactComponent_span_23_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ContactComponent_span_24_Template, 2, 0, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ContactComponent_Template_button_click_25_listener() { return ctx.executeImportantAction(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "nricaldi.nr@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "571-288-4243");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "fa-icon", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "D.C Metro Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.contactForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("name").dirty && ctx.contactForm.get("name").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("email").dirty && ctx.contactForm.get("email").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("email").touched && ctx.contactForm.get("email").hasError("email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("email").touched && ctx.contactForm.get("email").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("message").dirty && ctx.contactForm.get("message").hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.contactForm.get("message").touched && ctx.contactForm.get("message").hasError("minlength"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.contactForm.valid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDribbble);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FaIconComponent"]], styles: ["#contact[_ngcontent-%COMP%] {\n    background: var(--gray);\n} \n\n.contact-content[_ngcontent-%COMP%] {\n    \n    padding-bottom: 0;\n    max-width: 2000px;\n} \n\n.contact-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n} \n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: .5rem;\n    display: block;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    \n    border: 2px solid transparent;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 10px;\n    \n    \n    color: var(--main-bg);\n    font-size: 1rem;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    \n    \n    border-color: #c0c0c0;\n} \n\n.contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    resize: none;\n} \n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1em 3em;\n    margin-bottom: 2rem;\n    \n} \n\n.my-info[_ngcontent-%COMP%] {\n    background: var(--main-bg);\n    margin-left: -2rem;\n    margin-right: -2rem;\n    padding: 4rem 2rem;\n    \n    padding-bottom: 0;\n} \n\n.info[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    \n    \n} \n\n.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {   \n    color: var(--dark-gray);\n    margin-bottom: .5rem;\n} \n\n.info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: var(--gray);\n    text-decoration: none;\n} \n\n.right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n} \n\n.icons[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 1.5rem;\n    margin-right: 1rem;\n} \n\n@media(min-width: 450px) {\n    .my-info[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {   \n        font-size: 1.2rem;\n    }\n} \n\n@media(min-width: 768px) {\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 5rem 4rem;\n        padding-bottom: 0;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        margin-left: -4rem;\n        margin-right: -4rem;\n        padding: 4rem;\n    }\n} \n\n@media(min-width: 1024px) {\n\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 4rem 6rem;\n    }\n\n    .flex-area[_ngcontent-%COMP%] {\n        display: flex;\n        \n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        width: 50%;\n        max-width: 784px;\n        margin-right: 15%;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        \n        display: block;\n        margin: 0;\n        margin-top: -9rem;\n        margin-bottom: -4rem;\n        \n        padding: 12rem 6rem 4rem;\n    }\n} \n\n@media(min-width: 2000px) {\n    .contact-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n        padding: 4rem 8rem;\n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        margin-right: 20%;\n    }\n            \n    .my-info[_ngcontent-%COMP%] {\n        margin-top: -10rem;\n    }\n} \n\n \n\ninput.ng-dirty.ng-invalid[_ngcontent-%COMP%], textarea.ng-dirty.ng-invalid[_ngcontent-%COMP%] {\n    \n    border-color: crimson;\n} \n\nbutton[_ngcontent-%COMP%]:disabled {\n    background: #eb6774;\n    border-color: #eb6774;\n    cursor: not-allowed;\n} \n\nform[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    position: relative;\n    margin-bottom: 1rem;\n} \n\n.form-error[_ngcontent-%COMP%] {\n    color: crimson;\n    font-weight: 600;\n    display: block;\n    margin-top: .5rem;\n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksa0JBQWtCO0lBQ2xCLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQjswQkFDc0I7SUFDdEIseUJBQXlCO0lBQ3pCLHFCQUFxQjtJQUNyQixlQUFlO0FBQ25COztBQUVBOztJQUVJLG1DQUFtQztJQUNuQyw0Q0FBNEM7SUFDNUMscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLDBCQUEwQjtJQUMxQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsd0JBQXdCO0lBQ3hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQU1BLHdCQUF3Qjs7QUFFeEI7O0lBRUksc0NBQXNDO0lBQ3RDLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQjs7Z0JBRVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhY3Qge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWdyYXkpO1xufSBcblxuLmNvbnRhY3QtY29udGVudCB7XG4gICAgLyogcGFkZGluZzogNHJlbSAycmVtIDByZW07ICovXG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG59XG5cbi5jb250YWN0LWNvbnRlbnQgLnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG59XG5cblxuLmNvbnRhY3QtZm9ybSBsYWJlbCB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmcpO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0LFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gICAgLyogYm9yZGVyOiBub25lOyAqL1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAvKiBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTsgKi9cbiAgICAvKiBtYXJnaW4tYm90dG9tOiAycmVtOyAqL1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgICBmb250LXNpemU6IDFyZW07XG59XG5cbi5jb250YWN0LWZvcm0gaW5wdXQ6Zm9jdXMsXG4uY29udGFjdC1mb3JtIHRleHRhcmVhOmZvY3VzIHtcbiAgICAvKiBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tcmVkKTsgKi9cbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAxcHQgdmFyKC0tZGFyay1ncmF5KTsgKi9cbiAgICBib3JkZXItY29sb3I6ICNjMGMwYzA7XG59XG5cbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuLmNvbnRhY3QtZm9ybSBidXR0b24ge1xuICAgIHBhZGRpbmc6IDFlbSAzZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAvKiBib3JkZXItcmFkaXVzOiAxMHB4OyAqL1xufVxuXG4ubXktaW5mbyB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZyk7XG4gICAgbWFyZ2luLWxlZnQ6IC0ycmVtO1xuICAgIG1hcmdpbi1yaWdodDogLTJyZW07XG4gICAgcGFkZGluZzogNHJlbSAycmVtO1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAxcmVtOyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICAvKiBtYXJnaW4tcmlnaHQ6IDFyZW07ICovXG4gICAgLyogd2lkdGg6IDUwJTsgKi9cbn1cbiBcbi5pbmZvIGgzIHsgICBcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbn1cblxuLmluZm8gcCBhIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ucmlnaHQgLmluZm86bGFzdC1jaGlsZCB7XG4gICAgbWFyZ2luOiAwO1xufVxuXG4uaWNvbnMge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDQ1MHB4KSB7XG4gICAgLm15LWluZm8ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLmluZm8gcCB7ICAgXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIH1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb250YWN0LWNvbnRlbnQge1xuICAgICAgICAvKiBwYWRkaW5nOiA0cmVtIDRyZW0gMHJlbTsgKi9cbiAgICAgICAgcGFkZGluZzogNXJlbSA0cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAubXktaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNHJlbTtcbiAgICAgICAgcGFkZGluZzogNHJlbTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDEwMjRweCkge1xuXG4gICAgLmNvbnRhY3QtY29udGVudCB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDRyZW0gNHJlbSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDZyZW07XG4gICAgfVxuXG4gICAgLmZsZXgtYXJlYSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC8qIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsgKi9cbiAgICB9XG5cbiAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgbWF4LXdpZHRoOiA3ODRweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNSU7XG4gICAgfVxuXG4gICAgLm15LWluZm8ge1xuICAgICAgICAvKiBwYWRkaW5nOiA0cmVtOyAqL1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAtOXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLTRyZW07XG4gICAgICAgIC8qIG1hcmdpbi1sZWZ0OiA0cmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiAxMnJlbSA2cmVtIDRyZW07XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAyMDAwcHgpIHtcbiAgICAuY29udGFjdC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IDRyZW0gOHJlbTtcbiAgICB9XG5cbiAgICAuY29udGFjdC1mb3JtIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgfVxuICAgICAgICAgICAgXG4gICAgLm15LWluZm8ge1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTByZW07XG4gICAgfVxufSBcblxuXG5cblxuXG4vKiBmb3JtIHZhbGlkYXRpb24gY3NzICovXG5cbmlucHV0Lm5nLWRpcnR5Lm5nLWludmFsaWQsXG50ZXh0YXJlYS5uZy1kaXJ0eS5uZy1pbnZhbGlkIHtcbiAgICAvKiBib3gtc2hhZG93OiAwIDAgMCAxcHQgdmFyKC0tcmVkKTsgKi9cbiAgICBib3JkZXItY29sb3I6IGNyaW1zb247XG59XG5cbmJ1dHRvbjpkaXNhYmxlZCB7XG4gICAgYmFja2dyb3VuZDogI2ViNjc3NDtcbiAgICBib3JkZXItY29sb3I6ICNlYjY3NzQ7XG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbn1cblxuZm9ybSBkaXYge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4uZm9ybS1lcnJvciB7XG4gICAgY29sb3I6IGNyaW1zb247XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAvKiBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7ICovXG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] }, { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["ReCaptchaV3Service"] }]; }, null); })();


/***/ }),

/***/ "./src/app/main/hero/hero.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/hero/hero.component.ts ***!
  \*********************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");



class HeroComponent {
    constructor() { }
    ngOnInit() {
    }
    scrollToElement(element) {
        console.log(element);
        const destination = document.querySelector("#" + element);
        if (destination)
            destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}
HeroComponent.ɵfac = function HeroComponent_Factory(t) { return new (t || HeroComponent)(); };
HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeroComponent, selectors: [["app-hero"]], decls: 20, vars: 1, consts: [["id", "home"], [1, "main"], ["id", "nicolas"], ["id", "ricaldi"], [1, "hero"], [1, "buttons"], [1, "button-red", 3, "click"], [1, "button-gray", 3, "click"]], template: function HeroComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Nicolas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Ricaldi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Innovative development");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Stacked up to perfection");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Full Stack Developer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_16_listener() { return ctx.scrollToElement("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_18_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hire Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
    } }, styles: [".main[_ngcontent-%COMP%] {\n    position: relative;\n    height: 65vh;\n    \n    \n    \n    max-width: 2000px;\n    margin: 0 auto;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    overflow: hidden;\n}\n\n\n#nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #333540;\n    font-size: 5rem;\n}\n\n\n#nicolas[_ngcontent-%COMP%] {\n    left: -5%;\n    top: 15%;\n}\n\n\n#ricaldi[_ngcontent-%COMP%] {\n    right: -1%;\n    bottom: 10%;\n}\n\n\n.hero[_ngcontent-%COMP%] {\n    z-index: 2;\n}\n\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n    color: var(--dark-gray);\n}\n\n\n\n\n\n.hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n    margin-right: .5rem;\n}\n\n\n@-webkit-keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@-webkit-keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@media(min-width: 375px) {\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n        color: var(--dark-gray);\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 500px) {\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n        color: var(--dark-gray);\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 768px) {\n    .main[_ngcontent-%COMP%] {\n        height: 80vh;\n        \n        padding: 0 4rem;\n    }\n    \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 1024px) {\n    .main[_ngcontent-%COMP%] {\n        height: 100vh;\n        padding: 0 6rem;\n    }\n \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 12rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n    \n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n}\n\n\n@media(min-width: 1750px) {\n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 18rem;\n    }\n\n    #nicolas[_ngcontent-%COMP%] {\n        left: 0;\n        top: 15%;\n    }\n    \n    #ricaldi[_ngcontent-%COMP%] {\n        right: 0;\n        bottom: 5%;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 2000px) {\n    .main[_ngcontent-%COMP%] {\n        padding: 0 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 5.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7OztBQUdBOztJQUVJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsUUFBUTtBQUNaOzs7QUFFQTtJQUNJLFVBQVU7SUFDVixXQUFXO0FBQ2Y7OztBQUVBO0lBQ0ksVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7QUFDM0I7OztBQUNBOzs7OztHQUtHOzs7QUFFSDtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBRUE7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFdBQVcsRUFBRTtBQUN4Qjs7O0FBSkE7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFdBQVcsRUFBRTtBQUN4Qjs7O0FBRUE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0o7OztBQVZBO0lBQ0k7UUFDSSxVQUFVO1FBQ1YsVUFBVTtJQUNkOztJQUVBO1FBQ0ksUUFBUTtRQUNSLFVBQVU7SUFDZDtBQUNKOzs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsbUJBQW1CO1FBQ25CLHVCQUF1QjtJQUMzQjtJQUNBO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7OztBQUNBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7SUFDQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOzs7QUFFQTtJQUNJO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixlQUFlO0lBQ25COztJQUVBOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7QUFLQTtJQUNJOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICAgIC8qIG1heC1oZWlnaHQ6IDEyMDBweDsgKi9cbiAgICAvKiBtYXgtd2lkdGg6IDE3NTBweDsgKi9cbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDAgMnJlbTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG5cblxuI25pY29sYXMsXG4jcmljYWxkaSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGNvbG9yOiAjMzMzNTQwO1xuICAgIGZvbnQtc2l6ZTogNXJlbTtcbn1cblxuI25pY29sYXMge1xuICAgIGxlZnQ6IC01JTtcbiAgICB0b3A6IDE1JTtcbn1cblxuI3JpY2FsZGkge1xuICAgIHJpZ2h0OiAtMSU7XG4gICAgYm90dG9tOiAxMCU7XG59XG5cbi5oZXJvIHtcbiAgICB6LWluZGV4OiAyO1xufVxuXG4uaGVybyBoMSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4uaGVybyBoMiB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uaGVybyBoMyB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG59XG4vKiBcbmJ1dHRvbiB7XG4gICAgbWF4LXdpZHRoOiAxMDBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufSAqL1xuXG4uaGVybyAuYnV0dG9uLXJlZCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAuNXJlbTtcbn1cbiBcbkBrZXlmcmFtZXMgbmljayB7XG4gICAgMCUgICB7IHdpZHRoOiAxMDAlOyB9XG4gICAgNTAlICB7IHdpZHRoOiA4MCU7IH1cbiAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDM3NXB4KSB7XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgfVxuICAgIC5oZXJvIC5idXR0b24tcmVkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbkBtZWRpYShtaW4td2lkdGg6IDUwMHB4KSB7XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICB9XG4gICAgLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgaGVpZ2h0OiA4MHZoO1xuICAgICAgICAvKiBoZWlnaHQ6IDEwMHZoOyAqL1xuICAgICAgICBwYWRkaW5nOiAwIDRyZW07XG4gICAgfVxuICAgIFxuICAgICNuaWNvbGFzLFxuICAgICNyaWNhbGRpIHtcbiAgICAgICAgZm9udC1zaXplOiA4cmVtO1xuICAgIH1cblxuICAgIC5oZXJvIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgIH1cbiAgICAuaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxufVxuIFxuXG5AbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGhlaWdodDogMTAwdmg7XG4gICAgICAgIHBhZGRpbmc6IDAgNnJlbTtcbiAgICB9XG4gXG4gICAgI25pY29sYXMsXG4gICAgI3JpY2FsZGkge1xuICAgICAgICBmb250LXNpemU6IDEycmVtO1xuICAgIH1cblxuICAgIC5oZXJvIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xuICAgIH1cbiAgICBcbiAgICAuaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG59XG5cblxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDE3NTBweCkge1xuICAgICNuaWNvbGFzLFxuICAgICNyaWNhbGRpIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHJlbTtcbiAgICB9XG5cbiAgICAjbmljb2xhcyB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMTUlO1xuICAgIH1cbiAgICBcbiAgICAjcmljYWxkaSB7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDUlO1xuICAgIH1cblxuICAgIC5oZXJvIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbiAgICAuaGVybyAuYnV0dG9uLXJlZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICB9XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBwYWRkaW5nOiAwIDhyZW07XG4gICAgfVxuXG4gICAgLmhlcm8gaDEge1xuICAgICAgICBmb250LXNpemU6IDUuNXJlbTtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcbiAgICB9XG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgICB9XG59Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                // state(),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(25px)' }),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                ])
            ]),
        ] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-hero',
                templateUrl: './hero.component.html',
                styleUrls: ['./hero.component.css'],
                animations: [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [
                        // state(),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({ opacity: 0, transform: 'translateY(25px)' }),
                            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)
                        ])
                    ]),
                ]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/main/hero/hero.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work/work.component */ "./src/app/main/work/work.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");






class MainComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 4, vars: 0, template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
    } }, directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/main/main.module.ts":
/*!*************************************!*\
  !*** ./src/app/main/main.module.ts ***!
  \*************************************/
/*! exports provided: MainModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainModule", function() { return MainModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero/hero.component */ "./src/app/main/hero/hero.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "./src/app/main/about/about.component.ts");
/* harmony import */ var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./work/work.component */ "./src/app/main/work/work.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/main/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/__ivy_ngcc__/fesm2015/ng-recaptcha.js");













class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, providers: [
        { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RECAPTCHA_V3_SITE_KEY"], useValue: '6LdCqc0ZAAAAAHnStTNmPB7ea7Wvh-qgmq0xdM-q' },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaV3Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaV3Module"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RecaptchaV3Module"]
                ],
                providers: [
                    { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_11__["RECAPTCHA_V3_SITE_KEY"], useValue: '6LdCqc0ZAAAAAHnStTNmPB7ea7Wvh-qgmq0xdM-q' },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/main/work/work.component.ts":
/*!*********************************************!*\
  !*** ./src/app/main/work/work.component.ts ***!
  \*********************************************/
/*! exports provided: WorkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkComponent", function() { return WorkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




class WorkComponent {
    constructor(_renderer2, _document) {
        this._renderer2 = _renderer2;
        this._document = _document;
    }
    ngOnInit() {
        // const projects = document.querySelector('.anim');
        const projects = document.querySelectorAll('.anim');
        const observer = new IntersectionObserver((entries) => {
            let i = 1;
            entries.forEach(entry => {
                if (entry.intersectionRatio > 0) {
                    entry.target.classList.add('animation' + i);
                    i++;
                }
                else {
                    // entry.target.classList.remove('animation'+i);
                    // if(i = 4) 
                    //   i=1;
                    // i = 1;
                }
            });
            // i = 1;
        });
        projects.forEach(project => {
            observer.observe(project);
        });
    }
    showContent(el) {
        const parentElement = document.querySelector('.' + el);
        const childElement = parentElement.children[0];
        childElement.classList.toggle('show');
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 30, vars: 0, consts: [["id", "work"], [1, "work-content", "container"], [1, "line"], [1, "title"], [1, "proj-grid"], ["data-delay", "0s", 1, "proj", "proj-1", "anim", 3, "mouseenter", "mouseleave"], [1, "proj-content"], ["routerLink", "project/1", 1, "button-red"], ["data-delay", ".5s", 1, "proj", "proj-2", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/2", 1, "button-red"], ["data-delay", ".7s", 1, "proj", "proj-3", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/3", 1, "button-red"], ["data-delay", "1s", 1, "proj", "proj-4", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/4", 1, "button-red"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_6_listener() { return ctx.showContent("proj-1"); })("mouseleave", function WorkComponent_Template_div_mouseleave_6_listener() { return ctx.showContent("proj-1"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "INI Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_12_listener() { return ctx.showContent("proj-2"); })("mouseleave", function WorkComponent_Template_div_mouseleave_12_listener() { return ctx.showContent("proj-2"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Travel Buddy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_18_listener() { return ctx.showContent("proj-3"); })("mouseleave", function WorkComponent_Template_div_mouseleave_18_listener() { return ctx.showContent("proj-3"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Movie Rater");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_24_listener() { return ctx.showContent("proj-4"); })("mouseleave", function WorkComponent_Template_div_mouseleave_24_listener() { return ctx.showContent("proj-4"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "OSA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Learn more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: [".work-content[_ngcontent-%COMP%] {\n    max-width: 2000px;\n}\n\n\n.proj[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 280px;\n    background: var(--light-bg);\n    margin-bottom: 2rem;\n    border-radius: 10px;\n    \n    background-position: cover;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    opacity: 0;\n}\n\n\n.proj[_ngcontent-%COMP%]:last-child{\n    margin-bottom: none;\n}\n\n\n.proj-1[_ngcontent-%COMP%] {\n    background: url('ini.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-2[_ngcontent-%COMP%] {\n    background: url('travel-buddy.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-3[_ngcontent-%COMP%] {\n    background: url('movie-rater.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-4[_ngcontent-%COMP%] {\n    background: url('osa.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-content[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.75);\n    \n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n}\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n@media(min-width: 768px) {\n\n    .proj[_ngcontent-%COMP%] {\n        height: 440px;\n        margin-bottom: 4rem;\n    }\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n}\n    \n}\n\n\n@media(min-width: 1024px) {\n    .proj-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: repeat(1fr, 5) ;\n        grid-gap: 2rem;\n    }\n\n    .proj[_ngcontent-%COMP%] {\n        height: 400px;\n        margin: 0;\n    }\n\n    .proj-1[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 1/3;\n    }\n    .proj-2[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 2/4;\n    }\n\n    .proj-3[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 3/5;\n    }\n    \n    .proj-4[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 4/6;\n    }\n\n    \n}\n\n\n@media(min-width: 1440px) {\n    .proj[_ngcontent-%COMP%] {\n        height: 500px;\n        margin: 0;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 4rem;\n    }\n    .proj-content[_ngcontent-%COMP%] {\n        opacity: 0;\n        transition: all 500ms ease-in-out;\n    }\n    \n    .show[_ngcontent-%COMP%] {\n        opacity: 1;\n    }\n\n}\n\n\n@media(min-width: 2000px) {\n    .work-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 6rem;\n    }\n\n\n}\n\n\n.animation1[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s forwards ease-out;\n            animation: anim1 1s forwards ease-out;\n}\n\n\n.animation2[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s .5s forwards ease-out;\n            animation: anim1 1s .5s forwards ease-out;\n}\n\n\n.animation3[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s .7s forwards ease-out;\n            animation: anim1 1s .7s forwards ease-out;\n}\n\n\n.animation4[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s 1s forwards ease-out;\n            animation: anim1 1s 1s forwards ease-out;\n}\n\n\n@-webkit-keyframes anim1{\n    from {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n\n@keyframes anim1{\n    from {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1COztJQUVuQiwwQkFBMEI7O0lBRTFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLDBCQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLG1DQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLGtDQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLDBCQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOzs7QUFHSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUNBQW1DO1FBQ25DLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjs7SUFFQTs7Ozs7OztPQU9HO0FBQ1A7OztBQUdBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOzs7QUFHSjs7O0FBSUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0FBQ3pDOzs7QUFFQTtJQUNJLGlEQUF5QztZQUF6Qyx5Q0FBeUM7QUFDN0M7OztBQUVBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3Qzs7O0FBRUE7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0FBQzVDOzs7QUFHQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKOzs7QUFUQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG5cbi5wcm9qIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJnKTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wcm9qOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLWJvdHRvbTogbm9uZTtcbn1cblxuLnByb2otMSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2luaS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9qLTIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy90cmF2ZWwtYnVkZHkucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvai0zIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbW92aWUtcmF0ZXIucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvai00IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3NhLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5cbi5wcm9qLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLyogcGFkZGluZzogMS41cmVtOyAgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2otY29udGVudCBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLnByb2oge1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuXG4ucHJvai1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG4gICAgXG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLnByb2otZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyLCA1KSA7XG4gICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIH1cblxuICAgIC5wcm9qIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5wcm9qLTEge1xuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICBncmlkLXJvdzogMS8zO1xuICAgIH1cbiAgICAucHJvai0yIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgZ3JpZC1yb3c6IDIvNDtcbiAgICB9XG5cbiAgICAucHJvai0zIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgZ3JpZC1yb3c6IDMvNTtcbiAgICB9XG4gICAgXG4gICAgLnByb2otNCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgIGdyaWQtcm93OiA0LzY7XG4gICAgfVxuXG4gICAgLyogLnByb2otY29udGVudCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLnNob3cge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH0gKi9cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucHJvaiB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAucHJvai1ncmlkIHtcbiAgICAgICAgZ3JpZC1nYXA6IDRyZW07XG4gICAgfVxuICAgIC5wcm9qLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5zaG93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLndvcmstY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5wcm9qLWdyaWQge1xuICAgICAgICBncmlkLWdhcDogNnJlbTtcbiAgICB9XG5cblxufVxuXG5cblxuLmFuaW1hdGlvbjEge1xuICAgIGFuaW1hdGlvbjogYW5pbTEgMXMgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbi5hbmltYXRpb24yIHtcbiAgICBhbmltYXRpb246IGFuaW0xIDFzIC41cyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuLmFuaW1hdGlvbjMge1xuICAgIGFuaW1hdGlvbjogYW5pbTEgMXMgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG4uYW5pbWF0aW9uNCB7XG4gICAgYW5pbWF0aW9uOiBhbmltMSAxcyAxcyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuXG5Aa2V5ZnJhbWVzIGFuaW0xe1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/nav/nav.component.ts":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function NavComponent__svg_svg_16_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent__svg_svg_16_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");
} }
function NavComponent__svg_svg_17_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent__svg_svg_17_Template__svg_svg_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.toggleMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavComponent {
    constructor() {
        this.isOpen = false;
    }
    ngOnInit() {
    }
    toggleMenu() {
        this.isOpen = !this.isOpen;
    }
    scrollToElement(element) {
        // console.log(element);
        const destination = document.getElementById(element);
        const navHeight = document.getElementById('nav').offsetHeight;
        const y = destination.getBoundingClientRect().top + window.pageYOffset - navHeight;
        if (this.isOpen) {
            setTimeout(function () {
                if (destination)
                    destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }, 500);
        }
        else {
            if (destination)
                destination.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        this.isOpen = false;
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 18, vars: 3, consts: [["id", "nav"], [1, "navbar"], ["routerLink", "", "src", "../../assets/img/logo-gray.svg", "alt", "logo", 1, "logo", 3, "click"], [3, "ngClass"], [3, "click"], ["routerLink", ""], ["class", "burger", "xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "20", "viewBox", "0 0 30 19", 3, "click", 4, "ngIf"], ["class", "burger", "xmlns", "http://www.w3.org/2000/svg", "width", "23.335", "height", "20", "viewBox", "0 0 23.335 23.335", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "20", "viewBox", "0 0 30 19", 1, "burger", 3, "click"], ["id", "hamburger", "transform", "translate(-313 -18)"], ["id", "top", "data-name", "Rectangle 48", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(313 18)", "fill", "#a2a2a2", 3, "ngClass"], ["id", "middle", "data-name", "Rectangle 49", "width", "23", "height", "3", "rx", "1.5", "transform", "translate(320 26)", "fill", "#a2a2a2", 3, "ngClass"], ["id", "bottom", "data-name", "Rectangle 50", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(313 34)", "fill", "#a2a2a2", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "width", "23.335", "height", "20", "viewBox", "0 0 23.335 23.335", 1, "burger", 3, "click"], ["id", "X", "transform", "translate(-323.333 -37.833)"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(7 14)"], ["id", "Rectangle_48", "data-name", "Rectangle 48", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(316.333 45.046) rotate(-45)", "fill", "#23242F"], ["id", "Rectangle_50", "data-name", "Rectangle 50", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(318.454 23.833) rotate(45)", "fill", "#23242F"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_2_listener() { return ctx.scrollToElement("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_4_listener() { return ctx.scrollToElement("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_7_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_10_listener() { return ctx.scrollToElement("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_13_listener() { return ctx.scrollToElement("contact"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent__svg_svg_16_Template, 5, 3, "svg", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent__svg_svg_17_Template, 5, 0, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isOpen ? "active" : "not-active");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["html[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\n\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\n\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\n\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\n\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\n\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\n\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\n\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\n\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\n\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\n\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]{\n    background: var(--dark-bg);\n    position: fixed;\n    width: 100%;\n    z-index: 5;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    padding: 1rem 2rem;\n    display: flex;\n    justify-content: space-between;\n    \n    max-height: 52px;\n    max-width: 2000px;\n}\n\nul[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100vh;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 500ms ease-in-out;\n\n    opacity: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 1rem;\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: var(--main-bg);\n    font-weight: bold;\n    font-size: 2rem;    \n}\n\n.active[_ngcontent-%COMP%] {\n    left: 0;\n    opacity: 1;\n    background: var(--red);\n}\n\n.not-active[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n    width: 30px;\n    cursor: pointer;\n}\n\n.burger[_ngcontent-%COMP%] {\n    cursor: pointer;\n    z-index: 9999;\n    transition: all 250ms ease-in-out;\n}\n\n.burger-active[_ngcontent-%COMP%] {\n    fill: var(--dark-bg);\n}\n\n#top.burger-not-active[_ngcontent-%COMP%] {\n    -webkit-animation: notActive 6s infinite;\n            animation: notActive 6s infinite;\n}\n\n#bottom.burger-not-active[_ngcontent-%COMP%]  {\n    -webkit-animation: notActive 4s infinite;\n            animation: notActive 4s infinite;\n}\n\n@-webkit-keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@media(min-width: 768px) {\n\n    .navbar[_ngcontent-%COMP%] {\n        \n        padding: 1rem 4rem;\n        margin: 0 auto;\n        max-height: 64px;\n    }\n\n    ul[_ngcontent-%COMP%] {\n        position: relative;\n        left: 0;\n        width: auto;\n        height: auto;\n        flex-direction: row;\n        transition: none;\n        opacity: 1;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 1rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1rem;    \n        transition: color 250ms ease-in-out;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 1024px) {\n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 6rem;\n    }\n}\n\n@media(min-width: 1440px) {\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 2rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1.1rem;    \n        transition: color 250ms ease-in-out\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 2000px) { \n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 8rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUN6VkE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQ0FBaUM7O0lBRWpDLFVBQVU7QUFDZDs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxPQUFPO0lBQ1AsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksd0NBQWdDO1lBQWhDLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBR0E7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFdBQVcsRUFBRTtBQUN4Qjs7QUFKQTtJQUNJLE9BQU8sV0FBVyxFQUFFO0lBQ3BCLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sV0FBVyxFQUFFO0FBQ3hCOztBQUdBOztJQUVJO1FBQ0ksdUJBQXVCO1FBQ3ZCLGtCQUFrQjtRQUNsQixjQUFjO1FBQ2QsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxXQUFXO1FBQ1gsWUFBWTtRQUNaLG1CQUFtQjtRQUNuQixnQkFBZ0I7UUFDaEIsVUFBVTtJQUNkOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZixtQ0FBbUM7SUFDdkM7O0lBRUE7O1FBRUksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUdBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7QUFFQTtJQUNJO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQjtJQUNKOztJQUVBOztRQUVJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG5cbi8qIERvY3VtZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGxpbmUgaGVpZ2h0IGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFByZXZlbnQgYWRqdXN0bWVudHMgb2YgZm9udCBzaXplIGFmdGVyIG9yaWVudGF0aW9uIGNoYW5nZXMgaW4gaU9TLlxuICovXG5cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7IC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmJvZHkge1xuICBtYXJnaW46IDA7XG59XG5cbi8qKlxuICogUmVuZGVyIHRoZSBgbWFpbmAgZWxlbWVudCBjb25zaXN0ZW50bHkgaW4gSUUuXG4gKi9cblxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cblxuaDEge1xuICBmb250LXNpemU6IDJlbTtcbiAgbWFyZ2luOiAwLjY3ZW0gMDtcbn1cblxuLyogR3JvdXBpbmcgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxuICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gKi9cblxuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xuICBoZWlnaHQ6IDA7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnByZSB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKiBUZXh0LWxldmVsIHNlbWFudGljc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGdyYXkgYmFja2dyb3VuZCBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5cbmFiYnJbdGl0bGVdIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICovXG5cbmIsXG5zdHJvbmcge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zbWFsbCB7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuXG4vKipcbiAqIFByZXZlbnQgYHN1YmAgYW5kIGBzdXBgIGVsZW1lbnRzIGZyb20gYWZmZWN0aW5nIHRoZSBsaW5lIGhlaWdodCBpblxuICogYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1YixcbnN1cCB7XG4gIGZvbnQtc2l6ZTogNzUlO1xuICBsaW5lLWhlaWdodDogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbnN1YiB7XG4gIGJvdHRvbTogLTAuMjVlbTtcbn1cblxuc3VwIHtcbiAgdG9wOiAtMC41ZW07XG59XG5cbi8qIEVtYmVkZGVkIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5pbWcge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbi8qIEZvcm1zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIENoYW5nZSB0aGUgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUmVtb3ZlIHRoZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICBtYXJnaW46IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQgeyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbixcbnNlbGVjdCB7IC8qIDEgKi9cbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5bdHlwZT1cImJ1dHRvblwiXSxcblt0eXBlPVwicmVzZXRcIl0sXG5bdHlwZT1cInN1Ym1pdFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJidXR0b25cIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInJlc2V0XCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi8qKlxuICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICovXG5cbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcblt0eXBlPVwiYnV0dG9uXCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJyZXNldFwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxubGVnZW5kIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICBkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xuICBtYXgtd2lkdGg6IDEwMCU7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMyAqL1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IHZlcnRpY2FsIGFsaWdubWVudCBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBPcGVyYS5cbiAqL1xuXG5wcm9ncmVzcyB7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFIDEwKy5cbiAqL1xuXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5cblt0eXBlPVwiY2hlY2tib3hcIl0sXG5bdHlwZT1cInJhZGlvXCJdIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxuICovXG5cblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICBoZWlnaHQ6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXG4gKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkOyAvKiAxICovXG4gIG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gKi9cblxuOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uOyAvKiAxICovXG4gIGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cbn1cblxuLyogSW50ZXJhY3RpdmVcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5cbmRldGFpbHMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdW1tYXJ5IHtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufVxuXG4vKiBNaXNjXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xuXG50ZW1wbGF0ZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gKi9cblxuW2hpZGRlbl0ge1xuICBkaXNwbGF5OiBub25lO1xufVxuIiwiQGltcG9ydCAnfm5vcm1hbGl6ZS5jc3MnO1xuXG5cbm5hdntcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgei1pbmRleDogNTtcbn1cblxuLm5hdmJhciB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgLyogbWF4LXdpZHRoOiAxNzUwcHg7ICovXG4gICAgbWF4LWhlaWdodDogNTJweDtcbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcbn1cblxudWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcblxuICAgIG9wYWNpdHk6IDA7XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwgbGkgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJyZW07ICAgIFxufVxuXG4uYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tcmVkKTtcbn1cblxuLm5vdC1hY3RpdmUge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXJnZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJ1cmdlci1hY3RpdmUge1xuICAgIGZpbGw6IHZhcigtLWRhcmstYmcpO1xufVxuXG4jdG9wLmJ1cmdlci1ub3QtYWN0aXZlIHtcbiAgICBhbmltYXRpb246IG5vdEFjdGl2ZSA2cyBpbmZpbml0ZTtcbn1cblxuI2JvdHRvbS5idXJnZXItbm90LWFjdGl2ZSAge1xuICAgIGFuaW1hdGlvbjogbm90QWN0aXZlIDRzIGluZmluaXRlO1xufVxuXG5cbkBrZXlmcmFtZXMgbm90QWN0aXZlIHtcbiAgICAwJSAgIHsgd2lkdGg6IDEwMCU7IH1cbiAgICA1MCUgIHsgd2lkdGg6IDgwJTsgfVxuICAgIDEwMCUgeyB3aWR0aDogMTAwJTsgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgLyogbWF4LXdpZHRoOiAxNTAwcHg7ICovXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIHVsIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07ICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dDtcbiAgICB9XG5cbiAgICB1bCBsaSBhOmhvdmVyLFxuICAgIHVsIGxpIGE6Zm9jdXMge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgIH0gICAgXG5cbiAgICAuYnVyZ2VyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgICAubmF2YmFyIHtcbiAgICAgICAgcGFkZGluZzogMXJlbSA2cmVtO1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgdWwgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxuXG4gICAgdWwgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gICAgXG4gICAgdWwgbGkgYSB7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtOyAgICBcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMjUwbXMgZWFzZS1pbi1vdXRcbiAgICB9XG5cbiAgICB1bCBsaSBhOmhvdmVyLFxuICAgIHVsIGxpIGE6Zm9jdXMge1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICAgIHdpZHRoOiA0NXB4O1xuICAgIH0gICAgXG5cbiAgICAuYnVyZ2VyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gICAgXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMjAwMHB4KSB7IFxuICAgIC5uYXZiYXIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDhyZW07XG4gICAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/project/project.component.ts":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api.service */ "./src/app/api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function ProjectComponent_span_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r3, ", ");
} }
function ProjectComponent_span_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r4, ", ");
} }
function ProjectComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const word_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r5, ", ");
} }
class ProjectComponent {
    // public frontEnd = this.project.frontEnd;
    constructor(apiService, _router, _route) {
        this.apiService = apiService;
        this._router = _router;
        this._route = _route;
    }
    ngOnInit() {
        const destination = document.getElementById('proj');
        destination.scrollIntoView({ block: 'start' });
        this._route.params.subscribe((params) => {
            console.log(params['id']);
            let observable = this.apiService.getProject(params['id']);
            // observable.subscribe(data => this.project = data)
            this.project = observable;
        });
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 40, vars: 11, consts: [["id", "proj", 1, "container", "project"], [1, "content"], [1, "one"], [3, "src", "alt"], [1, "two"], [1, "top"], ["target", "_blank", "rel", "\u201Dnoreferrer\u201D", 3, "href"], [1, "button-gray"], [1, "button-red"], [1, "sub-heading"], [4, "ngFor", "ngForOf"], [1, "bottom"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Technologies");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Front End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ProjectComponent_span_20_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Back End:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ProjectComponent_span_24_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Deployment:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ProjectComponent_span_28_Template, 2, 1, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.project.img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "", ctx.project.title, " image");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.project.codeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.project.demoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.frontEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.backEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.project.deployment);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.project.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.project.codeLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.project.demoLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".project[_ngcontent-%COMP%] {\n    \n    max-width: 900px;    \n    \n    min-height: 85vh;\n    padding-top: 68px;\n    margin: 0 auto;\n\n}\n\n\n.one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 10px;\n    margin: 1.5rem 0;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n    margin-bottom: 2rem;\n}\n\n\n.button-gray[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    margin-bottom: .5rem;\n    font-size: 24px;\n    color: var(--gray);\n}\n\n\n.two[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-bottom: 1rem;\n    line-height: 27px;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--dark-gray);\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.sub-heading[_ngcontent-%COMP%] {\n    color: var(--gray);   \n}\n\n\n.two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    \n    color: var(--dark-gray);\n    \n    line-height: 1.2rem;\n    line-height: 27px;\n}\n\n\n.bottom[_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n@media(min-width: 768px) {\n    .project[_ngcontent-%COMP%] {\n        padding-top: 79px;\n        display: flex;\n        align-items: center;\n        min-height: 85vh;\n    }\n    \n\n}\n\n\n@media(min-width: 1440px) {\n    .project[_ngcontent-%COMP%] {\n        max-width: 2000px;\n        \n        overflow: hidden;\n    }   \n\n    .top[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .bottom[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: top;\n    }\n\n    .one[_ngcontent-%COMP%] {\n        margin-right: 2rem;\n    }\n\n    .one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        \n        font-size: 3.5rem;\n    }\n\n\n    .one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0;\n        margin-top: 2rem;\n        max-width: 800px;\n    }\n\n    \n\n    .two[_ngcontent-%COMP%] { \n        margin-top: 6rem;\n        margin-left: 2rem;\n\n    }\n\n    button[_ngcontent-%COMP%] {\n        margin-top: 2rem;\n        padding: 1em 2em;\n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztBQUdKOzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCOzhCQUNzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsaUJBQWlCO0lBQ3JCO0FBQ0o7OztPQUdPOztJQUVIO1FBQ0ksU0FBUztRQUNULGdCQUFnQjtRQUNoQixnQkFBZ0I7SUFDcEI7O0lBRUE7OztNQUdFOztJQUVGO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9qZWN0IHtcbiAgICAvKiBwYWRkaW5nLWJvdHRvbTogMDsgKi9cbiAgICBtYXgtd2lkdGg6IDkwMHB4OyAgICBcbiAgICAvKiBtaW4taGVpZ2h0OiAxMDAlOyAqL1xuICAgIG1pbi1oZWlnaHQ6IDg1dmg7XG4gICAgcGFkZGluZy10b3A6IDY4cHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG5cbn1cblxuXG4ub25lIGltZyB7XG4gICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cblxuYnV0dG9uIHtcbiAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG59IFxuXG4uYnV0dG9uLWdyYXkge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuLnR3byBoMyB7XG4gICAgLyogbWFyZ2luLXRvcDogMXJlbTsgKi9cbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgY29sb3I6IHZhcigtLWdyYXkpO1xufVxuXG4udHdvIHVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xufVxuXG4udHdvIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBsaW5lLWhlaWdodDogMjdweDtcbn1cblxuLnR3byBsaSBzcGFuIHtcbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbn1cblxuLnR3byBsaSBzcGFuLnN1Yi1oZWFkaW5nIHtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7ICAgXG59XG5cbi50d28gcCB7IFxuICAgIC8qIGZvbnQtc2l6ZTogMTRweDsgKi9cbiAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICAvKiBjb2xvcjogIzdBN0I5MDsgKi9cbiAgICBsaW5lLWhlaWdodDogMS4ycmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4uYm90dG9tIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBwYWRkaW5nLXRvcDogNzlweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogODV2aDtcbiAgICB9XG4gICAgXG5cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnByb2plY3Qge1xuICAgICAgICBtYXgtd2lkdGg6IDIwMDBweDtcbiAgICAgICAgLyogZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgKi9cbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9ICAgXG5cbiAgICAudG9wIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYm90dG9tIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgLmNvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogdG9wO1xuICAgIH1cblxuICAgIC5vbmUge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XG4gICAgfVxuXG4gICAgLm9uZSBoMSB7XG4gICAgICAgIC8qIG1hcmdpbi10b3A6IDYuM3JlbTsgKi9cbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgfVxuLyogXG4gICAgIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XG4gICAgfSAqL1xuXG4gICAgLm9uZSBpbWcge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIG1heC13aWR0aDogODAwcHg7XG4gICAgfVxuXG4gICAgLyogaW1nIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAgKi9cblxuICAgIC50d28geyBcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG5cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICBtYXJnaW4tdG9wOiAycmVtO1xuICAgICAgICBwYWRkaW5nOiAxZW0gMmVtO1xuICAgIH0gXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.css']
            }]
    }], function () { return [{ type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


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
const environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/nicolasricaldi/angular/nicolas-ricaldi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map