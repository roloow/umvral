import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ScreenOrientation } from '@ionic-native/screen-orientation';

@Component({
  selector: 'page-exp',
  templateUrl: 'experiencia.html'
})
export class ExpPage {
  hideNavBar: boolean;
  orientacion: string;
  constructor(
    public navCtrl: NavController,
    private iab: InAppBrowser,
    private screenOrientation: ScreenOrientation
  ) {
    this.hideNavBar = true;
    this.orientacion = screenOrientation.type;
    this.screenOrientation.onChange().subscribe(
      () => {
        if(screenOrientation.type == 'landscape-primary') {
          this.hideNavBar = false;
          console.log("Cambio a Landscape"); 
        } else {
          this.hideNavBar = true;
          console.log("Cambio a Portrait");
        }
      }
   );
  }

  openLink(){
    this.iab.create("https://www.google.com/","_blank");
  }
}