import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';
import { Experiencia2Page } from '../experiencia-2/experiencia-2';
import { Experiencia3Page } from '../experiencia-3/experiencia-3';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-experience-list',
  templateUrl: 'experience-list.html'
})
export class ExperienceListPage {
  experiencias: any;
  stuid : any;

  constructor(public nav: NavController, public umvralApiProvider: UmvralApiProvider) {
    this.nav = nav;
    this.experiencias = umvralApiProvider.exps;
    this.stuid = umvralApiProvider.stuid;
  }

  openExperienciaPage(cursoid, valor) {
    this.umvralApiProvider.cursid = cursoid;

    //actualizar variables de api de detalles de una experiencia
    
    this.umvralApiProvider.verExperiencia().then((result) => {
      console.log(result);
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log(errorData);
    });

    //seleccionar a que experiencia redirigir

    switch (valor) {
      case 'Caida Libre':
          this.nav.push(Experiencia1Page); //Caida Libre  
      break;

      case 'Lanzamiento de proyectil':
        this.nav.push(Experiencia2Page); //Lanzamiento de Proyectil
      break;

      case 'Dilatacion y calor':
        this.nav.push(Experiencia3Page); //Dilatacion y calor
      break;

      default:
        break;
    }
  }
}