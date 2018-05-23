var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';
var ExperienceListPage = (function () {
    function ExperienceListPage(nav) {
        this.nav = nav;
        this.nav = nav;
    }
    ExperienceListPage.prototype.openExperiencia1Page = function () {
        this.nav.push(Experiencia1Page);
    };
    ExperienceListPage = __decorate([
        Component({
            selector: 'page-experience-list',template:/*ion-inline-start:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/experience-list/experience-list.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n      \n      <ion-title>Experiencias</ion-title>\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    <h3>Selecciona la experiencia a realizar:</h3>\n    <p>\n        <button ion-button color="primary" (click)="openExperiencia1Page()" block>Caída Libre</button>\n    </p>\n    <p>\n        <button ion-button color="primary" block>Experiencia 2</button>\n    </p>\n    <p>\n        <button ion-button color="primary" block>Experiencia 3</button>\n    </p>\n    <p>\n        <button ion-button color="primary" menuToggle block>Toggle Menu</button>\n    </p>\n</ion-content>'/*ion-inline-end:"/Users/camilo/GitHub/umvral/app-umvral/src/pages/experience-list/experience-list.html"*/
        }),
        __metadata("design:paramtypes", [NavController])
    ], ExperienceListPage);
    return ExperienceListPage;
}());
export { ExperienceListPage };
//# sourceMappingURL=experience-list.js.map