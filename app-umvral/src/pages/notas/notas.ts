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
  promedio: number;
  suma: number;
  contar: number;
  vnota: number[];
  knota: string[];
  public lineChartData:Array<any>;
  public lineChartLabels:Array<any>;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public umvralApiProvider: UmvralApiProvider
  ) {
    this.count = 0;
    this.umvralApiProvider.getNotas().then((result) => {
      this.notas = result;
      console.log(this.notas);
      this.calcpromedio();
      this.separarNotas();
      this.lineChartData = [
        {data: this.vnota, label: 'Notas'} //valor nota
      ];
      this.lineChartLabels = this.knota;
      }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log(errorData);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotasPage');
  }

  roundToTwo(num) {
    return +(num.toFixed(2));
}

  calcpromedio(){
    this.suma = 0;
    this.contar = 0;
    for (let nota of this.notas){
      this.suma += nota.valor;
      console.log(nota.valor);
      this.contar +=1;
    }
    this.promedio = (this.suma/this.contar);
    this.promedio = this.roundToTwo(this.promedio);
    console.log(this.promedio);
  }
  separarNotas(){
    this.contar = 0;
    this.vnota = [];
    this.knota = [];
    for (let nota of this.notas){
      console.log(nota);
      this.vnota.push(nota.valor);
      console.log(this.vnota);
      this.knota.push(nota.nombre);
      this.contar +=1;
    }
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
              this.calcpromedio();
              this.separarNotas();
              this.lineChartData = [
                {data: this.vnota, label: 'Notas'} //valor nota
              ];
              this.lineChartLabels = this.knota;
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
          value: '',
          placeholder: 'Nota'
        }
      ]
    });
    await alert.present();
  }

  delNota(notaid){
    this.umvralApiProvider.delNotas(notaid).then((result) => {
      this.notas = result;
      this.calcpromedio();
      this.separarNotas();
      this.lineChartData = [
        {data: this.vnota, label: 'Notas'} //valor nota
      ];
      this.lineChartLabels = this.knota;
      console.log(this.notas);
      }, (err) => {
      console.log(err);
    });
  }

  //grafico
  public lineChartOptions:any = {
    responsive:true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        ticks: {
          fontColor: '#e3dada',  // x axe labels (can be hexadecimal too)
        },
        gridLines: {
          color: '#645B5B'  // grid line color (can be removed or changed)
        }
      }],
      yAxes: [{
        ticks: {
          fontColor: '#e3dada'  // y axes numbers color (can be hexadecimal too)
        },
        gridLines: {
          color: '#645B5B'  // grid line color (can be removed or changed)
        },
      }]
    },
    legend: {
      display: true,
      labels: {
        fontColor: '#e3dada', // legend color (can be hexadecimal too)
      },
    }
  };
  public lineChartColors:Array<any> = [
    { //Verde DeepGrow
      backgroundColor: 'rgba(60,123,57,0.2)',
      borderColor: 'rgba(60,123,57,1)',
      pointBackgroundColor: 'rgba(60,123,57,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(60,123,57,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}
