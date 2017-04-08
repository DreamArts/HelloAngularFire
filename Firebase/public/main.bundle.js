webpackJsonp([1,5],{

/***/ 132:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 132;


/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(149);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(228),
        styles: [__webpack_require__(213)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__firebaseConfig__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timeline_timeline_component__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__timeline_input_timeline_input_component__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__login_login_component__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__timeline_cell_timeline_cell_component__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__header_header_component__ = __webpack_require__(144);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var firebaseAuthConfig = {
    provider: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["a" /* AuthProviders */].Google,
    method: __WEBPACK_IMPORTED_MODULE_5_angularfire2__["b" /* AuthMethods */].Popup
};
var routeSettings = [
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_9__timeline_timeline_component__["a" /* TimelineComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_9__timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_10__timeline_input_timeline_input_component__["a" /* TimelineInputComponent */],
            __WEBPACK_IMPORTED_MODULE_11__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_12__timeline_cell_timeline_cell_component__["a" /* TimelineCellComponent */],
            __WEBPACK_IMPORTED_MODULE_13__header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6_ng_semantic_ng_semantic__["NgSemanticModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routeSettings),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_7__firebaseConfig__["a" /* firebaseConfig */], firebaseAuthConfig)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
        this.headerTitle = "Angular, Firebase勉強会";
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(229),
        styles: [__webpack_require__(214)]
    }),
    __metadata("design:paramtypes", [])
], HeaderComponent);

//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(loginService, router) {
        this.loginService = loginService;
        this.router = router;
        this.errorMessage = null;
        this.isLoggedIn = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.isLoggedIn(function (isLoggedIn) {
            _this.isLoggedIn = isLoggedIn;
            if (isLoggedIn) {
                _this.router.navigate(["timeline"]);
            }
        });
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.errorMessage = null;
        this.loginService.login(function () {
            // 成功
            console.log("login succeed.");
            _this.isLoggedIn = true;
            _this.router.navigate(["timeline"]);
        }, function (error) {
            // 失敗
            _this.isLoggedIn = false;
            _this.errorMessage = "ログインできませんでした。(" + error.message + ")";
        });
    };
    LoginComponent.prototype.logout = function () {
        this.loginService.logout();
        this.router.navigate([""]);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(230),
        styles: [__webpack_require__(215)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["b" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["b" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["b" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineCellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineCellComponent = (function () {
    function TimelineCellComponent() {
        this.userImageUrl = "./assets/icons/transparent.png";
        this.imageUrl = null;
    }
    TimelineCellComponent.prototype.ngOnInit = function () {
        if (this.message && this.message.isPhoto && this.message.downloadUrl) {
            this.imageUrl = this.message.downloadUrl;
        }
        if (this.message && this.message.userImageUrl) {
            this.userImageUrl = this.message.userImageUrl;
        }
    };
    return TimelineCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */]) === "function" && _a || Object)
], TimelineCellComponent.prototype, "message", void 0);
TimelineCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline-cell',
        template: __webpack_require__(231),
        styles: [__webpack_require__(216)]
    }),
    __metadata("design:paramtypes", [])
], TimelineCellComponent);

var _a;
//# sourceMappingURL=timeline-cell.component.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(46);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineInputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineInputComponent = (function () {
    function TimelineInputComponent(messagesService) {
        this.messagesService = messagesService;
        this.hasError = false;
    }
    TimelineInputComponent.prototype.ngOnInit = function () {
        this.observeFileSelection();
    };
    /** メッセージの送信 */
    TimelineInputComponent.prototype.sendMessage = function (inputText) {
        var message = new __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */](null);
        message.text = inputText.value;
        this.messagesService.sendMessage(message);
        inputText.value = "";
    };
    /** ファイルの選択を監視 */
    TimelineInputComponent.prototype.observeFileSelection = function () {
        var _this = this;
        var inputTag = document.getElementById("InputFiles");
        if (inputTag) {
            inputTag.addEventListener("change", function (event) {
                var target = event.target;
                _this.uploadFiles(target.files);
            });
        }
    };
    /** ファイルのアップロード */
    TimelineInputComponent.prototype.uploadFiles = function (files) {
        this.messagesService.sendFiles(files);
    };
    return TimelineInputComponent;
}());
TimelineInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline-input',
        template: __webpack_require__(232),
        styles: [__webpack_require__(217)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */]) === "function" && _a || Object])
], TimelineInputComponent);

