import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController, AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';
import { RegisterUserPage } from '../register-user/register-user';
import { CursosPage } from '../cursos/cursos';
import { HomePage } from '../home/home';

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

  registrarUsuario() {
    console.log("Boton presionado para registrar!");
    this.navCtrl.push(RegisterUserPage);
  }

  iniciarSesion() {
    console.log("Boton presionado!");
    this.mostrarCargando();
    this.umvralApiProvider.login(this.data).then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("SUCCESS: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
      this.navCtrl.setRoot(HomePage);
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("FAIL");
      this.mostrarError("Error al acceder: "+errorData.status+" "+errorData.statusText);
    });
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
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }

}
