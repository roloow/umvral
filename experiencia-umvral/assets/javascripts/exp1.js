// VARIABLES
let p1 = $('#p1');
let p2 = $('#p2');
let p3 = $('#p3');
let p1_w = $('#p1_w');
let p2_w = $('#p2_w');
let p3_w = $('#p3_w');
let	reset5 	= $('#m5');
let	reset15 =$('#m15');
let	reset35 = $('#m35');
let	reset100 = $('#m100');
let	objeto	 = $('#ball');
let cronometro = $('#chron');
let scene2 = $('#world1');
let scene1 = $('#scene1');
let portal1 = $('#portal1');
let portal2 = $('#portal2');
let portal3 = $('#portal3');
let portal4 = $('#portal4');
let env = $('#env')
//DEFAULT
let place = 'space';
let radius = 0.25
var currentTimestamp = moment();
var clockrun = false
var ultimoTiempo = 0;
var tiemposHistoricos = [];
var tiempo;
// let weight = 0.5; No usado por el momento
class Hint {
	constructor() {
		this.btn_tooltips1 = document.querySelector('#btn_tooltips1');
		this.btn_tooltips2 = document.querySelector('#btn_tooltips2');
		this.hint_rectangle = document.querySelector("#hint_rectangle");
		this.dom = document.querySelector("#hints");
		this.active = false;
		this.step = 0;
		// Cambios necesarios tutorial
		this.planet = 'Tierra'
		this.drop = 2
		this.changeHintText("Hola!, bienvenido a umVRal experiencia 1: Caida libre. Para comenzar, selecciona hacia la derecha una esfera mirando a su peso (etiqueta).");
	}
	reset() {
		this.step = 1;
		this.active = false;
		this.change_temp = 0;
		//tengo q cambiar angulo horizontal 2 veces
		this.pos_count = 3;
		this.angle_count = 3;
	}
	fade_in() {
		let that = this;
		that.active = true;
		that.dom.setAttribute('visible', true);
		console.log("in fade in")
		setTimeout(function(){ 
			that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.7");
			that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.8");
		}, 500);
	}
	fade_out() {
		let that = this;
		this.active = false;
		setTimeout(function(){
			that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
			that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0");
			setTimeout(function(){
				that.active = false;
				that.hint_rectangle.setAttribute('visible', 'false');
				that.dom.setAttribute('visible', 'false');
			}, 1000);
		}, 4000);
	};
	changeHintText(text) {
		this.dom.setAttribute('text', {'value': text});
	}

	/* Funciones de Pasos*/
	toStep1(){
		let that = this;
		if (that.step === 0 && that.active){
			that.changeHintText('Bien!. Ahora, selecciona el planeta en el cual quieres experimentar la caida libre, en el panel de la izquierda.');
			that.step = 1;
		}
	}
	toStep2(){
		let that = this;
		if (that.step === 1 && that.active){
			that.changeHintText('¡Bienvenido '+that.planet+'!. Ahora, centra la mira en las etiquetas destacadas de la regla Vertical, para lanzar pelota unas '+that.drop+' veces.');
			that.step = 2;
		}
	}
	toStep3(){
		let that = this;
		if (that.step === 2 && that.active){
			that.changeHintText('Ahora, cambia la masa del objeto soltado en el panel de la izquierda. Selecciona un peso diferente a 0.5 kg.');
			that.step = 3;
		}
	}
	toStep4(){
		let that = this;
		if (that.step === 3 && that.active){
			that.changeHintText('Bien!. Ahora lanza de nuevo la pelota una vez.');
			that.step = 4;
		}
	}
	toStep5(){
		let that = this;
		if (that.step === 4){
			that.changeHintText('¡Muy bien!. Ya tienes los conocimientos para poder continuar con la experiencia.');
			that.step = 5;
			setTimeout(function(){ that.toStep6() }, 3000);
		}
	}
	toStep6(){
		let that = this;
		if (that.step === 5){
			that.changeHintText('Si miras hacia la derecha, puedes ver un portal. En el, puedes cambiar el planeta de la experiencia, para cambiar la gravedad. ¡Que rinda el estudio!.');
			that.step = 6;
			that.fade_out();
		}
	}
	/* funciones conteo y auxiliares */
	change_drop(){
		let that = this;
		console.log("in change drop");
		if (that.step === 2){
			console.log("si, entre al if del step = 2")
			that.drop--;
			if (that.drop === 1) {that.changeHintText('Lanza la pelota una vez más.');}
			else {that.changeHintText('Lanza la pelota unas '+that.drop+' veces más.');}
			if (that.drop <= 0){
				that.toStep3();
			}
		}
	}
}
hints = new Hint();

