webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_1_experiencia_1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experiencia_2_experiencia_2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experiencia_3_experiencia_3__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ExperienceListPage = (function () {
    function ExperienceListPage(nav) {
        this.nav = nav;
        this.experiencias = [
            {
                n: 'Caida Libre',
                d: 'descripcion',
                p: '1',
                t: 'Caida Libre'
            },
            {
                n: 'Lanzamiento de Proyectil',
                d: 'descripcion',
                p: '3',
                t: 'Lanzamiento de Proyectil'
            },
            {
                n: 'Dilatacion y calor',
                d: 'descripcion',
                p: '2',
                t: 'Dilatacion y calor'
            }
        ];
        this.nav = nav;
    }
    ExperienceListPage.prototype.openExperienciaPage = function (valor) {
        switch (valor) {
            case 'Caida Libre':
                this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experiencia_1_experiencia_1__["a" /* Experiencia1Page */]); //Caida Libre  
                break;
            case 'Lanzamiento de Proyectil':
                this.nav.push(__WEBPACK_IMPORTED_MODULE_3__experiencia_2_experiencia_2__["a" /* Experiencia2Page */]); //Lanzamiento de Proyectil
                break;
            case 'Dilatacion y calor':
                this.nav.push(__WEBPACK_IMPORTED_MODULE_4__experiencia_3_experiencia_3__["a" /* Experiencia3Page */]); //Dilatacion y calor
                break;
            default:
                break;
        }
    };
    ExperienceListPage.prototype.openExperiencia2Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__experiencia_2_experiencia_2__["a" /* Experiencia2Page */]); //Lanzamiento de Proyectil
    };
    ExperienceListPage.prototype.openExperiencia3Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__experiencia_3_experiencia_3__["a" /* Experiencia3Page */]); //Dilatacion y calor
    };
    ExperienceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-experience-list',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experience-list\experience-list.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom color="primary">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Experiencias</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Selecciona una experiencia:</h3>\n\n    <div padding *ngIf="experiencias?.length > 0">\n\n        <ion-list *ngFor="let exp of experiencias; let i = index">\n\n            <button ion-button color="primary" (click)="openExperienciaPage(exp.t)" block>{{exp.n}}</button>\n\n        </ion-list>  \n\n    </div>\n\n\n\n    \n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experience-list\experience-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], ExperienceListPage);
    return ExperienceListPage;
}());

//# sourceMappingURL=experience-list.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_1_materia_materia__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_1_materia_materia__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(42);
>>>>>>> develop
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ExpPage } from '../experiencia-1/experiencia/experiencia';




var Experiencia1Page = (function () {
    function Experiencia1Page(nav, iab, splashScreen, alertCtrl, httpd) {
        this.nav = nav;
        this.iab = iab;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.httpd = httpd;
        this.prueba = 0;
        this.nav = nav;
    }
    Experiencia1Page.prototype.openMateriaPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experiencia_1_materia_materia__["a" /* HelpMateria1Page */]);
    };
    Experiencia1Page.prototype.openExpPage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Para entrar en modo VR, presiona el ícono de la esquina inferior derecha e inserta el teléfono en el Cardboard.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.loadExp();
                    }
                }
            ]
        });
        alert.present();
    };
    Experiencia1Page.prototype.loadExp = function () {
        var _this = this;
        console.log("Loading experience...");
        var serverOptions = {
            www_root: 'umvral-exp1',
            port: 8080,
            localhost_only: true
        };
        var options = {
            zoom: 'no',
            location: 'no',
            hardwareback: 'no',
        };
        var httpServer = this.httpd.startServer(serverOptions).subscribe(function (url) {
            console.log('Server is live');
            var browser = _this.iab.create(url, "_blank", options);
            browser.on('exit').subscribe(function () {
                httpServer.unsubscribe();
                browser.close();
            });
        });
    };
    Experiencia1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-experiencia-1',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia-1.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Caída Libre</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n        <button ion-button color="primary" (click)="openExpPage()" block>Iniciar Experiencia</button>\n\n        <div *ngIf="prueba==1">\n\n            <button ion-button color="primary" (click)="openExpPage()" block>Prueba</button>\n\n        </div>\n\n        <div *ngIf="prueba==0">\n\n            <button ion-button color="light" (click)="openExpPage()" block>Prueba</button>\n\n        </div>\n\n    </ion-list>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia-1.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__["a" /* Httpd */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__["a" /* Httpd */]) === "function" && _e || Object])
    ], Experiencia1Page);
    return Experiencia1Page;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=experiencia-1.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_2_materia_materia__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_2_materia_materia__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(42);
>>>>>>> develop
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ExpPage } from '../experiencia-2/experiencia/experiencia';



var Experiencia2Page = (function () {
    function Experiencia2Page(nav, iab, splashScreen, alertCtrl) {
        this.nav = nav;
        this.iab = iab;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.prueba = 0;
        this.nav = nav;
    }
    Experiencia2Page.prototype.openMateriaPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experiencia_2_materia_materia__["a" /* HelpMateria2Page */]);
    };
    Experiencia2Page.prototype.openExpPage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Para entrar en modo VR, presiona el ícono de la esquina inferior derecha e inserta el teléfono en el Cardboard.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.loadExp();
                    }
                }
            ]
        });
        alert.present();
    };
    Experiencia2Page.prototype.loadExp = function () {
        var options = {
            zoom: 'no',
            location: 'no',
            hardwareback: 'no',
        };
        this.iab.create("http://vps.csaldias.cl/umvral/", "_blank", options);
    };
    Experiencia2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-experiencia-2',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\experiencia-2.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Lanzamiento de Proyectil</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        <ion-list>\n\n            <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n            <button ion-button color="primary" (click)="openExpPage()" block>Iniciar Experiencia</button>\n\n            <div *ngIf="prueba==1">\n\n                <button ion-button color="primary" (click)="openExpPage()" block>Prueba</button>\n\n            </div>\n\n            <div *ngIf="prueba==0">\n\n                <button ion-button color="light" (click)="openExpPage()" block>Prueba</button>\n\n            </div>\n\n        </ion-list>\n\n    </ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\experiencia-2.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], Experiencia2Page);
    return Experiencia2Page;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=experiencia-2.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_3_materia_materia__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(43);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_3_materia_materia__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(42);
