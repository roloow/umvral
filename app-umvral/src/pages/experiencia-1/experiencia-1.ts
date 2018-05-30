import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HelpVideoPage } from '../experiencia-1/video/video';
//import { ExpPage } from '../experiencia-1/experiencia/experiencia';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  selector: 'page-experiencia-1',
  templateUrl: 'experiencia-1.html'
})
export class Experiencia1Page {
  constructor(public nav: NavController, private iab: InAppBrowser, public splashScreen: SplashScreen) {
    this.nav = nav;
  }
  openVideoPage() {
    this.nav.push(HelpVideoPage);
  }
  
  openExpPage() {
    //this.nav.push(ExpPage);
    const options: InAppBrowserOptions = {
      zoom: 'no',
      location: 'no',
      hardwareback: 'no',
      hidden: 'yes'
    }
    const browser = this.iab.create("http://vps.csaldias.cl/umvral/","_self", options);
    browser.on('loadstop').subscribe(() => {
      browser.show();
      this.splashScreen.hide();
    });
  }
}