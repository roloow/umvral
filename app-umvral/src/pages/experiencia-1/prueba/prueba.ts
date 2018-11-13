import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { UmvralApiProvider } from '../../../providers/umvral-api/umvral-api';

@Component({
    selector: 'page-prueba',
    templateUrl: 'prueba.html'
})


export class HelpPrueba1Page {
    preguntas: any;
    respuestas: any = ['-','-','-','-','-','-','-','-','-','-'];
    contador:number;
    suma:number;
    nota:number;

    constructor(public navCtrl: NavController,
                public umvralApiProvider: UmvralApiProvider) {
                    this.preguntas = umvralApiProvider.preguntas;
    }
    
    Responde(valor,respU) {
        console.log(valor);
        console.log(respU);
        this.respuestas[valor] = respU;
        console.log(this.respuestas);
    } 

    enviar(){
        this.contador = 0;
        this.suma = 0;
        this.nota = 0;
        for (let pre of this.preguntas) {
            console.log(this.contador);
            console.log(pre.R);
            console.log(this.respuestas[this.contador]);    
            if (pre.R == this.respuestas[this.contador]){
                this.suma +=1;
            }
            this.contador +=1;
        }
        this.nota = (this.suma/this.preguntas.length)*6 + 1;
        console.log(this.nota);
        this.umvralApiProvider.subirNota(this.nota);
        
        
    }

}