>>>>>>> develop
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { ExpPage } from '../experiencia-3/experiencia/experiencia';



var Experiencia3Page = (function () {
    function Experiencia3Page(nav, iab, splashScreen, alertCtrl) {
        this.nav = nav;
        this.iab = iab;
        this.splashScreen = splashScreen;
        this.alertCtrl = alertCtrl;
        this.prueba = 0;
        this.nav = nav;
    }
    Experiencia3Page.prototype.openMateriaPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experiencia_3_materia_materia__["a" /* HelpMateria3Page */]);
    };
    Experiencia3Page.prototype.openExpPage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Información',
            subTitle: 'Para entrar en modo VR, presiona el ícono de la esquina inferior derecha e inserta el teléfono en el Cardboard.',
            buttons: [
                {
                    text: 'Ok',
                    handler: function () {
                        _this.loadExp();
                    }
                }
            ]
        });
        alert.present();
    };
    Experiencia3Page.prototype.loadExp = function () {
        var options = {
            zoom: 'no',
            location: 'no',
            hardwareback: 'no',
        };
        this.iab.create("http://vps.csaldias.cl/umvral/", "_blank", options);
    };
    Experiencia3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-experiencia-3',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\experiencia-3.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Temperatura y Dilatación</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n        <ion-list>\n\n            <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n            <button ion-button color="primary" (click)="openExpPage()" block>Iniciar Experiencia</button>\n\n            <div *ngIf="prueba==1">\n\n                <button ion-button color="primary" (click)="openExpPage()" block>Prueba</button>\n\n            </div>\n\n            <div *ngIf="prueba==0">\n\n                <button ion-button color="light" (click)="openExpPage()" block>Prueba</button>\n\n            </div>\n\n        </ion-list>\n\n    </ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\experiencia-3.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _d || Object])
    ], Experiencia3Page);
    return Experiencia3Page;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=experiencia-3.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experience_list_experience_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_user_register_user__ = __webpack_require__(210);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cursos_cursos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__register_user_register_user__ = __webpack_require__(211);
>>>>>>> develop
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, umvralApiProvider, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.umvralApiProvider = umvralApiProvider;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.data = { username: "", password: "" };
        console.log("constructor loginPage");
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.registrarUsuario = function () {
        console.log("Boton presionado para registrar!");
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__register_user_register_user__["a" /* RegisterUserPage */]);
    };
    LoginPage.prototype.iniciarSesion = function () {
        var _this = this;
        console.log("Boton presionado!");
        this.mostrarCargando();
        this.umvralApiProvider.login(this.data).then(function (result) {
            var resultData = JSON.parse(JSON.stringify(result));
            console.log("SUCCESS: " + resultData.status + " " + resultData.statusText);
            _this.loading.dismiss();
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__cursos_cursos__["a" /* CursosPage */]);
        }, function (err) {
            var errorData = JSON.parse(JSON.stringify(err));
            console.log("FAIL");
            _this.mostrarError("Error al acceder: " + errorData.status + " " + errorData.statusText);
        });
    };
    LoginPage.prototype.mostrarCargando = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    LoginPage.prototype.mostrarError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content class="login-content" padding>\n\n  <ion-row class="logo-row">\n\n    <ion-col></ion-col>\n\n    <ion-col width-67>\n\n      <img src="assets/img/logo-texto.png"/>\n\n    </ion-col>\n\n    <ion-col></ion-col>\n\n  </ion-row>\n\n\n\n  <div class="login-box">\n\n      <form (ngSubmit)="iniciarSesion()" #registerForm="ngForm">\n\n        <ion-row>\n\n          <ion-col>\n\n            <ion-list inset>\n\n              \n\n              <ion-item>\n\n                <ion-input type="text" placeholder="Usuario" name="email" [(ngModel)]="data.username" required></ion-input>\n\n              </ion-item>\n\n              \n\n              <ion-item>\n\n                <ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="data.password" required></ion-input>\n\n              </ion-item>\n\n              \n\n            </ion-list>\n\n          </ion-col>\n\n        </ion-row>\n\n        \n\n        <ion-row>\n\n          <ion-col class="signup-col">\n\n            <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Iniciar Sesión</button>\n\n            <button ion-button class="register-btn" block clear type="button" (click)="registrarUsuario()">¿No tienes una cuenta? Regístrate</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      \n\n      </form>\n\n    </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experience_list_experience_list__ = __webpack_require__(103);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CursosPage = (function () {
    function CursosPage(nav) {
        this.nav = nav;
        this.cursos = [
            {
                stu_id: 111,
                cur_id: 111,
                cur_no: 'Curso Interesante 1',
                pro_no: 'Gervacio Rodriguez 1'
            },
            {
                stu_id: 112,
                cur_id: 112,
                cur_no: 'Curso Interesante 2',
                pro_no: 'Gervacio Rodriguez 2'
            },
            {
                stu_id: 113,
                cur_id: 113,
                cur_no: 'Curso Interesante 3',
                pro_no: 'Gervacio Rodriguez 3'
            }
        ];
        this.nav = nav;
    }
    CursosPage.prototype.openListaPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experience_list_experience_list__["a" /* ExperienceListPage */]);
    };
    CursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cursos',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\cursos\cursos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mis Cursos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <h3>Selecciona un Curso:</h3>\n\n\n\n  <div padding *ngIf="cursos?.length > 0">\n\n    <ion-list *ngFor="let curso of cursos; let i = index">\n\n      <button ion-button color="primary" (click)="openListaPage(curso.stu_id)" block>{{curso.cur_no}}<br>{{curso.pro_no}}</button>\n\n    </ion-list>  \n\n  </div>\n\n\n\n\n\n\n\n\n\n  \n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\cursos\cursos.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], CursosPage);
    return CursosPage;
}());

//# sourceMappingURL=cursos.js.map

/***/ }),

/***/ 121:
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
webpackEmptyAsyncContext.id = 121;

/***/ }),

