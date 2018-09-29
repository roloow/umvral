import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
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
import { HelpMateria1Page } from '../pages/experiencia-1/materia/materia';
import { HelpMateria2Page } from '../pages/experiencia-2/materia/materia';
import { HelpMateria3Page } from '../pages/experiencia-3/materia/materia';
import { ExpPage } from '../pages/experiencia-1/experiencia/experiencia';
import { PerfilPage } from '../pages/perfil/perfil';
import { NotasPage } from '../pages/notas/notas';
import { CursosPage } from '../pages/cursos/cursos';
import { UmvralApiProvider } from '../providers/umvral-api/umvral-api';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    ConferenceApp,
    ExperienceListPage,
    Experiencia1Page,
    Experiencia2Page,
    Experiencia3Page,
    HelpMateria1Page,
    HelpMateria2Page,
    HelpMateria3Page,
    ExpPage,
    PerfilPage,
    NotasPage,
    CursosPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(ConferenceApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    ExperienceListPage,
    Experiencia1Page,
    Experiencia2Page,
    Experiencia3Page,
    HelpMateria1Page,
    HelpMateria2Page,
    HelpMateria3Page,
    ExpPage,
    PerfilPage,
    NotasPage,
    CursosPage,
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    InAppBrowser,
    SplashScreen,
    ScreenOrientation,
    Httpd,
    UmvralApiProvider
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
