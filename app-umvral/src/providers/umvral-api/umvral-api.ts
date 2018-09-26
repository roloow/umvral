import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UmvralApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UmvralApiProvider {
  apiUrl = 'http://192.168.0.3:8000/api';
  //apiUrl = 'http://localhost:8100/api';
  isLoggedIn: boolean;

  constructor(public http: Http) {
    this.isLoggedIn = false;
    console.log('Hello UmvralApiProvider Provider');
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  login(data) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
 
    let options = new RequestOptions({ headers: hdrs});
    console.log("username="+data.username+"&password="+data.password);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/login/', "username="+data.username+"&password="+data.password, options)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

}
