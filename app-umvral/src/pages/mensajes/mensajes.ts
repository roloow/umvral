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

  /*
  La estructura de los mensajes es:
  mensajes es un diccionario con 2 llaves:
  - "mensajes" es un arreglo de mensajes, con contenido de:
      - "content": contenido del mensaje
      - "id": id del mensaje
      - "id_sender": id del usuario que envió el mensaje
      - "name": nombre del usuario que envió el mensaje
      - "topic": asunto del mensaje
  - "usuario" es el id del usuario actual
  */
    

}
