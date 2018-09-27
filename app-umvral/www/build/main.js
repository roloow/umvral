webpackJsonp([0],{

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_1_materia_materia__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(41);
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
            selector: 'page-experiencia-1',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia-1.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom color="primary">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Caída Libre</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Selecciona la acción:</h3>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n    </p>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openExpPage()" block>Iniciar Experiencia</button>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\experiencia-1.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_httpd__["a" /* Httpd */]])
    ], Experiencia1Page);
    return Experiencia1Page;
}());

//# sourceMappingURL=experiencia-1.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_2_materia_materia__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(41);
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
            selector: 'page-experiencia-2',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\experiencia-2.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Lanzamiento de Proyectil</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Selecciona la acción:</h3>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n    </p>\n\n    <p>\n\n        <button ion-button color="light" block>Iniciar Experiencia</button>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\experiencia-2.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Experiencia2Page);
    return Experiencia2Page;
}());

//# sourceMappingURL=experiencia-2.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Experiencia3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_3_materia_materia__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(41);
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
            selector: 'page-experiencia-3',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\experiencia-3.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n      <ion-title>Temperatura y Dilatación</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Selecciona la acción:</h3>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openMateriaPage()" block>Materia</button>\n\n    </p>\n\n    <p>\n\n        <button ion-button color="light" block>Iniciar Experiencia</button>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\experiencia-3.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], Experiencia3Page);
    return Experiencia3Page;
}());

//# sourceMappingURL=experiencia-3.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperienceListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__experiencia_1_experiencia_1__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__experiencia_2_experiencia_2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__experiencia_3_experiencia_3__ = __webpack_require__(104);
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
        this.nav = nav;
    }
    ExperienceListPage.prototype.openExperiencia1Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_2__experiencia_1_experiencia_1__["a" /* Experiencia1Page */]);
    };
    ExperienceListPage.prototype.openExperiencia2Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_3__experiencia_2_experiencia_2__["a" /* Experiencia2Page */]);
    };
    ExperienceListPage.prototype.openExperiencia3Page = function () {
        this.nav.push(__WEBPACK_IMPORTED_MODULE_4__experiencia_3_experiencia_3__["a" /* Experiencia3Page */]);
    };
    ExperienceListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-experience-list',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experience-list\experience-list.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom color="primary">\n\n        <button ion-button icon-only menuToggle>\n\n            <ion-icon name="menu"></ion-icon>\n\n        </button>\n\n        <ion-title>Experiencias</ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <h3>Selecciona la experiencia a realizar:</h3>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openExperiencia1Page()" block>Caída Libre</button>\n\n    </p>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openExperiencia2Page()"block>Lanzamiento de Proyectil</button>\n\n    </p>\n\n    <p>\n\n        <button ion-button color="primary" (click)="openExperiencia3Page()"block>Temperatura y Dilatación</button>\n\n    </p>\n\n</ion-content>'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experience-list\experience-list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], ExperienceListPage);
    return ExperienceListPage;
}());

