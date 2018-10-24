import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-notas',
  templateUrl: 'notas.html',
})
export class NotasPage {
  notas: any;
  nombre: string[];
  count: number;

  constructor(public navCtrl: NavController,
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public umvralApiProvider: UmvralApiProvider
  ) {
    this.count = 0;
    this.umvralApiProvider.getNotas().then((result) => {
      this.notas = result;
      console.log(this.notas);
      }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log(errorData);
    });
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
            this.umvralApiProvider.addNotas(data.nombre, data.nota).then((result) => {
              this.notas = result;
              console.log(this.notas);
              }, (err) => {
              console.log(err);
            });
            /*this.count += 1;
            this.notas = data.nota;
            this.blah = data.nombre;*/
          }
        }
      ],
      inputs: [
        {
          type: 'text',
          name : 'nombre',
          value: 'Mi nota',
          placeholder : 'Nombre de la nota'
        },
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

  delNota(notaid){
    this.umvralApiProvider.delNotas(notaid).then((result) => {
      this.notas = result;
      console.log(this.notas);
      }, (err) => {
      console.log(err);
    });
  }
  
}