/***/ 164:
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
webpackEmptyAsyncContext.id = 164;

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpMateria1Page = (function () {
    function HelpMateria1Page(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            video_id: 'HZ86lhZ2a6M',
            title: 'Video Explicativo'
        };
        this.url = 'https://www.youtube.com/embed/' + this.video.video_id;
    }
    HelpMateria1Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    HelpMateria1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Caida Libre\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 50%;" text-justify>\n\n        <div>\n\n            <h3>Descripción de Caida Libre</h3>\n\n            <p>\n\n                Cuando un objeto es soltado (liberado sin aplicar alguna fuerza) desde una altura por sobre\n\n                 el nivel de medición definido (Nivel del suelo, por ejemplo) se dice que el cuerpo cae \n\n                 libremente.\n\n            </p>\n\n            <p>\n\n                Cuando un cuerpo está en caída libre, la única fuerza que aporta al movimiento es la ejercida\n\n                 por la aceleración de gravedad en donde se está evaluando el fenómeno.\n\n            </p>\n\n            \n\n            <h6> F<sub>Total</sub> = m*a, </h6>\n\n            \n\n            <h6> F<sub>gravedad</sub> = m*g, </h6>\n\n\n\n            <h6> F<sub>T</sub> = F<sub>g</sub>. </h6>\n\n            \n\n            <p>\n\n                Finalmente se tiene que a = g. Es necesario recalcar que para efectos de álgebra, las constantes \n\n                 son positivas, pero la dirección de la fuerza es contrario a la dirección del eje, por lo\n\n                 que el valor que tomará la gravedad es negativo, por ejemplo, en la tierra se tienen \n\n                 valores cercanos de la gravedad a = - 9,8 [m/s<sup>2</sup>].\n\n            </p>\n\n\n\n            <h3>Velocidad en Caida Libre</h3>\n\n\n\n            <p>En respecto a la velocidad en el tiempo, se sabe que esta depende de la fuerza aplicada,\n\n                 lo que significa que depende finalmente de la aceleración de gravedad en el sistema:\n\n            </p>\n\n\n\n            <h6> v(t) = v<sub>0</sub> + a*t </h6>\n\n            \n\n            <p>\n\n                Teniendo que v<sub>0</sub> es la velocidad inicial <b>DESDE QUE CAE</b> el cuerpo,\n\n                 esta es igual a 0, por lo que finalmente se tiene que: \n\n            </p>\n\n            \n\n            <h6>v(t) = a*t</h6>\n\n            \n\n            <p>\n\n                Se observa que la velocidad será negativa, esto es debido a que el cuerpo se va acercando al punto\n\n                 y = 0, lo que significa que la distancia entre el objeto y el origen disminuye, dando finalmente\n\n                 una velocidad negativa (y<sub>f</sub> - y<sub>i</sub> < 0).\n\n            </p>\n\n\n\n            <h3>Posición en Caida Libre</h3>\n\n\n\n            <p>\n\n                Para la posición del objeto a través del tiempo, se tiene que sabe que depende tanto de\n\n                 la velocidad que presenta el cuerpo, como de la aceleración, por lo que se tiene:  \n\n            </p>\n\n            \n\n            <h6>y(t) = y<sub>0</sub> + v<sub>0</sub>*t + ½ a*t<sup>2</sup></h6>\n\n            \n\n            <p>\n\n                En la ecuación anterior se tiene y<sub>0</sub>, que significa la posición inicial del objeto antes\n\n                 de comenzar la caída, es decir, la altura h desde la que se suelta, por lo que finalmente se tiene:\n\n            </p>\n\n\n\n            <h6>y(t) = h + ½a*t<sup>2</sup></h6>\n\n            \n\n            <p>\n\n                En esta ecuación se observa de nuevo que y(t) va disminuyendo en el transcurso del tiempo, lo que es\n\n                 esperable al ser caida libre.\n\n            </p>\n\n\n\n            <h3>Energía en Caida Libre</h3>\n\n\n\n            <p>\n\n                En relación a la energía que posee el cuerpo, se sabe que en cualquier momento es posible evaluar la\n\n                 energía cinética (K) y la potencial (U), las cuales están dadas por las siguientes ecuaciones:\n\n            </p>\n\n            \n\n            <h6> K = ½ * m * v<sup>2</sup> </h6>\n\n            \n\n            <h6> U = m * g * h </h6>\n\n            \n\n\n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
    ], HelpMateria1Page);
    return HelpMateria1Page;
    var _a, _b;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpMateria2Page = (function () {
    function HelpMateria2Page(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            video_id: 'YfJzRX78UlM',
            title: 'Video Explicativo'
        };
        this.url = 'https://www.youtube.com/embed/' + this.video.video_id;
    }
    HelpMateria2Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    HelpMateria2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Lanzamiento de Proyectil\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 50%;" text-justify>\n\n        <div>\n\n\n\n            <h3>Descripción de Lanzamiento de Proyectil</h3>\n\n            <p>\n\n            Se considera como Lanzamiento de Proyectil como un movimiento acelerado con una trayectoria \n\n             parabólica lo que significa que posee un movimiento característico tanto en el eje <i>x</i> \n\n             como en el eje <i>y</i>.\n\n            </p>\n\n\n\n            <p>\n\n            Para que exista un movimiento parabólico, es necesario lanzar un objeto de forma diagonal al eje \n\n             de referencia, lo cual genera un ángulo entre la dirección de lanzamiento y el eje, este ángulo\n\n             lo llamaremos <i>b</i>.\n\n            </p>\n\n            <p>\n\n            Debido al ángulo <i>b</i>, la velocidad inicial <i>v</i><sub>0</sub> se puede descomponer de la \n\n            siguiente forma:\n\n            </p>\n\n            <h5>v<sub>0x</sub> = v<sub>0</sub>* cos(b)</h5>\n\n            <h5>v<sub>0y</sub> = v<sub>0</sub>* sen(b)</h5>\n\n            <p>\n\n            El movimiento en cada eje es independiente del otro, es decir, el movimiento en el eje x no\n\n             perturba ni es perturbado por el eje y, esto quiere decir que para las ecuaciones de\n\n             la posición, la velocidad y la aceleración sólo se presentan constantes y variables de un solo eje. \n\n            </p>\n\n            \n\n            <p>\n\n            Debido a que el movimiento se presenta en ambos ejes, la posición, la velocidad y la aceleración\n\n             se encuentran definidos por vectores.\n\n            </p>\n\n\n\n            <h3>Vectores</h3>\n\n            <p>\n\n            Los vectores de posición, velocidad y aceleración son definidos de la siguiente forma:\n\n            </p>\n\n            <h5>posición   : x(t) * i + y(t) * j  </h5>\n\n            <h5>Velocidad  : v<sub>x</sub>(t) * i + v<sub>y</sub>(t) * j  </h5>\n\n            <h5>Aceleración: a<sub>x</sub> * i + a<sub>y</sub> * j  </h5>\n\n            \n\n            <h3>Movimiento en eje x</h3>\n\n            <p>\n\n            Si no se considera el roce del aire, el movimiento en el eje x sólo está definido por la velocidad\n\n             inicial aplicada en el cuerpo, puesto que no existe ninguna fuerza en el sistema (la gravedad sólo\n\n             afecta al eje y).\n\n            </p>\n\n            \n\n            <h4>Aceleración.</h4>\n\n            \n\n            <p>\n\n            Al no existir fuerzas, la aceleración en el eje x es cero.\n\n            </p>\n\n            \n\n            <h5>a<sub>x</sub>(t) = a<sub>0x</sub>,</h5>\n\n            <h5>a<sub>x</sub>=0</h5>\n\n            \n\n            <h4>Velocidad.</h4>\n\n            \n\n            <p>\n\n            Debido a que no existe aceleración, la velocidad en el eje x sólo depende de la velocidad inicial.\n\n            </p>\n\n            \n\n            <h5>v<sub>x</sub>(t) = v<sub>0x</sub> + a<sub>x</sub> * t,</h5>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * cos(b)</h5>\n\n\n\n            <h3>Posición</h3>\n\n            <p>\n\n            La posición en el eje x depende sólo de la velocidad en este eje y la posición inicial.\n\n            </p>\n\n            <h5>x(t) = x<sub>0</sub> + v<sub>0x</sub>*t + ½ * a<sub>x</sub> * t<sup>2</sup></h5>\n\n            <h5>x(t) = x<sub>0</sub> + v<sub>0</sub> * t * cos(b) </h5>\n\n\n\n            <h3>Movimiento en eje y</h3>\n\n            <p>\n\n            Si no se considera el roce del aire, el movimiento en el eje y está definido tanto por la velocidad\n\n             inicial aplicada en el lanzamiento y la aceleración gravitacional.\n\n            </p>\n\n            \n\n            <h4>Aceleración.</h4>\n\n            \n\n            <p>\n\n            Al ser la gravedad la única fuerza en el sistema, la aceleración en <i>y</i>se define como:\n\n            </p>\n\n            \n\n            <h5>a<sub>y</sub>(t) = a<sub>0y</sub>,</h5>\n\n            <h5>a<sub>y</sub> = g</h5>\n\n            \n\n            <h4>Velocidad.</h4>\n\n            \n\n            <p>\n\n            La velocidad en el eje <i>y</i> está definida por la velocidad inicial y la gravedad:\n\n            </p>\n\n            \n\n            <h5>v<sub>y</sub>(t) = v<sub>0y</sub> + a<sub>y</sub> * t,</h5>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * sen(b) + g * t</h5>\n\n\n\n            <p>\n\n            Es rescatable decir que debido a que la gravedad apunta en dirección contraria al eje, la velocidad\n\n             en respecto al tiempo decaerá de forma constante, finalizando siempre con valores negativos.\n\n            </p>\n\n            <h3>Posición</h3>\n\n            <p>\n\n            La posición en el eje y depende tanto de la posición inicial, la velocidad y la aceleración gravitatoria:\n\n            </p>\n\n            <h5>y(t) = y<sub>0</sub> + v<sub>0y</sub> * t + ½ * a<sub>x</sub> * t<sup>2</sup></h5>\n\n            <h5>y(t) = y<sub>0</sub> + v<sub>0</sub> * t * sen(b) + ½ * g<sub>x</sub> * t<sup>2</sup></h5>\n\n\n\n            <h3>Observaciones varias.</h3>\n\n            <p>\n\n            Un problema recurrente es definir en que posición caerá un proyectil lanzado. Par solucionar este problema\n\n             se debe primero evaluar el movimiento sólo en el eje <i>y</i>, puesto que es aquí donde se define la \n\n             duración del movimiento. \n\n            </p>\n\n            <p>\n\n            Se dice que la duración del movimiento se define en el eje <i>y</i> puesto que el objeto se detendrá cuando\n\n             este finalmente toque el suelo. Debido a esto, el tiempo completo se descompone en 2, el tiempo de subida\n\n             y el tiempo de bajada del proyectil.\n\n            </p>\n\n\n\n            <p>\n\n            Primero se define cuanto tiempo sube el objeto lanzado, es decir, cuanto tiempo transcurre desde\n\n             que se lanza el objeto, hasta que la velocidad de subida toma un valor 0.\n\n            </p>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * sen(b) + g * t = 0</h5>\n\n            <h5> v<sub>0</sub> * sen(b) =  - g * t </h5>\n\n            <h5> v<sub>0</sub> * sen(b) = g * t<sub>subida</sub> </h5>\n\n            <p>\n\n            Luego de obtener el tiempo de subida, se puede obtener la altura a la que llegó el objeto.\n\n            </p>\n\n            <h5>h = y<sub>0</sub> + v<sub>0</sub> * t<sub>subida</sub> * sen(b) + ½ * g<sub>x</sub> * t<sup>2</sup></h5>\n\n            <p>\n\n            Luego, a través de la misma formula, se puede obtener el tiempo de bajada, despejando t y poniendo y(t)=0:\n\n            </p>\n\n            <h5>0 = h + v<sub>0</sub> * t<sub>bajada</sub> * sen(b) + ½ * g<sub>x</sub> * t<sub>bajada</sub><sup>2</sup></h5>\n\n            <p>\n\n            Finalmente, se tiene t<sub>subida</sub> y t<sub>bajada</sub>, que sumados dan t<sub>total</sub>, con la\n\n             cual se puede obtener la distancia x recorrida en todo el movimiento.\n\n            </p>\n\n            <h5>x(t<sub>total</sub>) = x<sub>0</sub> + v<sub>0</sub> * t<sub>total</sub> * cos(b) </h5>\n\n\n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
    ], HelpMateria2Page);
    return HelpMateria2Page;
    var _a, _b;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HelpMateria3Page = (function () {
    function HelpMateria3Page(navCtrl, domSanitizer) {
        this.navCtrl = navCtrl;
        this.domSanitizer = domSanitizer;
        this.video = {
            video_id: 'HZ86lhZ2a6M',
            title: 'Temperatura y dilatación'
        };
        this.url = 'https://www.youtube.com/embed/' + this.video.video_id;
    }
    HelpMateria3Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    };
    HelpMateria3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Materia\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 95%; height: 50%;" text-justify>\n\n        <div>\n\n            <h3>Descripción de Temperatura y dilatación</h3>\n\n            \n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
    ], HelpMateria3Page);
    return HelpMateria3Page;
    var _a, _b;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PerfilPage = (function () {
    function PerfilPage(navCtrl, navParams, alertCtrl, umvralApiProvider, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.umvralApiProvider = umvralApiProvider;
        this.loadingCtrl = loadingCtrl;
        this.navCtrl = navCtrl;
        console.log('constructor PerfilPage');
        this.getUserData();
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.mostrarCargando = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    PerfilPage.prototype.mostrarError = function (text) {
        this.loading.dismiss();
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: text,
            buttons: ['OK']
        });
        alert.present(prompt);
    };
    PerfilPage.prototype.getUserData = function () {
        var _this = this;
        this.umvralApiProvider.getUserData()
            .then(function (data) {
            _this.userData = data;
            console.log(JSON.stringify(_this.userData));
        });
    };
    PerfilPage.prototype.cerrarSesion = function () {
        this.umvralApiProvider.logout();
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
    };
    PerfilPage.prototype.updateFirstName = function (name) {
        var _this = this;
        this.mostrarCargando();
        this.umvralApiProvider.updateFirstName(name)
            .then(function (result) {
            var resultData = JSON.parse(JSON.stringify(result));
            console.log("Cambio de nombre satisfactorio: " + resultData.status + " " + resultData.statusText);
            _this.loading.dismiss();
            _this.getUserData();
        }, function (err) {
            var errorData = JSON.parse(JSON.stringify(err));
            console.log("Error al cambiar el nombre: " + errorData.status + " " + errorData.statusText);
            console.log(errorData);
            _this.loading.dismiss();
            //this.mostrarError("Error al actualizar nombre: "+errorData.statusText);
            _this.getUserData();
        });
    };
    PerfilPage.prototype.updateLastName = function (name) {
        var _this = this;
        this.mostrarCargando();
        this.umvralApiProvider.updateLastName(name)
            .then(function (result) {
            var resultData = JSON.parse(JSON.stringify(result));
            console.log("Cambio de apellido satisfactorio: " + resultData.status + " " + resultData.statusText);
            _this.loading.dismiss();
            _this.getUserData();
        }, function (err) {
            var errorData = JSON.parse(JSON.stringify(err));
            console.log("Error al cambiar el apellido: " + errorData.status + " " + errorData.statusText);
            console.log(errorData);
            _this.loading.dismiss();
            //this.mostrarError("Error al actualizar apellido: "+errorData.statusText);
            _this.getUserData();
        });
    };
    PerfilPage.prototype.updatePassword = function (password) {
        var _this = this;
        this.mostrarCargando();
        this.umvralApiProvider.updatePassword(password)
            .then(function (result) {
            var resultData = JSON.parse(JSON.stringify(result));
            console.log("Cambio de contraseña satisfactorio: " + resultData.status + " " + resultData.statusText);
            _this.loading.dismiss();
        }, function (err) {
            var errorData = JSON.parse(JSON.stringify(err));
            console.log("Error al cambiar la contraseña: " + errorData.status + " " + errorData.statusText);
            console.log(errorData);
            _this.loading.dismiss();
            //this.mostrarError("Error al actualizar contraseña: "+errorData.statusText);
        });
    };
    PerfilPage.prototype.changeFirstName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Cambiar Nombre',
                            message: 'Ingresa tu nuevo nombre',
                            buttons: [
                                'Cancelar',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log("Perfil - cambio de nombre a " + data.first_name);
                                        _this.updateFirstName(data.first_name);
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'first_name',
                                    value: this.userData.first_name,
                                    placeholder: 'first_name'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.changeLastName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Cambiar Apellido',
                            message: 'Ingresa tu nuevo apellido',
                            buttons: [
                                'Cancelar',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log("Perfil - cambio de apellido a " + data.last_name);
                                        _this.updateLastName(data.last_name);
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'last_name',
                                    value: this.userData.last_name,
                                    placeholder: 'last_name'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.changePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Cambiar Contraseña',
                            message: 'Ingresa tu nueva contraseña',
                            buttons: [
                                'Cancelar',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        console.log("Perfil - cambio de contraseña a " + data.password);
                                        _this.updatePassword(data.password);
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'password',
                                    name: 'password',
                                    value: '',
                                    placeholder: 'contraseña'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PerfilPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="userData">\n\n    <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <h2>{{userData.first_name}} {{userData.last_name}}</h2>\n\n    <h5>{{userData.email}}</h5>\n\n\n\n    <ion-list inset>\n\n      <button ion-item disabled (click)="updatePicture()">Cambiar Foto de Perfil</button>\n\n      <button ion-item (click)="changeFirstName()">Cambiar Nombre</button>\n\n      <button ion-item (click)="changeLastName()">Cambiar Apellido</button>\n\n      <button ion-item (click)="changePassword()">Cambiar Contraseña</button>\n\n      <button ion-item disabled (click)="support()">Soporte</button>\n\n      <button ion-item (click)="cerrarSesion()">Cerrar Sesión</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the RegisterUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterUserPage = (function () {
    function RegisterUserPage(navCtrl, navParams, alertCtrl, loadingCtrl, umvralApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.umvralApiProvider = umvralApiProvider;
        this.createSuccess = false;
        this.registerCredentials = { email: '', password: '', firstName: '', lastName: '' };
    }
    RegisterUserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterUserPage');
    };
    RegisterUserPage.prototype.registrarUsuario = function () {
        var _this = this;
        console.log("Boton presionado!");
        this.mostrarCargando();
        this.umvralApiProvider.register(this.registerCredentials).then(function (result) {
            var resultData = JSON.parse(JSON.stringify(result));
            console.log("SUCCESS: " + resultData.status + " " + resultData.statusText);
            _this.loading.dismiss();
            _this.createSuccess = true;
            _this.showPopup("Exito", "Cuenta creada con éxito.");
        }, function (err) {
            var errorData = JSON.parse(JSON.stringify(err));
            console.log("FAIL");
            _this.loading.dismiss();
            _this.showPopup("Error", "Error al crear cuenta: " + errorData.status + " " + errorData.statusText);
        });
    };
    RegisterUserPage.prototype.mostrarCargando = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Cargando...',
            dismissOnPageChange: true
        });
        this.loading.present();
    };
    RegisterUserPage.prototype.showPopup = function (title, text) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: text,
            buttons: [
                {
                    text: 'OK',
                    handler: function () {
                        if (_this.createSuccess) {
                            _this.navCtrl.popToRoot();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    RegisterUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-register-user',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\register-user\register-user.html"*/'<!--\n\n  Generated template for the RegisterUserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Registro de Usuario</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n \n\n<ion-content class="login-content" padding>\n\n  <div class="login-box">\n\n    \n\n    <form (ngSubmit)="registrarUsuario()" #registerForm="ngForm">\n\n      <ion-row>\n\n        <ion-col>\n\n          <ion-list inset>\n\n            \n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Email" name="email" [(ngModel)]="registerCredentials.email" required></ion-input>\n\n            </ion-item>\n\n            \n\n            <ion-item>\n\n              <ion-input type="password" placeholder="Contraseña" name="password" [(ngModel)]="registerCredentials.password" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Nombre" name="firstName" [(ngModel)]="registerCredentials.firstName" required></ion-input>\n\n            </ion-item>\n\n\n\n            <ion-item>\n\n              <ion-input type="text" placeholder="Apellido" name="lastName" [(ngModel)]="registerCredentials.lastName" required></ion-input>\n\n            </ion-item>\n\n            \n\n          </ion-list>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n      <ion-row>\n\n        <ion-col class="signup-col">\n\n          <button ion-button class="submit-btn" full type="submit" [disabled]="!registerForm.form.valid">Registrar</button>\n\n        </ion-col>\n\n      </ion-row>\n\n      \n\n    </form>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\register-user\register-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */]])
    ], RegisterUserPage);
    return RegisterUserPage;
}());

//# sourceMappingURL=register-user.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var NotasPage = (function () {
    function NotasPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.notas = [];
        this.count = 0;
    }
    NotasPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad NotasPage');
    };
    NotasPage.prototype.addNota = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Agregar nota',
                            message: 'Ingresa tu nueva nota',
                            buttons: [
                                'Cancelar',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.count += 1;
                                        _this.notas.push(data.nota);
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'nota',
                                    value: '4.0',
                                    placeholder: 'nota'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    NotasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-notas',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\notas\notas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mis Notas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<!-- Si no existen notas  -->\n\n\n\n  <div padding style=\'height: 25%\' *ngIf="notas.length == 0">\n\n    <h3>No tienes notas ingresadas.</h3>\n\n  </div>\n\n  \n\n  <div style=\'height: 60%\' *ngIf="notas.length == 0">\n\n    <img class="displayed"  height= 50% src="assets/img/notas.png">    \n\n  </div>\n\n\n\n<!-- Si hay una o más notas  -->\n\n\n\n  <div padding style=\'height: 80%\' *ngIf="notas.length > 0">\n\n    <ion-list *ngFor="let nota of notas; let i = index">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            Nota {{i+1}}\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            {{nota}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>  \n\n  </div>\n\n\n\n<!-- El botón siempre se ve  -->\n\n\n\n  <div class=\'final\'>\n\n    <button ion-button color="primary" (click)="addNota()" block>Añadir Nota</button>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

<<<<<<< HEAD
/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CursosPage = (function () {
    function CursosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CursosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CursosPage');
    };
    CursosPage.prototype.addCurso = function () {
        console.log('addCurso has been pressed');
    };
    CursosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cursos',template:/*ion-inline-start:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/cursos/cursos.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Mis Cursos</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div padding-top>\n    <h3>No participas en ningún curso.</h3>\n  </div>\n  <p>\n      <button ion-button color="primary" (click)="addCurso()" block>Añadir Curso</button>\n  </p>\n</ion-content>\n'/*ion-inline-end:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/cursos/cursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CursosPage);
    return CursosPage;
}());

//# sourceMappingURL=cursos.js.map

/***/ }),

