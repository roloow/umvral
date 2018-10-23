import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpMateria1Page } from '../experiencia-1/materia/materia';
//import { ExpPage } from '../experiencia-1/experiencia/experiencia';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-experiencia-1',
  templateUrl: 'experiencia-1.html'
})
export class Experiencia1Page {
  prueba: any = 0;
  constructor(
    public nav: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private httpd: Httpd
  ) {
    this.nav = nav;
  }
  openMateriaPage() {
    this.nav.push(HelpMateria1Page);
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
      www_root: 'umvral-exp1', // relative path to app's www directory
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
    const browser = this.iab.create(url, "_blank", options);
    browser.on('exit').subscribe(() => {
      httpServer.unsubscribe();
      browser.close();
   });
  });
}
}