hints.btn_tooltips1.addEventListener('click', function(){
	hints.active = true;
	hints.fade_in();
	hints.btn_tooltips2.setAttribute('visible', 'false')
	pay = {
		student_id: 301,
		experience_id: 3,
		slug: 'tutorial',
		value: true,
		//value_num: algun numero
	}
	this.setAttribute('visible', 'false');
	//send2api(pay);
})

hints.btn_tooltips2.addEventListener('click', function(){
	hints.active = true;
	hints.step = 2;
	hints.fade_in();
	hints.btn_tooltips1.setAttribute('visible', 'false')
	pay = {
		student_id: 301,
		experience_id: 3,
		slug: 'tutorial',
		value: true,
		//value_num: algun numero
	}
	this.setAttribute('visible', 'false');
	//send2api(pay);
})



// FUNCIONES
function setScene(world) {
	if (world == 'luna') {
		env.querySelectorAll("a-entity").forEach(e => e.parentNode.removeChild(e));
		env.querySelectorAll("a-sky").forEach(e => e.parentNode.removeChild(e));
		env.removeAttribute('environment');
		env.setAttribute('environment', {preset: 'starry', active: 'true', grid: false, playArea: 1.1, groundColor: '#858585', groundColor2: '#898585', dressing: 'stones', dressingColor: '#6f6c6c', ground: 'canyon'});
		colorRegla('cyan');
		$('#selector').setAttribute('material','color: yellow; shader: flat');
		$('a-scene').systems.physics.driver.world.gravity.y = -1.62;
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');

	}
	if (world == 'tierra') {
		env.querySelectorAll("a-entity").forEach(e => e.parentNode.removeChild(e));
		env.querySelectorAll("a-sky").forEach(e => e.parentNode.removeChild(e));
		env.removeAttribute('environment');
		env.setAttribute('environment', {active: true, seed: 8, skyType: 'atmosphere', skyColor: '#2642b3', horizonColor: '#eff9b7', fog: 0.8, playArea: 1.2, ground: 'noise', groundYScale: 4.18, groundTexture: 'walkernoise', groundColor: '#17351c', groundColor2: '#2d2e1f', dressing: 'trees', dressingAmount: 80, dressingColor: '#003c00', dressingScale: 1, gridColor: '#c5a543', preset: 'forest'});
		env.setAttribute('environment', {shadow: true})
		colorRegla('black');
		$('#regla100').setAttribute('visibility','');
		$('a-scene').systems.physics.driver.world.gravity.y = -9.8;
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');
	}
	if (world == 'marte') {
		env.querySelectorAll("a-entity").forEach(e => e.parentNode.removeChild(e));
		env.querySelectorAll("a-sky").forEach(e => e.parentNode.removeChild(e));
		env.removeAttribute('environment');
		env.setAttribute('environment', {active: true, preset: 'yavapai', skyType: 'atmosphere',skyColor: '#3c0404', horizonColor: '#ffaaaa', fog: 0.8, playArea: 1.1, dressingAmount: 165});
		env.setAttribute('environment', {shadow: true});
		$('#lights').setAttribute('visible', false);
		colorRegla('black');
		$('a-scene').systems.physics.driver.world.gravity.y = -3.7;
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');
	}
	if (world == 'space') {
		env.removeAttribute('environment');
		$('#selector').setAttribute('material','color: black; shader: flat');
		env.setAttribute('environment', {active: 'false'});
		$('#lights').setAttribute('visible', true);
		stopChron();
		cleanButton(p1);
		cleanButton(p2);
		cleanButton(p3);
	}
}