//# sourceMappingURL=experience-list.js.map

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            url: 'https://www.youtube.com/embed/HZ86lhZ2a6M',
            title: 'Video Explicativo'
        };
    }
    HelpMateria1Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    };
    HelpMateria1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar color="primary">\n\n        <ion-title>\n\n            Caida Libre\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 50%;" text-justify>\n\n        <div>\n\n            <h3>Descripción de Caida Libre</h3>\n\n            <p>\n\n                Cuando un objeto es soltado (liberado sin aplicar alguna fuerza) desde una altura por sobre\n\n                 el nivel de medición definido (Nivel del suelo, por ejemplo) se dice que el cuerpo cae \n\n                 libremente.\n\n            </p>\n\n            <p>\n\n                Cuando un cuerpo está en caída libre, la única fuerza que aporta al movimiento es la ejercida\n\n                 por la aceleración de gravedad en donde se está evaluando el fenómeno.\n\n            </p>\n\n            \n\n            <h6> F<sub>Total</sub> = m*a, </h6>\n\n            \n\n            <h6> F<sub>gravedad</sub> = m*g, </h6>\n\n\n\n            <h6> F<sub>T</sub> = F<sub>g</sub>. </h6>\n\n            \n\n            <p>\n\n                Finalmente se tiene que a = g. Es necesario recalcar que para efectos de álgebra, las constantes \n\n                 son positivas, pero la dirección de la fuerza es contrario a la dirección del eje, por lo\n\n                 que el valor que tomará la gravedad es negativo, por ejemplo, en la tierra se tienen \n\n                 valores cercanos de la gravedad a = - 9,8 [m/s<sup>2</sup>].\n\n            </p>\n\n\n\n            <h3>Velocidad en Caida Libre</h3>\n\n\n\n            <p>En respecto a la velocidad en el tiempo, se sabe que esta depende de la fuerza aplicada,\n\n                 lo que significa que depende finalmente de la aceleración de gravedad en el sistema:\n\n            </p>\n\n\n\n            <h6> v(t) = v<sub>0</sub> + a*t </h6>\n\n            \n\n            <p>\n\n                Teniendo que v<sub>0</sub> es la velocidad inicial <b>DESDE QUE CAE</b> el cuerpo,\n\n                 esta es igual a 0, por lo que finalmente se tiene que: \n\n            </p>\n\n            \n\n            <h6>v(t) = a*t</h6>\n\n            \n\n            <p>\n\n                Se observa que la velocidad será negativa, esto es debido a que el cuerpo se va acercando al punto\n\n                 y = 0, lo que significa que la distancia entre el objeto y el origen disminuye, dando finalmente\n\n                 una velocidad negativa (y<sub>f</sub> - y<sub>i</sub> < 0).\n\n            </p>\n\n\n\n            <h3>Posición en Caida Libre</h3>\n\n\n\n            <p>\n\n                Para la posición del objeto a través del tiempo, se tiene que sabe que depende tanto de\n\n                 la velocidad que presenta el cuerpo, como de la aceleración, por lo que se tiene:  \n\n            </p>\n\n            \n\n            <h6>y(t) = y<sub>0</sub> + v<sub>0</sub>*t + ½ a*t<sup>2</sup></h6>\n\n            \n\n            <p>\n\n                En la ecuación anterior se tiene y<sub>0</sub>, que significa la posición inicial del objeto antes\n\n                 de comenzar la caída, es decir, la altura h desde la que se suelta, por lo que finalmente se tiene:\n\n            </p>\n\n\n\n            <h6>y(t) = h + ½a*t<sup>2</sup></h6>\n\n            \n\n            <p>\n\n                En esta ecuación se observa de nuevo que y(t) va disminuyendo en el transcurso del tiempo, lo que es\n\n                 esperable al ser caida libre.\n\n            </p>\n\n\n\n            <h3>Energía en Caida Libre</h3>\n\n\n\n            <p>\n\n                En relación a la energía que posee el cuerpo, se sabe que en cualquier momento es posible evaluar la\n\n                 energía cinética (K) y la potencial (U), las cuales están dadas por las siguientes ecuaciones:\n\n            </p>\n\n            \n\n            <h6> K = ½ * m * v<sup>2</sup> </h6>\n\n            \n\n            <h6> U = m * g * h </h6>\n\n            \n\n\n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-1\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HelpMateria1Page);
    return HelpMateria1Page;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            url: 'https://www.youtube.com/embed/YfJzRX78UlM',
            title: 'Video Explicativo'
        };
    }
    HelpMateria2Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    };
    HelpMateria2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Lanzamiento de Proyectil\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 100%; height: 50%;" text-justify>\n\n        <div>\n\n\n\n            <h3>Descripción de Lanzamiento de Proyectil</h3>\n\n            <p>\n\n            Se considera como Lanzamiento de Proyectil como un movimiento acelerado con una trayectoria \n\n             parabólica lo que significa que posee un movimiento característico tanto en el eje <i>x</i> \n\n             como en el eje <i>y</i>.\n\n            </p>\n\n\n\n            <p>\n\n            Para que exista un movimiento parabólico, es necesario lanzar un objeto de forma diagonal al eje \n\n             de referencia, lo cual genera un ángulo entre la dirección de lanzamiento y el eje, este ángulo\n\n             lo llamaremos <i>b</i>.\n\n            </p>\n\n            <p>\n\n            Debido al ángulo <i>b</i>, la velocidad inicial <i>v</i><sub>0</sub> se puede descomponer de la \n\n            siguiente forma:\n\n            </p>\n\n            <h5>v<sub>0x</sub> = v<sub>0</sub>* cos(b)</h5>\n\n            <h5>v<sub>0y</sub> = v<sub>0</sub>* sen(b)</h5>\n\n            <p>\n\n            El movimiento en cada eje es independiente del otro, es decir, el movimiento en el eje x no\n\n             perturba ni es perturbado por el eje y, esto quiere decir que para las ecuaciones de\n\n             la posición, la velocidad y la aceleración sólo se presentan constantes y variables de un solo eje. \n\n            </p>\n\n            \n\n            <p>\n\n            Debido a que el movimiento se presenta en ambos ejes, la posición, la velocidad y la aceleración\n\n             se encuentran definidos por vectores.\n\n            </p>\n\n\n\n            <h3>Vectores</h3>\n\n            <p>\n\n            Los vectores de posición, velocidad y aceleración son definidos de la siguiente forma:\n\n            </p>\n\n            <h5>posición   : x(t) * i + y(t) * j  </h5>\n\n            <h5>Velocidad  : v<sub>x</sub>(t) * i + v<sub>y</sub>(t) * j  </h5>\n\n            <h5>Aceleración: a<sub>x</sub> * i + a<sub>y</sub> * j  </h5>\n\n            \n\n            <h3>Movimiento en eje x</h3>\n\n            <p>\n\n            Si no se considera el roce del aire, el movimiento en el eje x sólo está definido por la velocidad\n\n             inicial aplicada en el cuerpo, puesto que no existe ninguna fuerza en el sistema (la gravedad sólo\n\n             afecta al eje y).\n\n            </p>\n\n            \n\n            <h4>Aceleración.</h4>\n\n            \n\n            <p>\n\n            Al no existir fuerzas, la aceleración en el eje x es cero.\n\n            </p>\n\n            \n\n            <h5>a<sub>x</sub>(t) = a<sub>0x</sub>,</h5>\n\n            <h5>a<sub>x</sub>=0</h5>\n\n            \n\n            <h4>Velocidad.</h4>\n\n            \n\n            <p>\n\n            Debido a que no existe aceleración, la velocidad en el eje x sólo depende de la velocidad inicial.\n\n            </p>\n\n            \n\n            <h5>v<sub>x</sub>(t) = v<sub>0x</sub> + a<sub>x</sub> * t,</h5>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * cos(b)</h5>\n\n\n\n            <h3>Posición</h3>\n\n            <p>\n\n            La posición en el eje x depende sólo de la velocidad en este eje y la posición inicial.\n\n            </p>\n\n            <h5>x(t) = x<sub>0</sub> + v<sub>0x</sub>*t + ½ * a<sub>x</sub> * t<sup>2</sup></h5>\n\n            <h5>x(t) = x<sub>0</sub> + v<sub>0</sub> * t * cos(b) </h5>\n\n\n\n            <h3>Movimiento en eje y</h3>\n\n            <p>\n\n            Si no se considera el roce del aire, el movimiento en el eje y está definido tanto por la velocidad\n\n             inicial aplicada en el lanzamiento y la aceleración gravitacional.\n\n            </p>\n\n            \n\n            <h4>Aceleración.</h4>\n\n            \n\n            <p>\n\n            Al ser la gravedad la única fuerza en el sistema, la aceleración en <i>y</i>se define como:\n\n            </p>\n\n            \n\n            <h5>a<sub>y</sub>(t) = a<sub>0y</sub>,</h5>\n\n            <h5>a<sub>y</sub> = g</h5>\n\n            \n\n            <h4>Velocidad.</h4>\n\n            \n\n            <p>\n\n            La velocidad en el eje <i>y</i> está definida por la velocidad inicial y la gravedad:\n\n            </p>\n\n            \n\n            <h5>v<sub>y</sub>(t) = v<sub>0y</sub> + a<sub>y</sub> * t,</h5>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * sen(b) + g * t</h5>\n\n\n\n            <p>\n\n            Es rescatable decir que debido a que la gravedad apunta en dirección contraria al eje, la velocidad\n\n             en respecto al tiempo decaerá de forma constante, finalizando siempre con valores negativos.\n\n            </p>\n\n            <h3>Posición</h3>\n\n            <p>\n\n            La posición en el eje y depende tanto de la posición inicial, la velocidad y la aceleración gravitatoria:\n\n            </p>\n\n            <h5>y(t) = y<sub>0</sub> + v<sub>0y</sub> * t + ½ * a<sub>x</sub> * t<sup>2</sup></h5>\n\n            <h5>y(t) = y<sub>0</sub> + v<sub>0</sub> * t * sen(b) + ½ * g<sub>x</sub> * t<sup>2</sup></h5>\n\n\n\n            <h3>Observaciones varias.</h3>\n\n            <p>\n\n            Un problema recurrente es definir en que posición caerá un proyectil lanzado. Par solucionar este problema\n\n             se debe primero evaluar el movimiento sólo en el eje <i>y</i>, puesto que es aquí donde se define la \n\n             duración del movimiento. \n\n            </p>\n\n            <p>\n\n            Se dice que la duración del movimiento se define en el eje <i>y</i> puesto que el objeto se detendrá cuando\n\n             este finalmente toque el suelo. Debido a esto, el tiempo completo se descompone en 2, el tiempo de subida\n\n             y el tiempo de bajada del proyectil.\n\n            </p>\n\n\n\n            <p>\n\n            Primero se define cuanto tiempo sube el objeto lanzado, es decir, cuanto tiempo transcurre desde\n\n             que se lanza el objeto, hasta que la velocidad de subida toma un valor 0.\n\n            </p>\n\n            <h5>v<sub>x</sub>(t) = v<sub>0</sub> * sen(b) + g * t = 0</h5>\n\n            <h5> v<sub>0</sub> * sen(b) =  - g * t </h5>\n\n            <h5> v<sub>0</sub> * sen(b) = g * t<sub>subida</sub> </h5>\n\n            <p>\n\n            Luego de obtener el tiempo de subida, se puede obtener la altura a la que llegó el objeto.\n\n            </p>\n\n            <h5>h = y<sub>0</sub> + v<sub>0</sub> * t<sub>subida</sub> * sen(b) + ½ * g<sub>x</sub> * t<sup>2</sup></h5>\n\n            <p>\n\n            Luego, a través de la misma formula, se puede obtener el tiempo de bajada, despejando t y poniendo y(t)=0:\n\n            </p>\n\n            <h5>0 = h + v<sub>0</sub> * t<sub>bajada</sub> * sen(b) + ½ * g<sub>x</sub> * t<sub>bajada</sub><sup>2</sup></h5>\n\n            <p>\n\n            Finalmente, se tiene t<sub>subida</sub> y t<sub>bajada</sub>, que sumados dan t<sub>total</sub>, con la\n\n             cual se puede obtener la distancia x recorrida en todo el movimiento.\n\n            </p>\n\n            <h5>x(t<sub>total</sub>) = x<sub>0</sub> + v<sub>0</sub> * t<sub>total</sub> * cos(b) </h5>\n\n\n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-2\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HelpMateria2Page);
    return HelpMateria2Page;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HelpMateria3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            url: 'https://www.youtube.com/embed/HZ86lhZ2a6M',
            title: 'Temperatura y dilatación'
        };
    }
    HelpMateria3Page.prototype.ionViewWillEnter = function () {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    };
    HelpMateria3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-materia',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\materia\materia.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Materia\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>    \n\n    <iframe width="100%" height="30%" [src]="trustedVideoUrl" frameborder="0" allowfullscreen></iframe>\n\n    <h3>Video: {{ video?.title }}</h3>\n\n\n\n    <ion-scroll scrollY="true" style="width: 95%; height: 50%;" text-justify>\n\n        <div>\n\n            <h3>Descripción de Temperatura y dilatación</h3>\n\n            \n\n        </div>\n\n    </ion-scroll>\n\n    \n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\experiencia-3\materia\materia.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
    ], HelpMateria3Page);
    return HelpMateria3Page;
}());

