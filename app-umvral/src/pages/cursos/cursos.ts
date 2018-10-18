import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExperienceListPage } from '../experience-list/experience-list';


@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {
  
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  openListaPage() {
    this.nav.push(ExperienceListPage);
  }
}