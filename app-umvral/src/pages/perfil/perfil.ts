import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})

export class PerfilPage {
  userData: any;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public umvralApiProvider: UmvralApiProvider,
    private loadingCtrl: LoadingController
  ) {
    this.navCtrl = navCtrl;
    console.log('constructor PerfilPage');
    this.getUserData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
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

  getUserData() {
    this.umvralApiProvider.getUserData()
    .then(data => {
      this.userData = data;
      console.log(JSON.stringify(this.userData));
    });
  }

  cerrarSesion() {
    this.umvralApiProvider.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  updateFirstName(name) {
    this.mostrarCargando();
    this.umvralApiProvider.updateFirstName(name)
    .then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("Cambio de nombre satisfactorio: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
      this.getUserData();
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("Error al cambiar el nombre: "+errorData.status+" "+errorData.statusText);
      console.log(errorData);
      this.loading.dismiss();
      //this.mostrarError("Error al actualizar nombre: "+errorData.statusText);
      this.getUserData();
    });
  }

  updateLastName(name) {
    this.mostrarCargando();
    this.umvralApiProvider.updateLastName(name)
    .then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("Cambio de apellido satisfactorio: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
      this.getUserData();
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("Error al cambiar el apellido: "+errorData.status+" "+errorData.statusText);
      console.log(errorData);
      this.loading.dismiss();
      //this.mostrarError("Error al actualizar apellido: "+errorData.statusText);
      this.getUserData();
    });
  }

  updatePassword(password) {
    this.mostrarCargando();
    this.umvralApiProvider.updatePassword(password)
    .then((result) => {
      let resultData = JSON.parse(JSON.stringify(result));
      console.log("Cambio de contraseña satisfactorio: "+resultData.status+" "+resultData.statusText);
      this.loading.dismiss();
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log("Error al cambiar la contraseña: "+errorData.status+" "+errorData.statusText);
      console.log(errorData);
      this.loading.dismiss();
      //this.mostrarError("Error al actualizar contraseña: "+errorData.statusText);
    });
  }

  async changeFirstName() {
    const alert = await this.alertCtrl.create({
      title: 'Cambiar Nombre',
      message: 'Ingresa tu nuevo nombre',
      buttons: [
        'Cancelar',
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log("Perfil - cambio de nombre a "+data.first_name);
            this.updateFirstName(data.first_name);
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'first_name',
          value: this.userData.first_name,
          placeholder: 'first_name'
        }
      ]
    });
    await alert.present();
  }

  async changeLastName() {
    const alert = await this.alertCtrl.create({
      title: 'Cambiar Apellido',
      message: 'Ingresa tu nuevo apellido',
      buttons: [
        'Cancelar',
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log("Perfil - cambio de apellido a "+data.last_name);
            this.updateLastName(data.last_name);
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'last_name',
          value: this.userData.last_name,
          placeholder: 'last_name'
        }
      ]
    });
    await alert.present();
  }

  async changePassword() {
    const alert = await this.alertCtrl.create({
      title: 'Cambiar Contraseña',
      message: 'Ingresa tu nueva contraseña',
      buttons: [
        'Cancelar',
        {
          text: 'Ok',
          handler: (data: any) => {
            console.log("Perfil - cambio de contraseña a "+data.password);
            this.updatePassword(data.password);
          }
        }
      ],
      inputs: [
        {
          type: 'password',
          name: 'password',
          value: '',
          placeholder: 'contraseña'
        }
      ]
    });
    await alert.present();
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

}
