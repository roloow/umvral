pay = {
	student_id: 301,
	experience_id: 2,
	slug: 'inicio',
	value: true,
	//value_num: algun numero
}
//send2api(pay)

var webpage = "http://192.168.0.24:8000/api/metric/post/";
function send2api(payload){
	var data = new FormData();
	data.append( 'json', JSON.stringify( payload ) );
	fetch("http://192.168.0.24:8000/api/metric/post/",
		//fetch("http://localhost:8000/api/metric/post/",
		{
			method: "POST",
			body: data
		})
		.then(function(res){ return res.json(); })
		.then(function(data){ console.log("metric sent") })
}

/*************************
				VARIABLES
 *************************/

// Valores posibles de seleccion
//var velocidades = [18, 12, 6] //velocidades iniciales disponibles
var velocidades = [18] //velocidades iniciales disponibles
var angulos = [30,45,60] //angulos disponibles
var angulos_h = [-1,0,1] //angulos disponibles
var respuestas = []
var cant_respuestas = 8

// para click en cannon
var v_o = 18;
var cannon_angle = 0; // angulo horizontal
var gamma = 30; // angulo vertical

var distanciaTarget;
var yTarget=0;
var xTarget=0;
var gravity = 9.8;
var launching_ball = false; //true: bola es lanzada

var video = document.querySelector("#tutorial");
var playTV = document.querySelector("#playTV");
var indicadorcoordenadas = document.querySelector('#indicadorcoordenadas');
var alfa1= document.querySelector("#alfa1");
var alfa2= document.querySelector("#alfa2");
var alfa3= document.querySelector("#alfa3");
var textoPizarraEnBlanco = document.querySelector('#textoPizarraEnBlanco');
var textoPizarra30grados = document.querySelector("#textoPizarra30grados");
var textoPizarra45grados = document.querySelector("#textoPizarra45grados");
var textoPizarra60grados = document.querySelector("#textoPizarra60grados");

var offset_z = 4; //offset de calculos de targets respecto a punto de lanzamiento
var offset_y = 0;
var target0 = document.querySelector('#target0');
var orange = document.querySelector('#orange');
var shoot = document.querySelector(".cannon");

var cannonL1 = document.querySelector("#cannonL1");
var cannonL2 = document.querySelector("#cannonL2");
var cannonL3 = document.querySelector("#cannonL3");
var cannon1 = document.querySelector("#cannon1");
var cannon2 = document.querySelector("#cannon2");
var cannon3 = document.querySelector("#cannon3");
var cannons = document.querySelector("#cannons");
var start = document.querySelector('#start');

//Botones para posicion horizontal de cañon
var angle_1 = document.querySelector('#v1');
var angle0 = document.querySelector('#v2');
var angle1 = document.querySelector('#v3');

// Tutorial - Tooltips
/*STEPS:
	0: Usuario inicia experiencia, tiene que apretar emprezar
	1: Usuario ya apreto "Empezar"
	2: Debe cambiar posicion horizontar par de veces
	3: Debe cambiar angulo par de veces
	4: Lanza la pelota
	5: Debe acertar a un blanco
	*/
