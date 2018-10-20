import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-mensajes',
  templateUrl: 'mensajes.html',
})

export class MensajesPage {
  mensajes: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private umvralApiProvider: UmvralApiProvider
  ) {
    this.getMensajes();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MensajesPage');
  }

  getMensajes() {
    this.umvralApiProvider.getReceivedMessages()
    .then(data => {
      this.mensajes = data;
      console.log(JSON.stringify(this.mensajes));
    });
  }
}
