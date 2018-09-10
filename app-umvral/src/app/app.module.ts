import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { Httpd } from '@ionic-native/httpd';

import { ConferenceApp } from './app.component';

import { ExperienceListPage } from '../pages/experience-list/experience-list';
import { Experiencia1Page } from '../pages/experiencia-1/experiencia-1';
import { Experiencia2Page } from '../pages/experiencia-2/experiencia-2';
import { Experiencia3Page } from '../pages/experiencia-3/experiencia-3';
import { HelpVideo1Page } from '../pages/experiencia-1/video/video';
import { HelpVideo2Page } from '../pages/experiencia-2/video/video';
import { HelpVideo3Page } from '../pages/experiencia-3/video/video';
import { ExpPage } from '../pages/experiencia-1/experiencia/experiencia';
import { PerfilPage } from '../pages/perfil/perfil';
import { NotasPage } from '../pages/notas/notas';
import { CursosPage } from '../pages/cursos/cursos';

@NgModule({
  declarations: [
    ConferenceApp,
    ExperienceListPage,
    Experiencia1Page,
    Experiencia2Page,
    Experiencia3Page,
    HelpVideo1Page,
    HelpVideo2Page,
    HelpVideo3Page,
    ExpPage,
    PerfilPage,
    NotasPage,
    CursosPage
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
    HelpVideo1Page,
    HelpVideo2Page,
    HelpVideo3Page,
    ExpPage,
    PerfilPage,
    NotasPage,
    CursosPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen,
    ScreenOrientation,
    Httpd
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
