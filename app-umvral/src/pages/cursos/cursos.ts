import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExperienceListPage } from '../experience-list/experience-list';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {
  cursos: any;

  constructor(public nav: NavController, public umvralApiProvider: UmvralApiProvider) {
    this.nav = nav;
    this.cursos = umvralApiProvider.getStuCurs();
    
  }

  openListaPage(stu_id) {
    this.umvralApiProvider.stuid = stu_id; 
  //Actualizar variable de api arreglo de experiencias
    this.umvralApiProvider.experiencias().then((result) => {
      console.log(result);
      this.nav.push(ExperienceListPage);
    }, (err) => {
      let errorData = JSON.parse(JSON.stringify(err));
      console.log(errorData);
    });
  }
}
