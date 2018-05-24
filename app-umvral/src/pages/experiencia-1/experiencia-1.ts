import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpVideoPage } from '../experiencia-1/video/video';
import { ExpPage } from '../experiencia-1/experiencia/experiencia';

@Component({
  selector: 'page-experiencia-1',
  templateUrl: 'experiencia-1.html'
})
export class Experiencia1Page {
  constructor(public nav: NavController) {
    this.nav = nav;
  }
  openVideoPage() {
    this.nav.push(HelpVideoPage);
  }
  
  openExpPage() {
    this.nav.push(ExpPage);
  }
}