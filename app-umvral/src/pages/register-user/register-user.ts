import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

/**
 * Generated class for the RegisterUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-register-user',
  templateUrl: 'register-user.html',
})
export class RegisterUserPage {
  createSuccess = false;
  loading: Loading;
  registerCredentials = { email: '', password: '', firstName: '', lastName: '' };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private alertCtrl: AlertController,
    private loadingCtrl: LoadingController,
    private umvralApiProvider: UmvralApiProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterUserPage');
  }

  registrarUsuario() {
    console.log("Boton presionado!");
    this.mostrarCargando();
    this.umvralApiProvider.register(this.registerCredentials).then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("SUCCESS: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
      this.showPopup("Exito", "Cuenta creada con éxito.");
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("FAIL");
      this.showPopup("Error", "Error al crear cuenta: "+errorData.status+" "+errorData.statusText);
    });
  }

  mostrarCargando() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
}

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: () => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }

}