//# sourceMappingURL=materia.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PerfilPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
    function PerfilPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.username = "alumno";
        this.nombre = "Alumno umVRal";
        this.navCtrl = navCtrl;
        console.log('constructor PerfilPage');
    }
    PerfilPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PerfilPage');
    };
    PerfilPage.prototype.changeUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Cambiar Nombre de Usuario',
                            message: 'Ingresa tu nuevo nombre de usuario',
                            buttons: [
                                'Cancel',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.username = data.username;
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'username',
                                    value: this.username,
                                    placeholder: 'username'
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
    PerfilPage.prototype.changeName = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            title: 'Cambiar Nombre',
                            message: 'Ingresa tu nuevo nombre',
                            buttons: [
                                'Cancel',
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        _this.nombre = data.nombre;
                                    }
                                }
                            ],
                            inputs: [
                                {
                                    type: 'text',
                                    name: 'nombre',
                                    value: this.nombre,
                                    placeholder: 'nombre'
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
        console.log('Clicked to change password');
    };
    PerfilPage.prototype.updatePicture = function () {
        console.log('Clicked to update picture');
    };
    PerfilPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-perfil',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\perfil\perfil.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mi Perfil</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="outer-content">\n\n  <div padding-top text-center *ngIf="username">\n\n    <img src="https://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n\n    <h2>{{nombre}}</h2>\n\n    <h5>@{{username}}</h5>\n\n\n\n    <ion-list inset>\n\n      <button ion-item disabled (click)="updatePicture()">Cambiar Foto de Perfil</button>\n\n      <button ion-item (click)="changeUsername()">Cambiar Nombre de Usuario</button>\n\n      <button ion-item (click)="changeName()">Cambiar Nombre</button>\n\n      <button ion-item (click)="changePassword()">Cambiar Contraseña</button>\n\n      <button ion-item disabled (click)="support()">Soporte</button>\n\n      <button ion-item disabled (click)="logout()">Cerrar Sesión</button>\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\perfil\perfil.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], PerfilPage);
    return PerfilPage;
}());

