import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'page-materia',
    templateUrl: 'materia.html'
})


export class HelpMateria3Page {
    video: any = {
        video_id: 'HZ86lhZ2a6M',
        title: 'Temperatura y dilatación'
    };
    url:string = 'https://www.youtube.com/embed/' + this.video.video_id
    trustedVideoUrl: SafeResourceUrl;

    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer) {}
                
    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    }            
}



