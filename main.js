(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/Leaderboard/leaderboard-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Leaderboard/leaderboard-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card text-center\">\n  <div class=\"card-header\">\n      {{listTitle}}\n  </div>\n  <div class=\"card-body\">\n    <div class col-lg-2>\n      <div class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\">\n          <label class=\"btn btn-secondary active\">\n            <input type=\"radio\" name=\"options\" id=\"option1\" autocomplete=\"off\" checked> Daily\n          </label>\n          <label class=\"btn btn-secondary\">\n            <input type=\"radio\" name=\"options\" id=\"option2\" autocomplete=\"off\"> Weekly\n          </label>\n          <label class=\"btn btn-secondary\">\n            <input type=\"radio\" name=\"options\" id=\"option3\" autocomplete=\"off\"> Monthly\n          </label>\n          <label class=\"btn btn-secondary\">\n              <input type=\"radio\" name=\"options\" id=\"option4\" autocomplete=\"off\"> All-Time\n          </label>\n      </div>\n    </div>\n\n        <table class=\"table\"\n        *ngIf= \"profiles && profiles.length\">\n          <thead>\n                <tr>\n                <th scope=\"col\">Rank</th>\n                <th scope=\"col\">Username</th>\n                <th scope=\"col\">Asset Class</th>\n                <th scope=\"col\">Biggest Holding</th>\n                <th scope=\"col\">Daily Percentage Change</th>\n                </tr>\n          </thead>\n          <tbody>\n                <tr *ngFor= 'let profile of profiles'>\n                  <td>{{profile.globalRank}}</td>\n                  <td>\n                    <a [routerLink]= \"['/profile', profile.productId]\">\n                    {{profile.username}}\n                    </a>\n                  </td>\n                  <td>{{profile.assetClass}}</td>\n                  <td>{{profile.biggestHolding}}</td>\n                  <td>{{profile.dailyPercentageChange}}</td>\n          </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/Leaderboard/leaderboards.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Leaderboard/leaderboards.component.ts ***!
  \*******************************************************/
/*! exports provided: LeaderboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function() { return LeaderboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var LeaderboardComponent = /** @class */ (function () {
    function LeaderboardComponent() {
        this.listTitle = "Leaderboards";
        this.profiles = [
            {
                "productId": 1,
                "username": "Joshglobal",
                "Investment Thesis": "Usersubmission: enter here",
                "assetClass": "Cryptocurrency",
                "biggestHolding": "$NANO",
                "dailyPercentageChange": "+10%",
                "Weekly Percentage Change": "+30%",
                "Monthly Percentage Change": "+20%",
                "Nano %": 28,
                "Bitcoin %": 16,
                "Ripple %": 24,
                "Stellar Lumens %": 20,
                "Komodo %": 14,
                "Binance Coin %": 10,
                "Club Soccor Rank": 1,
                "globalRank": 5,
                "Weekly Trade Average": 20,
            },
            {
                "productId": 2,
                "username": "BigJorge",
                "Investment Thesis": "Usersubmission: enter here",
                "assetClass": "Cryptocurrency",
                "biggestHolding": "$BTC",
                "dailyPercentageChange": "+6%",
                "Weekly Percentage Change": "+13%",
                "Monthly Percentage Change": "+24%",
                "Bitcoin %": 28,
                "Monero %": 16,
                "Ripple %": 24,
                "Stellar Lumens %": 20,
                "Komodo %": 14,
                "Binance Coin %": 10,
                "Club Soccor Rank": 2,
                "globalRank": 8,
                "Weekly Trade Average": 150,
            },
            {
                "productId": 3,
                "username": "RoyceRoller",
                "Investment Thesis": "Usersubmission: enter here",
                "assetClass": "Cryptocurrency",
                "biggestHolding": "$ETH",
                "dailyPercentageChange": "-10%",
                "Weekly Percentage Change": "+13%",
                "Monthly Percentage Change": "+40%",
                "Ethereum %": 50,
                "Arbitrage Coin %": 16,
                "Trump Coin %": 10,
                "Club Soccor Rank": 5,
                "globalRank": 4,
                "Weekly Trade Average": 300,
            },
            {
                "productId": 4,
                "username": "ScottLutt",
                "Investment Thesis": "Usersubmission: enter here",
                "assetClass": "Equities- Common Stock",
                "biggestHolding": "NASDAQ: TSLA",
                "dailyPercentageChange": "+2%",
                "Weekly Percentage Change": "+23%",
                "Monthly Percentage Change": "+20%",
                "TSLA %": 28,
                "BOA %": 16,
                "NKE %": 24,
                "SPOT %": 20,
                "SNAP %": 14,
                "AMZN %": 10,
                "Club Soccor Rank": 4,
                "globalRank": 3,
                "Weekly Trade Average": 45,
            },
            {
                "productId": 5,
                "username": "JoeJared",
                "Investment Thesis": "Usersubmission: enter here",
                "assetClass": "Equities- Common Stock",
                "biggestHolding": "NASDAQ: NFLX",
                "dailyPercentageChange": "-3%",
                "Weekly Percentage Change": "+13%",
                "Monthly Percentage Change": "+40%",
                "NFLX %": 28,
                "BOA %": 16,
                "NKE %": 24,
                "SPOT %": 20,
                "SNAP %": 14,
                "AMZN %": 10,
                "Club Soccor Rank": 3,
                "globalRank": 5,
                "Weekly Trade Average": 70,
            },
        ];
    }
    LeaderboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./leaderboard-list.component.html */ "./src/app/Leaderboard/leaderboard-list.component.html")
        })
    ], LeaderboardComponent);
    return LeaderboardComponent;
}());



