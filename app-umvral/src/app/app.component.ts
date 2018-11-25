import { Component, ViewChild } from '@angular/core';

import { MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { UmvralApiProvider } from '../providers/umvral-api/umvral-api';
import { LoginPage } from '../pages/login/login';
//import { HomePage } from '../pages/home/home';
import { PerfilPage } from '../pages/perfil/perfil';
import { NotasPage } from '../pages/notas/notas';
import { CursosPage } from '../pages/cursos/cursos';
import { MensajesPage } from '../pages/mensajes/mensajes';

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  //@ViewChild(Nav) nav: Nav;
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  rootPage: any;

  constructor(
    public menu: MenuController,
    public platform: Platform,
    public splashScreen: SplashScreen,
    public umvralApiProvider: UmvralApiProvider
  ) {
    this.getLoggedInStatus();
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      splashScreen.hide();
    });
  }

  getLoggedInStatus() {
    // Check if the user is logged in
    this.umvralApiProvider.isUserLoggedIn().then((status) => {
      if (status == true) {
        console.log("Usuario ha iniciado sesión");
        this.rootPage = CursosPage;
      } else {
        console.log("usuario no ha iniciado sesión.");
        this.rootPage = LoginPage;
      }
    });
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

  openMensajesPage() {
    this.nav.push(MensajesPage);
  }
}
