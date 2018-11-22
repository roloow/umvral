import { Component } from '@angular/core';
import { NavParams, Loading, LoadingController, AlertController, NavController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';
import { RegisterUserPage } from '../register-user/register-user';
import { Storage } from '@ionic/storage';
import { TutorialPage } from '../tutorial/tutorial';
import { CursosPage } from '../cursos/cursos';

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
  test: any;

  constructor(
    public nav: NavController,
    public navParams: NavParams,
    public umvralApiProvider: UmvralApiProvider,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private storage: Storage) {
    console.log("constructor loginPage");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  registrarUsuario() {
    console.log("Boton presionado para registrar!");
    this.nav.push(RegisterUserPage);
  }

  iniciarSesion() {
    console.log("Boton presionado!");
    this.mostrarCargando();
    this.umvralApiProvider.login(this.data).then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("SUCCESS: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
      //El usuario ha visto el tutorial?
      this.storage.get('has_seen_tutorial').then((status) => {
        if (status == true) {
          this.nav.setRoot(CursosPage);
        } else {
          this.nav.setRoot(TutorialPage);
        }
      });
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("Error en login: "+errorData.status+" "+errorData.statusText);
      //this.mostrarError("Error al acceder: "+errorData.status+" "+errorData.statusText);
      this.mostrarError("Erorr al acceder: Usuario y/o contraseña incorrectos.");
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
