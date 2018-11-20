import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

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
  preguntas: any;
  notaAnswer: any = 'Null';
  answerid: any = 'Null';

  constructor(
    public http: Http,
    private storage: Storage) {
    storage.get('is_logged_in').then((status) => {
      if (status) {
        console.log("is_logged_in already exists.");
      } else {
        storage.set('is_logged_in', false);
        storage.set('has_seen_tutorial', false);
        console.log("Created is_logged_in, initialized it to false.");
      }
    });
    console.log('Hello UmvralApiProvider Provider');
  }

  async isUserLoggedIn() {
    const val = await this.storage.get('is_logged_in');
    return val;
  }

  logout() {
    this.storage.set('is_logged_in', false);
    this.storage.remove('user_id');
    this.storage.remove('cursos');
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
          this.storage.set('is_logged_in', true);

          let userData = JSON.parse(res["_body"]);
          this.storage.set('user_id', userData.user_id);
          this.storage.set('cursos', userData.cursos);

          console.log("Login successful with ID "+this.userid);
          resolve(res);
        }, (err) => {
          this.storage.set('is_logged_in', false);
          reject(err);
        });
    });
  }

  compararpreguntas(a,b) {
    if (a.position < b.position)
      return -1;
    if (a.position > b.position)
      return 1;
    return 0;
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
          this.answerid = cursoInfo.answer_id;
          this.notaAnswer = cursoInfo.answer_score;
          console.log(this.pruebaid);
          resolve(res);
        }, (err) => {
          this.pruebaid = "Null";
          reject(err);
        });
    });
  }

  prueba(){
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});

    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/experience/test/', "student_id="+this.stuid+"&test_id="+this.pruebaid, options)
        .subscribe(res => {
          let Prueba = JSON.parse(res["_body"]);
          this.preguntas = Prueba.preguntas;
          console.log(this.preguntas);
          this.preguntas.sort(this.compararpreguntas);
          console.log(this.preguntas);
          this.answerid = Prueba.answer_id;
          this.notaAnswer = Prueba.answer_score;
          resolve(res);
        }, (err) => {
          this.exps = "nope";
          reject(err);
        });
    });
  }

  subirNota(nota) {
    let hdrs = new Headers();
    hdrs.append('Content-Type', "application/x-www-form-urlencoded");      
    let options = new RequestOptions({ headers: hdrs});
  
    let dataStr = "student_id="+this.stuid+"&test_id="+this.pruebaid +"&score="+nota;
  
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl+'/experience/testResp/', dataStr, options).subscribe(data => {
        console.log("SUCCESS")
        let resultado = JSON.parse(data["_body"]);
        this.notaAnswer = resultado.score;
        this.answerid = resultado.answer_id;
        console.log(resultado);
        resolve(resultado);
      }, err => {
        console.log("FAIL")
        reject(err);
      });
    });
  }
  

  getStuCurs(){
    console.log("Fetching courses from localStorage...");
    return new Promise((resolve, reject) => {
      this.storage.get('user_id').then((userid) => {
        this.userid = userid;
        this.storage.get('cursos').then((cursos) => {
          this.stucurs = cursos;
          resolve(this.stucurs);
        }, err => {
          reject(err);
        });
      }, err => {
        reject(err);
      });
    });
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