function colorRegla(color){
	$('#regla').setAttribute('color', color);
	$('#regla10').setAttribute('color', color);
	$('#regla20').setAttribute('color', color);
	$('#regla30').setAttribute('color', color);
	$('#regla40').setAttribute('color', color);
	$('#regla50').setAttribute('color', color);
	$('#regla60').setAttribute('color', color);
	$('#regla70').setAttribute('color', color);
	$('#regla80').setAttribute('color', color);
	$('#regla90').setAttribute('color', color);
}

function changeScene(sn1, sn2) {
	var father = sn1.parentNode;
	removeScene(father,sn1);
	createScene(father,sn2);
	setScene(place);
}

function registrarCaida(){

}

function removeScene(father, child) {
	father.removeChild(child);
}

function createScene(father, child) {
	father.appendChild(child);
}

function initChron() {
	cronometro.setAttribute("value","00:00:00");
}

function resetChron(){
	currentTimestamp = moment();
	var nuevaMedicion = 0;
	console.log($('#chron'));
	console.log($('clock-text'));
	console.log (ultimoTiempo);

	var nuevoRegistro = ["luna",1.4,5,15,ultimoTiempo];

	tiemposHistoricos.push(nuevoRegistro);
	console.log(tiemposHistoricos);

}

function stopChron () {
	clockrun = false;

}

function startChron() {
	clockrun = true;
}


function setHeight(height) {
	hints.change_drop();
	objeto.body.position.set(0, height, -15);
	objeto.body.velocity.set(0, 0, 0);
}

function cleanButton (btn) {
	var temp = btn.querySelectorAll("a-entity");
	if (temp.length != 1){
		temp[0].parentNode.removeChild(temp[0]);
		temp[1].parentNode.removeChild(temp[1]);
	}
	btn.querySelectorAll("a-sound").forEach(e => e.parentNode.removeChild(e));
}

function changeColor(value) {
	if (value == 'p1') {
		$('#obj1').setAttribute('color', 'red')
		$('#obj2').setAttribute('color', 'blue')
		$('#obj3').setAttribute('color', 'blue')
		weight = "0.5";
		radius = "0.25";
	}
	else if (value == 'p2') {
		$('#obj1').setAttribute('color', 'blue')
		$('#obj2').setAttribute('color', 'red')
		$('#obj3').setAttribute('color', 'blue')
		weight = "10";
		radius = "0.6";
	}
	else if (value == 'p3') {
		$('#obj1').setAttribute('color', 'blue')
		$('#obj2').setAttribute('color', 'blue')
		$('#obj3').setAttribute('color', 'red')
		weight = "100";
		radius = "1";
	}
	else if (value == 'p1_w') {
		$('#p1_w').setAttribute('button-color', 'red');
		$('#p2_w').setAttribute('button-color', 'blue');
		$('#p3_w').setAttribute('button-color', 'blue');
		weight = "0.5";
		radius = "0.25";
		$('#ball').removeAttribute('dynamic-body');
		$('#ball').object3D.position.set(0,3,-15);
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');
		$('#ball').setAttribute('dynamic-body','mass:'+weight+';');
	}
	else if (value == 'p2_w') {
		$('#p1_w').setAttribute('button-color', 'blue');
		$('#p2_w').setAttribute('button-color', 'red');
		$('#p3_w').setAttribute('button-color', 'blue');
		weight = "10";
		radius = "0.6";
		$('#ball').removeAttribute('dynamic-body');
		$('#ball').object3D.position.set(0,3,-15);
		$('#ball').removeAttribute('geometry');
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');
		$('#ball').setAttribute('dynamic-body','mass:'+weight+';');
	}
	else if (value == 'p3_w') {
		$('#p1_w').setAttribute('button-color', 'blue');
		$('#p2_w').setAttribute('button-color', 'blue');
		$('#p3_w').setAttribute('button-color', 'red');
		weight = "100";
		radius = "1";
		$('#ball').removeAttribute('dynamic-body');
		$('#ball').object3D.position.set(0,3,-15);
		$('#ball').setAttribute('geometry', 'primitive:sphere; radius: '+ radius +';');
		$('#ball').setAttribute('dynamic-body','mass:'+weight+';');
	}
}