class Hint {
	constructor() {
		this.btn_tooltips = document.querySelector('#btn_tooltips');
		this.hint_rectangle = document.querySelector("#hint_rectangle");
		this.dom = document.querySelector("#hints");
		this.active = false;
		this.step = 0;
		//tengo q cambiar angulo horizontal 2 veces
		this.pos_count = 3;
		this.angle_count = 3;
		this.changeHintText("Hola, bienvenido a la experiencia N°2 de umVRal. Para comenzar, aprieta el botón 'empezar'.");
	}
	reset() {
		this.step = 1;
		this.active = false;
		this.change_temp = 0;
		//tengo q cambiar angulo horizontal 2 veces
		this.pos_count = 3;
		this.angle_count = 3;
	}
	changeHintText(text) {
		this.dom.setAttribute('text', {'value': text}) 
	}
	change_funct() {
		let that = this;
		if((that.change_temp < 2) && that.active) { that.change_temp++; }
		else {
			that.changeHintText('Bien!. Continua experimentando en la experiencia, y aprende con nostoros! LH.', that.dom);
			that.fade_out();
		}
	}
	//start es equivalente a toStep2()
	start(){
		let that = this;
		if (that.step === 1 && that.pos_count > 0){
			that.changeHintText("La experiencia comienza!. Prueba cambiando la posición del cañon "+that.pos_count+" veces en el panel a tu derecha.");
			//that.pos_count--;
			that.step = 2;
		}
	}
	toStep3(){
		let that = this;
		if (that.step === 2){
			that.changeHintText('Prueba ahora cambiando el angulo del cañon '+that.angle_count+' veces');
			that.step = 3;
		}
	}
	change_position() {
		let that = this;
		//if (that.step === 1 && that.pos_count > 0){
		if (that.step === 2){
			that.pos_count--;
			that.changeHintText("La experiencia comienza!. Prueba cambiando la posición del cañon "+that.pos_count+" veces en el panel a tu derecha.");
			if (that.pos_count <= 0){
				that.toStep3();
			}
		}
	}
	change_angle() {
		let that = this;
		if (that.step === 3 && that.angle_count > 0){
			that.angle_count--;
			that.changeHintText('Prueba ahora cambiando el angulo del cañon '+that.angle_count+' veces');
			if (that.angle_count <= 0){
				that.toStep4();
			}
		}
	}
	toStep4(){
		let that = this;
		if (that.step === 3){
			that.changeHintText('Bien!. Ahora llego la hora de lanzar proyectil. Ajusta coordenadas de cañon, y miralo para lanzar proyectil. Apunta a un Blanco.');
			that.step = 4;
		}
	}
	launch() {
		let that = this;
		if (that.step === 4){
			that.changeHintText('Bien!. Ahora llego la hora de lanzar proyectil. Ajusta coordenadas de cañon, y miralo para lanzar proyectil. Apunta a un Blanco.');
			that.step++;
		}
	}
	target() {
		let that = this;
		if (that.step === 4 || that.step === 5){
			that.changeHintText('Ya tienes tu primer acierto!. Ahora, impacta unos 2 blancos más para poder completar la experiencia');
			that.step++;
			setTimeout(function(){ 
				that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
				that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
				setTimeout(function(){
					that.hint_rectangle.setAttribute('visible', false);
					that.dom.setAttribute('visible', false);
				},1000);
			}, 4000);
		}
	}
	fade_out() {
		let that = this;
		this.active = false;
		setTimeout(function(){ 
			that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
			that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
			setTimeout(function(){
				that.hint_rectangle.setAttribute('visible', 'false');
				that.dom.setAttribute('visible', 'false');
			}, 1000);
		}, 1000);
	};
	fade_in() {
		let that = this;
		//that.reset();
		that.active = true;
		that.dom.setAttribute('visible', true);
		setTimeout(function(){ 
			that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.7");
			that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.8");
			//that.step = 1;
		}, 500);
	}
}
hints = new Hint();

var comenzo=false;
//Generar las respuestas de la experiencia
generateAnswers();
nextTarget();


/*************************
	 FUNCIONES DE EVENTOS
 **************************/

hints.btn_tooltips.addEventListener('click', function(){
	hints.fade_in();
	if (hints.step === 1) { hints.start() };
	pay = {
		student_id: 301,
		experience_id: 2,
		slug: 'tutorial',
		value: true,
		//value_num: algun numero
	}
	send2api(pay);
})

start.addEventListener('click', function(){
	hints.step = 1;
	hints.start()
	nextTarget();
	//TODO : Tengo que ver el problema si el usuario apreta empezar antes,
	// Para saltar el paso
	comenzo = true;
	target0.setAttribute('visible', 'true');
	start.setAttribute('visible', 'false');
	indicadorcoordenadas.setAttribute('visible','true');
});

cannon1.addEventListener('click', function(){
	orange.setAttribute('material','color: orange; shader: flat');
	cannonL1.setAttribute('visible', 'true');
	cannonL2.setAttribute('visible', 'false');
	cannonL3.setAttribute('visible', 'false');
});
cannon2.addEventListener('click', function(){
	orange.setAttribute('material','color: black; shader: flat');
	cannonL1.setAttribute('visible', 'false');
	cannonL2.setAttribute('visible', 'true');
	cannonL3.setAttribute('visible', 'false');
});
cannon3.addEventListener('click', function(){
	orange.setAttribute('material','color: blue; shader: flat');
	cannonL1.setAttribute('visible', 'false');
	cannonL2.setAttribute('visible', 'false');
	cannonL3.setAttribute('visible', 'true');
});


alfa1.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','false');
	textoPizarra60grados.setAttribute('visible','false');
	textoPizarra30grados.setAttribute('visible','true');
	gamma=30;
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	// cambio de angulo bala
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}
});


alfa2.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','true');
	textoPizarra60grados.setAttribute('visible','false');
	textoPizarra30grados.setAttribute('visible','false');
	gamma=45;
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	//
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}


});
alfa3.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','false');
	textoPizarra60grados.setAttribute('visible','true');
	textoPizarra30grados.setAttribute('visible','false');
	gamma=60;
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	// cambio de angulo bala
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}
});