=======
>>>>>>> develop
/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MensajesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MensajesPage = (function () {
    function MensajesPage(navCtrl, navParams, umvralApiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.umvralApiProvider = umvralApiProvider;
        this.getMensajes();
    }
    MensajesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MensajesPage');
    };
    MensajesPage.prototype.getMensajes = function () {
        var _this = this;
        this.umvralApiProvider.getReceivedMessages()
            .then(function (data) {
            _this.mensajes = data;
            console.log(JSON.stringify(_this.mensajes));
        });
    };
    MensajesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-mensajes',template:/*ion-inline-start:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/mensajes/mensajes.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>mensajes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div padding style=\'height: 80%\' *ngIf="mensajes">\n    <ion-list *ngFor="let mensaje of mensajes[\'mensajes\']">\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            {{mensaje.content}}\n          </ion-col>\n          <ion-col>\n            {{mensaje.topic}}\n          </ion-col>\n          <ion-col>\n            {{mensaje.name}}\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </ion-list>\n    \n    \n    \n    \n    </div>\n</ion-content>\n'/*ion-inline-end:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/mensajes/mensajes.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */]) === "function" && _c || Object])
    ], MensajesPage);
    return MensajesPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=mensajes.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(236);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_httpd__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(292);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_httpd__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(291);
