import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpVideo2Page } from '../experiencia-2/video/video';
//import { ExpPage } from '../experiencia-2/experiencia/experiencia';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-experiencia-2',
  templateUrl: 'experiencia-2.html'
})

export class Experiencia2Page {
  constructor(
    public nav: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController
  ) {
    this.nav = nav;
  }

  openVideoPage() {
    this.nav.push(HelpVideo2Page);
  }

  openExpPage() {
    let alert = this.alertCtrl.create({
      title: 'Información',
      subTitle: 'Para entrar en modo VR, presiona el ícono de la esquina inferior derecha e inserta el teléfono en el Cardboard.',
      buttons: [
        {
          text: 'Ok',
          handler: () => {
            this.loadExp();
          }
        }
      ]
    });
    alert.present();
  }

  loadExp() {
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      hardwareback: 'no',
    }
    this.iab.create("http://vps.csaldias.cl/umvral/", "_blank", options);
  }
}
