import { Component  } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { UmvralApiProvider } from '../../../providers/umvral-api/umvral-api';

@Component({
    selector: 'page-prueba',
    templateUrl: 'prueba.html'
})


export class HelpPrueba3Page {
    preguntas: any;
    respuestas: any = ['-','-','-','-','-','-','-','-','-','-'];
    contador:number;
    suma:number;
    nota:number;

    constructor(public navCtrl: NavController,
                public umvralApiProvider: UmvralApiProvider,
                public alertCtrl: AlertController) {
                    this.preguntas = umvralApiProvider.preguntas;
    }
    
    Responde(valor,respU) {
        console.log(valor);
        console.log(respU);
        this.respuestas[valor] = respU;
        console.log(this.respuestas);
    }

    mostrarMensaje(text) {     
        let alert = this.alertCtrl.create({
          title: 'Mensaje',
          subTitle: text,
          buttons: ['OK']
        });
        alert.present();
      }

    enviar(){
        this.contador = 0;
        this.suma = 0.0;
        this.nota = 0.0;
        for (let pre of this.preguntas) {
            console.log("Pregunta "+this.contador+": "+pre.R+"/"+this.respuestas[this.contador]);  
            if (pre.R == this.respuestas[this.contador].toLowerCase()){
                this.suma +=1.0;
            }
            console.log("Suma = "+this.suma);
            this.contador +=1;
        }
        console.log(this.suma);
        this.nota = (this.suma/this.preguntas.length)*6.0 + 1.0;
        console.log(this.nota);
        this.umvralApiProvider.subirNota(this.nota).then((data) => {
            console.log(data);
            this.mostrarMensaje("Tu nota es: "+this.nota.toString());
        }, (err) => {
            console.log(err);
            this.mostrarMensaje("Ocurrió un error al guardar tu nota, puede que ya exista un registro previo");
        });
        this.navCtrl.pop();
    }

}



