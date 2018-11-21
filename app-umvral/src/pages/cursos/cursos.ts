import { Component } from '@angular/core';
import { NavController, Loading, LoadingController } from 'ionic-angular';
import { ExperienceListPage } from '../experience-list/experience-list';
import { UmvralApiProvider } from '../../providers/umvral-api/umvral-api';

@Component({
  selector: 'page-cursos',
  templateUrl: 'cursos.html'
})
export class CursosPage {
  cursos: any;
  loading: Loading;

  constructor(
    public nav: NavController,
    public umvralApiProvider: UmvralApiProvider,
    private loadingCtrl: LoadingController) {
    this.nav = nav;

    this.getCursos();
  }

  mostrarCargando() {
    this.loading = this.loadingCtrl.create({
      content: 'Cargando...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  getCursos() {
    //this.mostrarCargando();
    this.umvralApiProvider.getStuCurs()
    .then(data => {
      //this.loading.dismiss();
      this.cursos = data;
    }, (err) => {
      //this.loading.dismiss();
      console.log("Error: "+err);
    });

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