var _a;
//# sourceMappingURL=timeline-input.component.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_messages_service__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_login_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TimelineComponent = (function () {
    function TimelineComponent(messages, loginService, router) {
        this.messages = messages;
        this.loginService = loginService;
        this.router = router;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loginService.isLoggedIn(function (isLoggedIn) {
            if (!isLoggedIn) {
                _this.router.navigate([""]);
            }
        });
        this.messages.observeMessages(function (messages) {
            _this.messagesArray = messages;
        });
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-timeline',
        template: __webpack_require__(233),
        styles: [__webpack_require__(218)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_messages_service__["b" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_3__services_login_service__["b" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["b" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_messages_service__["b" /* MessagesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_login_service__["b" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_login_service__["b" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], TimelineComponent);

var _a, _b, _c;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".Header {\n  height: 44px;\n  width: 100%;\n  background-color: orange; }\n  .Header_title {\n    color: white;\n    margin-left: 8px;\n    height: 44px;\n    line-height: 44px;\n    text-align: center;\n    float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 215:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".Login_button {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 0;\n  height: 28px;\n  margin-top: 8px;\n  position: relative;\n  right: 8px;\n  float: right; }\n\n.Login_errorMessage {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 216:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".TimelineCell {\n  padding: 16px; }\n  .TimelineCell_userImage {\n    width: 36px;\n    height: 36px;\n    border-radius: 18px;\n    background-color: lightblue;\n    float: left;\n    margin-top: 6px; }\n  .TimelineCell_userName {\n    color: lightgray;\n    font-size: 0.85em;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .TimelineCell_timestamp {\n    color: lightgray;\n    font-size: 0.85em; }\n  .TimelineCell_text {\n    white-space: pre-wrap;\n    word-break: break-all;\n    display: block;\n    width: 95%;\n    color: #323232;\n    font-size: 1em;\n    line-height: 1.5em;\n    top: -10px;\n    margin-left: 44px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, ".TimelineInput_textarea {\n  margin: 8px;\n  height: 22px;\n  width: 80%;\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  float: left; }\n\n.TimelineInput_textareaError {\n  background-color: rgba(255, 0, 0, 0.3); }\n\n.TimelineInput_button {\n  margin-top: 8px;\n  height: 26px;\n  color: white;\n  background-color: blue;\n  border-radius: 5px;\n  padding-left: 8px;\n  padding-right: 8px;\n  border: 0; }\n\n.TimelineInput_inputFiles {\n  margin-left: 8px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 218:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 228:
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 229:
/***/ (function(module, exports) {

module.exports = "<header class=\"Header\">\n  <span class=\"Header_title\">{{headerTitle}}</span>\n  <app-login></app-login>\n</header>"

/***/ }),

/***/ 230:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"isLoggedIn\">\n  <button *ngSwitchCase=\"false\" class=\"Login_button\" (click)=\"login()\">Login</button>\n  <button *ngSwitchCase=\"true\" class=\"Login_button\" (click)=\"logout()\">Logout</button>\n</div>\n<div *ngIf=\"errorMessage\" class=\"Login_errorMessage\">{{errorMessage}}</div>"

/***/ }),

/***/ 231:
/***/ (function(module, exports) {

module.exports = "<div class=\"TimelineCell\">\n  <img [src]=\"userImageUrl\" class=\"TimelineCell_userImage\">\n  <span class=\"TimelineCell_userName\">{{message.createdUserName}}</span>\n  <span class=\"TimelineCell_timestamp\">{{message.createdAt | date: 'yyyy/MM/dd hh:mm'}}</span>\n  <div class=\"TimelineCell_text\">{{message.text}}</div>\n  <div *ngIf=\"imageUrl\">\n    <img [src]=\"imageUrl\" class=\"TimelineCell_image\" (click)=\"detailImage.show()\">\n    <sm-modal title=\"\" class=\"basic\" #detailImage>\n      <modal-content>\n        <img [src]=\"imageUrl\" class=\"TimelineCell_detailImage\" />\n      </modal-content>\n    </sm-modal>\n  </div>\n</div>"

/***/ }),

/***/ 232:
/***/ (function(module, exports) {

module.exports = "<textarea [class.TimelineInput_textarea]=\"true\" [class.TimelineInput_textareaError]=\"hasError\" placeholder=\"メッセージを入力\" #inputText></textarea>\n<button class=\"TimelineInput_button\" (click)=\"sendMessage(inputText)\">送信</button>\n<input id=\"InputFiles\" class=\"TimelineInput_inputFiles\" type=\"file\" name=\"files[]\" accept=\"image/*\" multiple />"

/***/ }),

/***/ 233:
/***/ (function(module, exports) {

module.exports = "<app-timeline-input></app-timeline-input>\n<app-timeline-cell *ngFor=\"let message of messagesArray\" [message]=\"message\"></app-timeline-cell>"

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseConfig; });
var firebaseConfig = {
    apiKey: "AIzaSyB7CO-kOCJhB291fsrcJpWTG5UKPdYyfck",
    authDomain: "helloangularfire-775fd.firebaseapp.com",
    databaseURL: "https://helloangularfire-775fd.firebaseio.com",
    projectId: "helloangularfire-775fd",
    storageBucket: "helloangularfire-775fd.appspot.com",
    messagingSenderId: "759205261381"
};

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(133);


/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LoginService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentUser; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(af) {
        this.af = af;
    }
    LoginService.prototype.login = function (success, failure) {
        this.af.auth.login().then(function (authState) {
            CurrentUser.setUserName(authState.auth.displayName);
            CurrentUser.setPhotoUrl(authState.auth.photoURL);
            // 成功
            success();
        }, function (error) {
            // 失敗
            failure(error);
        });
    };
    LoginService.prototype.logout = function () {
        this.af.auth.logout();
        CurrentUser.removeUserInfo();
    };
    LoginService.prototype.isLoggedIn = function (result) {
        this.af.auth.subscribe(function (auth) {
            result(auth ? true : false);
        }, function (error) {
            result(false);
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */]) === "function" && _a || Object])
], LoginService);

var CurrentUserKeys;
(function (CurrentUserKeys) {
    CurrentUserKeys.USER_NAME = "current_user_name";
    CurrentUserKeys.PHOTO_URL = "current_user_photo_url";
})(CurrentUserKeys || (CurrentUserKeys = {}));
var CurrentUser = (function () {
    function CurrentUser() {
    }
    CurrentUser.userName = function () {
        return localStorage.getItem(CurrentUserKeys.USER_NAME);
    };
    CurrentUser.photoUrl = function () {
        return localStorage.getItem(CurrentUserKeys.PHOTO_URL);
    };
    CurrentUser.setUserName = function (userName) {
        localStorage.setItem(CurrentUserKeys.USER_NAME, userName);
    };
    CurrentUser.setPhotoUrl = function (url) {
        localStorage.setItem(CurrentUserKeys.PHOTO_URL, url);
    };
    CurrentUser.removeUserInfo = function () {
        localStorage.removeItem(CurrentUserKeys.USER_NAME);
        localStorage.removeItem(CurrentUserKeys.PHOTO_URL);
    };
    return CurrentUser;
}());

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MessagesService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageData; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FirebaseKeys;
(function (FirebaseKeys) {
    FirebaseKeys.MESSAGES = "/messages";
})(FirebaseKeys || (FirebaseKeys = {}));
var MessagesService = (function () {
    function MessagesService(af, firApp) {
        this.af = af;
        this.firApp = firApp;
    }
    MessagesService.prototype.observeMessages = function (success) {
        this.af.database.list(FirebaseKeys.MESSAGES).subscribe(function (items) {
            var messages = new Array();
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                messages.push(new MessageData(item));
            }
            if (success) {
                success(messages);
            }
        }, function (error) {
        });
    };
    MessagesService.prototype.sendMessage = function (message) {
        return this.af.database.list(FirebaseKeys.MESSAGES).push(message);
    };
    MessagesService.prototype.sendFiles = function (files) {
        var _loop_1 = function (i) {
            var file = files.item(i);
            var msg = new MessageData(null);
            msg.fileType = file.type;
            msg.fileName = file.name;
            var msgRef = this_1.sendMessage(msg);
            var storagePath = FirebaseKeys.MESSAGES + "/" + msgRef.key + "_" + msg.fileName;
            var storageRef = this_1.firApp.storage().ref().child(storagePath);
            var task = storageRef.put(file);
            task.then(function (snapshot) {
                msg.filePath = snapshot.metadata.fullPath;
                msg.downloadUrl = snapshot.downloadURL;
                msgRef.set(msg);
            });
        };
        var this_1 = this;
        for (var i = 0; i < files.length; i++) {
            _loop_1(i);
        }
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* FirebaseApp */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["e" /* AngularFire */]) === "function" && _a || Object, typeof (_b = ((_c = (typeof __WEBPACK_IMPORTED_MODULE_2_firebase__ !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_firebase__).app) && _c).App) === "function" && _b || Object])
], MessagesService);

var MessageData = (function () {
    function MessageData(item) {
        if (item) {
            this.messageId = item.$key;
            for (var _i = 0, _a = Object.keys(item); _i < _a.length; _i++) {
                var key = _a[_i];
                this[key] = item[key];
            }
        }
        else {
            this.createdUserName = __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* CurrentUser */].userName();
            this.userImageUrl = __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* CurrentUser */].photoUrl();
            this.createdAt = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        }
    }
    MessageData.prototype.isPhoto = function () {
        return (this.fileType && this.fileType.match(/image\/.*/ig)) ? true : false;
    };
    return MessageData;
}());

var _a, _c, _b;
//# sourceMappingURL=messages.service.js.map

/***/ })

},[274]);
//# sourceMappingURL=main.bundle.js.map