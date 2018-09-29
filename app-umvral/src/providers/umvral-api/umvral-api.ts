import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UmvralApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UmvralApiProvider {
  apiUrl = 'http://vps.csaldias.cl:8000/api';
  isLoggedIn: boolean;
  userid: number;

  constructor(public http: Http) {
    this.isLoggedIn = false;
    console.log('Hello UmvralApiProvider Provider');
  }

  isUserLoggedIn() {
    return this.isLoggedIn;
  }

  logout() {
    this.isLoggedIn = false;
    this.userid = 0;
  }

  login(data) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    console.log("username="+data.username+"&password="+data.password);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/login/', "username="+data.username+"&password="+data.password, options)
        .subscribe(res => {
          this.isLoggedIn = true;
          let userData = JSON.parse(res["_body"]);
          this.userid = userData.user_id;
          resolve(res);
        }, (err) => {
          this.isLoggedIn = false;
          reject(err);
        });
    });
  }

  getUserData() {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    console.log("getUserData");
    return new Promise((resolve, reject) => {
      this.http.get(this.apiUrl+'/user/'+this.userid, options).subscribe(data => {
        console.log("SUCCESS");
        let userData = JSON.parse(data["_body"]);
        resolve(userData);
      }, (err) => {
        console.log("FAIL");
        reject(err);
      });
    });
  }

  updateFirstName(firstName) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    let dataStr = "user_id="+this.userid+"&nombre="+firstName;

    console.log("updateFirstName");
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/client/update/', dataStr, options).subscribe(data => {
        console.log("SUCCESS")
        let userData = JSON.parse(data["_body"]);
        resolve(userData);
      }, err => {
        //console.log("FAIL")
        reject(err);
      });
    });
  }

  updateLastName(lastName) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    let dataStr = "user_id="+this.userid+"&apellido="+lastName;

    console.log("updateLastName");
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/client/update/', dataStr, options).subscribe(data => {
        console.log("SUCCESS")
        let userData = JSON.parse(data["_body"]);
        resolve(userData);
      }, err => {
        //console.log("FAIL")
        reject(err);
      });
    });
  }

  updatePassword(password) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    let dataStr = "user_id="+this.userid+"&clave="+password;

    console.log("updatePassword");
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/client/update/', dataStr, options).subscribe(data => {
        console.log("SUCCESS")
        let userData = JSON.parse(data["_body"]);
        resolve(userData);
      }, err => {
        //console.log("FAIL")
        reject(err);
      });
    });
  }

}
