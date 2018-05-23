import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';

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
}