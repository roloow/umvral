import { Component, ViewChild } from '@angular/core';
import { Nav } from 'ionic-angular';
import { Experiencia1Page } from '../experiencia-1/experiencia-1';

@Component({
  selector: 'page-experience-list',
  templateUrl: 'experience-list.html'
})
export class ExperienceListPage {
  @ViewChild(Nav) nav: Nav;
  
  constructor() {
  }

  openExperiencia1Page() {
    this.nav.push(Experiencia1Page);
  }
}