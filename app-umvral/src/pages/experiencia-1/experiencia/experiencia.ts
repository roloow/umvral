import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';



@Component({
  selector: 'page-exp',
  templateUrl: 'experiencia.html'
})
export class ExpPage {
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser
  ) {
    
  }
  openLink(){
    this.iab.create("https://www.google.com/","_blank");
  }
}