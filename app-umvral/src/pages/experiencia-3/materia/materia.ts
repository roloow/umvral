import { Component  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { UmvralApiProvider } from '../../../providers/umvral-api/umvral-api';

@Component({
    selector: 'page-materia',
    templateUrl: 'materia.html'
})


export class HelpMateria3Page {
    video: any = {
        video_id: 'HZ86lhZ2a6M',
        title: 'Video Explicativo'
    };
    url:string;
    trustedVideoUrl: SafeResourceUrl;

    constructor(public navCtrl: NavController,
                private domSanitizer: DomSanitizer, 
                public umvralApiProvider: UmvralApiProvider) {
                    this.umvralApiProvider.getVideo().then((result) => {
                        this.video.video_id = result;
                        this.url = 'https://www.youtube.com/embed/' + this.video.video_id;
                        console.log(this.video.video_id);
                        }, (err) => {
                        console.log(err);
                      });
                    
                }
                
    ionViewWillEnter(): void {
        this.trustedVideoUrl = this.domSanitizer.bypassSecurityTrustResourceUrl(this.url);
    }            
}
