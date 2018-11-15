import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpMateria1Page } from '../experiencia-1/materia/materia';
import { HelpPrueba1Page } from '../experiencia-1/prueba/prueba';
//import { ExpPage } from '../experiencia-1/experiencia/experiencia';
import { Httpd, HttpdOptions } from '@ionic-native/httpd';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-experiencia-1',
  templateUrl: 'experiencia-1.html'
})
export class Experiencia1Page {
  prueba: any = 1;
  answer: any = 1;
  nota: any = 1;
  constructor(
    public nav: NavController,
    private iab: InAppBrowser,
    public splashScreen: SplashScreen,
    private alertCtrl: AlertController,
    private httpd: Httpd, 
    public umvralApiProvider: UmvralApiProvider)
    {
      this.nav = nav;
      this.prueba = this.umvralApiProvider.pruebaid;
      this.answer = this.umvralApiProvider.answerid;
      this.nota = this.umvralApiProvider.notaAnswer;
      console.log(this.answer);
    }
  openMateriaPage() {
    this.nav.push(HelpMateria1Page);
  } 

  openPruebaPage() {
    this.umvralApiProvider.prueba().then((result) => {
      console.log(result);
      this.nav.push(HelpPrueba1Page);
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log(errorData);
    });
    
  } 

  mostrarMensaje(text) {     
    let alert = this.alertCtrl.create({
      title: 'Mensaje',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
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

  openPopupPrueba() {
    this.mostrarMensaje("Ya has rendido esta prueba.\nTu nota fue: "+this.nota.toString());
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
    const browser = this.iab.create(url+"/exp-1.html", "_blank", options);
    browser.on('exit').subscribe(() => {
      httpServer.unsubscribe();
      browser.close();
   });
  });
}
}