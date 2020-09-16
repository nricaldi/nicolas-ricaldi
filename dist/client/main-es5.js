(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/api.service.ts":
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService() {
          _classCallCheck(this, ApiService);

          this.projects = [{
            'title': 'INI Services',
            'description': "Developed from concept to completion for a home improvement company. Used javascript for all animations. Used Ajax to prevent page reload when submitting form. Django handles contact form submission and sends it to the client's email and the review creation. Used responsive design",
            'img': '../../assets/img/ini.png',
            'frontEnd': ['HTML', 'CSS', 'JavaScript', 'GSAP', 'AJAX', 'JQUERY'],
            'backEnd': ['Python', 'Django'],
            'deployment': ['Linode Linux cloud server'],
            'demoLink': 'https://www.iniservices.com/',
            'codeLink': 'https://github.com/nricaldi/ini'
          }, {
            'title': 'Travel Buddy',
            'description': "Responsive travel planner app where users can register and login, they can create a trip with start date and end date, view other users trips and join other users trips.",
            'img': '../../assets/img/travel-buddy.png',
            'frontEnd': ['HTML', 'CSS', 'JavaScript'],
            'backEnd': ['Python', 'Django'],
            'deployment': ['AWS EC2 server'],
            'demoLink': 'http://18.223.149.119/',
            'codeLink': 'https://github.com/nricaldi/travel-buddy'
          }, {
            'title': 'Movie Rater',
            'description': "Front end app using angular. Users can create, update and delete movies. Users can also rate movies and view the average rating. Back end api created using Django REST framework. Users can create, update and delete movies. Users can also rate movies and view the average rating.",
            'img': '../../assets/img/movie-rater.png',
            'frontEnd': ['Angular'],
            'backEnd': ['Python', 'Django', 'Django REST framework'],
            'deployment': ['Firebase', 'Heroku'],
            'demoLink': 'https://movie-rater-bb900.web.app/auth',
            'codeLink': 'https://github.com/nricaldi/movieRater'
          }, {
            'title': 'OSA',
            'description': "Designed the site for a local martial arts school. Used responsive design",
            'img': '../../assets/img/osa.png',
            'frontEnd': ['HTML', 'CSS', 'JavaScript', 'JQUERY'],
            'backEnd': ['None'],
            'deployment': ['Github pages'],
            'demoLink': 'https://nricaldi.github.io/osa/',
            'codeLink': 'https://github.com/nricaldi/osa'
          }];
        }

        _createClass(ApiService, [{
          key: "getProject",
          value: function getProject(_id) {
            var proj = this.projects[_id - 1];
            return proj;
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)();
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _main_main_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _project_project_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./project/project.component */
      "./src/app/project/project.component.ts");

      var routes = [{
        path: '',
        pathMatch: 'full',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_2__["MainComponent"]
      }, {
        path: 'project/:id',
        component: _project_project_component__WEBPACK_IMPORTED_MODULE_3__["ProjectComponent"]
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./nav/nav.component */
      "./src/app/nav/nav.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'client';
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 4,
        vars: 0,
        consts: [[1, "router"], [1, "footer"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
        styles: [".router[_ngcontent-%COMP%] {\n    position: relative;\n    min-height: 100vh;\n    padding-bottom: 150px;\n}\n\n.footer[_ngcontent-%COMP%] {   \n    position: absolute;\n    width: 100%;\n    bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4ucm91dGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgcGFkZGluZy1ib3R0b206IDE1MHB4O1xufVxuXG4uZm9vdGVyIHsgICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYm90dG9tOiAwO1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _main_main_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main/main.module */
      "./src/app/main/main.module.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./nav/nav.component */
      "./src/app/nav/nav.component.ts");
      /* harmony import */


      var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./footer/footer.component */
      "./src/app/footer/footer.component.ts");
      /* harmony import */


      var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./project/project.component */
      "./src/app/project/project.component.ts");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _main_main_module__WEBPACK_IMPORTED_MODULE_2__["MainModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_8__["FontAwesomeModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/footer/footer.component.ts":
    /*!********************************************!*\
      !*** ./src/app/footer/footer.component.ts ***!
      \********************************************/

    /*! exports provided: FooterComponent */

    /***/
    function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);

          this.year = new Date().getFullYear();
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "scrollToElement",
          value: function scrollToElement(element) {
            var destination = document.getElementById(element);
            console.log(element);
            if (destination) destination.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 19,
        vars: 1,
        consts: [["id", "footer"], [1, "footer-content"], ["routerLink", "", 3, "click"], [1, "copyright"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_4_listener() {
              return ctx.scrollToElement("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_7_listener() {
              return ctx.scrollToElement("about");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_14_listener() {
              return ctx.scrollToElement("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_a_click_17_listener() {
              return ctx.scrollToElement("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\t\xA9 Copyright Nicolas Ricaldi ", ctx.year, "");
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
        styles: ["#footer[_ngcontent-%COMP%] {\n    background: var(--main-bg);\n}\n\n.footer-content[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 2rem 0;\n}\n\n.logo-blue[_ngcontent-%COMP%] {\n    width: 100px;\n}\n\nul[_ngcontent-%COMP%] {\n    display: none;\n}\n\n.copyright[_ngcontent-%COMP%] {\n    background: url('logo-blue.svg') no-repeat;\n    background-position: center;\n    padding: 2rem 0;\n}\n\n@media(min-width: 1024px) {\n    .footer-content[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .copyright[_ngcontent-%COMP%] {\n        margin: 0 3rem;\n    }\n\n    ul[_ngcontent-%COMP%] {\n        display: block;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0 1rem;\n        font-weight: 600;\n        cursor: pointer\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        color: var(--dark-gray)\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLDBDQUEyRDtJQUMzRCwyQkFBMkI7SUFDM0IsZUFBZTtBQUNuQjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQix1QkFBdUI7SUFDM0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsY0FBYztRQUNkLGdCQUFnQjtRQUNoQjtJQUNKOztJQUVBO1FBQ0k7SUFDSjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zvb3RlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1iZyk7XG59XG5cbi5mb290ZXItY29udGVudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuLmxvZ28tYmx1ZSB7XG4gICAgd2lkdGg6IDEwMHB4O1xufVxuXG51bCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmNvcHlyaWdodCB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ28tYmx1ZS5zdmcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW0gMDtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLmZvb3Rlci1jb250ZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmNvcHlyaWdodCB7XG4gICAgICAgIG1hcmdpbjogMCAzcmVtO1xuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgdWwgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgbWFyZ2luOiAwIDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlclxuICAgIH1cblxuICAgIHVsIGxpIGEge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KVxuICAgIH1cbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/about/about.component.ts":
    /*!***********************************************!*\
      !*** ./src/app/main/about/about.component.ts ***!
      \***********************************************/

    /*! exports provided: AboutComponent */

    /***/
    function srcAppMainAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
        return AboutComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AboutComponent = /*#__PURE__*/function () {
        function AboutComponent() {
          _classCallCheck(this, AboutComponent);
        }

        _createClass(AboutComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var aboutSubs = document.querySelectorAll('.about-anim');
            var observer = new IntersectionObserver(function (entries) {
              console.log(aboutSubs);
              var i = 1;
              entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                  entry.target.classList.add('about-animation' + i);
                  i++;
                } else {// entry.target.classList.remove('about-animation'+i);
                }
              }); // i = 1;
            });
            aboutSubs.forEach(function (aboutSub) {
              observer.observe(aboutSub);
            });
          }
        }]);

        return AboutComponent;
      }();

      AboutComponent.ɵfac = function AboutComponent_Factory(t) {
        return new (t || AboutComponent)();
      };

      AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AboutComponent,
        selectors: [["app-about"]],
        decls: 16,
        vars: 0,
        consts: [["id", "about"], [1, "about-content", "container"], [1, "line"], [1, "title"], [1, "about-info"], [1, "who", "about-anim"], [1, "what", "about-anim"]],
        template: function AboutComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }
        },
        styles: ["#about[_ngcontent-%COMP%] {\n    background: var(--dark-bg);\n    \n} \n\n.about-content[_ngcontent-%COMP%] {\n    \n    \n    max-width: 2000px;\n} \n\n.about-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: .5em;\n} \n\n.about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    color: var(--dark-gray);\n    line-height: 28px;\n    font-size: 14px;\n    \n} \n\n.who[_ngcontent-%COMP%] {\n    margin-bottom: 2rem\n} \n\n@media(min-width: 425px) {\n    #about[_ngcontent-%COMP%] {\n        background: var(--dark-bg);\n    }\n    \n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 28px;\n        font-size: 1rem;\n    }\n    \n    .who[_ngcontent-%COMP%] {\n        margin-bottom: 2rem\n    }\n} \n\n \n\n@media(min-width: 1024px) {\n\n    #about[_ngcontent-%COMP%] {\n        height: 500px;\n        display: flex;\n        align-items: center;\n    }\n\n    .about-content[_ngcontent-%COMP%] {\n        \n        width: 100%;\n        \n    }\n    .about-info[_ngcontent-%COMP%] {   \n        display: flex;\n        justify-content: space-between;\n    }\n\n    .who[_ngcontent-%COMP%], .what[_ngcontent-%COMP%] {\n        max-width: 750px;\n        \n    }\n\n    .who[_ngcontent-%COMP%] {\n        padding-right: 1rem;\n    }\n    \n    .what[_ngcontent-%COMP%] {\n        padding-left: 1rem;\n    }\n\n    .about-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n        color: var(--dark-gray);\n        line-height: 32px;\n        font-size: 1rem;\n    }\n    \n    \n} \n\n@media(min-width: 2000px) {\n    .about-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n} \n\n.about-anim[_ngcontent-%COMP%] {\n    opacity: 0;\n} \n\n.about-animation1[_ngcontent-%COMP%] {\n    -webkit-animation: aboutAnimation 2s .25s forwards ease-out;\n            animation: aboutAnimation 2s .25s forwards ease-out;\n} \n\n.about-animation2[_ngcontent-%COMP%] {\n    -webkit-animation: aboutAnimation 2s .5s forwards ease-out;\n            animation: aboutAnimation 2s .5s forwards ease-out;\n} \n\n@-webkit-keyframes aboutAnimation{\n    from {\n        \n        opacity: 0;\n    }\n    to {\n        \n        opacity: 1;\n    }\n} \n\n@keyframes aboutAnimation{\n    from {\n        \n        opacity: 0;\n    }\n    to {\n        \n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0k7QUFDSjs7QUFJQTtJQUNJO1FBQ0ksMEJBQTBCO0lBQzlCOztJQUVBO1FBQ0ksdUJBQXVCO1FBQ3ZCLGlCQUFpQjtRQUNqQixlQUFlO0lBQ25COztJQUVBO1FBQ0k7SUFDSjtBQUNKOztBQUdBOzs7Ozs7R0FNRzs7QUFFSDs7SUFFSTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOztJQUVBO1FBQ0ksbUJBQW1CO1FBQ25CLFdBQVc7UUFDWCx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7O1FBRUksZ0JBQWdCOztJQUVwQjs7SUFFQTtRQUNJLG1CQUFtQjtJQUN2Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLHVCQUF1QjtRQUN2QixpQkFBaUI7UUFDakIsZUFBZTtJQUNuQjs7O0FBR0o7O0FBR0E7SUFDSTtRQUNJLGNBQWM7SUFDbEI7QUFDSjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFHQTtJQUNJLDJEQUFtRDtZQUFuRCxtREFBbUQ7QUFDdkQ7O0FBRUE7SUFDSSwwREFBa0Q7WUFBbEQsa0RBQWtEO0FBQ3REOztBQUdBO0lBQ0k7UUFDSSxpQ0FBaUM7UUFDakMsVUFBVTtJQUNkO0lBQ0E7UUFDSSw4QkFBOEI7UUFDOUIsVUFBVTtJQUNkO0FBQ0o7O0FBVEE7SUFDSTtRQUNJLGlDQUFpQztRQUNqQyxVQUFVO0lBQ2Q7SUFDQTtRQUNJLDhCQUE4QjtRQUM5QixVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNhYm91dCB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tZGFyay1iZyk7XG4gICAgLyogZGlzcGxheTogZmxleDsgKi9cbn0gXG5cbi5hYm91dC1jb250ZW50IHtcbiAgICAvKiBwYWRkaW5nOiA0cmVtIDJyZW07ICovXG4gICAgLyogbWF4LXdpZHRoOiAxNzUwcHg7ICovXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG59IFxuXG4uYWJvdXQtY29udGVudCBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVlbTtcbn1cblxuLmFib3V0LWNvbnRlbnQgcCB7IFxuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAvKiBvcGFjaXR5OiAwOyAqL1xufVxuXG4ud2hvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtXG59XG5cblxuXG5AbWVkaWEobWluLXdpZHRoOiA0MjVweCkge1xuICAgICNhYm91dCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xuICAgIH1cbiAgICBcbiAgICAuYWJvdXQtY29udGVudCBwIHsgXG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cbiAgICBcbiAgICAud2hvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMnJlbVxuICAgIH1cbn1cblxuXG4vKiBAbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLmFib3V0LWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDRyZW07XG4gICAgfVxuICAgIFxufSAqL1xuXG5AbWVkaWEobWluLXdpZHRoOiAxMDI0cHgpIHtcblxuICAgICNhYm91dCB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmFib3V0LWNvbnRlbnQge1xuICAgICAgICAvKiBoZWlnaHQ6IDUwMHB4OyAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogcGFkZGluZzogNXJlbSA2cmVtOyAqL1xuICAgIH1cbiAgICAuYWJvdXQtaW5mbyB7ICAgXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAud2hvLFxuICAgIC53aGF0IHtcbiAgICAgICAgbWF4LXdpZHRoOiA3NTBweDtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLndobyB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgfVxuICAgIFxuICAgIC53aGF0IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgIH1cblxuICAgIC5hYm91dC1jb250ZW50IHAgeyBcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuICAgIFxuICAgIFxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5hYm91dC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxufVxuXG4uYWJvdXQtYW5pbSB7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuXG4uYWJvdXQtYW5pbWF0aW9uMSB7XG4gICAgYW5pbWF0aW9uOiBhYm91dEFuaW1hdGlvbiAycyAuMjVzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG4uYWJvdXQtYW5pbWF0aW9uMiB7XG4gICAgYW5pbWF0aW9uOiBhYm91dEFuaW1hdGlvbiAycyAuNXMgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cblxuQGtleWZyYW1lcyBhYm91dEFuaW1hdGlvbntcbiAgICBmcm9tIHtcbiAgICAgICAgLyogdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMHB4KSAqL1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwKTsgKi9cbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-about',
            templateUrl: './about.component.html',
            styleUrls: ['./about.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/contact/contact.component.ts":
    /*!***************************************************!*\
      !*** ./src/app/main/contact/contact.component.ts ***!
      \***************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function srcAppMainContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @fortawesome/free-brands-svg-icons */
      "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

      var ContactComponent = /*#__PURE__*/function () {
        function ContactComponent() {
          _classCallCheck(this, ContactComponent);

          this.faLinkedin = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faLinkedin"];
          this.faGithub = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faGithub"];
          this.faDribbble = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faDribbble"];
        }

        _createClass(ContactComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ContactComponent;
      }();

      ContactComponent.ɵfac = function ContactComponent_Factory(t) {
        return new (t || ContactComponent)();
      };

      ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ContactComponent,
        selectors: [["app-contact"]],
        decls: 49,
        vars: 3,
        consts: [["id", "contact"], [1, "contact-content", "container"], [1, "line"], [1, "title"], [1, "flex-area"], ["action", "", "method", "POST", 1, "contact-form"], ["for", "name"], ["type", "text"], ["for", "email"], ["type", "email"], ["for", "message"], ["name", "message", "cols", "30", "rows", "6"], [1, "button-red"], [1, "my-info"], [1, "left"], [1, "info"], [1, "right"], ["href", "https://www.linkedin.com/in/nicolas-ricaldi/", "target", "_blank"], [1, "icons", 3, "icon"], ["href", "https://github.com/nricaldi", "target", "_blank"], ["href", "https://dribbble.com/nricaldi", "target", "_blank"]],
        template: function ContactComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](39);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faLinkedin);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faGithub);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faDribbble);
          }
        },
        directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
        styles: ["#contact[_ngcontent-%COMP%] {\n    background: var(--gray);\n} \n\n.contact-content[_ngcontent-%COMP%] {\n    \n    padding-bottom: 0;\n    max-width: 2000px;\n} \n\n.contact-content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n} \n\n.contact-form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    color: var(--main-bg);\n    font-weight: 600;\n    font-size: 1rem;\n    margin-bottom: .5rem;\n    display: block;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    border: none;\n    width: 100%;\n    padding: 1rem;\n    border-radius: 10px;\n    margin-bottom: 1rem;\n    color: var(--main-bg);\n    font-size: 1rem;\n} \n\n.contact-form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, .contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    \n    box-shadow: 0 0 0 1pt var(--dark-gray);\n\n} \n\n.contact-form[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    resize: none;\n} \n\n.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 1em 3em;\n    margin-bottom: 2rem;\n    \n} \n\n.my-info[_ngcontent-%COMP%] {\n    background: var(--main-bg);\n    margin-left: -2rem;\n    margin-right: -2rem;\n    padding: 4rem 2rem;\n    \n    padding-bottom: 0;\n} \n\n.info[_ngcontent-%COMP%] {\n    margin-bottom: 2rem;\n    \n    \n} \n\n.info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {   \n    color: var(--dark-gray);\n    margin-bottom: .5rem;\n} \n\n.right[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]:last-child {\n    margin: 0;\n} \n\n.icons[_ngcontent-%COMP%] {\n    cursor: pointer;\n    font-size: 1.5rem;\n    margin-right: 1rem;\n} \n\n@media(min-width: 450px) {\n    .my-info[_ngcontent-%COMP%] {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {   \n        font-size: 1.2rem;\n    }\n} \n\n@media(min-width: 768px) {\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 5rem 4rem;\n        padding-bottom: 0;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        margin-left: -4rem;\n        margin-right: -4rem;\n        padding: 4rem;\n    }\n} \n\n@media(min-width: 1024px) {\n\n    .contact-content[_ngcontent-%COMP%] {\n        \n        padding: 4rem 6rem;\n    }\n\n    .flex-area[_ngcontent-%COMP%] {\n        display: flex;\n        \n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        width: 50%;\n        max-width: 784px;\n        margin-right: 15%;\n    }\n\n    .my-info[_ngcontent-%COMP%] {\n        \n        display: block;\n        margin: 0;\n        margin-top: -9rem;\n        margin-bottom: -4rem;\n        \n        padding: 12rem 6rem 4rem;\n    }\n} \n\n@media(min-width: 2000px) {\n    .contact-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n        padding: 4rem 8rem;\n    }\n\n    .contact-form[_ngcontent-%COMP%] {\n        margin-right: 20%;\n    }\n            \n    .my-info[_ngcontent-%COMP%] {\n        margin-top: -10rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixpQkFBaUI7SUFDakIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUdBO0lBQ0kscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2Ysb0JBQW9CO0lBQ3BCLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixxQkFBcUI7SUFDckIsZUFBZTtBQUNuQjs7QUFFQTs7SUFFSSxtQ0FBbUM7SUFDbkMsc0NBQXNDOztBQUUxQzs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksNkJBQTZCO1FBQzdCLGtCQUFrQjtRQUNsQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLGFBQWE7SUFDakI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLDZCQUE2QjtRQUM3QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGdCQUFnQjtRQUNoQixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsY0FBYztRQUNkLFNBQVM7UUFDVCxpQkFBaUI7UUFDakIsb0JBQW9CO1FBQ3BCLHVCQUF1QjtRQUN2Qix3QkFBd0I7SUFDNUI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksY0FBYztRQUNkLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWN0IHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1ncmF5KTtcbn0gXG5cbi5jb250YWN0LWNvbnRlbnQge1xuICAgIC8qIHBhZGRpbmc6IDRyZW0gMnJlbSAwcmVtOyAqL1xuICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG4uY29udGFjdC1jb250ZW50IC50aXRsZSB7XG4gICAgY29sb3I6IHZhcigtLW1haW4tYmcpO1xufVxuXG5cbi5jb250YWN0LWZvcm0gbGFiZWwge1xuICAgIGNvbG9yOiB2YXIoLS1tYWluLWJnKTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNvbnRhY3QtZm9ybSBpbnB1dCxcbi5jb250YWN0LWZvcm0gdGV4dGFyZWEge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nOiAxcmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG4gICAgZm9udC1zaXplOiAxcmVtO1xufVxuXG4uY29udGFjdC1mb3JtIGlucHV0OmZvY3VzLFxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYTpmb2N1cyB7XG4gICAgLyogb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXJlZCk7ICovXG4gICAgYm94LXNoYWRvdzogMCAwIDAgMXB0IHZhcigtLWRhcmstZ3JheSk7XG5cbn1cblxuLmNvbnRhY3QtZm9ybSB0ZXh0YXJlYSB7XG4gICAgcmVzaXplOiBub25lO1xufVxuXG4uY29udGFjdC1mb3JtIGJ1dHRvbiB7XG4gICAgcGFkZGluZzogMWVtIDNlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC8qIGJvcmRlci1yYWRpdXM6IDEwcHg7ICovXG59XG5cbi5teS1pbmZvIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWJnKTtcbiAgICBtYXJnaW4tbGVmdDogLTJyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAtMnJlbTtcbiAgICBwYWRkaW5nOiA0cmVtIDJyZW07XG4gICAgLyogcGFkZGluZy1ib3R0b206IDFyZW07ICovXG4gICAgcGFkZGluZy1ib3R0b206IDA7XG59XG5cbi5pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIC8qIG1hcmdpbi1yaWdodDogMXJlbTsgKi9cbiAgICAvKiB3aWR0aDogNTAlOyAqL1xufVxuXG4uaW5mbyBoMyB7ICAgXG4gICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XG59XG5cbi5yaWdodCAuaW5mbzpsYXN0LWNoaWxkIHtcbiAgICBtYXJnaW46IDA7XG59XG5cbi5pY29ucyB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNDUwcHgpIHtcbiAgICAubXktaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICB9XG5cbiAgICAuaW5mbyBwIHsgICBcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbnRhY3QtY29udGVudCB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDRyZW0gNHJlbSAwcmVtOyAqL1xuICAgICAgICBwYWRkaW5nOiA1cmVtIDRyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC5teS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC00cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cmVtO1xuICAgICAgICBwYWRkaW5nOiA0cmVtO1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG5cbiAgICAuY29udGFjdC1jb250ZW50IHtcbiAgICAgICAgLyogcGFkZGluZzogNHJlbSA0cmVtIDByZW07ICovXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gNnJlbTtcbiAgICB9XG5cbiAgICAuZmxleC1hcmVhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLyoganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyAqL1xuICAgIH1cblxuICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBtYXgtd2lkdGg6IDc4NHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1JTtcbiAgICB9XG5cbiAgICAubXktaW5mbyB7XG4gICAgICAgIC8qIHBhZGRpbmc6IDRyZW07ICovXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IC05cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHJlbTtcbiAgICAgICAgLyogbWFyZ2luLWxlZnQ6IDRyZW07ICovXG4gICAgICAgIHBhZGRpbmc6IDEycmVtIDZyZW0gNHJlbTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5jb250YWN0LWNvbnRlbnQge1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogNHJlbSA4cmVtO1xuICAgIH1cblxuICAgIC5jb250YWN0LWZvcm0ge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwJTtcbiAgICB9XG4gICAgICAgICAgICBcbiAgICAubXktaW5mbyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC0xMHJlbTtcbiAgICB9XG59ICJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-contact',
            templateUrl: './contact.component.html',
            styleUrls: ['./contact.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/hero/hero.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/main/hero/hero.component.ts ***!
      \*********************************************/

    /*! exports provided: HeroComponent */

    /***/
    function srcAppMainHeroHeroComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeroComponent", function () {
        return HeroComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/animations */
      "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

      var HeroComponent = /*#__PURE__*/function () {
        function HeroComponent() {
          _classCallCheck(this, HeroComponent);
        }

        _createClass(HeroComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "scrollToElement",
          value: function scrollToElement(element) {
            console.log(element);
            var destination = document.querySelector("#" + element);
            if (destination) destination.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }]);

        return HeroComponent;
      }();

      HeroComponent.ɵfac = function HeroComponent_Factory(t) {
        return new (t || HeroComponent)();
      };

      HeroComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeroComponent,
        selectors: [["app-hero"]],
        decls: 20,
        vars: 1,
        consts: [["id", "home"], [1, "main"], ["id", "nicolas"], ["id", "ricaldi"], [1, "hero"], [1, "buttons"], [1, "button-red", 3, "click"], [1, "button-gray", 3, "click"]],
        template: function HeroComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_16_listener() {
              return ctx.scrollToElement("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "My work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeroComponent_Template_button_click_18_listener() {
              return ctx.scrollToElement("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Hire Me");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fade", undefined);
          }
        },
        styles: [".main[_ngcontent-%COMP%] {\n    position: relative;\n    height: 65vh;\n    \n    \n    max-width: 2000px;\n    margin: 0 auto;\n    display: flex;\n    padding: 0 2rem;\n    align-items: center;\n    overflow: hidden;\n}\n\n\n#nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n    position: absolute;\n    color: #333540;\n    font-size: 5rem;\n}\n\n\n#nicolas[_ngcontent-%COMP%] {\n    left: -5%;\n    top: 15%;\n}\n\n\n#ricaldi[_ngcontent-%COMP%] {\n    right: -1%;\n    bottom: 10%;\n}\n\n\n.hero[_ngcontent-%COMP%] {\n    z-index: 2;\n}\n\n\n.hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 20px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 18px;\n}\n\n\n.hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 14px;\n    margin-top: .5rem;\n    margin-bottom: 1rem;\n    color: var(--dark-gray);\n}\n\n\n\n\n\n.hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n    margin-right: .5rem;\n}\n\n\n@-webkit-keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@keyframes nick {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n\n@-webkit-keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@keyframes title {\n    from {\n        top: -10px;\n        opacity: 0;\n    }\n\n    to {\n        top: 0px;\n        opacity: 1;\n    }\n}\n\n\n@media(min-width: 375px) {\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 24px;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 20px;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n        color: var(--dark-gray);\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 768px) {\n    .main[_ngcontent-%COMP%] {\n        height: 80vh;\n        padding: 0 4rem;\n    }\n    \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 1.5rem;\n        margin-top: .5rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 1024px) {\n    .main[_ngcontent-%COMP%] {\n        height: 100vh;\n        padding: 0 6rem;\n    }\n \n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 12rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4rem;\n    }\n    \n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n    }\n}\n\n\n@media(min-width: 1750px) {\n    #nicolas[_ngcontent-%COMP%], #ricaldi[_ngcontent-%COMP%] {\n        font-size: 18rem;\n    }\n\n    #nicolas[_ngcontent-%COMP%] {\n        left: 0;\n        top: 15%;\n    }\n    \n    #ricaldi[_ngcontent-%COMP%] {\n        right: 0;\n        bottom: 5%;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 3.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2rem;\n        margin-top: 1rem;\n        margin-bottom: 1rem;\n    }\n    .hero[_ngcontent-%COMP%]   .button-red[_ngcontent-%COMP%] {\n        margin-right: 1rem;\n    }\n}\n\n\n@media(min-width: 2000px) {\n    .main[_ngcontent-%COMP%] {\n        padding: 0 8rem;\n    }\n\n    .hero[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        font-size: 5.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n        font-size: 4.5rem;\n    }\n    .hero[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n        font-size: 2.5rem;\n        margin-top: 1rem;\n        margin-bottom: 2rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9oZXJvL2hlcm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osd0JBQXdCO0lBQ3hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7O0FBR0E7O0lBRUksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLFNBQVM7SUFDVCxRQUFRO0FBQ1o7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7QUFDZjs7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7O0FBRUE7SUFDSSxlQUFlO0FBQ25COzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHVCQUF1QjtBQUMzQjs7O0FBQ0E7Ozs7O0dBS0c7OztBQUVIO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLE9BQU8sV0FBVyxFQUFFO0lBQ3BCLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sV0FBVyxFQUFFO0FBQ3hCOzs7QUFKQTtJQUNJLE9BQU8sV0FBVyxFQUFFO0lBQ3BCLE9BQU8sVUFBVSxFQUFFO0lBQ25CLE9BQU8sV0FBVyxFQUFFO0FBQ3hCOzs7QUFFQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLFVBQVU7SUFDZDs7SUFFQTtRQUNJLFFBQVE7UUFDUixVQUFVO0lBQ2Q7QUFDSjs7O0FBVkE7SUFDSTtRQUNJLFVBQVU7UUFDVixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkO0FBQ0o7OztBQUVBOztJQUVJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixtQkFBbUI7UUFDbkIsdUJBQXVCO0lBQzNCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBRUE7SUFDSTtRQUNJLFlBQVk7UUFDWixlQUFlO0lBQ25COztJQUVBOztRQUVJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYixlQUFlO0lBQ25COztJQUVBOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7QUFLQTtJQUNJOztRQUVJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLE9BQU87UUFDUCxRQUFRO0lBQ1o7O0lBRUE7UUFDSSxRQUFRO1FBQ1IsVUFBVTtJQUNkOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO0lBQ3ZCO0lBQ0E7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSjs7O0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGdCQUFnQjtRQUNoQixtQkFBbUI7SUFDdkI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL21haW4vaGVyby9oZXJvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNjV2aDtcbiAgICAvKiBtYXgtaGVpZ2h0OiAxMjAwcHg7ICovXG4gICAgLyogbWF4LXdpZHRoOiAxNzUwcHg7ICovXG4gICAgbWF4LXdpZHRoOiAyMDAwcHg7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiAwIDJyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5cbiNuaWNvbGFzLFxuI3JpY2FsZGkge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBjb2xvcjogIzMzMzU0MDtcbiAgICBmb250LXNpemU6IDVyZW07XG59XG5cbiNuaWNvbGFzIHtcbiAgICBsZWZ0OiAtNSU7XG4gICAgdG9wOiAxNSU7XG59XG5cbiNyaWNhbGRpIHtcbiAgICByaWdodDogLTElO1xuICAgIGJvdHRvbTogMTAlO1xufVxuXG4uaGVybyB7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmhlcm8gaDEge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmhlcm8gaDIge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmhlcm8gaDMge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xufVxuLyogXG5idXR0b24ge1xuICAgIG1heC13aWR0aDogMTAwcHg7XG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn0gKi9cblxuLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG59XG5cbkBrZXlmcmFtZXMgbmljayB7XG4gICAgMCUgICB7IHdpZHRoOiAxMDAlOyB9XG4gICAgNTAlICB7IHdpZHRoOiA4MCU7IH1cbiAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuQGtleWZyYW1lcyB0aXRsZSB7XG4gICAgZnJvbSB7XG4gICAgICAgIHRvcDogLTEwcHg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgfVxuXG4gICAgdG8ge1xuICAgICAgICB0b3A6IDBweDtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59XG5cbkBtZWRpYShtaW4td2lkdGg6IDM3NXB4KSB7XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWRhcmstZ3JheSk7XG4gICAgfVxuICAgIC5oZXJvIC5idXR0b24tcmVkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAubWFpbiB7XG4gICAgICAgIGhlaWdodDogODB2aDtcbiAgICAgICAgcGFkZGluZzogMCA0cmVtO1xuICAgIH1cbiAgICBcbiAgICAjbmljb2xhcyxcbiAgICAjcmljYWxkaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICB9XG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICB9XG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuICAgIC5oZXJvIC5idXR0b24tcmVkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbiBcblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLm1haW4ge1xuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICBwYWRkaW5nOiAwIDZyZW07XG4gICAgfVxuIFxuICAgICNuaWNvbGFzLFxuICAgICNyaWNhbGRpIHtcbiAgICAgICAgZm9udC1zaXplOiAxMnJlbTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcbiAgICB9XG4gICAgXG4gICAgLmhlcm8gaDIge1xuICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgfVxuXG4gICAgLmhlcm8gaDMge1xuICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgfVxufVxuXG5cblxuXG5AbWVkaWEobWluLXdpZHRoOiAxNzUwcHgpIHtcbiAgICAjbmljb2xhcyxcbiAgICAjcmljYWxkaSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThyZW07XG4gICAgfVxuXG4gICAgI25pY29sYXMge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDE1JTtcbiAgICB9XG4gICAgXG4gICAgI3JpY2FsZGkge1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiA1JTtcbiAgICB9XG5cbiAgICAuaGVybyBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNC41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMy41cmVtO1xuICAgIH1cbiAgICAuaGVybyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG4gICAgLmhlcm8gLmJ1dHRvbi1yZWQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDIwMDBweCkge1xuICAgIC5tYWluIHtcbiAgICAgICAgcGFkZGluZzogMCA4cmVtO1xuICAgIH1cblxuICAgIC5oZXJvIGgxIHtcbiAgICAgICAgZm9udC1zaXplOiA1LjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgyIHtcbiAgICAgICAgZm9udC1zaXplOiA0LjVyZW07XG4gICAgfVxuICAgIC5oZXJvIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAyLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgfVxufSJdfQ== */"],
        data: {
          animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [// state(),
          Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
            opacity: 0,
            transform: 'translateY(25px)'
          }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])])]
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeroComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-hero',
            templateUrl: './hero.component.html',
            styleUrls: ['./hero.component.css'],
            animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('fade', [// state(),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('* => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
              opacity: 0,
              transform: 'translateY(25px)'
            }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])(500)])])]
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/main.component.ts":
    /*!****************************************!*\
      !*** ./src/app/main/main.component.ts ***!
      \****************************************/

    /*! exports provided: MainComponent */

    /***/
    function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
        return MainComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./hero/hero.component */
      "./src/app/main/hero/hero.component.ts");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./about/about.component */
      "./src/app/main/about/about.component.ts");
      /* harmony import */


      var _work_work_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./work/work.component */
      "./src/app/main/work/work.component.ts");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./contact/contact.component */
      "./src/app/main/contact/contact.component.ts");

      var MainComponent = /*#__PURE__*/function () {
        function MainComponent() {
          _classCallCheck(this, MainComponent);
        }

        _createClass(MainComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return MainComponent;
      }();

      MainComponent.ɵfac = function MainComponent_Factory(t) {
        return new (t || MainComponent)();
      };

      MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MainComponent,
        selectors: [["app-main"]],
        decls: 4,
        vars: 0,
        template: function MainComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hero");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-contact");
          }
        },
        directives: [_hero_hero_component__WEBPACK_IMPORTED_MODULE_1__["HeroComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_3__["WorkComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-main',
            templateUrl: './main.component.html',
            styleUrls: ['./main.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/main.module.ts":
    /*!*************************************!*\
      !*** ./src/app/main/main.module.ts ***!
      \*************************************/

    /*! exports provided: MainModule */

    /***/
    function srcAppMainMainModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainModule", function () {
        return MainModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @fortawesome/angular-fontawesome */
      "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
      /* harmony import */


      var _main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main.component */
      "./src/app/main/main.component.ts");
      /* harmony import */


      var _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./hero/hero.component */
      "./src/app/main/hero/hero.component.ts");
      /* harmony import */


      var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./about/about.component */
      "./src/app/main/about/about.component.ts");
      /* harmony import */


      var _work_work_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./work/work.component */
      "./src/app/main/work/work.component.ts");
      /* harmony import */


      var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./contact/contact.component */
      "./src/app/main/contact/contact.component.ts");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");

      var MainModule = function MainModule() {
        _classCallCheck(this, MainModule);
      };

      MainModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: MainModule
      });
      MainModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function MainModule_Factory(t) {
          return new (t || MainModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MainModule, {
          declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _work_work_component__WEBPACK_IMPORTED_MODULE_6__["WorkComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"], _hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/main/work/work.component.ts":
    /*!*********************************************!*\
      !*** ./src/app/main/work/work.component.ts ***!
      \*********************************************/

    /*! exports provided: WorkComponent */

    /***/
    function srcAppMainWorkWorkComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WorkComponent", function () {
        return WorkComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var WorkComponent = /*#__PURE__*/function () {
        function WorkComponent(_renderer2, _document) {
          _classCallCheck(this, WorkComponent);

          this._renderer2 = _renderer2;
          this._document = _document;
        }

        _createClass(WorkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // const projects = document.querySelector('.anim');
            var projects = document.querySelectorAll('.anim');
            var observer = new IntersectionObserver(function (entries) {
              var i = 1;
              entries.forEach(function (entry) {
                if (entry.intersectionRatio > 0) {
                  entry.target.classList.add('animation' + i);
                  i++;
                } else {
                  entry.target.classList.remove('animation' + i);
                  if (i = 4) i = 1; // i = 1;
                }
              }); // i = 1;
            });
            projects.forEach(function (project) {
              observer.observe(project);
            });
          }
        }, {
          key: "showContent",
          value: function showContent(el) {
            var parentElement = document.querySelector('.' + el);
            var childElement = parentElement.children[0];
            childElement.classList.toggle('show');
          }
        }]);

        return WorkComponent;
      }();

      WorkComponent.ɵfac = function WorkComponent_Factory(t) {
        return new (t || WorkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]));
      };

      WorkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WorkComponent,
        selectors: [["app-work"]],
        decls: 30,
        vars: 0,
        consts: [["id", "work"], [1, "work-content", "container"], [1, "line"], [1, "title"], [1, "proj-grid"], ["data-delay", "0s", 1, "proj", "proj-1", "anim", 3, "mouseenter", "mouseleave"], [1, "proj-content"], ["routerLink", "project/1", 1, "button-red"], ["data-delay", ".5s", 1, "proj", "proj-2", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/2", 1, "button-red"], ["data-delay", ".7s", 1, "proj", "proj-3", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/3", 1, "button-red"], ["data-delay", "1s", 1, "proj", "proj-4", "anim", 3, "mouseenter", "mouseleave"], ["routerLink", "project/4", 1, "button-red"]],
        template: function WorkComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_6_listener() {
              return ctx.showContent("proj-1");
            })("mouseleave", function WorkComponent_Template_div_mouseleave_6_listener() {
              return ctx.showContent("proj-1");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_12_listener() {
              return ctx.showContent("proj-2");
            })("mouseleave", function WorkComponent_Template_div_mouseleave_12_listener() {
              return ctx.showContent("proj-2");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_18_listener() {
              return ctx.showContent("proj-3");
            })("mouseleave", function WorkComponent_Template_div_mouseleave_18_listener() {
              return ctx.showContent("proj-3");
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function WorkComponent_Template_div_mouseenter_24_listener() {
              return ctx.showContent("proj-4");
            })("mouseleave", function WorkComponent_Template_div_mouseleave_24_listener() {
              return ctx.showContent("proj-4");
            });

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
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]],
        styles: [".work-content[_ngcontent-%COMP%] {\n    max-width: 2000px;\n}\n\n\n.proj[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 280px;\n    background: var(--light-bg);\n    margin-bottom: 2rem;\n    border-radius: 10px;\n    \n    background-position: cover;\n\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    opacity: 0;\n}\n\n\n.proj[_ngcontent-%COMP%]:last-child{\n    margin-bottom: none;\n}\n\n\n.proj-1[_ngcontent-%COMP%] {\n    background: url('ini.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-2[_ngcontent-%COMP%] {\n    background: url('travel-buddy.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-3[_ngcontent-%COMP%] {\n    background: url('movie-rater.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-4[_ngcontent-%COMP%] {\n    background: url('osa.png');\n    background-size: cover;\n    background-position: center;\n}\n\n\n.proj-content[_ngcontent-%COMP%] {\n    background: rgba(0, 0, 0, 0.75);\n    \n    height: 100%;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border-radius: 10px;\n}\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n@media(min-width: 768px) {\n\n    .proj[_ngcontent-%COMP%] {\n        height: 440px;\n        margin-bottom: 4rem;\n    }\n\n\n.proj-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n}\n    \n}\n\n\n@media(min-width: 1024px) {\n    .proj-grid[_ngcontent-%COMP%] {\n        display: grid;\n        grid-template-columns: 1fr 1fr;\n        grid-template-rows: repeat(1fr, 5) ;\n        grid-gap: 2rem;\n    }\n\n    .proj[_ngcontent-%COMP%] {\n        height: 400px;\n        margin: 0;\n    }\n\n    .proj-1[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 1/3;\n    }\n    .proj-2[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 2/4;\n    }\n\n    .proj-3[_ngcontent-%COMP%] {\n        grid-column: 1/2;\n        grid-row: 3/5;\n    }\n    \n    .proj-4[_ngcontent-%COMP%] {\n        grid-column: 2/3;\n        grid-row: 4/6;\n    }\n\n    \n}\n\n\n@media(min-width: 1440px) {\n    .proj[_ngcontent-%COMP%] {\n        height: 500px;\n        margin: 0;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 4rem;\n    }\n    .proj-content[_ngcontent-%COMP%] {\n        opacity: 0;\n        transition: all 500ms ease-in-out;\n    }\n    \n    .show[_ngcontent-%COMP%] {\n        opacity: 1;\n    }\n\n}\n\n\n@media(min-width: 2000px) {\n    .work-content[_ngcontent-%COMP%] {\n        margin: 0 auto;\n    }\n\n    .proj-grid[_ngcontent-%COMP%] {\n        grid-gap: 6rem;\n    }\n\n\n}\n\n\n.animation1[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s forwards ease-out;\n            animation: anim1 1s forwards ease-out;\n}\n\n\n.animation2[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s .5s forwards ease-out;\n            animation: anim1 1s .5s forwards ease-out;\n}\n\n\n.animation3[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s .7s forwards ease-out;\n            animation: anim1 1s .7s forwards ease-out;\n}\n\n\n.animation4[_ngcontent-%COMP%] {\n    -webkit-animation: anim1 1s 1s forwards ease-out;\n            animation: anim1 1s 1s forwards ease-out;\n}\n\n\n@-webkit-keyframes anim1{\n    from {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n\n\n@keyframes anim1{\n    from {\n        transform: translateY(100px);\n        opacity: 0;\n    }\n    to {\n        transform: translateY(0);\n        opacity: 1;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQjtBQUNyQjs7O0FBR0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsbUJBQW1COztJQUVuQiwwQkFBMEI7O0lBRTFCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7OztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLDBCQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLG1DQUF1RDtJQUN2RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLGtDQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFDQTtJQUNJLDBCQUE4QztJQUM5QyxzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COzs7QUFHQTtJQUNJLCtCQUErQjtJQUMvQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOzs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7O0FBR0E7O0lBRUk7UUFDSSxhQUFhO1FBQ2IsbUJBQW1CO0lBQ3ZCOzs7QUFHSjtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0FBR0E7SUFDSTtRQUNJLGFBQWE7UUFDYiw4QkFBOEI7UUFDOUIsbUNBQW1DO1FBQ25DLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7SUFDQTtRQUNJLGdCQUFnQjtRQUNoQixhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksZ0JBQWdCO1FBQ2hCLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsYUFBYTtJQUNqQjs7SUFFQTs7Ozs7OztPQU9HO0FBQ1A7OztBQUdBO0lBQ0k7UUFDSSxhQUFhO1FBQ2IsU0FBUztJQUNiOztJQUVBO1FBQ0ksY0FBYztJQUNsQjtJQUNBO1FBQ0ksVUFBVTtRQUNWLGlDQUFpQztJQUNyQzs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7QUFFSjs7O0FBRUE7SUFDSTtRQUNJLGNBQWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCOzs7QUFHSjs7O0FBSUE7SUFDSSw2Q0FBcUM7WUFBckMscUNBQXFDO0FBQ3pDOzs7QUFFQTtJQUNJLGlEQUF5QztZQUF6Qyx5Q0FBeUM7QUFDN0M7OztBQUVBO0lBQ0ksaURBQXlDO1lBQXpDLHlDQUF5QztBQUM3Qzs7O0FBRUE7SUFDSSxnREFBd0M7WUFBeEMsd0NBQXdDO0FBQzVDOzs7QUFHQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKOzs7QUFUQTtJQUNJO1FBQ0ksNEJBQTRCO1FBQzVCLFVBQVU7SUFDZDtJQUNBO1FBQ0ksd0JBQXdCO1FBQ3hCLFVBQVU7SUFDZDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbWFpbi93b3JrL3dvcmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53b3JrLWNvbnRlbnQge1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG5cbi5wcm9qIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWxpZ2h0LWJnKTtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY292ZXI7XG5cbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5wcm9qOmxhc3QtY2hpbGR7XG4gICAgbWFyZ2luLWJvdHRvbTogbm9uZTtcbn1cblxuLnByb2otMSB7XG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1nL2luaS5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbn1cbi5wcm9qLTIge1xuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltZy90cmF2ZWwtYnVkZHkucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvai0zIHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvbW92aWUtcmF0ZXIucG5nJyk7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG59XG4ucHJvai00IHtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWcvb3NhLnBuZycpO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xufVxuXG5cbi5wcm9qLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLyogcGFkZGluZzogMS41cmVtOyAgKi9cbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLnByb2otY29udGVudCBoMyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuXG4gICAgLnByb2oge1xuICAgICAgICBoZWlnaHQ6IDQ0MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cmVtO1xuICAgIH1cblxuXG4ucHJvai1jb250ZW50IGgzIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG59XG4gICAgXG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogMTAyNHB4KSB7XG4gICAgLnByb2otZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMWZyLCA1KSA7XG4gICAgICAgIGdyaWQtZ2FwOiAycmVtO1xuICAgIH1cblxuICAgIC5wcm9qIHtcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cblxuICAgIC5wcm9qLTEge1xuICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICBncmlkLXJvdzogMS8zO1xuICAgIH1cbiAgICAucHJvai0yIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDIvMztcbiAgICAgICAgZ3JpZC1yb3c6IDIvNDtcbiAgICB9XG5cbiAgICAucHJvai0zIHtcbiAgICAgICAgZ3JpZC1jb2x1bW46IDEvMjtcbiAgICAgICAgZ3JpZC1yb3c6IDMvNTtcbiAgICB9XG4gICAgXG4gICAgLnByb2otNCB7XG4gICAgICAgIGdyaWQtY29sdW1uOiAyLzM7XG4gICAgICAgIGdyaWQtcm93OiA0LzY7XG4gICAgfVxuXG4gICAgLyogLnByb2otY29udGVudCB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCA1MDBtcyBlYXNlLWluLW91dDtcbiAgICB9XG4gICAgXG4gICAgLnNob3cge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgIH0gKi9cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucHJvaiB7XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAucHJvai1ncmlkIHtcbiAgICAgICAgZ3JpZC1nYXA6IDRyZW07XG4gICAgfVxuICAgIC5wcm9qLWNvbnRlbnQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgNTAwbXMgZWFzZS1pbi1vdXQ7XG4gICAgfVxuICAgIFxuICAgIC5zaG93IHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG5cbn1cblxuQG1lZGlhKG1pbi13aWR0aDogMjAwMHB4KSB7XG4gICAgLndvcmstY29udGVudCB7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIH1cblxuICAgIC5wcm9qLWdyaWQge1xuICAgICAgICBncmlkLWdhcDogNnJlbTtcbiAgICB9XG5cblxufVxuXG5cblxuLmFuaW1hdGlvbjEge1xuICAgIGFuaW1hdGlvbjogYW5pbTEgMXMgZm9yd2FyZHMgZWFzZS1vdXQ7XG59XG5cbi5hbmltYXRpb24yIHtcbiAgICBhbmltYXRpb246IGFuaW0xIDFzIC41cyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuLmFuaW1hdGlvbjMge1xuICAgIGFuaW1hdGlvbjogYW5pbTEgMXMgLjdzIGZvcndhcmRzIGVhc2Utb3V0O1xufVxuXG4uYW5pbWF0aW9uNCB7XG4gICAgYW5pbWF0aW9uOiBhbmltMSAxcyAxcyBmb3J3YXJkcyBlYXNlLW91dDtcbn1cblxuXG5Aa2V5ZnJhbWVzIGFuaW0xe1xuICAgIGZyb20ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwcHgpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbiAgICB0byB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorkComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-work',
            templateUrl: './work.component.html',
            styleUrls: ['./work.component.css']
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }, {
            type: Document,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/nav/nav.component.ts":
    /*!**************************************!*\
      !*** ./src/app/nav/nav.component.ts ***!
      \**************************************/

    /*! exports provided: NavComponent */

    /***/
    function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
        return NavComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function NavComponent__svg_svg_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent__svg_svg_16_Template__svg_svg_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.toggleMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "rect", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.isOpen ? "burger-active" : "burger-not-active");
        }
      }

      function NavComponent__svg_svg_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent__svg_svg_17_Template__svg_svg_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.toggleMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "g", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var NavComponent = /*#__PURE__*/function () {
        function NavComponent() {
          _classCallCheck(this, NavComponent);

          this.isOpen = false;
        }

        _createClass(NavComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "toggleMenu",
          value: function toggleMenu() {
            this.isOpen = !this.isOpen;
          }
        }, {
          key: "scrollToElement",
          value: function scrollToElement(element) {
            // console.log(element);
            var destination = document.getElementById(element);
            var navHeight = document.getElementById('nav').offsetHeight;
            var y = destination.getBoundingClientRect().top + window.pageYOffset - navHeight;

            if (this.isOpen) {
              setTimeout(function () {
                if (destination) destination.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
                });
              }, 500);
            } else {
              if (destination) destination.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }

            this.isOpen = false;
          }
        }]);

        return NavComponent;
      }();

      NavComponent.ɵfac = function NavComponent_Factory(t) {
        return new (t || NavComponent)();
      };

      NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NavComponent,
        selectors: [["app-nav"]],
        decls: 18,
        vars: 3,
        consts: [["id", "nav"], [1, "navbar"], ["routerLink", "", "src", "../../assets/img/logo-gray.svg", "alt", "logo", 1, "logo", 3, "click"], [3, "ngClass"], [3, "click"], ["routerLink", ""], ["class", "burger", "xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "20", "viewBox", "0 0 30 19", 3, "click", 4, "ngIf"], ["class", "burger", "xmlns", "http://www.w3.org/2000/svg", "width", "23.335", "height", "20", "viewBox", "0 0 23.335 23.335", 3, "click", 4, "ngIf"], ["xmlns", "http://www.w3.org/2000/svg", "width", "30", "height", "20", "viewBox", "0 0 30 19", 1, "burger", 3, "click"], ["id", "hamburger", "transform", "translate(-313 -18)"], ["id", "top", "data-name", "Rectangle 48", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(313 18)", "fill", "#a2a2a2", 3, "ngClass"], ["id", "middle", "data-name", "Rectangle 49", "width", "23", "height", "3", "rx", "1.5", "transform", "translate(320 26)", "fill", "#a2a2a2", 3, "ngClass"], ["id", "bottom", "data-name", "Rectangle 50", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(313 34)", "fill", "#a2a2a2", 3, "ngClass"], ["xmlns", "http://www.w3.org/2000/svg", "width", "23.335", "height", "20", "viewBox", "0 0 23.335 23.335", 1, "burger", 3, "click"], ["id", "X", "transform", "translate(-323.333 -37.833)"], ["id", "Group_33", "data-name", "Group 33", "transform", "translate(7 14)"], ["id", "Rectangle_48", "data-name", "Rectangle 48", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(316.333 45.046) rotate(-45)", "fill", "#23242F"], ["id", "Rectangle_50", "data-name", "Rectangle 50", "width", "30", "height", "3", "rx", "1.5", "transform", "translate(318.454 23.833) rotate(45)", "fill", "#23242F"]],
        template: function NavComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_2_listener() {
              return ctx.scrollToElement("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_4_listener() {
              return ctx.scrollToElement("home");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "home");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_7_listener() {
              return ctx.scrollToElement("about");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "about");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_10_listener() {
              return ctx.scrollToElement("work");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "work");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_13_listener() {
              return ctx.scrollToElement("contact");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, NavComponent__svg_svg_16_Template, 5, 3, "svg", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NavComponent__svg_svg_17_Template, 5, 0, "svg", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.isOpen ? "active" : "not-active");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isOpen);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isOpen);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]],
        styles: ["html[_ngcontent-%COMP%] {\n  line-height: 1.15; \n  -webkit-text-size-adjust: 100%; \n}\n\n\n\n\n\nbody[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n\n\nmain[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nh1[_ngcontent-%COMP%] {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n\n\n\n\nhr[_ngcontent-%COMP%] {\n  box-sizing: content-box; \n  height: 0; \n  overflow: visible; \n}\n\n\n\npre[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\n\n\na[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n\n\n\nabbr[title][_ngcontent-%COMP%] {\n  border-bottom: none; \n  text-decoration: underline; \n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted; \n}\n\n\n\nb[_ngcontent-%COMP%], strong[_ngcontent-%COMP%] {\n  font-weight: bolder;\n}\n\n\n\ncode[_ngcontent-%COMP%], kbd[_ngcontent-%COMP%], samp[_ngcontent-%COMP%] {\n  font-family: monospace, monospace; \n  font-size: 1em; \n}\n\n\n\nsmall[_ngcontent-%COMP%] {\n  font-size: 80%;\n}\n\n\n\nsub[_ngcontent-%COMP%], sup[_ngcontent-%COMP%] {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub[_ngcontent-%COMP%] {\n  bottom: -0.25em;\n}\n\nsup[_ngcontent-%COMP%] {\n  top: -0.5em;\n}\n\n\n\n\n\nimg[_ngcontent-%COMP%] {\n  border-style: none;\n}\n\n\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%], optgroup[_ngcontent-%COMP%], select[_ngcontent-%COMP%], textarea[_ngcontent-%COMP%] {\n  font-family: inherit; \n  font-size: 100%; \n  line-height: 1.15; \n  margin: 0; \n}\n\n\n\nbutton[_ngcontent-%COMP%], input[_ngcontent-%COMP%] { \n  overflow: visible;\n}\n\n\n\nbutton[_ngcontent-%COMP%], select[_ngcontent-%COMP%] { \n  text-transform: none;\n}\n\n\n\nbutton[_ngcontent-%COMP%], [type=\"button\"][_ngcontent-%COMP%], [type=\"reset\"][_ngcontent-%COMP%], [type=\"submit\"][_ngcontent-%COMP%] {\n  -webkit-appearance: button;\n}\n\n\n\nbutton[_ngcontent-%COMP%]::-moz-focus-inner, [type=\"button\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"reset\"][_ngcontent-%COMP%]::-moz-focus-inner, [type=\"submit\"][_ngcontent-%COMP%]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n\n\nbutton[_ngcontent-%COMP%]:-moz-focusring, [type=\"button\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"reset\"][_ngcontent-%COMP%]:-moz-focusring, [type=\"submit\"][_ngcontent-%COMP%]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n\n\nfieldset[_ngcontent-%COMP%] {\n  padding: 0.35em 0.75em 0.625em;\n}\n\n\n\nlegend[_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  color: inherit; \n  display: table; \n  max-width: 100%; \n  padding: 0; \n  white-space: normal; \n}\n\n\n\nprogress[_ngcontent-%COMP%] {\n  vertical-align: baseline;\n}\n\n\n\ntextarea[_ngcontent-%COMP%] {\n  overflow: auto;\n}\n\n\n\n[type=\"checkbox\"][_ngcontent-%COMP%], [type=\"radio\"][_ngcontent-%COMP%] {\n  box-sizing: border-box; \n  padding: 0; \n}\n\n\n\n[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, [type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%] {\n  -webkit-appearance: textfield; \n  outline-offset: -2px; \n}\n\n\n\n[type=\"search\"][_ngcontent-%COMP%]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-file-upload-button {\n  -webkit-appearance: button; \n  font: inherit; \n}\n\n\n\n\n\ndetails[_ngcontent-%COMP%] {\n  display: block;\n}\n\n\n\nsummary[_ngcontent-%COMP%] {\n  display: list-item;\n}\n\n\n\n\n\ntemplate[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n[hidden][_ngcontent-%COMP%] {\n  display: none;\n}\n\nnav[_ngcontent-%COMP%]{\n    background: var(--dark-bg);\n    position: fixed;\n    width: 100%;\n    z-index: 5;\n}\n\n.navbar[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    padding: 1rem 2rem;\n    display: flex;\n    justify-content: space-between;\n    \n    max-height: 52px;\n    max-width: 2000px;\n}\n\nul[_ngcontent-%COMP%] {\n    position: fixed;\n    top: 0;\n    left: -100%;\n    width: 100%;\n    height: 100vh;\n    display: flex !important;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    transition: all 500ms ease-in-out;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin: 1rem;\n    cursor: pointer;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    text-decoration: none;\n    color: var(--main-bg);\n    font-weight: bold;\n    font-size: 2rem;    \n}\n\n.active[_ngcontent-%COMP%] {\n    left: 0;\n    background: var(--red);\n}\n\n.not-active[_ngcontent-%COMP%] {\n    opacity: 0;\n    display: none;\n}\n\n.logo[_ngcontent-%COMP%] {\n    width: 30px;\n    cursor: pointer;\n}\n\n.burger[_ngcontent-%COMP%] {\n    cursor: pointer;\n    z-index: 9999;\n    transition: all 250ms ease-in-out;\n}\n\n.burger-active[_ngcontent-%COMP%] {\n    fill: var(--dark-bg);\n}\n\n#top.burger-not-active[_ngcontent-%COMP%] {\n    -webkit-animation: notActive 6s infinite;\n            animation: notActive 6s infinite;\n}\n\n#bottom.burger-not-active[_ngcontent-%COMP%]  {\n    -webkit-animation: notActive 4s infinite;\n            animation: notActive 4s infinite;\n}\n\n@-webkit-keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@keyframes notActive {\n    0%   { width: 100%; }\n    50%  { width: 80%; }\n    100% { width: 100%; }\n}\n\n@media(min-width: 768px) {\n    .not-active[_ngcontent-%COMP%] {\n        opacity: 1;\n        display: none;\n    }\n\n    .navbar[_ngcontent-%COMP%] {\n        \n        padding: 1rem 4rem;\n        margin: 0 auto;\n        max-height: 64px;\n    }\n\n    ul[_ngcontent-%COMP%] {\n        position: relative;\n        left: 0;\n        width: auto;\n        height: auto;\n        flex-direction: row;\n        transition: none;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 1rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1rem;    \n        transition: color 250ms ease-in-out\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 1024px) {\n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 6rem;\n    }\n}\n\n@media(min-width: 1440px) {\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n        list-style-type: none;\n        display: inline-block;\n        margin: 0;\n        margin-right: 2rem;\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n        margin-right: 0;\n    }\n    \n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n        text-decoration: none;\n        color: var(--dark-gray);\n        font-weight: 400;\n        font-size: 1.1rem;    \n        transition: color 250ms ease-in-out\n    }\n\n    ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:focus {\n        color: #FFF;\n    }\n\n    .logo[_ngcontent-%COMP%] {\n        width: 45px;\n    }    \n\n    .burger[_ngcontent-%COMP%] {\n        display: none;\n    }\n    \n    .active[_ngcontent-%COMP%] {\n        background: transparent;\n    }\n}\n\n@media(min-width: 2000px) { \n    .navbar[_ngcontent-%COMP%] {\n        padding: 1rem 8rem;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ub3JtYWxpemUuY3NzL25vcm1hbGl6ZS5jc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBMkU7O0FBRTNFOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGO0VBQ0UsaUJBQWlCLEVBQUUsTUFBTTtFQUN6Qiw4QkFBOEIsRUFBRSxNQUFNO0FBQ3hDOztBQUVBOytFQUMrRTs7QUFFL0U7O0VBRUU7O0FBRUY7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxjQUFjO0FBQ2hCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7O0FBRUE7K0VBQytFOztBQUUvRTs7O0VBR0U7O0FBRUY7RUFDRSx1QkFBdUIsRUFBRSxNQUFNO0VBQy9CLFNBQVMsRUFBRSxNQUFNO0VBQ2pCLGlCQUFpQixFQUFFLE1BQU07QUFDM0I7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsaUNBQWlDLEVBQUUsTUFBTTtFQUN6QyxjQUFjLEVBQUUsTUFBTTtBQUN4Qjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLG1CQUFtQixFQUFFLE1BQU07RUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtFQUNsQyx5Q0FBaUM7VUFBakMsaUNBQWlDLEVBQUUsTUFBTTtBQUMzQzs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxtQkFBbUI7QUFDckI7O0FBRUE7OztFQUdFOztBQUVGOzs7RUFHRSxpQ0FBaUMsRUFBRSxNQUFNO0VBQ3pDLGNBQWMsRUFBRSxNQUFNO0FBQ3hCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsY0FBYztFQUNkLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTsrRUFDK0U7O0FBRS9FOztFQUVFOztBQUVGO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOytFQUMrRTs7QUFFL0U7OztFQUdFOztBQUVGOzs7OztFQUtFLG9CQUFvQixFQUFFLE1BQU07RUFDNUIsZUFBZSxFQUFFLE1BQU07RUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtFQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNuQjs7QUFFQTs7O0VBR0U7O0FBRUY7UUFDUSxNQUFNO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7RUFHRTs7QUFFRjtTQUNTLE1BQU07RUFDYixvQkFBb0I7QUFDdEI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSwwQkFBMEI7QUFDNUI7O0FBRUE7O0VBRUU7O0FBRUY7Ozs7RUFJRSxrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBOztFQUVFOztBQUVGOzs7O0VBSUUsOEJBQThCO0FBQ2hDOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBOzs7OztFQUtFOztBQUVGO0VBQ0Usc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixjQUFjLEVBQUUsTUFBTTtFQUN0QixjQUFjLEVBQUUsTUFBTTtFQUN0QixlQUFlLEVBQUUsTUFBTTtFQUN2QixVQUFVLEVBQUUsTUFBTTtFQUNsQixtQkFBbUIsRUFBRSxNQUFNO0FBQzdCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOztFQUVFOztBQUVGO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0U7O0FBRUY7O0VBRUUsc0JBQXNCLEVBQUUsTUFBTTtFQUM5QixVQUFVLEVBQUUsTUFBTTtBQUNwQjs7QUFFQTs7RUFFRTs7QUFFRjs7RUFFRSxZQUFZO0FBQ2Q7O0FBRUE7OztFQUdFOztBQUVGO0VBQ0UsNkJBQTZCLEVBQUUsTUFBTTtFQUNyQyxvQkFBb0IsRUFBRSxNQUFNO0FBQzlCOztBQUVBOztFQUVFOztBQUVGO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBOzs7RUFHRTs7QUFFRjtFQUNFLDBCQUEwQixFQUFFLE1BQU07RUFDbEMsYUFBYSxFQUFFLE1BQU07QUFDdkI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7O0VBRUU7O0FBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7K0VBQytFOztBQUUvRTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUFFQTs7RUFFRTs7QUFFRjtFQUNFLGFBQWE7QUFDZjs7QUN6VkE7SUFDSSwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLFdBQVc7SUFDWCxXQUFXO0lBQ1gsYUFBYTtJQUNiLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixpQ0FBaUM7QUFDckM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksT0FBTztJQUNQLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLHdDQUFnQztZQUFoQyxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSx3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0FBQ3BDOztBQUdBO0lBQ0ksT0FBTyxXQUFXLEVBQUU7SUFDcEIsT0FBTyxVQUFVLEVBQUU7SUFDbkIsT0FBTyxXQUFXLEVBQUU7QUFDeEI7O0FBSkE7SUFDSSxPQUFPLFdBQVcsRUFBRTtJQUNwQixPQUFPLFVBQVUsRUFBRTtJQUNuQixPQUFPLFdBQVcsRUFBRTtBQUN4Qjs7QUFHQTtJQUNJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx1QkFBdUI7UUFDdkIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFdBQVc7UUFDWCxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLHFCQUFxQjtRQUNyQixxQkFBcUI7UUFDckIsU0FBUztRQUNULGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxxQkFBcUI7UUFDckIsdUJBQXVCO1FBQ3ZCLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2Y7SUFDSjs7SUFFQTs7UUFFSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksdUJBQXVCO0lBQzNCO0FBQ0o7O0FBR0E7SUFDSTtRQUNJLGtCQUFrQjtJQUN0QjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxxQkFBcUI7UUFDckIscUJBQXFCO1FBQ3JCLFNBQVM7UUFDVCxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0kscUJBQXFCO1FBQ3JCLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCO0lBQ0o7O0lBRUE7O1FBRUksV0FBVztJQUNmOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjtBQUNKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7SUFDdEI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuaHRtbCB7XG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMiAqL1xufVxuXG4vKiBTZWN0aW9uc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xuXG5tYWluIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICogYGFydGljbGVgIGNvbnRleHRzIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaS5cbiAqL1xuXG5oMSB7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICBtYXJnaW46IDAuNjdlbSAwO1xufVxuXG4vKiBHcm91cGluZyBjb250ZW50XG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuXG5ociB7XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gIGhlaWdodDogMDsgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTsgLyogMiAqL1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBDb3JyZWN0IHRoZSBvZGQgYGVtYCBmb250IHNpemluZyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cblxucHJlIHtcbiAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXG4gIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG59XG5cbi8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuXG5hIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi8qKlxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXG4gKi9cblxuYWJiclt0aXRsZV0ge1xuICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXG4gKi9cblxuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5jb2RlLFxua2JkLFxuc2FtcCB7XG4gIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICBmb250LXNpemU6IDFlbTsgLyogMiAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnNtYWxsIHtcbiAgZm9udC1zaXplOiA4MCU7XG59XG5cbi8qKlxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXG4gKiBhbGwgYnJvd3NlcnMuXG4gKi9cblxuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwLlxuICovXG5cbmltZyB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbn1cblxuLyogRm9ybXNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cblxuYnV0dG9uLFxuaW5wdXQsXG5vcHRncm91cCxcbnNlbGVjdCxcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXG4gIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gIG1hcmdpbjogMDsgLyogMiAqL1xufVxuXG4vKipcbiAqIFNob3cgdGhlIG92ZXJmbG93IGluIElFLlxuICogMS4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZS5cbiAqL1xuXG5idXR0b24sXG5pbnB1dCB7IC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXG4gKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gKi9cblxuYnV0dG9uLFxuc2VsZWN0IHsgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5cbmJ1dHRvbixcblt0eXBlPVwiYnV0dG9uXCJdLFxuW3R5cGU9XCJyZXNldFwiXSxcblt0eXBlPVwic3VibWl0XCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG59XG5cbi8qKlxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cbiAqL1xuXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPVwicmVzZXRcIl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1cInN1Ym1pdFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XG4gIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgcGFkZGluZzogMDtcbn1cblxuLyoqXG4gKiBSZXN0b3JlIHRoZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgdGhlIHByZXZpb3VzIHJ1bGUuXG4gKi9cblxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG5bdHlwZT1cInJlc2V0XCJdOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9XCJzdWJtaXRcIl06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5cbmZpZWxkc2V0IHtcbiAgcGFkZGluZzogMC4zNWVtIDAuNzVlbSAwLjYyNWVtO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gKiAyLiBDb3JyZWN0IHRoZSBjb2xvciBpbmhlcml0YW5jZSBmcm9tIGBmaWVsZHNldGAgZWxlbWVudHMgaW4gSUUuXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XG4gKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAqL1xuXG5sZWdlbmQge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIGNvbG9yOiBpbmhlcml0OyAvKiAyICovXG4gIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gIG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xuICBwYWRkaW5nOiAwOyAvKiAzICovXG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgdmVydGljYWwgYWxpZ25tZW50IGluIENocm9tZSwgRmlyZWZveCwgYW5kIE9wZXJhLlxuICovXG5cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG5cbnRleHRhcmVhIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG59XG5cbi8qKlxuICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gSUUgMTAuXG4gKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gKi9cblxuW3R5cGU9XCJjaGVja2JveFwiXSxcblt0eXBlPVwicmFkaW9cIl0ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXG4gIHBhZGRpbmc6IDA7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblxuW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbiB7XG4gIGhlaWdodDogYXV0bztcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBvZGQgYXBwZWFyYW5jZSBpbiBDaHJvbWUgYW5kIFNhZmFyaS5cbiAqIDIuIENvcnJlY3QgdGhlIG91dGxpbmUgc3R5bGUgaW4gU2FmYXJpLlxuICovXG5cblt0eXBlPVwic2VhcmNoXCJdIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgb3V0bGluZS1vZmZzZXQ6IC0ycHg7IC8qIDIgKi9cbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGlubmVyIHBhZGRpbmcgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXG4gKi9cblxuW3R5cGU9XCJzZWFyY2hcIl06Oi13ZWJraXQtc2VhcmNoLWRlY29yYXRpb24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MgYW5kIFNhZmFyaS5cbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cbiAqL1xuXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDsgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLypcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFIDEwKywgYW5kIEZpcmVmb3guXG4gKi9cblxuZGV0YWlscyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICovXG5cbnRlbXBsYXRlIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMC5cbiAqL1xuXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4iLCJAaW1wb3J0ICd+bm9ybWFsaXplLmNzcyc7XG5cblxubmF2e1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWRhcmstYmcpO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA1O1xufVxuXG4ubmF2YmFyIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDFyZW0gMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvKiBtYXgtd2lkdGg6IDE3NTBweDsgKi9cbiAgICBtYXgtaGVpZ2h0OiA1MnB4O1xuICAgIG1heC13aWR0aDogMjAwMHB4O1xufVxuXG51bCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgdHJhbnNpdGlvbjogYWxsIDUwMG1zIGVhc2UtaW4tb3V0O1xufVxuXG51bCBsaSB7XG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgIG1hcmdpbjogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIGxpIGEge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogdmFyKC0tbWFpbi1iZyk7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAycmVtOyAgICBcbn1cblxuLmFjdGl2ZSB7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1yZWQpO1xufVxuXG4ubm90LWFjdGl2ZSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubG9nbyB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uYnVyZ2VyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDogOTk5OTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMjUwbXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5idXJnZXItYWN0aXZlIHtcbiAgICBmaWxsOiB2YXIoLS1kYXJrLWJnKTtcbn1cblxuI3RvcC5idXJnZXItbm90LWFjdGl2ZSB7XG4gICAgYW5pbWF0aW9uOiBub3RBY3RpdmUgNnMgaW5maW5pdGU7XG59XG5cbiNib3R0b20uYnVyZ2VyLW5vdC1hY3RpdmUgIHtcbiAgICBhbmltYXRpb246IG5vdEFjdGl2ZSA0cyBpbmZpbml0ZTtcbn1cblxuXG5Aa2V5ZnJhbWVzIG5vdEFjdGl2ZSB7XG4gICAgMCUgICB7IHdpZHRoOiAxMDAlOyB9XG4gICAgNTAlICB7IHdpZHRoOiA4MCU7IH1cbiAgICAxMDAlIHsgd2lkdGg6IDEwMCU7IH1cbn1cblxuXG5AbWVkaWEobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5ub3QtYWN0aXZlIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmF2YmFyIHtcbiAgICAgICAgLyogbWF4LXdpZHRoOiAxNTAwcHg7ICovXG4gICAgICAgIHBhZGRpbmc6IDFyZW0gNHJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIG1heC1oZWlnaHQ6IDY0cHg7XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHRyYW5zaXRpb246IG5vbmU7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIHtcbiAgICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cblxuICAgIHVsIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICAgIFxuICAgIHVsIGxpIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDFyZW07ICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dFxuICAgIH1cblxuICAgIHVsIGxpIGE6aG92ZXIsXG4gICAgdWwgbGkgYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfSAgICBcblxuICAgIC5idXJnZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5cbkBtZWRpYShtaW4td2lkdGg6IDEwMjRweCkge1xuICAgIC5uYXZiYXIge1xuICAgICAgICBwYWRkaW5nOiAxcmVtIDZyZW07XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICB1bCBsaSB7XG4gICAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICB1bCBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgICBcbiAgICB1bCBsaSBhIHtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGFyay1ncmF5KTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjFyZW07ICAgIFxuICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAyNTBtcyBlYXNlLWluLW91dFxuICAgIH1cblxuICAgIHVsIGxpIGE6aG92ZXIsXG4gICAgdWwgbGkgYTpmb2N1cyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgICAgd2lkdGg6IDQ1cHg7XG4gICAgfSAgICBcblxuICAgIC5idXJnZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICBcbiAgICAuYWN0aXZlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAyMDAwcHgpIHsgXG4gICAgLm5hdmJhciB7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gOHJlbTtcbiAgICB9XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-nav',
            templateUrl: './nav.component.html',
            styleUrls: ['./nav.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/project/project.component.ts":
    /*!**********************************************!*\
      !*** ./src/app/project/project.component.ts ***!
      \**********************************************/

    /*! exports provided: ProjectComponent */

    /***/
    function srcAppProjectProjectComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProjectComponent", function () {
        return ProjectComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../api.service */
      "./src/app/api.service.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProjectComponent_span_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var word_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r3, ", ");
        }
      }

      function ProjectComponent_span_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var word_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r4, ", ");
        }
      }

      function ProjectComponent_span_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var word_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", word_r5, ", ");
        }
      }

      var ProjectComponent = /*#__PURE__*/function () {
        // public frontEnd = this.project.frontEnd;
        function ProjectComponent(apiService, _router, _route) {
          _classCallCheck(this, ProjectComponent);

          this.apiService = apiService;
          this._router = _router;
          this._route = _route;
        }

        _createClass(ProjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this._route.params.subscribe(function (params) {
              console.log(params['id']);

              var observable = _this.apiService.getProject(params['id']); // observable.subscribe(data => this.project = data)


              _this.project = observable;
            });
          }
        }]);

        return ProjectComponent;
      }();

      ProjectComponent.ɵfac = function ProjectComponent_Factory(t) {
        return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
      };

      ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ProjectComponent,
        selectors: [["app-project"]],
        decls: 40,
        vars: 11,
        consts: [[1, "container", "project"], [1, "content"], [1, "one"], [3, "src", "alt"], [1, "two"], [1, "top"], ["target", "_blank", 3, "href"], [1, "button-gray"], [1, "button-red"], [1, "sub-heading"], [4, "ngFor", "ngForOf"], [1, "bottom"]],
        template: function ProjectComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
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
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".project[_ngcontent-%COMP%] {\n    \n    max-width: 900px;    \n    \n    min-height: 85vh;\n    padding-top: 68px;\n    margin: 0 auto;\n\n}\n\n\n.one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 100%;\n    border-radius: 10px;\n    margin: 1.5rem 0;\n}\n\n\nbutton[_ngcontent-%COMP%] {\n    padding: 1em 2em;\n    margin-bottom: 2rem;\n}\n\n\n.button-gray[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    \n    margin-bottom: .5rem;\n    font-size: 24px;\n    color: var(--gray);\n}\n\n\n.two[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin-bottom: 1rem;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    list-style-type: none;\n    margin-bottom: 1rem;\n    line-height: 27px;\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    color: var(--dark-gray);\n}\n\n\n.two[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span.sub-heading[_ngcontent-%COMP%] {\n    color: var(--gray);   \n}\n\n\n.two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] { \n    \n    color: var(--dark-gray);\n    \n    line-height: 1.2rem;\n    line-height: 27px;\n}\n\n\n.bottom[_ngcontent-%COMP%] {\n    display: none;\n}\n\n\n@media(min-width: 768px) {\n    .project[_ngcontent-%COMP%] {\n        padding-top: 79px;\n        display: flex;\n        align-items: center;\n        min-height: 85vh;\n    }\n    \n\n}\n\n\n@media(min-width: 1440px) {\n    .project[_ngcontent-%COMP%] {\n        max-width: 2000px;\n        \n        overflow: hidden;\n    }   \n\n    .top[_ngcontent-%COMP%] {\n        display: none;\n    }\n\n    .bottom[_ngcontent-%COMP%] {\n        display: block;\n    }\n    \n\n    .content[_ngcontent-%COMP%] {\n        display: flex;\n        align-items: top;\n    }\n\n    .one[_ngcontent-%COMP%] {\n        margin-right: 2rem;\n    }\n\n    .one[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n        \n        font-size: 3.5rem;\n    }\n\n\n    .one[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n        margin: 0;\n        margin-top: 2rem;\n        max-width: 800px;\n    }\n\n    \n    .two[_ngcontent-%COMP%] { \n        margin-top: 6rem;\n        margin-left: 2rem;\n\n    }\n\n    button[_ngcontent-%COMP%] {\n        \n        margin-top: 2rem;\n        padding: 1em 2em;\n        \n    } \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLGNBQWM7O0FBRWxCOzs7QUFHQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7OztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7OztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOzs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsdUJBQXVCO0lBQ3ZCLG9CQUFvQjtJQUNwQixtQkFBbUI7SUFDbkIsaUJBQWlCO0FBQ3JCOzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7OztBQUdBO0lBQ0k7UUFDSSxpQkFBaUI7UUFDakIsYUFBYTtRQUNiLG1CQUFtQjtRQUNuQixnQkFBZ0I7SUFDcEI7OztBQUdKOzs7QUFFQTtJQUNJO1FBQ0ksaUJBQWlCO1FBQ2pCOzhCQUNzQjtRQUN0QixnQkFBZ0I7SUFDcEI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7O0lBR0E7UUFDSSxhQUFhO1FBQ2IsZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksd0JBQXdCO1FBQ3hCLGlCQUFpQjtJQUNyQjtBQUNKOzs7T0FHTzs7SUFFSDtRQUNJLFNBQVM7UUFDVCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO0lBQ3BCOztJQUVBOzs7TUFHRTtJQUNGO1FBQ0ksZ0JBQWdCO1FBQ2hCLGlCQUFpQjs7SUFFckI7O0lBRUE7UUFDSSx3QkFBd0I7UUFDeEIsZ0JBQWdCO1FBQ2hCLGdCQUFnQjtRQUNoQix5QkFBeUI7SUFDN0I7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2plY3Qge1xuICAgIC8qIHBhZGRpbmctYm90dG9tOiAwOyAqL1xuICAgIG1heC13aWR0aDogOTAwcHg7ICAgIFxuICAgIC8qIG1pbi1oZWlnaHQ6IDEwMCU7ICovXG4gICAgbWluLWhlaWdodDogODV2aDtcbiAgICBwYWRkaW5nLXRvcDogNjhweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxufVxuXG5cbi5vbmUgaW1nIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBtYXJnaW46IDEuNXJlbSAwO1xufVxuXG5idXR0b24ge1xuICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn0gXG5cbi5idXR0b24tZ3JheSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG4udHdvIGgzIHtcbiAgICAvKiBtYXJnaW4tdG9wOiAxcmVtOyAqL1xuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICBjb2xvcjogdmFyKC0tZ3JheSk7XG59XG5cbi50d28gdWwge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG59XG5cbi50d28gbGkge1xuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xufVxuXG4udHdvIGxpIHNwYW4ge1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xufVxuXG4udHdvIGxpIHNwYW4uc3ViLWhlYWRpbmcge1xuICAgIGNvbG9yOiB2YXIoLS1ncmF5KTsgICBcbn1cblxuLnR3byBwIHsgXG4gICAgLyogZm9udC1zaXplOiAxNHB4OyAqL1xuICAgIGNvbG9yOiB2YXIoLS1kYXJrLWdyYXkpO1xuICAgIC8qIGNvbG9yOiAjN0E3QjkwOyAqL1xuICAgIGxpbmUtaGVpZ2h0OiAxLjJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XG59XG5cbi5ib3R0b20ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuQG1lZGlhKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA3OXB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtaW4taGVpZ2h0OiA4NXZoO1xuICAgIH1cbiAgICBcblxufVxuXG5AbWVkaWEobWluLXdpZHRoOiAxNDQwcHgpIHtcbiAgICAucHJvamVjdCB7XG4gICAgICAgIG1heC13aWR0aDogMjAwMHB4O1xuICAgICAgICAvKiBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOyAqL1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIH0gICBcblxuICAgIC50b3Age1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5ib3R0b20ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG4gICAgXG5cbiAgICAuY29udGVudCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiB0b3A7XG4gICAgfVxuXG4gICAgLm9uZSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMnJlbTtcbiAgICB9XG5cbiAgICAub25lIGgxIHtcbiAgICAgICAgLyogbWFyZ2luLXRvcDogNi4zcmVtOyAqL1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9XG4vKiBcbiAgICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICB9ICovXG5cbiAgICAub25lIGltZyB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA4MDBweDtcbiAgICB9XG5cbiAgICAvKiBpbWcge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuICAgICAqL1xuICAgIC50d28geyBcbiAgICAgICAgbWFyZ2luLXRvcDogNnJlbTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJyZW07XG5cbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgICAvKiBtYXJnaW4tdG9wOiA2LjNyZW07ICovXG4gICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG4gICAgICAgIHBhZGRpbmc6IDFlbSAyZW07XG4gICAgICAgIC8qIG1hcmdpbi1ib3R0b206IDJyZW07ICovXG4gICAgfSBcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-project',
            templateUrl: './project.component.html',
            styleUrls: ['./project.component.css']
          }]
        }], function () {
          return [{
            type: _api_service__WEBPACK_IMPORTED_MODULE_1__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/nicolasricaldi/nicolas-ricaldi/src/main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map