p1_w.addEventListener('click', function () {
	changeColor('p1_w');
});
p2_w.addEventListener('click', function () {
	changeColor('p2_w');
	hints.toStep4();
});
p3_w.addEventListener('click', function () {
	changeColor('p3_w');
	hints.toStep4();
});
p1.addEventListener('click', function () {
	changeColor('p1');
	hints.toStep1();
});
p2.addEventListener('click', function () {
	changeColor('p2');
	hints.toStep1();
});
p3.addEventListener('click', function () {
	changeColor('p3');
	hints.toStep1();
});
$('#obj1').addEventListener('click', function () {
	hints.toStep1();
	changeColor('p1');
});
$('#obj2').addEventListener('click', function () {
	hints.toStep1();
	changeColor('p2');
});
$('#obj3').addEventListener('click', function () {
	hints.toStep1();
	changeColor('p3');
});
$('#box1').addEventListener('click', function () {
	changeColor('p1');
});
$('#box2').addEventListener('click', function () {
	changeColor('p2');
});
$('#box3').addEventListener('click', function () {
	changeColor('p3');
});
reset5.addEventListener("click", function(){
	setHeight(5);
	resetChron();
	startChron();
});

$('#regla5').addEventListener("click", function(){
	setHeight(5);
	hints.toStep5();
	resetChron();
	startChron();
});


reset15.addEventListener("click", function(){
	setHeight(15);
	hints.toStep5();
	resetChron();
	startChron();
});

$('#regla15').addEventListener("click", function(){
	setHeight(15);
	hints.toStep5();
	resetChron();
	startChron();
});

reset35.addEventListener("click", function(){
	setHeight(35);
	hints.toStep5();
	resetChron();
	startChron();
});

$('#regla35').addEventListener("click", function(){
	setHeight(35);
	hints.toStep5();
	resetChron();
	startChron();
});

reset100.addEventListener("click", function(){
	setHeight(100);
	hints.toStep5();
	resetChron();
	startChron();
});

$('#regla100').addEventListener("click", function(){
	setHeight(100);
	hints.toStep5();
	resetChron();
	startChron();
});

portal1.addEventListener("click", function () {
	place = 'tierra';
	hints.step = 1;
	hints.planet = "al planeta Tierra"
	hints.toStep2();
	//correccion de angulo de observador
	var x = $('#cam').getAttribute('rotation').x;
	var y = ($('#cam').getAttribute('rotation').y)*(-1);
	var z = $('#cam').getAttribute('rotation').z;
	$('#camWrapper').setAttribute('rotation','0 '+y+' 0');

	changeScene(scene1, scene2);
	initChron();
});
portal2.addEventListener("click", function () {
	place = 'luna';
	hints.planet = "a la Luna"
	hints.step = 1;
	hints.toStep2();
	var x = $('#cam').getAttribute('rotation').x;
	var y = ($('#cam').getAttribute('rotation').y)*(-1);
	var z = $('#cam').getAttribute('rotation').z;
	$('#camWrapper').setAttribute('rotation','0 '+y+' 0');

	changeScene(scene1, scene2);
	initChron();
});
portal3.addEventListener("click", function () {
	place = 'marte';
	hints.planet = "al planeta Marte"
	hints.step = 1;
	hints.toStep2();
	var x = $('#cam').getAttribute('rotation').x;
	var y = ($('#cam').getAttribute('rotation').y)*(-1);
	var z = $('#cam').getAttribute('rotation').z;
	$('#camWrapper').setAttribute('rotation', '0 '+y+' 0');

	changeScene(scene1, scene2);
	initChron();
});
portal4.addEventListener("click", function () {
	place = 'space'; //Default
	var x = $('#cam').getAttribute('rotation').x;
	var y = ($('#cam').getAttribute('rotation').y)*(-1);
	var z = $('#cam').getAttribute('rotation').z;
	$('#camWrapper').setAttribute('rotation', '0 '+y+' 0');

	changeScene(scene2, scene1);

})

on(objeto, 'collide', (e) => {
	stopChron();
	// En el eventual caso que siga cayendo la pelota, aqui colocar la posición especifica
});
