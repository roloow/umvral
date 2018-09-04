import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  notas: string[];
  count: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.notas = [];
    this.count = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  async addNota() {
    const alert = await this.alertCtrl.create({
      title: 'Agregar nota',
      message: 'Ingresa tu nueva nota',
      buttons: [
        'Cancelar',
        {
          text: 'Ok',
          handler: (data: any) => {
            this.count += 1;
            this.notas.push("Nota " + this.count.toString() + ": " + data.nota);
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'nota',
          value: '4.0',
          placeholder: 'nota'
        }
      ]
    });
    await alert.present();
  }

}
