import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CursosPage } from '../cursos/cursos';
import { MensajesPage } from '../mensajes/mensajes';
import { PerfilPage } from '../perfil/perfil';
import { NotasPage } from '../notas/notas';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  notasRoot = NotasPage;
  perfilRoot = PerfilPage;
  mensajesRoot = MensajesPage;
  cursosRoot = CursosPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  loadCursosPage() {
    this.navCtrl.push(CursosPage);
  }
  loadMensajesPage() {
    this.navCtrl.push(MensajesPage);
  }
  loadPerfilPage() {
    this.navCtrl.push(PerfilPage);
  }

}
