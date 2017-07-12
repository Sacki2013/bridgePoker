webpackJsonp([1,4],{

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidateService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidateService = (function () {
    function ValidateService() {
    }
    ValidateService.prototype.validatePlayer = function (player, adminKey) {
        if (player.name == undefined || adminKey != "220483") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService.prototype.validateResult = function (adminKey) {
        if (adminKey != "220483") {
            return false;
        }
        else {
            return true;
        }
    };
    ValidateService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], ValidateService);
    return ValidateService;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/validate.service.js.map

/***/ }),

/***/ 389:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 389;


/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(477);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(515);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(508);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/main.js.map

/***/ }),

/***/ 507:
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
        this.title = 'app works!';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(682),
            styles: [__webpack_require__(675)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/app.component.js.map

/***/ }),

/***/ 508:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(468);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(507);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_validate_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_players_players_component__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__ = __webpack_require__(510);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_results_results_component__ = __webpack_require__(514);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_player_player_component__ = __webpack_require__(511);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_final_final_component__ = __webpack_require__(509);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
















var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__components_players_players_component__["a" /* PlayersComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'results', component: __WEBPACK_IMPORTED_MODULE_12__components_results_results_component__["a" /* ResultsComponent */] },
    { path: 'player/:id', component: __WEBPACK_IMPORTED_MODULE_13__components_player_player_component__["a" /* PlayerComponent */] },
    { path: 'final', component: __WEBPACK_IMPORTED_MODULE_15__components_final_final_component__["a" /* FinalComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_players_players_component__["a" /* PlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_results_results_component__["a" /* ResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_player_player_component__["a" /* PlayerComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_final_final_component__["a" /* FinalComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
                __WEBPACK_IMPORTED_MODULE_8_angular2_flash_messages__["FlashMessagesModule"],
                __WEBPACK_IMPORTED_MODULE_14_ng2_order_pipe__["Ng2OrderModule"]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_validate_service__["a" /* ValidateService */],
                __WEBPACK_IMPORTED_MODULE_7__services_auth_service__["a" /* AuthService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/app.module.js.map

/***/ }),

/***/ 509:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FinalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FinalComponent = (function () {
    function FinalComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    FinalComponent.prototype.ngOnInit = function () {
    };
    FinalComponent.prototype.onFinalSubmit = function () {
        var _this = this;
        var finalUpd = {
            potTotal: this.potTotal,
            gameNum: this.gameNum,
            amount: this.amount
        };
        var adminKey = this.adminKey;
        if (!this.validateService.validateResult(adminKey)) {
            this.flashMessage.show('Final could not be updated.', { cssClass: 'alert-danger', timeout: 10000 });
        }
        this.authService.updateFinal(finalUpd, this.id).subscribe(function (data) {
            _this.flashMessage.show('Final updated.', { cssClass: 'alert-success', timeout: 10000 });
            _this.router.navigate(['/']);
        });
        // }
    };
    FinalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-final',
            template: __webpack_require__(683),
            styles: [__webpack_require__(676)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], FinalComponent);
    return FinalComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/final.component.js.map

/***/ }),