var alfa1panel= document.querySelector("#h1");
var alfa2panel= document.querySelector("#h2");
var alfa3panel= document.querySelector("#h3");
alfa1panel.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','false');
	textoPizarra60grados.setAttribute('visible','false');
	textoPizarra30grados.setAttribute('visible','true');
	gamma=30;
	hints.change_angle();
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	// cambio de angulo bala
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}

});
alfa2panel.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','true');
	textoPizarra60grados.setAttribute('visible','false');
	textoPizarra30grados.setAttribute('visible','false');
	gamma=45;
	hints.change_angle();
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	// cambio de angulo bala
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}

});
alfa3panel.addEventListener('click', function(){
	textoPizarraEnBlanco.setAttribute('visible','false');
	textoPizarra45grados.setAttribute('visible','false');
	textoPizarra60grados.setAttribute('visible','true');
	textoPizarra30grados.setAttribute('visible','false');
	gamma=60;
	hints.change_angle();
	// cambio en angulo del cañon
	cannonL1.object3D.rotation.x = degToRad(90+gamma);
	cannonL2.object3D.rotation.x = degToRad(90+gamma);
	cannonL3.object3D.rotation.x = degToRad(90+gamma);
	// cambio de angulo bala
	if(comenzo){
		document.querySelector("#coordenadastarget").setAttribute('value','coordenadas ( x='+xTarget+'[m] ,y='+yTarget+'[m] ) \n Velocidad disparo= 18[m/s]');
	}

});


playTV.addEventListener('click',function(){
	video.play();
	playTV.setAttribute('visible','false');
});

video.addEventListener('ended',myHandler,false);
function myHandler(e) {
	playTV.setAttribute('visible','true');
}


/* Lanzamiento de Bala */
cannons.addEventListener('click', function(){
	if (launching_ball === false || orange.body.position < -1 || orange.body.position.y < 0.8) {
		launching_ball = true;
		hints.launch();
		pay = {
			student_id: 301,
			experience_id: 2,
			slug: 'disparo',
			value: true,
			//value_num: algun numero
		}
		send2api(pay);
		//Reset de velocidades de la Bala
		orange.body.angularVelocity.set(0,0,0);
		orange.body.quaternion.set(0,0,0,1);
		orange.body.position.set(0, 1.5, -4.5);
		velocity = getVelocity(v_o , gamma, cannon_angle)
		orange.body.velocity.set(velocity[0], velocity[1], -velocity[2]);
	}
});

shoot.addEventListener('click', function(){

	if (launching_ball === false || orange.body.position < -1 || orange.body.position.y < 0.8) {
		launching_ball = true;
		//Reset de velocidades de la Bala
		hints.launch();
		pay = {
			student_id: 301,
			experience_id: 2,
			slug: 'disparo',
			value: true,
			//value_num: algun numero
		}
		send2api(pay);
		orange.body.angularVelocity.set(0,0,0);
		orange.body.quaternion.set(0,0,0,1);
		orange.body.position.set(0, 1.5, -4.5);
		velocity = getVelocity(v_o , gamma, cannon_angle)
		orange.body.velocity.set(velocity[0], velocity[1], -velocity[2]);
	}
});


/* Evento de colision de Raycaster de Bala con Target/Plano */
/* Funcion que se lanza, cuando la bala tiene una colision con un
	target o el suelo, para poder reiniciar el disparo
 * Variables Offset: sirven cuando el cañon tinee que moverse de posicion, ya
	que se asume que el cañon debiese estar en 0.0
	*/
orange.addEventListener('raycaster-intersection', function (e) {
	launching_ball = false;
	if (e.detail.els[0].getAttribute('id') === 'plano'){
		orange.body.velocity.set(0, 0, 0);
		orange.body.position.set(0, -4, -4.5);
	}
	else if (e.detail.els[0].getAttribute('id') === 'target0'){
		hints.target();
		pay = {
			student_id: 301,
			experience_id: 2,
			slug: 'acierto',
			value: true,
			//value_num: algun numero
		}
		send2api(pay)
		orange.body.velocity.set(0, 0, 0);
		orange.body.position.set(0, -4, -4.5);
		nextTarget();
	}
	// OJO: Este if, fija la respuesta para cierto angulo. Si el target tiene dos respuestas,
	// entonces no funcionaria, y habria que hacer colisiones con dos versiones
	/*
	if (parseInt(e.detail.els[0].getAttribute('angle')) == gamma){
	}
	*/
});


/* Click, para cambiar el cañon de posicion horizontal */
angle_1.addEventListener('click', function(){
	changeCanonPosition(-1);
});
angle0.addEventListener('click', function(){
	changeCanonPosition(0);
});
angle1.addEventListener('click', function(){
	changeCanonPosition(1);
});

/**************************
	 FUNCIONES DE SOPORTE
 **************************/

// Crear posicion no random para los targets
/*
 * angle : Angulo horizontal
 * v_o : Velocidad inicial del arreglo
 * gamma : Angulo vertical del cañon
 */