/***/ }),

/***/ "./src/app/Profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/Profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <title>Foliate, Compare and compete investment portfolios</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <style>\n    /* Remove the navbar's default margin-bottom and rounded borders */ \n    .navbar {\n      margin-bottom: 0;\n      border-radius: 0;\n    }\n    \n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 450px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      padding-top: 20px;\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n    \n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n    \n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height:auto;} \n    }\n  </style>\n</head>\n<body>\n<!-- TradingView Widget BEGIN -->\n<H5> Joshglobal's live portfolio percentage performance </H5>\n <p>Username: \"Joshglobal\"</p>\n <p>Investment Thesis: \"This portfolio is strictly invested on P2P digital currencies and utility tokens\"\n</p>\n  <button type=\"button\" class=\"btn btn-primary\">\n  Asset Class <span class=\"badge badge-light\">Cryptocurrency</span>\n  </button>\n  <button type=\"button\" class=\"btn btn-primary\">\n  Number of Assets <span class=\"badge badge-warning\">6</span>\n  </button>\n\n<!-- TradingView Widget BEGIN -->\n<div class=\"tradingview-widget-container\">\n  <div class=\"tradingview-widget-container__widget\"></div>\n  <div class=\"tradingview-widget-copyright\"><a href=\"https://www.tradingview.com\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">Cryptocurrency</span></a> by TradingView</div>\n  <script type=\"text/javascript\" src=\"https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js\" async>\n  {\n  \"showChart\": true,\n  \"locale\": \"en\",\n  \"largeChartUrl\": \"\",\n  \"width\": \"400\",\n  \"height\": \"600\",\n  \"plotLineColorGrowing\": \"rgba(60, 188, 152, 1)\",\n  \"plotLineColorFalling\": \"rgba(255, 74, 104, 1)\",\n  \"gridLineColor\": \"rgba(233, 233, 234, 1)\",\n  \"scaleFontColor\": \"rgba(214, 216, 224, 1)\",\n  \"belowLineFillColorGrowing\": \"rgba(60, 188, 152, 0.05)\",\n  \"belowLineFillColorFalling\": \"rgba(255, 74, 104, 0.05)\",\n  \"symbolActiveColor\": \"rgba(217, 234, 211, 1)\",\n  \"tabs\": [\n    {\n      \"title\": \"Cryptocurrency\",\n      \"symbols\": [\n        {\n          \"s\": \"BINANCE:NANOUSD\",\n          \"d\": \"Nano\"\n        },\n        {\n          \"s\": \"COINBASE:BTCUSD\",\n          \"d\": \"Bitcoin\"\n        },\n        {\n          \"s\": \"KRAKEN:XRPUSD\",\n          \"d\": \"Ripple\"\n        },\n        {\n          \"s\": \"BITFINEX:XLMUSD\",\n          \"d\": \"Stellar Lumens\"\n        },\n        {\n          \"s\": \"BITTREX:KMDUSD\",\n          \"d\": \"Komodo\"\n        },\n        {\n          \"s\": \"BINANCE:BNBUSDT\",\n          \"d\": \"Binance Coin\"\n        }\n      ]\n    }\n  ]\n}\n  </script>\n</div>\n<!-- TradingView Widget END -->\n\n<footer class=\"container-fluid text-center\">\n  <p>Copyright Innoblue 2018</p>\n</footer>\n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/Profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/Profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(route) {
        this.route = route;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.paramMap.get("productId");
        this.profile = {
            "productId": id,
            "username": "Joshglobal",
            "Investment Thesis": "Usersubmission: enter here",
            "assetClass": "Cryptocurrency",
            "biggestHolding": "$NANO",
            "dailyPercentageChange": "+10%",
            "Weekly Percentage Change": "+30%",
            "Monthly Percentage Change": "+20%",
            "Nano %": 28,
            "Bitcoin %": 16,
            "Ripple %": 24,
            "Stellar Lumens %": 20,
            "Komodo %": 14,
            "Binance Coin %": 10,
            "Club Soccor Rank": 1,
            "globalRank": 5,
            "Weekly Trade Average": 20,
        };
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/Profile/profile.component.html"),
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/Signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/Signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<html lang=\"en\">\n<head>\n  <title>Foliate, Compare and compete investment portfolios</title>\n  <meta charset=\"utf-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n  <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n  <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n  <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n  <style>\n    /* Remove the navbar's default margin-bottom and rounded borders */ \n    .navbar {\n      margin-bottom: 0;\n      border-radius: 0;\n    }\n    \n    /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n    .row.content {height: 450px}\n    \n    /* Set gray background color and 100% height */\n    .sidenav {\n      padding-top: 20px;\n      background-color: #f1f1f1;\n      height: 100%;\n    }\n    \n    /* Set black background color, white text and some padding */\n    footer {\n      background-color: #555;\n      color: white;\n      padding: 15px;\n    }\n    \n    /* On small screens, set height to 'auto' for sidenav and grid */\n    @media screen and (max-width: 767px) {\n      .sidenav {\n        height: auto;\n        padding: 15px;\n      }\n      .row.content {height:auto;} \n    }\n  </style>\n</head>\n<body>\n\n   <h3>How to create and connect your Binance API Key</h3>\n  <div>\n    <iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Pe0NOqQQ3Zw\" frameborder=\"0\" allow=\"autoplay; encrypted-media\" allowfullscreen></iframe>\n  </div>\n\n<label for=\"basic-url\">Connect your Binance Account</label>\n<div class=\"input-group mb-3\">\n  <div class=\"input-group-prepend\">\n    <span class=\"input-group-text\" id=\"basic-addon3\">Enter API Key</span>\n  </div>\n  <input type=\"text\" class=\"form-control\" id=\"basic-url\" aria-describedby=\"basic-addon3\">\n</div>\n<button type=\"button\" class=\"btn btn-warning\">Submit</button>\n\n\n\n\n  <p>Copyright Innoblue 2018</p>\n\n</body>"