/***/ 510:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(684),
            styles: [__webpack_require__(677)]
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/navbar.component.js.map

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerComponent = (function () {
    function PlayerComponent(authService, route, router) {
        var _this = this;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.playerId = route.snapshot.params['id'];
        this.authService.getPlayer(this.playerId).subscribe(function (players) {
            _this.showPlayer = players;
        }, function (err) {
            console.log(err);
            return false;
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(685),
            styles: [__webpack_require__(678)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* ActivatedRoute */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _c) || Object])
    ], PlayerComponent);
    return PlayerComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/player.component.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayersComponent = (function () {
    function PlayersComponent(authService, router) {
        this.authService = authService;
        this.router = router;
        this.order = 'points';
    }
    PlayersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.getPlayers().subscribe(function (players) {
            _this.player = players;
        }, function (err) {
            console.log(err);
            return false;
        });
        this.authService.getFinal('5959193ef8fc8925150022dc').subscribe(function (finals) {
            _this.final = finals;
            console.log(finals);
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    PlayersComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(686),
            styles: [__webpack_require__(679)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === 'function' && _b) || Object])
    ], PlayersComponent);
    return PlayersComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/players.component.js.map

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RegisterComponent = (function () {
    function RegisterComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.onRegisterSubmit = function () {
        var _this = this;
        var player = {
            name: this.name,
            gamesPlayed: 0,
            points: 0,
        };
        var adminKey = this.adminKey;
        if (!this.validateService.validatePlayer(player, adminKey)) {
            this.flashMessage.show('Player could not be added.', { cssClass: 'alert-danger', timeout: 10000 });
        }
        if (this.validateService.validatePlayer(player, adminKey)) {
            // Register Player
            this.authService.registerPlayer(player).subscribe(function (data) {
                if (data.success) {
                    _this.flashMessage.show('Player ' + player.name + ' added.', { cssClass: 'alert-success', timeout: 10000 });
                    _this.router.navigate(['/']);
                }
                else {
                    _this.flashMessage.show('Player could not be added', { cssClass: 'alert-danger', timeout: 10000 });
                    _this.router.navigate(['/register']);
                }
            });
        }
    };
    RegisterComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(687),
            styles: [__webpack_require__(680)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], RegisterComponent);
    return RegisterComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/register.component.js.map

/***/ }),

/***/ 514:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_validate_service__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(64);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResultsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ResultsComponent = (function () {
    function ResultsComponent(validateService, flashMessage, authService, router) {
        this.validateService = validateService;
        this.flashMessage = flashMessage;
        this.authService = authService;
        this.router = router;
    }
    ResultsComponent.prototype.ngOnInit = function () {
    };
    ResultsComponent.prototype.onResultsSubmit = function () {
        var _this = this;
        var player = {
            gameNum: this.gameNum,
            place: this.place,
            points: this.points,
            rebuys: this.rebuys,
            addons: this.addons
        };
        var adminKey = this.adminKey;
        if (!this.validateService.validateResult(adminKey)) {
            this.flashMessage.show('Result could not be added.', { cssClass: 'alert-danger', timeout: 10000 });
        }
        // if(this.validateService.validateResults(adminKey)){
        // Add Results Player
        this.authService.registerResults(player, this.id).subscribe(function (data) {
            _this.flashMessage.show('Player results added.', { cssClass: 'alert-success', timeout: 10000 });
            _this.router.navigate(['/']);
        });
        // }
    };
    ResultsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-results',
            template: __webpack_require__(688),
            styles: [__webpack_require__(681)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_validate_service__["a" /* ValidateService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3_angular2_flash_messages__["FlashMessagesService"]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_auth_service__["a" /* AuthService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === 'function' && _d) || Object])
    ], ResultsComponent);
    return ResultsComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/results.component.js.map

/***/ }),

/***/ 515:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/environment.js.map

/***/ }),

/***/ 675:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 676:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 677:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 678:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 679:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 680:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 681:
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ 682:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n  <flash-messages></flash-messages>\n    <router-outlet></router-outlet>\n\n"

/***/ }),

/***/ 683:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-primary\">\n  <div class=\"container\">\n    <h2 class=\"title is-1\">Update Final</h2>\n  </div> <!-- ./container -->\n</div> <!-- ./notification -->\n\n<div class=\"container\">\n  <form (submit)=\"onFinalSubmit()\">\n    <div class=\"field\">\n      <label class=\"label\">Final ID</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid user ID</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Game Number</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"gameNum\" name=\"gameNum\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid game number</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Amount</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid amount</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Pot Total</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"potTotal\" name=\"potTotal\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid pot total</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Admin Password</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"password\" [(ngModel)]=\"adminKey\" name=\"adminKey\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-key\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Are you admin?</p>\n    </div>\n\n    <div class=\"field\">\n      <p class=\"control\">\n        <input type=\"submit\" value=\"Update League\" class=\"button is-primary\">\n      </p>\n    </div>\n  </form>\n</div> <!-- ./container -->\n"

