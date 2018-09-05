import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'page-video',
    templateUrl: 'video.html'
})


export class HelpVideo2Page {
    video: any = {
        url: 'https://www.youtube.com/embed/YfJzRX78UlM',
        title: 'Video Explicativo'
    };

    trustedVideoUrl: SafeResourceUrl;

    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer) {}
                
    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.video.url);
    }            
}



