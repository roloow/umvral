import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ExperienceListPage } from '../experience-list/experience-list';


@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {
  cursos: any = [
    {
      stu_id : 111,
      cur_id : 111,
      cur_no : 'Curso Interesante 1',
      pro_no : 'Gervacio Rodriguez 1'
    },
    {
      stu_id : 112,
      cur_id : 112,
      cur_no : 'Curso Interesante 2',
      pro_no : 'Gervacio Rodriguez 2'
    },
    {
      stu_id : 113,
      cur_id : 113,
      cur_no : 'Curso Interesante 3',
      pro_no : 'Gervacio Rodriguez 3'
    }
  ];
  constructor(public nav: NavController) {
    this.nav = nav;
  }

  openListaPage() {
    this.nav.push(ExperienceListPage);
  }
}