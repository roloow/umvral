import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  notas: any;
  count: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.notas = [];
    this.count = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  mostrarError(text) { 
    let alert = this.alertCtrl.create({
      title: 'Error',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
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
            if (data.nota && data.nombre) {
              this.count += 1;
              this.notas.push({nota: data.nota, nombre: data.nombre});
            } else {
              if (data.nota === "" && data.nombre === "") this.mostrarError("Nombre y Nota inválidos.");
              else if (data.nombre === "") this.mostrarError("Nombre inválido.");
              else this.mostrarError("Nota inválida.");
            }
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name: 'nombre',
          value: '',
          placeholder: 'Evaluacion'
        },
        {
          type: 'text',
          name: 'nota',
          value: '',
          placeholder: 'Nota'
        }
      ]
    });
    await alert.present();
  }

}
