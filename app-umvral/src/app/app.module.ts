import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ConferenceApp } from './app.component';

import { ExperienceListPage } from '../pages/experience-list/experience-list';
import { Experiencia1Page } from '../pages/experiencia-1/experiencia-1';
import { Experiencia2Page } from '../pages/experiencia-2/experiencia-2';
import { Experiencia3Page } from '../pages/experiencia-3/experiencia-3';
import { HelpVideoPage } from '../pages/experiencia-1/video/video';

@NgModule({
  declarations: [
    ConferenceApp,
    ExperienceListPage,
    Experiencia1Page,
    Experiencia2Page,
    Experiencia3Page,
    HelpVideoPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    ExperienceListPage,
    Experiencia1Page,
    Experiencia2Page,
    Experiencia3Page,
    HelpVideoPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
