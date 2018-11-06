import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpMateria2Page } from '../experiencia-2/materia/materia';
//import { ExpPage } from '../experiencia-2/experiencia/experiencia';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-experiencia-2',
  templateUrl: 'experiencia-2.html'
})

export class Experiencia2Page {
  prueba: any = 1;
  constructor(
    public nav: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private httpd: Httpd, 
    public umvralApiProvider: UmvralApiProvider
  ) {
    this.nav = nav;
    this.prueba = this.umvralApiProvider.pruebaid;
  }
 
  openMateriaPage() {
    this.nav.push(HelpMateria2Page);
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
    console.log("Loading experience...");
    const serverOptions: HttpdOptions = {
        www_root: 'assets/experiencias', // relative path to app's www directory
        port: 8080,
        localhost_only: true
    };
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      hardwareback: 'no',
    };
    const httpServer = this.httpd.startServer(serverOptions).subscribe((url) => {
      console.log('Server is live');
      const browser = this.iab.create(url+"/exp-2.html", "_blank", options);
      browser.on('exit').subscribe(() => {
        httpServer.unsubscribe();
        browser.close();
     });
    });
  }
}
