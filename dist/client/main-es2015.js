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


class ApiService {
    constructor() {
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
    }
    getProject(_id) {
        const proj = this.projects[_id - 1];
        return proj;
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "./src/app/nav/nav.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "./src/app/project/project.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 19, vars: 1, consts: [["id", "footer"], [1, "footer-content"], ["routerLink", "", 3, "click"], [1, "copyright"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() { return ctx.scrollToElement("home"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() { return ctx.scrollToElement("about"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_14_listener() { return ctx.scrollToElement("work"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "work");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_17_listener() { return ctx.scrollToElement("contact"); });
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
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 16, vars: 0, consts: [["id", "about"], [1, "about-content", "container"], [1, "line"], [1, "title"], [1, "about-info"], [1, "who"], [1, "what"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["#about[_ngcontent-%COMP%] {\n    background: var(--dark-bg);\n    \n} \n\n.about-content[_ngcontent-%COMP%] {\n    \n    \n    max-width: 2000px;\n} \n\n.about-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n} \n\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    color: var(--dark-gray);\n    line-height: 28px;\n    font-size: 14px;\n} \n\n.who[_ngcontent-%COMP%] {\n    margin-bottom: 2rem\n} \n\n@media(min-width: 425px) {\n    #about[_ngcontent-%COMP%] {\n        background: var(--dark-bg);\n    }\n    \n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 28px;\n        font-size: 1rem;\n    }\n    \n    .who[_ngcontent-%COMP%] {\n        margin-bottom: 2rem\n    }\n} \n\n@media(min-width: 768px) {\n\n    .about-content[_ngcontent-%COMP%] {\n        \n    }\n    \n} \n\n@media(min-width: 1024px) {\n\n    #about[_ngcontent-%COMP%] {\n        height: 500px;\n        display: flex;\n        align-items: center;\n    }\n\n    .about-content[_ngcontent-%COMP%] {\n        \n        width: 100%;\n        \n    }\n    .about-info[_ngcontent-%COMP%] {   \n        display: flex;\n        justify-content: space-between;\n    }\n\n    .who[_ngcontent-%COMP%], .what[_ngcontent-%COMP%] {\n        max-width: 750px;\n        \n    }\n\n    .who[_ngcontent-%COMP%] {\n        padding-right: 1rem;\n    }\n    \n    .what[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n    }\n\n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 32px;\n        font-size: 1rem;\n    }\n    \n    \n} \n\n@media(min-width: 2000px) {\n    .about-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7QUFDSjs7QUFJQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUdBOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztBQUVKOztBQUVBOztJQUVJO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsV0FBVztRQUNYLHdCQUF3QjtJQUM1QjtJQUNBO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtJQUNsQzs7SUFFQTs7UUFFSSxnQkFBZ0I7O0lBRXBCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COzs7QUFHSjs7QUFHQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Fib3V0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrLWJnKTtcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xufSBcblxuLmFib3V0LWNvbnRlbnQge1xuICAgIC8qIHBhZGRpbmc6IDRyZW0gMnJlbTsgKi9cbiAgICAvKiBtYXgtd2lkdGg6IDE3NTBweDsgKi9cbiAgICBtYXgtd2lkdGg6IDIwMDBweDtcbn0gXG5cbi5hYm91dC1jb250ZW50IGgzIHtcbiAgICBtYXJnaW4tYm90dG9tOiAuNWVtO1xufVxuXG4uYWJvdXQtY29udGVudCBwIHsgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ud2hvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXG59XG5cblxuXG5AbWVkaWEobWluLXdpZHRoOiA0MjVweCkge1xuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtY29udGVudCBwIHsgXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAud2hvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxuICAgIH1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmFib3V0LWNvbnRlbnQge1xuICAgICAgICAvKiBwYWRkaW5nOiA1cmVtIDRyZW07ICovXG4gICAgfVxuICAgIFxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRlbnQge1xuICAgICAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogcGFkZGluZzogNXJlbSA2cmVtOyAqL1xuICAgIH1cbiAgICAuYWJvdXQtaW5mbyB7ICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAud2hvLFxuICAgIC53aGF0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLndobyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuICAgIFxuICAgIC53aGF0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC5hYm91dC1jb250ZW50IHAgeyBcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5hYm91dC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufSJdfQ== */"] });
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
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






class ContactComponent {
    constructor() {
        this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
        this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
        this.faDribbble = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDribbble"];
    }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 49, vars: 3, consts: [["id", "contact"], [1, "contact-content", "container"], [1, "line"], [1, "title"], [1, "flex-area"], ["action", "", "method", "POST", 1, "contact-form"], ["for", "name"], ["type", "text"], ["for", "email"], ["type", "email"], ["for", "message"], ["name", "message", "cols", "30", "rows", "6"], [1, "button-red"], [1, "my-info"], [1, "left"], [1, "info"], [1, "right"], ["href", "https://www.linkedin.com/in/nicolas-ricaldi/", "target", "_blank"], [1, "icons", 3, "icon"], ["href", "https://github.com/nricaldi", "target", "_blank"], ["href", "https://dribbble.com/nricaldi", "target", "_blank"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "message");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Send");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "e-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "nricaldi.nr@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "571-288-4243");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "social");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "fa-icon", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "location");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "D.C Metro Area");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDribbble);
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]], styles: ["#contact[_ngcontent-%COMP%] {\n    background: var(--gray);\n} \n\n.contact-content[_ngcontent-%COMP%] {\n    \n    padding-bottom: 0;\n    max-width: 2000px;\n} \n\n.contact-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n} \n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: .5rem;\n    display: block;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 10px;\n    margin-bottom: 1rem;\n    color: var(--main-bg);\n    font-size: 1rem;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    \n    box-shadow: 0 0 0 1pt var(--dark-gray);\n\n} \n\n.contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    resize: none;\n} \n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1em 3em;\n    margin-bottom: 2rem;\n    \n} \n\n.my-info[_ngcontent-%COMP%] {\n    background: var(--main-bg);\n    margin-left: -2rem;\n    margin-right: -2rem;\n    padding: 4rem 2rem;\n    \n    padding-bottom: 0;\n} \n\n.info[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    \n    \n} \n\n.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {   \n    color: var(--dark-gray);\n    margin-bottom: .5rem;\n} \n\n.right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n} \n\n.icons[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 1.5rem;\n    margin-right: 1rem;\n} \n\n@media(min-width: 450px) {\n    .my-info[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {   \n        font-size: 1.2rem;\n    }\n} \n\n@media(min-width: 768px) {\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 5rem 4rem;\n        padding-bottom: 0;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        margin-left: -4rem;\n        margin-right: -4rem;\n        padding: 4rem;\n    }\n} \n\n@media(min-width: 1024px) {\n\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 4rem 6rem;\n    }\n\n    .flex-area[_ngcontent-%COMP%] {\n        display: flex;\n        \n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        width: 50%;\n        max-width: 784px;\n        margin-right: 15%;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        \n        display: block;\n        margin: 0;\n        margin-top: -9rem;\n        margin-bottom: -4rem;\n        \n        padding: 12rem 6rem 4rem;\n    }\n} \n\n@media(min-width: 2000px) {\n    .contact-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n        padding: 4rem 8rem;\n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        margin-right: 20%;\n    }\n            \n    .my-info[_ngcontent-%COMP%] {\n        margin-top: -10rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsc0NBQXNDOztBQUUxQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5KTtcbn0gXG5cbi5jb250YWN0LWNvbnRlbnQge1xuICAgIC8qIHBhZGRpbmc6IDRyZW0gMnJlbSAwcmVtOyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG4uY29udGFjdC1jb250ZW50IC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmcpO1xufVxuXG5cbi5jb250YWN0LWZvcm0gbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXJlZCk7ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB0IHZhcigtLWRhcmstZ3JheSk7XG5cbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMWVtIDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG59XG5cbi5teS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnKTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMnJlbTtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gICAgLyogcGFkZGluZy1ib3R0b206IDFyZW07ICovXG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC8qIG1hcmdpbi1yaWdodDogMXJlbTsgKi9cbiAgICAvKiB3aWR0aDogNTAlOyAqL1xufVxuXG4uaW5mbyBoMyB7ICAgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5yaWdodCAuaW5mbzpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pY29ucyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICAubXktaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAuaW5mbyBwIHsgICBcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGVudCB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDRyZW0gNHJlbSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDRyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5teS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cmVtO1xuICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuY29udGFjdC1jb250ZW50IHtcbiAgICAgICAgLyogcGFkZGluZzogNHJlbSA0cmVtIDByZW07ICovXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gNnJlbTtcbiAgICB9XG5cbiAgICAuZmxleC1hcmVhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIH1cblxuICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDc4NHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICB9XG5cbiAgICAubXktaW5mbyB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDRyZW07ICovXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC05cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDRyZW07ICovXG4gICAgICAgIHBhZGRpbmc6IDEycmVtIDZyZW0gNHJlbTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jb250YWN0LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNHJlbSA4cmVtO1xuICAgIH1cblxuICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICB9XG4gICAgICAgICAgICBcbiAgICAubXktaW5mbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHJlbTtcbiAgICB9XG59ICJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


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
    } }, styles: [".main[_ngcontent-%COMP%] {\n    position: relative;\n    height: 65vh;\n    \n    \n    max-width: 2000px;\n    margin: 0 auto;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    overflow: hidden;\n}\n\n\n#nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #333540;\n    font-size: 5rem;\n}\n\n\n#nicolas[_ngcontent-%COMP%] {\n    left: -5%;\n    top: 15%;\n}\n\n\n#ricaldi[_ngcontent-%COMP%] {\n    right: -1%;\n    bottom: 10%;\n}\n\n\n.hero[_ngcontent-%COMP%] {\n    z-index: 2;\n}\n\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n    color: var(--dark-gray);\n}\n\n\n\n\n\n.hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n    margin-right: .5rem;\n}\n\n\n@-webkit-keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@-webkit-keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@media(min-width: 375px) {\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n        color: var(--dark-gray);\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 768px) {\n    .main[_ngcontent-%COMP%] {\n        height: 80vh;\n        padding: 0 4rem;\n    }\n    \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 1024px) {\n    .main[_ngcontent-%COMP%] {\n        height: 100vh;\n        padding: 0 6rem;\n    }\n \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 12rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n    \n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n}\n\n\n@media(min-width: 1750px) {\n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 18rem;\n    }\n\n    #nicolas[_ngcontent-%COMP%] {\n        left: 0;\n        top: 15%;\n    }\n    \n    #ricaldi[_ngcontent-%COMP%] {\n        right: 0;\n        bottom: 5%;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 2000px) {\n    .main[_ngcontent-%COMP%] {\n        padding: 0 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 5.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0FBQ1o7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7O0FBQ0E7Ozs7O0dBS0c7OztBQUVIO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLE9BQU8sV0FBVyxFQUFFO0lBQ3BCLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sV0FBVyxFQUFFO0FBQ3hCOzs7QUFKQTtJQUNJLE9BQU8sV0FBVyxFQUFFO0lBQ3BCLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sV0FBVyxFQUFFO0FBQ3hCOzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFFBQVE7UUFDUixVQUFVO0lBQ2Q7QUFDSjs7O0FBVkE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0o7OztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7QUFLQTtJQUNJOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMjAwcHg7ICovXG4gICAgLyogbWF4LXdpZHRoOiAxNzUwcHg7ICovXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiNuaWNvbGFzLFxuI3JpY2FsZGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzMzMzU0MDtcbiAgICBmb250LXNpemU6IDVyZW07XG59XG5cbiNuaWNvbGFzIHtcbiAgICBsZWZ0OiAtNSU7XG4gICAgdG9wOiAxNSU7XG59XG5cbiNyaWNhbGRpIHtcbiAgICByaWdodDogLTElO1xuICAgIGJvdHRvbTogMTAlO1xufVxuXG4uaGVybyB7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlcm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlcm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xufVxuLyogXG5idXR0b24ge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0gKi9cblxuLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgbmljayB7XG4gICAgMCUgICB7IHdpZHRoOiAxMDAlOyB9XG4gICAgNTAlICB7IHdpZHRoOiA4MCU7IH1cbiAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDM3NXB4KSB7XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgfVxuICAgIC5oZXJvIC5idXR0b24tcmVkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgIH1cbiAgICBcbiAgICAjbmljb2xhcyxcbiAgICAjcmljYWxkaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5oZXJvIC5idXR0b24tcmVkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbiBcblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDZyZW07XG4gICAgfVxuIFxuICAgICNuaWNvbGFzLFxuICAgICNyaWNhbGRpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuXG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufVxuXG5cblxuXG5AbWVkaWEobWluLXdpZHRoOiAxNzUwcHgpIHtcbiAgICAjbmljb2xhcyxcbiAgICAjcmljYWxkaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThyZW07XG4gICAgfVxuXG4gICAgI25pY29sYXMge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICB9XG4gICAgXG4gICAgI3JpY2FsZGkge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZzogMCA4cmVtO1xuICAgIH1cblxuICAgIC5oZXJvIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA1LjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufSJdfQ== */"], data: { animation: [
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");











class MainModule {
}
MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MainModule });
MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MainModule_Factory(t) { return new (t || MainModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, { declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
        _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                    _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class WorkComponent {
    constructor() { }
    ngOnInit() {
        const projects = document.querySelector('.anim');
        const observer = new IntersectionObserver((entries) => {
            console.log(entries);
            if (entries[0].intersectionRatio > 0) {
                // entries[0].target.style.animation
            }
        });
        observer.observe(projects);
    }
    showContent(el) {
        const parentElement = document.querySelector('.' + el);
        const childElement = parentElement.children[0];
        childElement.classList.toggle('show');
    }
}
WorkComponent.ɵfac = function WorkComponent_Factory(t) { return new (t || WorkComponent)(); };
WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkComponent, selectors: [["app-work"]], decls: 30, vars: 0, consts: [["id", "work"], [1, "work-content", "container"], [1, "line"], [1, "title"], [1, "proj-grid"], [1, "proj", "proj-1", "anim", 3, "mouseenter", "mouseleave"], [1, "proj-content"], ["routerLink", "project/1", 1, "button-red"], [1, "proj", "proj-2", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/2", 1, "button-red"], [1, "proj", "proj-3", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/3", 1, "button-red"], [1, "proj", "proj-4", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/4", 1, "button-red"]], template: function WorkComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".work-content[_ngcontent-%COMP%] {\n    max-width: 2000px;\n}\n\n\n.proj[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 280px;\n    background: var(--light-bg);\n    margin-bottom: 2rem;\n    border-radius: 10px;\n    \n    background-position: cover;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n}\n\n\n.proj[_ngcontent-%COMP%]:last-child{\n    margin-bottom: none;\n}\n\n\n.proj-1[_ngcontent-%COMP%] {\n    background: url('ini.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-2[_ngcontent-%COMP%] {\n    background: url('travel-buddy.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-3[_ngcontent-%COMP%] {\n    background: url('movie-rater.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-4[_ngcontent-%COMP%] {\n    background: url('osa.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-content[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.75);\n    \n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n}\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n@media(min-width: 768px) {\n\n    .proj[_ngcontent-%COMP%] {\n        height: 440px;\n        margin-bottom: 4rem;\n    }\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n}\n    \n}\n\n\n@media(min-width: 1024px) {\n    .proj-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: repeat(1fr, 5) ;\n        grid-gap: 2rem;\n    }\n\n    .proj[_ngcontent-%COMP%] {\n        height: 400px;\n        margin: 0;\n    }\n\n    .proj-1[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 1/3;\n    }\n    .proj-2[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 2/4;\n    }\n\n    .proj-3[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 3/5;\n    }\n    \n    .proj-4[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 4/6;\n    }\n\n    \n}\n\n\n@media(min-width: 1440px) {\n    .proj[_ngcontent-%COMP%] {\n        height: 500px;\n        margin: 0;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 4rem;\n    }\n    .proj-content[_ngcontent-%COMP%] {\n        opacity: 0;\n        transition: all 500ms ease-in-out;\n    }\n    \n    .show[_ngcontent-%COMP%] {\n        opacity: 1;\n    }\n\n}\n\n\n@media(min-width: 2000px) {\n    .work-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 6rem;\n    }\n\n\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1COztJQUVuQiwwQkFBMEI7O0lBRTFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksMEJBQThDO0lBQzlDLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUNBO0lBQ0ksbUNBQXVEO0lBQ3ZELHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUNBO0lBQ0ksa0NBQXNEO0lBQ3RELHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUNBO0lBQ0ksMEJBQThDO0lBQzlDLHNCQUFzQjtJQUN0QiwyQkFBMkI7QUFDL0I7OztBQUdBO0lBQ0ksK0JBQStCO0lBQy9CLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFHQTs7SUFFSTtRQUNJLGFBQWE7UUFDYixtQkFBbUI7SUFDdkI7OztBQUdKO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7QUFHQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLDhCQUE4QjtRQUM5QixtQ0FBbUM7UUFDbkMsY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBOzs7Ozs7O09BT0c7QUFDUDs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxVQUFVO1FBQ1YsaUNBQWlDO0lBQ3JDOztJQUVBO1FBQ0ksVUFBVTtJQUNkOztBQUVKOzs7QUFFQTtJQUNJO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7SUFDbEI7OztBQUdKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG5cbi5wcm9qIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJnKTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucHJvajpsYXN0LWNoaWxke1xuICAgIG1hcmdpbi1ib3R0b206IG5vbmU7XG59XG5cbi5wcm9qLTEge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy9pbmkucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvai0yIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvdHJhdmVsLWJ1ZGR5LnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2otMyB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL21vdmllLXJhdGVyLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuLnByb2otNCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL29zYS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuXG4ucHJvai1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAgIC8qIHBhZGRpbmc6IDEuNXJlbTsgICovXG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbi5wcm9qLWNvbnRlbnQgaDMge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcblxuICAgIC5wcm9qIHtcbiAgICAgICAgaGVpZ2h0OiA0NDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcbiAgICB9XG5cblxuLnByb2otY29udGVudCBoMyB7XG4gICAgZm9udC1zaXplOiAxLjc1cmVtO1xufVxuICAgIFxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5wcm9qLWdyaWQge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDFmciwgNSkgO1xuICAgICAgICBncmlkLWdhcDogMnJlbTtcbiAgICB9XG5cbiAgICAucHJvaiB7XG4gICAgICAgIGhlaWdodDogNDAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAucHJvai0xIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgZ3JpZC1yb3c6IDEvMztcbiAgICB9XG4gICAgLnByb2otMiB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgIGdyaWQtcm93OiAyLzQ7XG4gICAgfVxuXG4gICAgLnByb2otMyB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAxLzI7XG4gICAgICAgIGdyaWQtcm93OiAzLzU7XG4gICAgfVxuICAgIFxuICAgIC5wcm9qLTQge1xuICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICBncmlkLXJvdzogNC82O1xuICAgIH1cblxuICAgIC8qIC5wcm9qLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5zaG93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9ICovXG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogMTQ0MHB4KSB7XG4gICAgLnByb2oge1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG4gICAgLnByb2otZ3JpZCB7XG4gICAgICAgIGdyaWQtZ2FwOiA0cmVtO1xuICAgIH1cbiAgICAucHJvai1jb250ZW50IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xuICAgIH1cbiAgICBcbiAgICAuc2hvdyB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC53b3JrLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICB9XG5cbiAgICAucHJvai1ncmlkIHtcbiAgICAgICAgZ3JpZC1nYXA6IDZyZW07XG4gICAgfVxuXG5cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-work',
                templateUrl: './work.component.html',
                styleUrls: ['./work.component.css']
            }]
    }], function () { return []; }, null); })();


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
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], styles: ["html[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\n\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\n\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\n\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\n\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\n\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\n\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\n\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\n\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\n\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\n\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]{\n    background: var(--dark-bg);\n    position: fixed;\n    width: 100%;\n    z-index: 5;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    padding: 1rem 2rem;\n    display: flex;\n    justify-content: space-between;\n    \n    max-height: 52px;\n    max-width: 2000px;\n}\n\nul[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100vh;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 500ms ease-in-out;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 1rem;\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: var(--main-bg);\n    font-weight: bold;\n    font-size: 2rem;    \n}\n\n.active[_ngcontent-%COMP%] {\n    left: 0;\n    background: var(--red);\n}\n\n.not-active[_ngcontent-%COMP%] {\n    opacity: 0;\n    display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n    width: 30px;\n    cursor: pointer;\n}\n\n.burger[_ngcontent-%COMP%] {\n    cursor: pointer;\n    z-index: 9999;\n    transition: all 250ms ease-in-out;\n}\n\n.burger-active[_ngcontent-%COMP%] {\n    fill: var(--dark-bg);\n}\n\n#top.burger-not-active[_ngcontent-%COMP%] {\n    -webkit-animation: notActive 6s infinite;\n            animation: notActive 6s infinite;\n}\n\n#bottom.burger-not-active[_ngcontent-%COMP%]  {\n    -webkit-animation: notActive 4s infinite;\n            animation: notActive 4s infinite;\n}\n\n@-webkit-keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@media(min-width: 768px) {\n\n    .navbar[_ngcontent-%COMP%] {\n        \n        padding: 1rem 4rem;\n        margin: 0 auto;\n        max-height: 64px;\n    }\n\n    ul[_ngcontent-%COMP%] {\n        position: relative;\n        left: 0;\n        width: auto;\n        height: auto;\n        flex-direction: row;\n        transition: none;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 1rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1rem;    \n        transition: color 250ms ease-in-out\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 1024px) {\n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 6rem;\n    }\n}\n\n@media(min-width: 1440px) {\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 2rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1.1rem;    \n        transition: color 250ms ease-in-out\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 2000px) { \n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 8rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUN6VkE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUdBO0lBQ0ksT0FBTyxXQUFXLEVBQUU7SUFDcEIsT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxXQUFXLEVBQUU7QUFDeEI7O0FBSkE7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFdBQVcsRUFBRTtBQUN4Qjs7QUFHQTs7SUFFSTtRQUNJLHVCQUF1QjtRQUN2QixrQkFBa0I7UUFDbEIsY0FBYztRQUNkLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLHFCQUFxQjtRQUNyQixTQUFTO1FBQ1Qsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQix1QkFBdUI7UUFDdkIsZ0JBQWdCO1FBQ2hCLGVBQWU7UUFDZjtJQUNKOztJQUVBOztRQUVJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksa0JBQWtCO0lBQ3RCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakI7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyohIG5vcm1hbGl6ZS5jc3MgdjguMC4xIHwgTUlUIExpY2Vuc2UgfCBnaXRodWIuY29tL25lY29sYXMvbm9ybWFsaXplLmNzcyAqL1xuXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBsaW5lIGhlaWdodCBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBQcmV2ZW50IGFkanVzdG1lbnRzIG9mIGZvbnQgc2l6ZSBhZnRlciBvcmllbnRhdGlvbiBjaGFuZ2VzIGluIGlPUy5cbiAqL1xuXG5odG1sIHtcbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG59XG5cbi8qIFNlY3Rpb25zXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5ib2R5IHtcbiAgbWFyZ2luOiAwO1xufVxuXG4vKipcbiAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICovXG5cbm1haW4ge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBmb250IHNpemUgYW5kIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzIHdpdGhpbiBgc2VjdGlvbmAgYW5kXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICovXG5cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxuICovXG5cbmhyIHtcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIDEgKi9cbiAgaGVpZ2h0OiAwOyAvKiAxICovXG4gIG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07IC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmEge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuLyoqXG4gKiAxLiBSZW1vdmUgdGhlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LVxuICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuXG5iLFxuc3Ryb25nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmNvZGUsXG5rYmQsXG5zYW1wIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuXG5zdWIsXG5zdXAge1xuICBmb250LXNpemU6IDc1JTtcbiAgbGluZS1oZWlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG5zdWIge1xuICBib3R0b206IC0wLjI1ZW07XG59XG5cbnN1cCB7XG4gIHRvcDogLTAuNWVtO1xufVxuXG4vKiBFbWJlZGRlZCBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gKi9cblxuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiAxLiBDaGFuZ2UgdGhlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCxcbm9wdGdyb3VwLFxuc2VsZWN0LFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xuICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cbiAgbWFyZ2luOiAwOyAvKiAyICovXG59XG5cbi8qKlxuICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxuICovXG5cbmJ1dHRvbixcbmlucHV0IHsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b24sXG5zZWxlY3QgeyAvKiAxICovXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TIGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuW3R5cGU9XCJidXR0b25cIl0sXG5bdHlwZT1cInJlc2V0XCJdLFxuW3R5cGU9XCJzdWJtaXRcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIGJvcmRlciBhbmQgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwiYnV0dG9uXCJdOjotbW96LWZvY3VzLWlubmVyLFxuW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwic3VibWl0XCJdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuXG5idXR0b246LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cImJ1dHRvblwiXTotbW96LWZvY3VzcmluZyxcblt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInN1Ym1pdFwiXTotbW96LWZvY3VzcmluZyB7XG4gIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cblxuZmllbGRzZXQge1xuICBwYWRkaW5nOiAwLjM1ZW0gMC43NWVtIDAuNjI1ZW07XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgdGV4dCB3cmFwcGluZyBpbiBFZGdlIGFuZCBJRS5cbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAqIDMuIFJlbW92ZSB0aGUgcGFkZGluZyBzbyBkZXZlbG9wZXJzIGFyZSBub3QgY2F1Z2h0IG91dCB3aGVuIHRoZXkgemVybyBvdXRcbiAqICAgIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7IC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDsgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cblxucHJvZ3Jlc3Mge1xuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBkZWZhdWx0IHZlcnRpY2FsIHNjcm9sbGJhciBpbiBJRSAxMCsuXG4gKi9cblxudGV4dGFyZWEge1xuICBvdmVyZmxvdzogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC5cbiAqIDIuIFJlbW92ZSB0aGUgcGFkZGluZyBpbiBJRSAxMC5cbiAqL1xuXG5bdHlwZT1cImNoZWNrYm94XCJdLFxuW3R5cGU9XCJyYWRpb1wiXSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgcGFkZGluZzogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAqL1xuXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcblt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuXG5bdHlwZT1cInNlYXJjaFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuICovXG5cbjo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xuICBmb250OiBpbmhlcml0OyAvKiAyICovXG59XG5cbi8qIEludGVyYWN0aXZlXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gRWRnZSwgSUUgMTArLCBhbmQgRmlyZWZveC5cbiAqL1xuXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3VtbWFyeSB7XG4gIGRpc3BsYXk6IGxpc3QtaXRlbTtcbn1cblxuLyogTWlzY1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCsuXG4gKi9cblxudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5cbltoaWRkZW5dIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbiIsIkBpbXBvcnQgJ35ub3JtYWxpemUuY3NzJztcblxuXG5uYXZ7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHotaW5kZXg6IDU7XG59XG5cbi5uYXZiYXIge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMXJlbSAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIC8qIG1heC13aWR0aDogMTc1MHB4OyAqL1xuICAgIG1heC1oZWlnaHQ6IDUycHg7XG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG59XG5cbnVsIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbnVsIGxpIHtcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgbWFyZ2luOiAxcmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwgbGkgYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDJyZW07ICAgIFxufVxuXG4uYWN0aXZlIHtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLXJlZCk7XG59XG5cbi5ub3QtYWN0aXZlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5sb2dvIHtcbiAgICB3aWR0aDogMzBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5idXJnZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB6LWluZGV4OiA5OTk5O1xuICAgIHRyYW5zaXRpb246IGFsbCAyNTBtcyBlYXNlLWluLW91dDtcbn1cblxuLmJ1cmdlci1hY3RpdmUge1xuICAgIGZpbGw6IHZhcigtLWRhcmstYmcpO1xufVxuXG4jdG9wLmJ1cmdlci1ub3QtYWN0aXZlIHtcbiAgICBhbmltYXRpb246IG5vdEFjdGl2ZSA2cyBpbmZpbml0ZTtcbn1cblxuI2JvdHRvbS5idXJnZXItbm90LWFjdGl2ZSAge1xuICAgIGFuaW1hdGlvbjogbm90QWN0aXZlIDRzIGluZmluaXRlO1xufVxuXG5cbkBrZXlmcmFtZXMgbm90QWN0aXZlIHtcbiAgICAwJSAgIHsgd2lkdGg6IDEwMCU7IH1cbiAgICA1MCUgIHsgd2lkdGg6IDgwJTsgfVxuICAgIDEwMCUgeyB3aWR0aDogMTAwJTsgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgLyogbWF4LXdpZHRoOiAxNTAwcHg7ICovXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIHVsIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07ICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dFxuICAgIH1cblxuICAgIHVsIGxpIGE6aG92ZXIsXG4gICAgdWwgbGkgYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfSAgICBcblxuICAgIC5idXJnZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDZyZW07XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICB1bCBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICB1bCBsaSBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07ICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dFxuICAgIH1cblxuICAgIHVsIGxpIGE6aG92ZXIsXG4gICAgdWwgbGkgYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfSAgICBcblxuICAgIC5idXJnZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAyMDAwcHgpIHsgXG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gOHJlbTtcbiAgICB9XG59Il19 */"] });
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
        this._route.params.subscribe((params) => {
            console.log(params['id']);
            let observable = this.apiService.getProject(params['id']);
            // observable.subscribe(data => this.project = data)
            this.project = observable;
        });
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 40, vars: 11, consts: [[1, "container", "project"], [1, "content"], [1, "one"], [3, "src", "alt"], [1, "two"], [1, "top"], ["target", "_blank", 3, "href"], [1, "button-gray"], [1, "button-red"], [1, "sub-heading"], [4, "ngFor", "ngForOf"], [1, "bottom"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: [".project[_ngcontent-%COMP%] {\n    \n    max-width: 900px;    \n    \n    min-height: 85vh;\n    padding-top: 68px;\n    margin: 0 auto;\n\n}\n\n\n.one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 10px;\n    margin: 1.5rem 0;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n    margin-bottom: 2rem;\n}\n\n\n.button-gray[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    margin-bottom: .5rem;\n    font-size: 24px;\n    color: var(--gray);\n}\n\n\n.two[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-bottom: 1rem;\n    line-height: 27px;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--dark-gray);\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.sub-heading[_ngcontent-%COMP%] {\n    color: var(--gray);   \n}\n\n\n.two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    \n    color: var(--dark-gray);\n    \n    line-height: 1.2rem;\n    line-height: 27px;\n}\n\n\n.bottom[_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n@media(min-width: 768px) {\n    .project[_ngcontent-%COMP%] {\n        padding-top: 79px;\n        display: flex;\n        align-items: center;\n        min-height: 85vh;\n    }\n    \n\n}\n\n\n@media(min-width: 1440px) {\n    .project[_ngcontent-%COMP%] {\n        max-width: 2000px;\n        \n        overflow: hidden;\n    }   \n\n    .top[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .bottom[_ngcontent-%COMP%] {\n        display: block;\n    }\n    \n\n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: top;\n    }\n\n    .one[_ngcontent-%COMP%] {\n        margin-right: 2rem;\n    }\n\n    .one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        \n        font-size: 3.5rem;\n    }\n\n\n    .one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0;\n        margin-top: 2rem;\n        max-width: 800px;\n    }\n\n    \n    .two[_ngcontent-%COMP%] { \n        margin-top: 6rem;\n        margin-left: 2rem;\n\n    }\n\n    button[_ngcontent-%COMP%] {\n        \n        margin-top: 2rem;\n        padding: 1em 2em;\n        \n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztBQUdKOzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCOzhCQUNzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7O0lBR0E7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGlCQUFpQjtJQUNyQjtBQUNKOzs7T0FHTzs7SUFFSDtRQUNJLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBOzs7TUFHRTtJQUNGO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAwOyAqL1xuICAgIG1heC13aWR0aDogOTAwcHg7ICAgIFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMCU7ICovXG4gICAgbWluLWhlaWdodDogODV2aDtcbiAgICBwYWRkaW5nLXRvcDogNjhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxufVxuXG5cbi5vbmUgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0gXG5cbi5idXR0b24tZ3JheSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4udHdvIGgzIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAxcmVtOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi50d28gdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50d28gbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4udHdvIGxpIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xufVxuXG4udHdvIGxpIHNwYW4uc3ViLWhlYWRpbmcge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTsgICBcbn1cblxuLnR3byBwIHsgXG4gICAgLyogZm9udC1zaXplOiAxNHB4OyAqL1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgIC8qIGNvbG9yOiAjN0E3QjkwOyAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5ib3R0b20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3OXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiA4NXZoO1xuICAgIH1cbiAgICBcblxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIG1heC13aWR0aDogMjAwMHB4O1xuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH0gICBcblxuICAgIC50b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAgfVxuXG4gICAgLm9uZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAub25lIGgxIHtcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNi4zcmVtOyAqL1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4vKiBcbiAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9ICovXG5cbiAgICAub25lIGltZyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB9XG5cbiAgICAvKiBpbWcge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgICAqL1xuICAgIC50d28geyBcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG5cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiA2LjNyZW07ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDJyZW07ICovXG4gICAgfSBcbn0iXX0= */"] });
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

module.exports = __webpack_require__(/*! /Users/nicolasricaldi/nicolas-ricaldi/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map