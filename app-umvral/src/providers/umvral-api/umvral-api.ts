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
  pruebaid: any;

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
          /*console.log(this.stucurs[0]);
          this.stucurs.sort(this.compararstucurs);
          console.log(this.stucurs[0]);*/
          console.log("Login successful with ID "+this.userid);
          resolve(res);
        }, (err) => {
          this.isLoggedIn = false;
          reject(err);
        });
    });
  }

  compararexps(a,b) {
    if (a[0].position < b[0].position)
      return -1;
    if (a[0].position > b[0].position)
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
          console.log(this.exps);
          this.exps.sort(this.compararexps);
          console.log(this.exps);
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

    console.log("student_id="+this.stuid +"&exp_course_id="+this.expcursid);

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/experience/detalle/', "student_id="+this.stuid+"&exp_course_id="+this.expcursid, options)
        .subscribe(res => {
          let cursoInfo = JSON.parse(res["_body"]);
          console.log(res);
          this.pruebaid = cursoInfo.test_id;
          console.log(this.pruebaid);
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
//NOTAS

getNotas() {
  let hdrs = new Headers();
  hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
  let options = new RequestOptions({ headers: hdrs});

  let dataStr = "user_id="+this.userid;
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/client/notas/', dataStr, options).subscribe(data => {
      console.log("SUCCESS")
      let mensajes = JSON.parse(data["_body"]);
      resolve(mensajes.notas);
    }, err => {
      console.log("FAIL")
      reject(err);
    });
  });
}

addNotas(titulo, nota) {
  let hdrs = new Headers();
  hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
  let options = new RequestOptions({ headers: hdrs});

  let dataStr = "user_id="+this.userid+"&nombre_nota="+titulo+"&nota="+nota;

  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/client/notas/create/', dataStr, options).subscribe(data => {
      console.log("SUCCESS")
      let mensajes = JSON.parse(data["_body"]);
      resolve(mensajes.notas);
    }, err => {
      console.log("FAIL")
      reject(err);
    });
  });
}

delNotas(notaid) {
  let hdrs = new Headers();
  hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
  let options = new RequestOptions({ headers: hdrs});

  let dataStr = "user_id="+this.userid+"&nota_id="+notaid;

  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/client/notas/delete/', dataStr, options).subscribe(data => {
      console.log("SUCCESS")
      let mensajes = JSON.parse(data["_body"]);
      resolve(mensajes.notas);
    }, err => {
      console.log("FAIL")
      reject(err);
    });
  });
}

getVideo() {
  let hdrs = new Headers();
  hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
  let options = new RequestOptions({ headers: hdrs});

  let dataStr = "student_id="+this.stuid+"&exp_course_id="+this.expcursid;
  return new Promise((resolve, reject) => {
    this.http.post(this.apiUrl+'/experience/video/', dataStr, options).subscribe(data => {
      console.log("SUCCESS")
      let mensajes = JSON.parse(data["_body"]);
      resolve(mensajes.video_url);
    }, err => {
      console.log("FAIL")
      reject(err);
    });
  });
}

}


