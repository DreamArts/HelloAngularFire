webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(114);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
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
        this.headerTitle = "Angular, Firebase勉強会";
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(187),
        styles: [__webpack_require__(177)]
    }),
    __metadata("design:paramtypes", [])
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__firebaseConfig__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__timeline_timeline_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__timeline_input_timeline_input_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__timeline_cell_timeline_cell_component__ = __webpack_require__(111);
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
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_8__timeline_timeline_component__["a" /* TimelineComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__timeline_timeline_component__["a" /* TimelineComponent */],
            __WEBPACK_IMPORTED_MODULE_9__timeline_input_timeline_input_component__["a" /* TimelineInputComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__timeline_cell_timeline_cell_component__["a" /* TimelineCellComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(routeSettings, { useHash: true, preloadingStrategy: __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* PreloadAllModules */] }),
            __WEBPACK_IMPORTED_MODULE_5_angularfire2__["c" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_6__firebaseConfig__["a" /* firebaseConfig */], firebaseAuthConfig)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_login_service__ = __webpack_require__(110);
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__(188),
        styles: [__webpack_require__(178)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_login_service__["a" /* LoginService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(45);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
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
            // 成功
            success();
        }, function (error) {
            // 失敗
            failure(error);
        });
    };
    LoginService.prototype.logout = function () {
        this.af.auth.logout();
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
], LoginService);

var _a;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(43);
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
    }
    TimelineCellComponent.prototype.ngOnInit = function () {
    };
    return TimelineCellComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */]) === "function" && _a || Object)
], TimelineCellComponent.prototype, "message", void 0);
TimelineCellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-timeline-cell',
        template: __webpack_require__(189),
        styles: [__webpack_require__(179)]
    }),
    __metadata("design:paramtypes", [])
], TimelineCellComponent);

var _a;
//# sourceMappingURL=timeline-cell.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(43);
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
    }
    TimelineInputComponent.prototype.ngOnInit = function () {
    };
    TimelineInputComponent.prototype.sendMessage = function (inputText) {
        var message = new __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["a" /* MessageData */](null);
        message.text = inputText.value;
        this.messagesService.sendMessage(message);
        inputText.value = "";
    };
    return TimelineInputComponent;
}());
TimelineInputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-timeline-input',
        template: __webpack_require__(190),
        styles: [__webpack_require__(180)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */]) === "function" && _a || Object])
], TimelineInputComponent);

var _a;
//# sourceMappingURL=timeline-input.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_messages_service__ = __webpack_require__(43);
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
    function TimelineComponent(messages) {
        this.messages = messages;
    }
    TimelineComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messages.observeMessages(function (messages) {
            _this.messagesArray = messages;
        });
    };
    return TimelineComponent;
}());
TimelineComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-timeline',
        template: __webpack_require__(191),
        styles: [__webpack_require__(181)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_messages_service__["b" /* MessagesService */]) === "function" && _a || Object])
], TimelineComponent);

var _a;
//# sourceMappingURL=timeline.component.js.map

/***/ }),

