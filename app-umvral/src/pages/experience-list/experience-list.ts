import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';
import { Experiencia2Page } from '../experiencia-2/experiencia-2';
import { Experiencia3Page } from '../experiencia-3/experiencia-3';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-experience-list',
  templateUrl: 'experience-list.html'
})
export class ExperienceListPage {
  
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  openExperiencia1Page() {
    this.nav.push(Experiencia1Page);
  }

  openExperiencia2Page() {
    this.nav.push(Experiencia2Page);
  }
  
  openExperiencia3Page() {
    this.nav.push(Experiencia3Page);
  }

}