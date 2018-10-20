import { Component } from '@angular/core';
import { NavController, NavParams, Loading, LoadingController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})

export class MensajesPage {
  mensajes: any;
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private umvralApiProvider: UmvralApiProvider,
    private loadingCtrl: LoadingController
  ) {
    this.getMensajes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajesPage');
  }

  mostrarCargando() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  getMensajes() {
    this.mostrarCargando();
    this.umvralApiProvider.getReceivedMessages()
    .then(data => {
      this.mensajes = data;
      //console.log(JSON.stringify(this.mensajes));
      this.loading.dismiss();
    });
  }
}