/***/ 114:
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

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".Header {\n  height: 44px;\n  width: 100%;\n  background-color: orange; }\n  .Header_title {\n    color: white;\n    margin-left: 8px;\n    height: 44px;\n    line-height: 44px;\n    text-align: center;\n    float: left; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".Login_button {\n  background-color: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 0;\n  height: 28px;\n  padding: 8px;\n  margin-top: 8px;\n  position: relative;\n  right: 8px;\n  float: right; }\n\n.Login_errorMessage {\n  color: red; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".TimelineCell {\n  padding: 16px; }\n  .TimelineCell_userImage {\n    width: 36px;\n    height: 36px;\n    border-radius: 18px;\n    background-color: lightblue;\n    float: left;\n    margin-top: 6px; }\n  .TimelineCell_userName {\n    color: lightgray;\n    font-size: 0.85em;\n    margin-left: 8px;\n    margin-right: 8px; }\n  .TimelineCell_timestamp {\n    color: lightgray;\n    font-size: 0.85em; }\n  .TimelineCell_text {\n    white-space: pre-wrap;\n    word-break: break-all;\n    display: block;\n    width: 95%;\n    color: #323232;\n    font-size: 1em;\n    line-height: 1.5em;\n    top: -10px;\n    margin-left: 44px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, ".TimelineInput {\n  width: 100%; }\n  .TimelineInput_textarea {\n    margin: 8px;\n    height: 22px;\n    width: 80%;\n    border: 1px solid lightgray;\n    border-radius: 5px;\n    float: left; }\n  .TimelineInput_button {\n    margin-top: 8px;\n    height: 26px;\n    color: white;\n    background-color: blue;\n    border-radius: 5px;\n    padding-left: 8px;\n    padding-right: 8px;\n    border: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(17)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 187:
/***/ (function(module, exports) {

module.exports = "<header class=\"Header\">\n  <span class=\"Header_title\">{{headerTitle}}</span>\n  <app-login></app-login>\n</header>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 188:
/***/ (function(module, exports) {

module.exports = "<div [ngSwitch]=\"isLoggedIn\">\n  <button *ngSwitchCase=\"false\" class=\"Login_button\" (click)=\"login()\">Login</button>\n  <button *ngSwitchCase=\"true\" class=\"Login_button\" (click)=\"logout()\">Logout</button>\n</div>\n<div *ngIf=\"Login_errorMessage\" class=\"errorMessage\">{{errorMessage}}</div>"

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

module.exports = "<div class=\"TimelineCell\">\n  <img [src]=\"userImageUrl\" class=\"TimelineCell_userImage\" #userImageTag>\n  <span class=\"TimelineCell_userName\">{{message.createdUserName}}</span>\n  <span class=\"TimelineCell_timestamp\">{{message.createdAt | date: 'yyyy/MM/dd hh:mm'}}</span>\n  <div class=\"TimelineCell_text\">{{message.text}}</div>\n\n</div>"

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

module.exports = "<div class=\"TimelineInput\">\n  <textarea class=\"TimelineInput_textarea\" placeholder=\"メッセージを入力\" #inputText></textarea>\n  <button class=\"TimelineInput_button\" (click)=\"sendMessage(inputText)\">送信</button>\n</div>"

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

module.exports = "<app-timeline-input></app-timeline-input>\n<app-timeline-cell *ngFor=\"let message of messagesArray\" [message]=\"message\"></app-timeline-cell>"

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const firebaseConfig = {  
  apiKey: "AIzaSyB7CO-kOCJhB291fsrcJpWTG5UKPdYyfck",
  authDomain: "helloangularfire-775fd.firebaseapp.com",
  databaseURL: "https://helloangularfire-775fd.firebaseio.com",
  projectId: "helloangularfire-775fd",
  storageBucket: "helloangularfire-775fd.appspot.com",
  messagingSenderId: "759205261381"
}
/* harmony export (immutable) */ __webpack_exports__["a"] = firebaseConfig;


/***/ }),

/***/ 227:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(100);


/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase__);
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



var MessagesService = (function () {
    function MessagesService(af) {
        this.af = af;
    }
    MessagesService.prototype.observeMessages = function (success) {
        this.af.database.list("/messages").subscribe(function (items) {
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
        this.af.database.list("/messages").push(message);
    };
    return MessagesService;
}());
MessagesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2__["d" /* AngularFire */]) === "function" && _a || Object])
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
            this.createdUserName = "伊勢川 暁";
            this.createdAt = __WEBPACK_IMPORTED_MODULE_2_firebase__["database"].ServerValue.TIMESTAMP;
        }
    }
    return MessageData;
}());

var _a;
//# sourceMappingURL=messages.service.js.map

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 99;


/***/ })

},[227]);
//# sourceMappingURL=main.bundle.js.map