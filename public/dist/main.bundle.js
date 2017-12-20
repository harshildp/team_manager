webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manage_players_list_list_component__ = __webpack_require__("../../../../../src/app/manage-players/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_players_add_add_component__ = __webpack_require__("../../../../../src/app/manage-players/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_players_manage_players_component__ = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_status_manage_status_component__ = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__manage_status_game_game_component__ = __webpack_require__("../../../../../src/app/manage-status/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'players/list', pathMatch: 'full' },
    { path: 'players', component: __WEBPACK_IMPORTED_MODULE_4__manage_players_manage_players_component__["a" /* ManagePlayersComponent */], children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_2__manage_players_list_list_component__["a" /* ListComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_3__manage_players_add_add_component__["a" /* AddComponent */] }
        ] },
    { path: 'status', component: __WEBPACK_IMPORTED_MODULE_5__manage_status_manage_status_component__["a" /* ManageStatusComponent */], children: [
            { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_6__manage_status_game_game_component__["a" /* GameComponent */] }
        ] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    display:inline-block;\r\n    border-left:1px solid black;\r\n    padding-left:20px;\r\n}\r\nul :first-child{\r\n    border:none;\r\n    margin-right:10px;\r\n    padding:0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n  <title>Team Manager</title>\n</head>\n<body>\n  <ul>\n    <li><a [routerLink]=\"['/players/list']\">Manage Players</a></li>\n    <li><a [routerLink]=\"['/status/game/1']\">Manage Player Status</a></li>\n  </ul>\n  <router-outlet></router-outlet>\n\n</body>\n</html>\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__manage_players_list_list_component__ = __webpack_require__("../../../../../src/app/manage-players/list/list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__manage_players_add_add_component__ = __webpack_require__("../../../../../src/app/manage-players/add/add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__manage_players_manage_players_component__ = __webpack_require__("../../../../../src/app/manage-players/manage-players.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__manage_status_manage_status_component__ = __webpack_require__("../../../../../src/app/manage-status/manage-status.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__manage_status_game_game_component__ = __webpack_require__("../../../../../src/app/manage-status/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__manage_players_list_list_component__["a" /* ListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__manage_players_add_add_component__["a" /* AddComponent */],
                __WEBPACK_IMPORTED_MODULE_9__manage_players_manage_players_component__["a" /* ManagePlayersComponent */],
                __WEBPACK_IMPORTED_MODULE_10__manage_status_manage_status_component__["a" /* ManageStatusComponent */],
                __WEBPACK_IMPORTED_MODULE_11__manage_status_game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_2__player_service__["a" /* PlayerService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/manage-players/add/add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "small{\r\n    color:red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/add/add.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Add a new player</h3>\n<form (submit)='add()' #formData='ngForm'>\n  <input\n    type=\"text\"\n    name=\"name\"\n    required\n    minlength=\"2\"\n    placeholder='Player name'\n    [(ngModel)]=\"newPlayer.name\"\n    #name='ngModel'\n  >\n  <input\n    type=\"text\"\n    name=\"position\"\n    placeholder='Position (optional)'\n    [(ngModel)]=\"newPlayer.position\"\n    #position='ngModel'\n  >\n  <button type='submit' [disabled]=\"!formData.valid\">Add Player</button>\n</form>\n<small *ngIf='!name.valid && !name.untouched'>Name must have 2 characters!</small>\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/add/add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__player__ = __webpack_require__("../../../../../src/app/player.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddComponent = (function () {
    function AddComponent(_playerService, _router) {
        this._playerService = _playerService;
        this._router = _router;
        this.newPlayer = new __WEBPACK_IMPORTED_MODULE_3__player__["a" /* Player */]();
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.add = function () {
        var _this = this;
        this._playerService.add(this.newPlayer, function (cb) {
            _this.newPlayer = new __WEBPACK_IMPORTED_MODULE_3__player__["a" /* Player */]();
            _this._router.navigate(['/players/list']);
        });
    };
    AddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-add',
            template: __webpack_require__("../../../../../src/app/manage-players/add/add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AddComponent);
    return AddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-players/list/list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table {\r\n    border-collapse: collapse;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    text-align:center;\r\n    padding:5px;\r\n}\r\nbutton {\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 8px;\r\n    background-color:darkred;\r\n    color:white;\r\n}\r\nbutton:hover {\r\n    background-color:rgb(138, 67, 67);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/list/list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <table>\n    <thead>\n        <th>Player Name</th>\n        <th>Preferred Position</th>\n        <th>Actions</th>\n    </thead>\n    <tbody>\n      <tr *ngFor='let player of players'>\n        <td>{{ player.name }}</td>\n        <td>{{ player.position }}</td>\n        <td><button (click)='delete(player._id)'>Delete</button></td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "../../../../../src/app/manage-players/list/list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListComponent = (function () {
    function ListComponent(_playerService) {
        var _this = this;
        this._playerService = _playerService;
        this._playerService.getAll(function (players) { return _this.players = players; });
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.delete = function (id) {
        var _this = this;
        this._playerService.delete(id, function (result) {
            console.log(result);
            _this.players = result;
        });
    };
    ListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-list',
            template: __webpack_require__("../../../../../src/app/manage-players/list/list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "li{\r\n    display:inline-block;\r\n    border-left:1px solid black;\r\n    padding-left:20px;\r\n}\r\nul :first-child{\r\n    border:none;\r\n    margin-right:10px;\r\n    padding:0;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.html":
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li><a [routerLink]=\"['/players/list']\">List</a></li>\n  <li><a [routerLink]=\"['/players/add']\">Add Player</a></li>\n</ul>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/manage-players/manage-players.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePlayersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManagePlayersComponent = (function () {
    function ManagePlayersComponent() {
    }
    ManagePlayersComponent.prototype.ngOnInit = function () {
    };
    ManagePlayersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manage-players',
            template: __webpack_require__("../../../../../src/app/manage-players/manage-players.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-players/manage-players.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManagePlayersComponent);
    return ManagePlayersComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-status/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".selectedu{\r\n    background-color:darkgoldenrod;\r\n    color:white;    \r\n}\r\n.selectedp{\r\n    background-color:darkgreen;\r\n    color:white;\r\n}\r\n.selectednp{\r\n    background-color:maroon;\r\n    color:white;\r\n}\r\ntable {\r\n    border-collapse: collapse;\r\n}\r\ntable, th, td {\r\n    border: 1px solid black;\r\n    text-align:center;\r\n    padding:5px;\r\n}\r\nli{\r\n    display:inline-block;\r\n    border-left:1px solid black;\r\n    padding-left:20px;\r\n}\r\nul :first-child{\r\n    border:none;\r\n    margin-right:10px;\r\n    padding:0;\r\n}\r\nbutton {\r\n    border:none;\r\n    padding:5px;\r\n    border-radius: 8px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Player Status - Game {{gameNum}}</h3>\n<ul>\n    <li><a [routerLink]=\"['/status/game/1']\">Game 1</a></li>\n    <li><a [routerLink]=\"['/status/game/2']\">Game 2</a></li>\n    <li><a [routerLink]=\"['/status/game/3']\">Game 3</a></li>\n</ul>\n<div>\n    <table>\n      <thead>\n          <th>Player Name</th>\n          <th>Actions</th>\n      </thead>\n      <tbody>\n        <tr *ngFor='let player of players'>\n            <td>{{ player.name }}</td>\n            <td>\n                <button [ngClass]=\"{'selectedp': player.status[gameNum - 1] == 'playing'}\"\n                    (click)='status(player._id, gameNum, \"playing\")'>Playing</button>\n                <button [ngClass]=\"{'selectednp': player.status[gameNum - 1] == 'not playing'}\"\n                    (click)='status(player._id, gameNum, \"not playing\")'>Not Playing</button>\n                <button [ngClass]=\"{'selectedu': player.status[gameNum - 1] == 'undecided'}\"\n                    (click)='status(player._id, gameNum, \"undecided\")'>Undecided</button>\n            </td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/manage-status/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__player_service__ = __webpack_require__("../../../../../src/app/player.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GameComponent = (function () {
    function GameComponent(_playerService, _route, _router) {
        var _this = this;
        this._playerService = _playerService;
        this._route = _route;
        this._router = _router;
        this._playerService.getAll(function (players) { return _this.players = players; });
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.subscribe(function (param) {
            _this.gameNum = param.id;
        });
    };
    GameComponent.prototype.status = function (id, game, stat) {
        var _this = this;
        this._playerService.status(id, game, stat, function (result) {
            console.log(result);
            _this.players = result;
        });
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/manage-status/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-status/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__player_service__["a" /* PlayerService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/manage-status/manage-status.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageStatusComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ManageStatusComponent = (function () {
    function ManageStatusComponent() {
    }
    ManageStatusComponent.prototype.ngOnInit = function () {
    };
    ManageStatusComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-manage-status',
            template: __webpack_require__("../../../../../src/app/manage-status/manage-status.component.html"),
            styles: [__webpack_require__("../../../../../src/app/manage-status/manage-status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ManageStatusComponent);
    return ManageStatusComponent;
}());



/***/ }),

/***/ "../../../../../src/app/player.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PlayerService = (function () {
    function PlayerService(_http) {
        this._http = _http;
    }
    PlayerService.prototype.getAll = function (cb) {
        var _this = this;
        this._http.get('/players').subscribe(function (res) { cb(res.json()); _this.players = res.json(); }, function (err) { return console.log(err); });
    };
    PlayerService.prototype.add = function (player, cb) {
        this._http.post('/players/add', player).subscribe(function (res) { return cb(res.json()); }, function (err) { return console.log(err); });
    };
    PlayerService.prototype.delete = function (id, cb) {
        var _this = this;
        this._http.delete("/players/delete/" + id).subscribe(function (res) {
            var idx = 0;
            for (var i = 0; i < _this.players.length; i++) {
                if (_this.players[i]._id == id) {
                    idx = i;
                    break;
                }
            }
            _this.players.splice(idx, 1);
            console.log(_this.players);
            console.log(res.json());
            cb(_this.players);
        }, function (err) { return console.log(err); });
    };
    PlayerService.prototype.status = function (id, game, stat, cb) {
        var _this = this;
        var data = {
            playerId: id,
            gameNum: game,
            newStatus: stat
        };
        this._http.put('/players/update', data).subscribe(function (res) {
            var idx = 0;
            for (var i = 0; i < _this.players.length; i++) {
                if (_this.players[i]._id == id) {
                    idx = i;
                    break;
                }
            }
            _this.players[idx].status[game - 1] = stat;
            console.log(res.json());
            console.log(_this.players);
            cb(_this.players);
        }, function (err) { return console.log(err); });
    };
    PlayerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "../../../../../src/app/player.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Player; });
var Player = (function () {
    function Player() {
    }
    return Player;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map