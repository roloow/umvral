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
  Usuario: any;
  stuid : number;
  stucurs: any;
  cursid: number;
  exps: any;
  expcursid: number;
  pruebaid: string = "Null";

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
    this.stucurs = '';
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
          this.stucurs = userData.cursos;
          //this.stucurs.sort(this.compare);
          console.log("Login successful with ID "+this.userid);
          resolve(res);
        }, (err) => {
          this.isLoggedIn = false;
          reject(err);
        });
    });
  }

  compare(a,b) {
    if (a.position < b.position)
      return -1;
    if (a.position > b.position)
      return 1;
    return 0;
  }
    
  experiencias(){
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/experience/curso/', "student_id="+this.stuid, options)
        .subscribe(res => {
          let cursoData = JSON.parse(res["_body"]);
          this.exps = cursoData.experiencias;
          resolve(res);
        }, (err) => {
          this.exps = "nope";
          reject(err);
        });
    });
  }

  verExperiencia(){
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/experience/detalle/', "student_id="+this.stuid+"&exp_course_id"+this.expcursid, options)
        .subscribe(res => {
          let cursoInfo = JSON.parse(res["_body"]);
          this.pruebaid = cursoInfo.test_id;
          resolve(res);
        }, (err) => {
          this.pruebaid = "Null";
          reject(err);
        });
    });
  }
/*
  metodo(valores) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    return new Promise((resolve, reject) =>{
      //this.http.post(link,valores,options).subscribe(res => { hacer cosas res , resolve}, err => {hacer cosas error ,reject})
      //this.http.get(link,options).subscribe(res => { hacer cosas res }, err => {hacer cosas error})
    }
  
  
  )
  }
*/

  getStuCurs(){
    return (this.stucurs);
  }



  register(data) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    console.log("username="+data.email+"&password="+data.password+"&register=1&email="+data.email+"&firstname="+data.firstName+"&lastname="+data.lastName);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/user/login/', "username="+data.email+"&password="+data.password+"&register=1&email="+data.email+"&firstname="+data.firstName+"&lastname="+data.lastName, options)
        .subscribe(res => {
          this.isLoggedIn = true;
          let userData = JSON.parse(res["_body"]);
          this.userid = userData.user_id;
          console.log("Register successful with ID "+this.userid);
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
        console.log("FAIL")
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
        console.log("FAIL")
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
        console.log("FAIL")
        reject(err);
      });
    });
  }

  getReceivedMessages() {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    let dataStr = "user_id="+this.userid;
    
    console.log("user_id="+this.userid);
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/message/recibidos/', dataStr, options)
        .subscribe(res => {
          let messages = JSON.parse(res["_body"]);
          console.log("Obtenidos mensajes recibidos para ID "+this.userid);
          resolve(messages);
        }, (err) => {
          reject(err);
        });
    });
  }
}