//# sourceMappingURL=perfil.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-notas',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\notas\notas.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mis Notas</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<!-- Si no existen notas  -->\n\n\n\n  <div padding style=\'height: 25%\' *ngIf="notas.length == 0">\n\n    <h3>No tienes notas ingresadas.</h3>\n\n  </div>\n\n  \n\n  <div style=\'height: 60%\' *ngIf="notas.length == 0">\n\n    <img class="displayed"  height= 50% src="assets/img/notas.png">    \n\n  </div>\n\n\n\n<!-- Si hay una o más notas  -->\n\n\n\n  <div padding style=\'height: 80%\' *ngIf="notas.length > 0">\n\n    <ion-list *ngFor="let nota of notas; let i = index">\n\n      <ion-grid>\n\n        <ion-row>\n\n          <ion-col>\n\n            Nota {{i+1}}\n\n          </ion-col>\n\n          <ion-col col-3>\n\n            {{nota}}\n\n          </ion-col>\n\n        </ion-row>\n\n      </ion-grid>\n\n    </ion-list>\n\n    \n\n    \n\n    \n\n    \n\n    </div>\n\n\n\n<!-- El botón siempre se ve  -->\n\n\n\n  <div class=\'final\'>\n\n    <button ion-button color="primary" (click)="addNota()" block>Añadir Nota</button>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\notas\notas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], NotasPage);
    return NotasPage;
}());