>>>>>>> develop
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_experience_list_experience_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_1_experiencia_1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_2_experiencia_2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_3_experiencia_3__ = __webpack_require__(106);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_1_materia_materia__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_2_materia_materia__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_3_materia_materia__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_experiencia_1_experiencia_experiencia__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cursos_cursos__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_umvral_api_umvral_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_user_register_user__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_mensajes_mensajes__ = __webpack_require__(213);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_1_materia_materia__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_2_materia_materia__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_3_materia_materia__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_experiencia_1_experiencia_experiencia__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_cursos_cursos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_umvral_api_umvral_api__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_register_user_register_user__ = __webpack_require__(211);
>>>>>>> develop
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_experience_list_experience_list__["a" /* ExperienceListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_1_experiencia_1__["a" /* Experiencia1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_2_experiencia_2__["a" /* Experiencia2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_3_experiencia_3__["a" /* Experiencia3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_1_materia_materia__["a" /* HelpMateria1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_2_materia_materia__["a" /* HelpMateria2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_3_materia_materia__["a" /* HelpMateria3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_experiencia_1_experiencia_experiencia__["a" /* ExpPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cursos_cursos__["a" /* CursosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_user_register_user__["a" /* RegisterUserPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mensajes_mensajes__["a" /* MensajesPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_experience_list_experience_list__["a" /* ExperienceListPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_1_experiencia_1__["a" /* Experiencia1Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_2_experiencia_2__["a" /* Experiencia2Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_3_experiencia_3__["a" /* Experiencia3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_1_materia_materia__["a" /* HelpMateria1Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_2_materia_materia__["a" /* HelpMateria2Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_3_materia_materia__["a" /* HelpMateria3Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_experiencia_1_experiencia_experiencia__["a" /* ExpPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_cursos_cursos__["a" /* CursosPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_register_user_register_user__["a" /* RegisterUserPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_mensajes_mensajes__["a" /* MensajesPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_httpd__["a" /* Httpd */],
                __WEBPACK_IMPORTED_MODULE_21__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_3__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_experience_list_experience_list__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notas_notas__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cursos_cursos__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_experiencia_1_experiencia_1__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_experiencia_2_experiencia_2__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_experiencia_3_experiencia_3__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_umvral_api_umvral_api__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mensajes_mensajes__ = __webpack_require__(213);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var ConferenceApp = (function () {
    function ConferenceApp(menu, platform, splashScreen, umvralApiProvider) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.umvralApiProvider = umvralApiProvider;
        // Check if the user has already seen the tutorial
        this.isLoggedIn = false;
        if (this.getLoggedInStatus) {
            console.log("usuario no ha iniciado sesión.");
            this.rootPage = __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */];
        }
        else {
            console.log("Usuario ha iniciado sesión");
            this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_experience_list_experience_list__["a" /* ExperienceListPage */];
        }
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    }
    ConferenceApp.prototype.getLoggedInStatus = function () {
        this.isLoggedIn = this.umvralApiProvider.isUserLoggedIn();
    };
    ConferenceApp.prototype.openExperiencia1Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_7__pages_experiencia_1_experiencia_1__["a" /* Experiencia1Page */]);
    };
    ConferenceApp.prototype.openExperiencia2Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_8__pages_experiencia_2_experiencia_2__["a" /* Experiencia2Page */]);
    };
    ConferenceApp.prototype.openExperiencia3Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_9__pages_experiencia_3_experiencia_3__["a" /* Experiencia3Page */]);
    };
    ConferenceApp.prototype.openPerfilPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__["a" /* PerfilPage */]);
    };
    ConferenceApp.prototype.openNotasPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_5__pages_notas_notas__["a" /* NotasPage */]);
    };
    ConferenceApp.prototype.openCursosPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_6__pages_cursos_cursos__["a" /* CursosPage */]);
    };
    ConferenceApp.prototype.openMensajesPage = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_12__pages_mensajes_mensajes__["a" /* MensajesPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
<<<<<<< HEAD
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/camilo/GitHub/umvral/app-umvral/src/app/app.template.html"*/'  <ion-menu id="navMenu" [content]="content">\n\n    <ion-header>\n      <ion-toolbar>\n        <ion-title>Menú</ion-title>\n      </ion-toolbar>\n    </ion-header>\n\n    <ion-content class="outer-content">\n\n      <ion-list>\n        <ion-list-header>\n          Experiencias\n        </ion-list-header>\n        <button ion-item menuClose (click)="openExperiencia1Page()">\n          Caída Libre\n        </button>\n        <button ion-item menuClose (click)="openExperiencia2Page()">\n          Lanzamiento de Proyectil\n        </button>\n        <button ion-item disabled (click)="openExperiencia3Page()">\n          Temperatura y Dilatación\n        </button>\n      </ion-list>\n\n      <ion-list>\n        <ion-list-header>\n          Perfil\n        </ion-list-header>\n        <button ion-item menuClose (click)="openPerfilPage()">\n          <ion-icon item-start name="contact"></ion-icon>\n          Mi Perfil\n        </button>\n        <button ion-item menuClose (click)="openNotasPage()">\n          <ion-icon item-start name="book"></ion-icon>\n          Mis Notas\n        </button>\n        <button ion-item menuClose (click)="openCursosPage()">\n          <ion-icon item-start name="school"></ion-icon>\n          Mis Cursos\n        </button>\n        <button ion-item menuClose (click)="openMensajesPage()">\n          <ion-icon item-start name="paper-plane"></ion-icon>\n          Mis Mensajes\n        </button>\n      </ion-list>\n    </ion-content>\n\n  </ion-menu>\n<!-- main navigation -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" main name="app"></ion-nav>\n'/*ion-inline-end:"/Users/camilo/GitHub/umvral/app-umvral/src/app/app.template.html"*/
=======
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\app\app.template.html"*/'  <ion-menu id="navMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menú</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Experiencias\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openExperiencia1Page()">\n\n          Caída Libre\n\n        </button>\n\n        <button ion-item menuClose (click)="openExperiencia2Page()">\n\n          Lanzamiento de Proyectil\n\n        </button>\n\n        <button ion-item disabled (click)="openExperiencia3Page()">\n\n          Temperatura y Dilatación\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Perfil\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openPerfilPage()">\n\n          <ion-icon item-start name="contact"></ion-icon>\n\n          Mi Perfil\n\n        </button>\n\n        <button ion-item menuClose (click)="openNotasPage()">\n\n          <ion-icon item-start name="book"></ion-icon>\n\n          Mis Notas\n\n        </button>\n\n        <button ion-item menuClose (click)="openCursosPage()">\n\n          <ion-icon item-start name="school"></ion-icon>\n\n          Mis Cursos\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" main name="app"></ion-nav>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\app\app.template.html"*/
>>>>>>> develop
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__providers_umvral_api_umvral_api__["a" /* UmvralApiProvider */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(204);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(205);
>>>>>>> develop
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ExpPage = (function () {
    function ExpPage(navCtrl, iab, screenOrientation) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.iab = iab;
        this.screenOrientation = screenOrientation;
        this.hideNavBar = true;
        this.orientacion = screenOrientation.type;
        this.screenOrientation.onChange().subscribe(function () {
            if ((screenOrientation.type == 'landscape-primary') || (screenOrientation.type == 'landscape-secondary')) {
                _this.hideNavBar = false;
                console.log("Cambio a Landscape");
            }
            else {
                _this.hideNavBar = true;
                console.log("Cambio a Portrait");
            }
        });
    }
    ExpPage.prototype.openLink = function () {
        this.iab.create("https://www.google.com/", "_self");
    };
    ExpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-exp',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia\experiencia.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom *ngIf = "hideNavBar">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Experiencia</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <button ion-button color="primary" (click)="openLink()">Abrir link</button>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia\experiencia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], ExpPage);
    return ExpPage;
}());

//# sourceMappingURL=experiencia.js.map

/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UmvralApiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the UmvralApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var UmvralApiProvider = (function () {
    function UmvralApiProvider(http) {
        this.http = http;
        this.apiUrl = 'http://vps.csaldias.cl:8000/api';
        this.isLoggedIn = false;
        console.log('Hello UmvralApiProvider Provider');
    }
    UmvralApiProvider.prototype.isUserLoggedIn = function () {
        return this.isLoggedIn;
    };
    UmvralApiProvider.prototype.logout = function () {
        this.isLoggedIn = false;
        this.userid = 0;
    };
    UmvralApiProvider.prototype.login = function (data) {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        console.log("username=" + data.username + "&password=" + data.password);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/user/login/', "username=" + data.username + "&password=" + data.password, options)
                .subscribe(function (res) {
                _this.isLoggedIn = true;
                var userData = JSON.parse(res["_body"]);
                _this.userid = userData.user_id;
                console.log("Login successful with ID " + _this.userid);
                resolve(res);
            }, function (err) {
                _this.isLoggedIn = false;
                reject(err);
            });
        });
    };
    /*
      metodo(valores) {
        let hdrs = new Headers();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        let options = new RequestOptions({ headers: hdrs});
    
        return new Promise((resolve, reject) =>{
          //this.http.post(link,valores,options).subscribe(res => { hacer cosas res , resolve}, err => {hacer cosas error ,reject})
          //this.http.get(link,options).subscribe(res => { hacer cosas res }, err => {hacer cosas error})
        }
      
      
      )
      }
    */
    UmvralApiProvider.prototype.register = function (data) {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        console.log("username=" + data.email + "&password=" + data.password + "&register=1&email=" + data.email + "&firstname=" + data.firstName + "&lastname=" + data.lastName);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/user/login/', "username=" + data.email + "&password=" + data.password + "&register=1&email=" + data.email + "&firstname=" + data.firstName + "&lastname=" + data.lastName, options)
                .subscribe(function (res) {
                _this.isLoggedIn = true;
                var userData = JSON.parse(res["_body"]);
                _this.userid = userData.user_id;
                console.log("Register successful with ID " + _this.userid);
                resolve(res);
            }, function (err) {
                _this.isLoggedIn = false;
                reject(err);
            });
        });
    };
    UmvralApiProvider.prototype.getUserData = function () {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        console.log("getUserData");
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.apiUrl + '/user/' + _this.userid, options).subscribe(function (data) {
                console.log("SUCCESS");
                var userData = JSON.parse(data["_body"]);
                resolve(userData);
            }, function (err) {
                console.log("FAIL");
                reject(err);
            });
        });
    };
    UmvralApiProvider.prototype.updateFirstName = function (firstName) {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        var dataStr = "user_id=" + this.userid + "&nombre=" + firstName;
        console.log("updateFirstName");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/client/update/', dataStr, options).subscribe(function (data) {
                console.log("SUCCESS");
                var userData = JSON.parse(data["_body"]);
                resolve(userData);
            }, function (err) {
                console.log("FAIL");
                reject(err);
            });
        });
    };
    UmvralApiProvider.prototype.updateLastName = function (lastName) {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        var dataStr = "user_id=" + this.userid + "&apellido=" + lastName;
        console.log("updateLastName");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/client/update/', dataStr, options).subscribe(function (data) {
                console.log("SUCCESS");
                var userData = JSON.parse(data["_body"]);
                resolve(userData);
            }, function (err) {
                console.log("FAIL");
                reject(err);
            });
        });
    };
    UmvralApiProvider.prototype.updatePassword = function (password) {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        var dataStr = "user_id=" + this.userid + "&clave=" + password;
        console.log("updatePassword");
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/client/update/', dataStr, options).subscribe(function (data) {
                console.log("SUCCESS");
                var userData = JSON.parse(data["_body"]);
                resolve(userData);
            }, function (err) {
                console.log("FAIL");
                reject(err);
            });
        });
    };
    UmvralApiProvider.prototype.getReceivedMessages = function () {
        var _this = this;
        var hdrs = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        hdrs.append('Content-Type', "application/x-www-form-urlencoded");
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: hdrs });
        var dataStr = "user_id=" + this.userid;
        console.log("user_id=" + this.userid);
        return new Promise(function (resolve, reject) {
            _this.http.post(_this.apiUrl + '/message/recibidos/', dataStr, options)
                .subscribe(function (res) {
                var messages = JSON.parse(res["_body"]);
                console.log("Obtenidos mensajes recibidos para ID " + _this.userid);
                resolve(messages);
            }, function (err) {
                reject(err);
            });
        });
    };
    UmvralApiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], UmvralApiProvider);
    return UmvralApiProvider;
}());

//# sourceMappingURL=umvral-api.js.map

/***/ })

},[214]);
//# sourceMappingURL=main.js.map