/***/ }),

/***/ "./src/app/Signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/Signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SignupComponent = /** @class */ (function () {
    function SignupComponent() {
    }
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/Signup/signup.component.html"),
        })
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link {\n  font-size: large;\n}\nhtml{\n  background: #A44FEF;\n  padding-bottom: 5%;\n  padding-top: 5%;\n  padding-bottom: 30%;\n\n}\nh1{\n  color: rgba(235, 208, 60, 0.945);\n  font-family: 'Bookman';\n}\nnav a{\n  color: white;\n}\n\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The whole content below can be removed with the new code.-->\n<html lang=\"en\">\n  <div style=\"text-align:center\">\n    <header>\n        <h1>\n          {{title}}\n        </h1>\n        <nav class=\"navbar navbar-expand-lg \">\n          \n            <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo02\">\n              <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\n                <li class=\"nav-item active\">\n                  <a [routerLink]= \"['/welcome']\" class=\"nav-link\" >Home <span class=\"sr-only\">(current)</span></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a [routerLink]= \"['/leaderboard']\" class=\"nav-link\" >Leaderboard</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]= \"['/profile']\" class=\"nav-link\" >Profile</a>\n                  </li>\n                  <li class=\"nav-item\">\n                      <a [routerLink]= \"['/signup']\" class=\"nav-link\" >Signup</a>\n                  </li>\n              </ul>\n              <form class=\"form-inline my-2 my-lg-0\">\n                <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\">\n              </form>\n            </div>\n          </nav>\n    </header>\n    <body>\n        <div class=\"container\">\n            <router-outlet></router-outlet>\n        </div>\n    </body>\n  </div>\n</html>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Foliate';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'pm-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Leaderboard_leaderboards_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Leaderboard/leaderboards.component */ "./src/app/Leaderboard/leaderboards.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/welcome.component */ "./src/app/home/welcome.component.ts");
/* harmony import */ var _Profile_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Profile/profile.component */ "./src/app/Profile/profile.component.ts");
/* harmony import */ var _Signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Signup/signup.component */ "./src/app/Signup/signup.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _Leaderboard_leaderboards_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"],
                _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"],
                _Profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"],
                _Signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: "leaderboard", component: _Leaderboard_leaderboards_component__WEBPACK_IMPORTED_MODULE_3__["LeaderboardComponent"] },
                    { path: "profile", component: _Profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
                    { path: "profile/:id", component: _Profile_profile_component__WEBPACK_IMPORTED_MODULE_6__["ProfileComponent"] },
                    { path: "signup", component: _Signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"] },
                    { path: "welcome", component: _home_welcome_component__WEBPACK_IMPORTED_MODULE_5__["WelcomeComponent"] },
                    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
                    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
                ], { useHash: true })
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/welcome.component.html":
/*!*********************************************!*\
  !*** ./src/app/home/welcome.component.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n <title>Welcome to Foliate, Compare and compete investment portfolios</title>\n <meta charset=\"utf-8\">\n <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n <link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css\">\n <script src=\"https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js\"></script>\n <script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js\"></script>\n <style>\n   /* Remove the navbar's default margin-bottom and rounded borders */\n   .navbar {\n     margin-bottom: 0;\n     border-radius: 0;\n   }\n\n   /* Set height of the grid so .sidenav can be 100% (adjust as needed) */\n   .row.content {height: 450px}\n\n   /* Set gray background color and 100% height */\n   .sidenav {\n     padding-top: 20px;\n     background-color: #f1f1f1;\n     height: 100%;\n   }\n\n   /* Set black background color, white text and some padding */\n   footer {\n     background-color: #555;\n     color: white;\n     padding: 15px;\n   }\n\n   /* On small screens, set height to 'auto' for sidenav and grid */\n   @media screen and (max-width: 767px) {\n     .sidenav {\n       height: auto;\n       padding: 15px;\n     }\n     .row.content {height:auto;}\n   }\n </style>\n</head>\n<body>\n\n\n<div class=\"container-fluid text-center\">\n <div class=\"row content\">\n       <div class=\"col-sm-2 sidenav\">\n     <div class=\"well\">\n\n       <p><a href=\"#\">Connect with Facebook Friends </a></p>\n     </div>\n     <div class=\"well\">\n       <p> <a href=\"#\"> October Portfolio Performance Global Competition</a></p>\n     </div>\n   </div>\n   <div class=\"col-sm-8 text-left\">\n     <h1>Welcome to Foliate, Compare and Compete Investment Portfolios</h1>\n     <p>We understand that it's awkward to ask how your friends and family are financially invested into different asset classes: from digital assets like cryptocurrencies to traditional investments vechiles like equites, futures and funds. Folio provides a social platform for investors and traders to learn about each other's alternative investments and compete with each other in weekly & monthly portfolio performance touraments.\n     <hr>\n     <h3>Upload your portfolio now</h3>\n     <a href=\"signup.html\">\n       \n            <button type=\"button\" class=\"btn btn-primary btn-lg\">Cryptocurrency</button>\n\n     </a>\n     <p>Binance account needed </p>\n     <button type=\"button\" class=\"btn btn-success btn-lg\">Equities & Stock</button>\n     <p>Robinhood account needed </p>\n\n\n   </div>\n   <!-- TradingView Widget BEGIN -->\n\n   <div class=\"tradingview-widget-container\">\n   <div class=\"tradingview-widget-container__widget\"></div>\n   <div class=\"tradingview-widget-copyright\"><a href=\"https://www.tradingview.com/markets/cryptocurrencies/prices-all/\" rel=\"noopener\" target=\"_blank\"><span class=\"blue-text\">Cryptocurrency Markets</span></a> by TradingView</div>\n   <script type=\"text/javascript\" src=\"https://s3.tradingview.com/external-embedding/embed-widget-screener.js\" async>\n   {\n   \"width\": \"100%\",\n   \"height\": \"100%\",\n   \"defaultColumn\": \"overview\",\n   \"screener_type\": \"crypto_mkt\",\n   \"displayCurrency\": \"USD\",\n   \"locale\": \"en\",\n   \"transparency\": false\n   }\n   </script>\n   </div>\n<!-- TradingView Widget END -->\n\n </div>\n</div>\n\n<footer class=\"container-fluid text-center\">\n <p>Copyright Innoblue 2018</p>\n</footer>\n\n</body>\n</html>"

/***/ }),

/***/ "./src/app/home/welcome.component.ts":
/*!*******************************************!*\
  !*** ./src/app/home/welcome.component.ts ***!
  \*******************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/home/welcome.component.html")
        })
    ], WelcomeComponent);
    return WelcomeComponent;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jonathanaugustin/Desktop/Websites/Hack PSU 2018/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map