/***/ }),

/***/ 684:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar is-primary\">\n  <!--<div class=\"container\">-->\n    <div class=\"navbar-brand\">\n      <a [routerLink]=\"['/']\" class=\"navbar-item\" style=\"color: #00d1b2\">\n        Bridge Poker\n      </a>\n\n      <a class=\"navbar-item is-hidden-desktop\" [routerLink]=\"['/register']\">\n        <span class=\"icon\" style=\"color: #00d1b2;\">\n          <i class=\"fa fa-user-plus\"></i>\n        </span>\n      </a>\n\n      <a class=\"navbar-item is-hidden-desktop\" [routerLink]=\"['/results']\">\n        <span class=\"icon\" style=\"color: #00d1b2;\">\n          <i class=\"fa fa-plus\"></i>\n        </span>\n      </a>\n\n      <a class=\"navbar-item is-hidden-desktop\" [routerLink]=\"['/final']\">\n        <span class=\"icon\" style=\"color: #00d1b2;\">\n          <i class=\"fa fa-trophy\"></i>\n        </span>\n      </a>\n\n    </div>\n\n    <div class=\"navbar-menu\">\n      <div class=\"navbar-end\">\n        <a href=\"\" class=\"navbar-item\">Home</a>\n\n        <div class=\"navbar-item has-dropdown is-hoverable\">\n          <a class=\"navbar-link\">\n            Admin\n          </a>\n\n          <div class=\"navbar-dropdown\">\n            <a  [routerLink]=\"['/register']\" class=\"navbar-item\">\n              Add Player\n            </a>\n            <a  [routerLink]=\"['/results']\" class=\"navbar-item\">\n              Add Results\n            </a>\n            <a class=\"navbar-item\">\n              Update Final\n            </a>\n          </div>\n        </div>\n        </div>\n    </div>\n  <!--</div>  ./container -->\n</nav>\n"

/***/ }),

/***/ 685:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-primary is-bold\">\n  <div class=\"container has-text-centered\">\n    <h1 class=\"title is-1\">{{ showPlayer?.name }}</h1>\n    <h2 class=\"subtitle is-4\">Player Statistics</h2>\n    <hr>\n    <nav class=\"level\">\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Games Played</p>\n          <p class=\"title\">{{ showPlayer?.gamesPlayed }} </p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Rebuys</p>\n          <p class=\"title\">{{ showPlayer?.rebuys }} </p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Addons</p>\n          <p class=\"title\">{{ showPlayer?.addons }} </p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Profit/Loss</p>\n          <p class=\"title\">£{{ (showPlayer?.totalWinnings) - (showPlayer?.totalSpend) }}\n            <span>\n              <i class=\"fa\" [ngClass]=\"((showPlayer?.totalWinnings) - (showPlayer?.totalSpend) >= 0) ? 'fa-arrow-up' : 'fa-arrow-down'\">\n              </i>\n            </span>\n          </p>\n        </div>\n      </div>\n    </nav>\n  </div> <!-- ./container -->\n</div> <!-- ./notification -->\n\n<div class=\"columns\">\n  <div class=\"column is-half is-offset-one-quarter\">\n    <h2 class=\"title is-2 has-text-centered\">\n      Results\n    </h2>\n    <table class=\"table is-bordered\">\n      <thead>\n        <tr>\n          <th>Game Number</th>\n          <th>Place</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of showPlayer?.results\">\n          <td>{{ item.gameNum }}</td>\n          <td>{{ item.place }}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>\n<!--<div class=\"panel panel-primary\">\n  <div class=\"panel-heading\">\n    <h1 class=\"panel-title\">{{ showPlayer?.name }}</h1>\n  </div>\n  <div class=\"panel-body\">\n    <ul class=\"list-group\">\n      <li class=\"list-group-item\">\n        <span class=\"badge\">{{ showPlayer?.gamesPlayed }}</span>\n        Games Played\n      </li>\n      <li class=\"list-group-item\">\n        <span class=\"badge\">{{ showPlayer?.rebuys }}</span>\n        Rebuys\n      </li>\n      <li class=\"list-group-item\">\n        <span class=\"badge\">{{ showPlayer?.addons }}</span>\n        Addons\n      </li>\n      <li class=\"list-group-item\">\n        Results\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Game Number</th>\n              <th>Place</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of showPlayer?.results\">\n              <td>{{ item.gameNum }}</td>\n              <td>{{ item.place }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </li>\n    </ul>\n  </div>\n</div>-->\n"

