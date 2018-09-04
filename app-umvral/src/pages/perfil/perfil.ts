import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html',
})
export class PerfilPage {
  username: string;
  nombre: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.username = "alumno";
    this.nombre = "Alumno umVRal";
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PerfilPage');
  }

  async changeUsername() {
    const alert = await this.alertCtrl.create({
      title: 'Cambiar Nombre de Usuario',
      message: 'Ingresa tu nuevo nombre de usuario',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.username = data.username;
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'username',
          value: this.username,
          placeholder: 'username'
        }
      ]
    });
    await alert.present();
  }

  async changeName() {
    const alert = await this.alertCtrl.create({
      title: 'Cambiar Nombre',
      message: 'Ingresa tu nuevo nombre',
      buttons: [
        'Cancel',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.nombre = data.nombre;
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'nombre',
          value: this.nombre,
          placeholder: 'nombre'
        }
      ]
    });
    await alert.present();
  }

  changePassword() {
    console.log('Clicked to change password');
  }

  updatePicture() {
    console.log('Clicked to update picture');
  }

}