function targetPos(angle, v_o, gamma){
	if (angle === -1) {
		position = getTargetPosition(v_o, gamma, -1) //Obtener posicion random para el target
		target0.object3D.position.set(position[0],position[1]+offset_y,-(position[2]+offset_z));
		target0.object3D.rotation.y = degToRad(20);

	}
	else if (angle === 1){
		position = getTargetPosition(v_o, gamma, 1) //Obtener posicion random para el target
		target0.object3D.position.set(position[0],position[1]+offset_y,-(position[2]+offset_z));
		target0.object3D.rotation.y = degToRad(-20);
	}
	else {
		position = getTargetPosition(v_o, gamma, 0) //Obtener posicion random para el target
		target0.object3D.position.set(0,position[1]+offset_y,-(position[2]+offset_z));
		target0.object3D.rotation.y = degToRad(0);
	}
}


/* generateAnswers*/
/* Genera las respuestas al inicio de la experiencia, que el estudiante
	tiene que responder para poder completar la experiencia
	- formato respuesta: [velocidad, angulo_vert, angulo_hor]*/
function generateAnswers(){
	for(i=0; i<cant_respuestas; i++){
		var aux = {};
		aux.vel = velocidades[getRandNumber(velocidades.length)];
		aux.vertangl = angulos[getRandNumber(angulos.length)];
		aux.horangl = angulos_h[getRandNumber(angulos_h.length)];
		respuestas.push(aux);
	}
}

/* nextTarget */
/* Saca de la pila de targets a ser apuntados el próximo target */
function nextTarget(){
	if(respuestas.length >= 1){
		let t = respuestas.pop();
		targetPos(t.horangl, t.vel, t.vertangl);
	}
	else {
		target0.setAttribute("visible",false);
		indicadorcoordenadas.setAttribute('value','Experiencia Finalizada!');
	}
	return true;
}

/* getRandNumber*/
/* Devuelve un numero random, de 0 a limit */
function getRandNumber(limit){
	return Math.floor(Math.random()*limit);
}

/* Obtener velocidad de la Bala, en el lanzamiento */
function getVelocity(v_o, theta, angulo) {
	theta = degToRad(theta)
	v_x = 0
	v_z = v_o * Math.cos(theta)
	if (angulo === +1){
		v_x = v_z * Math.cos(70)
		v_z = v_z * Math.sin(70)
	}
	else if (angulo === -1){
		v_x = -v_z * Math.cos(70)
		v_z = v_z * Math.sin(70)
	}
	v_y = v_o * Math.sin(theta)
	return [v_x, v_y, v_z]
}

/* Obtener posición próxima de un Target */
/*
Obtiene posicion random de un target
input:
v_o: Veloicdad inicial correcta
theta: Angulo correcto de respuesta
grad: Grado Horizontal
*/
function getTargetPosition(v_o, theta, grad) {
	theta = degToRad(theta)
	v_y = v_o * Math.sin(theta);
	v_x = v_o * Math.cos(theta);
	time_max = (2 * v_y)/gravity;
	interval = (time_max - 0.3 )/ 7;
	//Se añade un tiempo pequeño, para que target no aparesca en el mismo lugar
	//que el cañon
	rand = Math.floor(Math.random()*8)
	time = (rand*interval)+0.3;
	p_y = (v_y * time) - 0.5*gravity*Math.pow(time, 2);
	p_x = 0;
	p_z = v_x * time;

	if (grad === -1){
		p_x = (-p_z * Math.cos(70));
		p_z = (p_z * Math.sin(70));
	}
	else if (grad === 1){
		p_x = (p_z * Math.cos(70));
		p_z = (p_z * Math.sin(70));
	}
	yTarget=Math.floor((p_y+1)*100)/100;
	xTarget=Math.floor(Math.sqrt(p_x*p_x + p_z*p_z)*100)/100;

	indicadorcoordenadas.setAttribute('value','( '+xTarget+'[m] , '+yTarget+'[m] )');


	return [p_x, p_y+1, p_z];
}

/* Cambiar Grados por Radianes. Requerida por THREE.JS */
function degToRad(deg){
	return deg * Math.PI / 180;
}

grad20 = degToRad(20);
function changeCanonPosition(angle) {
	hints.change_position();
	if (angle === -1){
		cannonL1.object3D.rotation.y = grad20;
		cannonL2.object3D.rotation.y = grad20;
		cannonL3.object3D.rotation.y = grad20;
		cannon_angle = -1;
	}
	else if (angle === 1){
		cannonL1.object3D.rotation.y = -grad20;
		cannonL2.object3D.rotation.y = -grad20;
		cannonL3.object3D.rotation.y = -grad20;
		cannon_angle = 1;
	}
	else{
		cannonL1.object3D.rotation.y = 0;
		cannonL2.object3D.rotation.y = 0;
		cannonL3.object3D.rotation.y = 0;
		cannon_angle = 0;
	}
}
