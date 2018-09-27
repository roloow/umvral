import { Component, ViewChild } from '@angular/core';

import { MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ExperienceListPage } from '../pages/experience-list/experience-list';
import { PerfilPage } from "../pages/perfil/perfil";
import { NotasPage } from '../pages/notas/notas';
import { CursosPage } from '../pages/cursos/cursos';
import { Experiencia1Page } from '../pages/experiencia-1/experiencia-1';
import { Experiencia2Page } from '../pages/experiencia-2/experiencia-2';
import { Experiencia3Page } from '../pages/experiencia-3/experiencia-3';
import { UmvralApiProvider } from '../providers/umvral-api/umvral-api';
import { LoginPage } from '../pages/login/login';

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  rootPage: any;
  isLoggedIn: boolean;

  constructor(
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public umvralApiProvider: UmvralApiProvider
  ) {
    // Check if the user has already seen the tutorial
    this.isLoggedIn = false;
    if (this.getLoggedInStatus) {
      console.log("usuario no ha iniciado sesión.");
      this.rootPage = LoginPage;
    } else {
      console.log("Usuario ha iniciado sesión");
      this.rootPage = ExperienceListPage;
    }
    

    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  getLoggedInStatus() {
    this.isLoggedIn = this.umvralApiProvider.isUserLoggedIn();
  }

  openExperiencia1Page() {
    this.nav.push(Experiencia1Page);
  }

  openExperiencia2Page() {
    this.nav.push(Experiencia2Page);
  }
  
  openExperiencia3Page() {
    this.nav.push(Experiencia3Page);
  }

  openPerfilPage() {
    this.nav.push(PerfilPage);
  }
  openNotasPage() {
    this.nav.push(NotasPage);
  }
  openCursosPage() {
    this.nav.push(CursosPage);
  }
}
