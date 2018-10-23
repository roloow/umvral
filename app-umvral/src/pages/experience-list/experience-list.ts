import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';
import { Experiencia2Page } from '../experiencia-2/experiencia-2';
import { Experiencia3Page } from '../experiencia-3/experiencia-3';

@Component({
  selector: 'page-experience-list',
  templateUrl: 'experience-list.html'
})
export class ExperienceListPage {
  experiencias: any = [
    {
      n : 'Caida Libre',
      d : 'descripcion',
      p : '1',
      t : 'Caida Libre'
    },
    {
      n : 'Lanzamiento de Proyectil',
      d : 'descripcion',
      p : '3',
      t : 'Lanzamiento de Proyectil'
    },
    {
      n : 'Dilatacion y calor',
      d : 'descripcion',
      p : '2',
      t : 'Dilatacion y calor'
    }
  ];
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  openExperienciaPage(valor) {
    switch (valor) {
      case 'Caida Libre':
          this.nav.push(Experiencia1Page); //Caida Libre  
      break;

      case 'Lanzamiento de Proyectil':
        this.nav.push(Experiencia2Page); //Lanzamiento de Proyectil
      break;

      case 'Dilatacion y calor':
        this.nav.push(Experiencia3Page); //Dilatacion y calor
      break;

      default:
        break;
    }
  }

  openExperiencia2Page() {
    this.nav.push(Experiencia2Page); //Lanzamiento de Proyectil
  }
  
  openExperiencia3Page() {
    this.nav.push(Experiencia3Page); //Dilatacion y calor
  }

}