/***/ }),

/***/ 686:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-primary is-bold\">\n  <div class=\"container has-text-centered\">\n    <h1 class=\"title\">Final</h1>\n    <h2 class=\"subtitle\">{{ final?.finalDate }}</h2>\n    <hr>\n    <nav class=\"level\">\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Games Played</p>\n          <p class=\"title\">{{ final?.results.length }} / 12 </p>\n        </div>\n      </div>\n      <div class=\"level-item has-text-centered\">\n        <div>\n          <p class=\"heading\">Current Pot</p>\n          <p class=\"title\">£{{ final?.potTotal }} </p>\n        </div>\n      </div>\n    </nav>\n  </div> <!-- ./container -->\n</div> <!-- ./notification -->\n\n<section class=\"section\">\n  <div class=\"\">\n    <div class=\"columns\">\n      <div class=\"column\">\n        <table class=\"table is-narrow\">\n            <thead>\n            <tr>\n              <th>#</th>\n              <th>Name</th>\n              <th>Played</th>\n              <th>Re buys</th>\n              <th>Add ons</th>\n              <th>Points</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let player of player | orderBy : order : true ; let i = index;\">\n              <td>{{ i + 1 }}</td>\n              <td><a [routerLink]=\"['/player', player._id]\" id=\"{{ player._id }}\">{{ player.name }}</a></td>\n              <td>{{ player.gamesPlayed }}</td>\n              <td>{{ player.rebuys }}</td>\n              <td>{{ player.addons }}</td>\n              <td>{{ player.points }}</td>\n            </tr>\n          </tbody>\n        </table>\n      </div> <!-- ./column -->\n    </div> <!-- ./columns -->\n  </div><!-- ./container -->\n</section><!-- ./section -->\n<!--\n  <section class=\"col-md-3\">\n    <div class=\"uk-card uk-card-primary\">\n      <h3 class=\"uk-card-title\">Final {{ final?.finalNum }}</h3>\n      <ul class=\"uk-list\">\n        <li>Games Played: {{ final?.results.length }} / 12</li>\n        <li>Current Pot: £{{ final?.potTotal }}</li>\n        <li>Next Final: {{ final?.finalDate }}</li>\n      </ul>\n    </div>\n  </section>\n-->\n<!--<div class=\"panel panel-default text-center\">\n  <div class=\"panel-heading\">\n    <h3 class=\"panel-title\">Season {{ final?.finalNum }}</h3>\n  </div>\n  <div class=\"panel-body\">\n    <div class=\"row\">\n      <div class=\"col-md-4\">\n        <h3>Games Played: {{ final?.results.length }} / 12</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>Current Pot: £{{ final?.potTotal }}</h3>\n      </div>\n      <div class=\"col-md-4\">\n        <h3>Next Final: {{ final?.finalDate }}</h3>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div>\n  <h2 class=\"page-header\">\n    League Table\n  </h2>\n</div>\n\n<div class=\"row\">\n  <table class=\"table table-striped table-hover \">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Name</th>\n        <th>Games Played</th>\n        <th>Rebuys</th>\n        <th>Addons</th>\n        <th>Points</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let player of player | orderBy : order : true ; let i = index;\">\n        <td>{{ i + 1 }}</td>\n        <td><a [routerLink]=\"['/player', player._id]\" id=\"{{ player._id }}\">{{ player.name }}</a></td>\n        <td>{{ player.gamesPlayed }}</td>\n        <td>{{ player.rebuys }}</td>\n        <td>{{ player.addons }}</td>\n        <td>{{ player.points }}</td>\n      </tr>\n    </tbody>\n  </table>\n</div>-->\n"

