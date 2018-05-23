var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ConferenceApp } from './app.component';
import { ExperienceListPage } from '../pages/experience-list/experience-list';
import { Experiencia1Page } from '../pages/experiencia-1/experiencia-1';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                ConferenceApp,
                ExperienceListPage,
                Experiencia1Page
            ],
            imports: [
                BrowserModule,
                HttpModule,
                IonicModule.forRoot(ConferenceApp, {}, {
                    links: []
                })
            ],
            bootstrap: [IonicApp],
            entryComponents: [
                ConferenceApp,
                ExperienceListPage,
                Experiencia1Page
            ],
            providers: [
                { provide: ErrorHandler, useClass: IonicErrorHandler },
                InAppBrowser,
                SplashScreen
            ]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map