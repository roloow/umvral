import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';
import { ExperienceListPage } from '../experience-list/experience-list';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  data = {username: "", password: ""};
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public umvralApiProvider: UmvralApiProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController) {
    console.log("constructor loginPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  mostrarCargando() {
      this.loading = this.loadingCtrl.create({
        content: 'Cargando...',
        dismissOnPageChange: true
      });
      this.loading.present();
  }

  mostrarError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }

  iniciarSesion() {
    console.log("Boton presionado!");
    this.mostrarCargando();
    this.umvralApiProvider.login(this.data).then((result) => {
      console.log("SUCCESS");
      console.log(JSON.stringify(result));
      this.navCtrl.setRoot(ExperienceListPage);
    }, (err) => {
      console.log("FAIL");
      console.log(JSON.stringify(err));
      this.mostrarError("Error al acceder.")
    });
  }

}