//# sourceMappingURL=notas.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
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
            selector: 'page-cursos',template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\pages\cursos\cursos.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n\n    <button ion-button icon-only menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Mis Cursos</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div padding-top>\n\n    <h3>No participas en ningún curso.</h3>\n\n  </div>\n\n  <p>\n\n      <button ion-button color="primary" (click)="addCurso()" block>Añadir Curso</button>\n\n  </p>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\pages\cursos\cursos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], CursosPage);
    return CursosPage;
}());

//# sourceMappingURL=cursos.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(230);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_httpd__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_experience_list_experience_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_experiencia_1_experiencia_1__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_2_experiencia_2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_3_experiencia_3__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_1_materia_materia__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_2_materia_materia__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_3_materia_materia__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_1_experiencia_experiencia__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_notas_notas__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_cursos_cursos__ = __webpack_require__(205);
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
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_experience_list_experience_list__["a" /* ExperienceListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_experiencia_1_experiencia_1__["a" /* Experiencia1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_2_experiencia_2__["a" /* Experiencia2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_3_experiencia_3__["a" /* Experiencia3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_1_materia_materia__["a" /* HelpMateria1Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_2_materia_materia__["a" /* HelpMateria2Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_3_materia_materia__["a" /* HelpMateria3Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_1_experiencia_experiencia__["a" /* ExpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cursos_cursos__["a" /* CursosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* ConferenceApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_experience_list_experience_list__["a" /* ExperienceListPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_experiencia_1_experiencia_1__["a" /* Experiencia1Page */],
                __WEBPACK_IMPORTED_MODULE_11__pages_experiencia_2_experiencia_2__["a" /* Experiencia2Page */],
                __WEBPACK_IMPORTED_MODULE_12__pages_experiencia_3_experiencia_3__["a" /* Experiencia3Page */],
                __WEBPACK_IMPORTED_MODULE_13__pages_experiencia_1_materia_materia__["a" /* HelpMateria1Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_experiencia_2_materia_materia__["a" /* HelpMateria2Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_experiencia_3_materia_materia__["a" /* HelpMateria3Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_experiencia_1_experiencia_experiencia__["a" /* ExpPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_perfil_perfil__["a" /* PerfilPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_notas_notas__["a" /* NotasPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_cursos_cursos__["a" /* CursosPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_httpd__["a" /* Httpd */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["i" /* CUSTOM_ELEMENTS_SCHEMA */]]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConferenceApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_experience_list_experience_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_perfil_perfil__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_notas_notas__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_cursos_cursos__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_experiencia_1_experiencia_1__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_experiencia_2_experiencia_2__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_experiencia_3_experiencia_3__ = __webpack_require__(104);
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
    function ConferenceApp(menu, platform, splashScreen) {
        var _this = this;
        this.menu = menu;
        this.platform = platform;
        this.splashScreen = splashScreen;
        // Check if the user has already seen the tutorial
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_experience_list_experience_list__["a" /* ExperienceListPage */];
        this.platform.ready().then(function () {
            _this.splashScreen.hide();
        });
    }
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], ConferenceApp.prototype, "nav", void 0);
    ConferenceApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\Documentos\Feria\umvral\app-umvral\src\app\app.template.html"*/'  <ion-menu id="navMenu" [content]="content">\n\n\n\n    <ion-header>\n\n      <ion-toolbar>\n\n        <ion-title>Menú</ion-title>\n\n      </ion-toolbar>\n\n    </ion-header>\n\n\n\n    <ion-content class="outer-content">\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Experiencias\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openExperiencia1Page()">\n\n          Caída Libre\n\n        </button>\n\n        <button ion-item menuClose (click)="openExperiencia2Page()">\n\n          Lanzamiento de Proyectil\n\n        </button>\n\n        <button ion-item disabled (click)="openExperiencia3Page()">\n\n          Temperatura y Dilatación\n\n        </button>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-list-header>\n\n          Perfil\n\n        </ion-list-header>\n\n        <button ion-item menuClose (click)="openPerfilPage()">\n\n          <ion-icon item-start name="contact"></ion-icon>\n\n          Mi Perfil\n\n        </button>\n\n        <button ion-item menuClose (click)="openNotasPage()">\n\n          <ion-icon item-start name="book"></ion-icon>\n\n          Mis Notas\n\n        </button>\n\n        <button ion-item menuClose (click)="openCursosPage()">\n\n          <ion-icon item-start name="school"></ion-icon>\n\n          Mis Cursos\n\n        </button>\n\n      </ion-list>\n\n    </ion-content>\n\n\n\n  </ion-menu>\n\n<!-- main navigation -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="true" main name="app"></ion-nav>\n\n'/*ion-inline-end:"E:\Documentos\Feria\umvral\app-umvral\src\app\app.template.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], ConferenceApp);
    return ConferenceApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__ = __webpack_require__(197);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], ExpPage);
    return ExpPage;
}());

//# sourceMappingURL=experiencia.js.map

/***/ })

},[206]);
//# sourceMappingURL=main.js.map