import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'page-materia',
    templateUrl: 'materia.html'
})


export class HelpMateria1Page {
    video: any = {
        url: 'https://www.youtube.com/embed/HZ86lhZ2a6M',
        title: 'Video Explicativo'
    };

    trustedVideoUrl: SafeResourceUrl;

    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer) {}
                
    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }            
}


