import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {
  showSkip = true;

  @ViewChild('slides') slides: Slides;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage) {}

  startApp() {
    this.navCtrl
      .setRoot(HomePage)
      .then(() => this.storage.set('has_seen_tutorial', true));
  }

  onSlideChangeStart(event) {
    event.target.isEnd().then(isEnd => {
      this.showSkip = !isEnd;
    });
  }

  ionViewWillEnter() {
    /*this.storage.get('has_seen_tutorial').then(res => {
      if (res === true) {
        this.navCtrl.setRoot(HomePage);
      }
    });*/
  }

  ionViewDidLeave() {
    // enable the root left menu when leaving the tutorial page
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

}