/***/ }),

/***/ 687:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-primary\">\n  <div class=\"container\">\n    <h2 class=\"title is-1\">Add Player</h2>\n  </div> <!-- ./container -->\n</div> <!-- ./notification -->\n\n<div class=\"container\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"field\">\n      <label class=\"label\">Player Name</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-user\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid name</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Admin Password</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"password\" [(ngModel)]=\"adminKey\" name=\"adminKey\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-key\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Are you admin?</p>\n    </div>\n    <div class=\"field\">\n      <p class=\"control\">\n        <input type=\"submit\" value=\"Register\" class=\"button is-primary\">\n      </p>\n    </div>\n  </form>\n</div> <!-- ./container -->\n<!--<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Player Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    <label>Admin Password</label>\n    <input type=\"password\" [(ngModel)]=\"adminKey\" name=\"adminKey\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>-->\n"

/***/ }),

/***/ 688:
/***/ (function(module, exports) {

module.exports = "<div class=\"notification is-primary\">\n  <div class=\"container\">\n    <h2 class=\"title is-1\">Add Results</h2>\n  </div> <!-- ./container -->\n</div> <!-- ./notification -->\n\n<div class=\"container\">\n  <form (submit)=\"onRegisterSubmit()\">\n    <div class=\"field\">\n      <label class=\"label\">Player ID</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"text\" [(ngModel)]=\"id\" name=\"id\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter final ID</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Game Number</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"gameNum\" name=\"gameNum\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid game number</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Amount</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"amount\" name=\"amount\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid amount</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Pot Total</label>\n      <p class=\"control has-icons-left\">\n      <input type=\"number\" [(ngModel)]=\"potTotal\" name=\"potTotal\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-id-card\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Please enter valid pot total</p>\n    </div>\n\n    <div class=\"field\">\n      <label class=\"label\">Admin Password</label>\n      <p class=\"control has-icons-left\">\n        <input type=\"password\" [(ngModel)]=\"adminKey\" name=\"adminKey\" class=\"input\"> <!-- JS add is-success/is-danger -->\n        <span class=\"icon is-small is-left\">\n          <i class=\"fa fa-key\"></i>\n        </span>\n      </p>\n      <p class=\"help is-success\">Are you admin?</p>\n    </div>\n\n    <div class=\"field\">\n      <p class=\"control\">\n        <input type=\"submit\" value=\"Update Final\" class=\"button is-primary\">\n      </p>\n    </div>\n  </form>\n</div> <!-- ./container -->\n<!--<form (submit)=\"onRegisterSubmit()\">\n  <div class=\"form-group\">\n    <label>Player Name</label>\n    <input type=\"text\" [(ngModel)]=\"name\" name=\"name\" class=\"form-control\">\n    <label>Admin Password</label>\n    <input type=\"password\" [(ngModel)]=\"adminKey\" name=\"adminKey\" class=\"form-control\">\n  </div>\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Submit\">\n</form>-->\n"

/***/ }),

/***/ 707:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(390);


/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(692);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthService = (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerPlayer = function (player) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://bridgepoker.herokuapp.com/players/register', player, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPlayers = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://bridgepoker.herokuapp.com/players', { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.registerResults = function (results, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('https://bridgepoker.herokuapp.com/players/player/' + id, results, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getPlayer = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://bridgepoker.herokuapp.com/players/player/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.getFinal = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.get('https://bridgepoker.herokuapp.com/finals/final/' + id, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService.prototype.updateFinal = function (finalUpd, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.http.put('https://bridgepoker.herokuapp.com/finals/final/' + id, finalUpd, { headers: headers }).map(function (res) { return res.json(); });
    };
    AuthService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], AuthService);
    return AuthService;
    var _a;
}());
//# sourceMappingURL=/home/contemparyworm/development/bridgepokerleague/src/src/auth.service.js.map

/***/ })

},[707]);
//# sourceMappingURL=main.bundle.map