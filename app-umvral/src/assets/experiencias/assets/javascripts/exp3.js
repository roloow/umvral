class Hint {
	constructor() {
		this.btn_tooltips = document.querySelector('#btn_tooltips');
		this.hint_rectangle = document.querySelector("#hint_rectangle");
		this.dom = document.querySelector("#hints");
		this.active = false;
		this.step = 0;
		// Cambios necesarios tutorial
		this.frig_count = 2;
		this.horno_count = 2;
		this.vol_count = 2;
		this.frig_count_A = 2;
		this.horno_count_A = 2;
		this.changeHintText("Hola, bienvenido a la experiencia N°3 de umVRal: Dilatación Termica. Para comenzar, coloca la mira en la palabra Frigorifico.");
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
		setTimeout(function(){
			that.hint_rectangle.setAttribute('animation',"property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.7");
			that.dom.setAttribute('animation',"property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.8");
			//that.step = 1;
		}, 500);
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
		}, 4000);
	};
	changeHintText(text) {
		this.dom.setAttribute('text', {'value': text})
	}

	/* Funciones de Pasos*/
	toStep1(){
		let that = this;
		if (that.step === 0){
			that.changeHintText('Cambia la temperatura del Frigorico unas '+that.frig_count+' veces, colocando la mira en las temperaturas.');
			that.step = 1;
		}
	}
	toStep1A(){
		let that = this;
		if (that.step === 1){
			that.changeHintText('Selecciona elementos dentro del Frigorifico unas '+that.frig_count_A+' veces, para ver los elementos y su largo.');
			that.step = 11;
		}
	}
	toStep2(){
		let that = this;
		if (that.step === 11){
			that.changeHintText('Bien!. Cambia de vista hacia el horno, mirando a tu izquierda la palabra Horno.');
			that.step = 2;
		}
	}
	toStep3(){
		let that = this;
		if (that.step === 2){
			that.changeHintText('Cambia la temperatura del Horno unas '+that.horno_count+' veces, colocando la mira en las temperaturas.');
			that.step = 3;
		}
	}
	toStep3A(){
		let that = this;
		if (that.step === 3){
			that.changeHintText('Selecciona elementos dentro del Horno unas '+that.horno_count_A+' veces, para ver los elementos y su largo.');
			that.step = 33;
		}
	}
	toStep4(){
		let that = this;
		if (that.step === 33){
			that.changeHintText('Super!. Cambia de vista hacia el otro horno, mirando bien a tu derecha la palabra Horno.');
			that.step = 4;
		}
	}
	toStep5(){
		let that = this;
		if (that.step === 4){
			that.changeHintText('Cambia la temperatura del Horno unas '+that.horno_count+' veces, colocando la mira en las temperaturas.');
			that.step = 5;
		}
	}
	toStep6(){
		let that = this;
		if (that.step === 5){
			that.changeHintText('Excelente!. Prueba apretando el botón "cambio" para cambiar el objeto visible.');
			that.step = 6;
		}
	}
	toStep7(){
		let that = this;
		if (that.step === 6){
			that.changeHintText('Super!. Estas listo para poder disfrutar la experiencia. Para regresar al inicio, mira a la ampolleta triangular sobre el techo.');
			that.fade_out();
			that.step = 7;
		}
	}
	/* funciones conteo y auxiliares */
	change_frig(){
		let that = this;
		if (that.step === 1){
			that.frig_count--;
			if (that.frig_count === 1) {that.changeHintText('Cambia la temperatura del Frigorico '+that.frig_count+' vez, colocando la mira en las temperaturas.');}
			else {that.changeHintText('Cambia la temperatura del Frigorico unas '+that.frig_count+' veces, colocando la mira en las temperaturas.');}
			if (that.frig_count <= 0){
				that.toStep1A();
			}
		}
	}
	change_frig_A(){
		let that = this;
		if (that.step === 11){
			that.frig_count_A--;
			if (that.frig_count_A === 1) {that.changeHintText('Selecciona elementos dentro del Frigorifico '+that.frig_count_A+' vez, para ver los elementos y su largo.');}
			else {that.changeHintText('Selecciona elementos dentro del Frigorifico unas '+that.frig_count_A+' veces, para ver los elementos y su largo.');}
			if (that.frig_count_A	<= 0){
				that.toStep2();
			}
		}
	}
	change_horno(){
		let that = this;
		if (that.step === 3){
			that.horno_count--;
			if (that.horno_count === 1) {that.changeHintText('Cambia la temperatura del Frigorico '+that.horno_count+' vez, colocando la mira en las temperaturas.');}
			else {that.changeHintText('Cambia la temperatura del Frigorico unas '+that.horno_count+' veces, colocando la mira en las temperaturas.');}
			if (that.horno_count <= 0){
				that.toStep3A();
			}
		}
	}
	change_horno_A(){
		let that = this;
		if (that.step === 33){
			that.horno_count_A--;
			if (that.horno_count_A === 1) {that.changeHintText('Selecciona elementos dentro del Horno '+that.horno_count_A+' vez, para ver los elementos y su largo.');}
			else {that.changeHintText('Selecciona elementos dentro del Horno unas '+that.horno_count_A+' veces, para ver los elementos y su largo.');}
			if (that.horno_count_A <= 0){
				that.toStep4();
			}
		}
	}
	change_vol(){
		let that = this;
		if (that.step === 5){
			that.vol_count--;
			if (that.vol_count === 1) {that.changeHintText('Cambia la temperatura del Frigorico '+that.vol_count+' vez, colocando la mira en las temperaturas.');}
			else { that.changeHintText('Cambia la temperatura del Frigorico unas '+that.vol_count+' veces, colocando la mira en las temperaturas.');}
			if (that.vol_count <= 0){
				that.toStep6();
			}
		}
	}
}
hints = new Hint();

hints.btn_tooltips.addEventListener('click', function(){
	hints.fade_in();
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

var boolEsfera = 1;
var sphere = document.querySelector("#sphere");
var initHeight = 1.5;
//temperaturas
var temp = [200,5000,10000,20000,200,0,-1500,-2730];

var radioesfera = 1;
var altocubo = 2;
var anchocubo = 1;
var largocubo =1;

//btnes horno
var btn1 = document.querySelector('#boton20horno');
var btn2 = document.querySelector('#boton500horno');
var btn3 = document.querySelector('#boton1000horno');
var btn4 = document.querySelector('#boton2000horno');

var suelohorno = document.querySelector('#suelohorno');
var suelorefri = document.querySelector('#suelorefri');

//btnes Frigorifico
var btn5 = document.querySelector('#boton20frigorifico');
var btn6 = document.querySelector('#boton0');
var btn7 = document.querySelector('#boton150');
var btn8 = document.querySelector('#boton273');

var suelorefri = document.querySelector('#suelorefri');

//btnes Horno3D
var btn9 = document.querySelector('#boton-273horno3d');
var btn10 = document.querySelector('#boton20horno3d');
var btn11 = document.querySelector('#boton2000horno3d');
//cambio de figura
var btnCambio = document.querySelector('#cambioFigura');

class termicObject{
	constructor(element){
		this.alpha = element.alpha
		this.color = element.color
	}
	assignElement(element){
		this.alpha = element.alpha
		this.color = element.color
		return true
	}
}

// alpha esta en unidad 10^-6 C°^-1
var coef = {
	'oro' : {alpha: 14, color: '#D7C505'},
	'cobre' : {alpha: 17, color: '#D17813'},
	'plata' : {alpha: 19, color: '#9D9D9D'},
	'aluminio' : {alpha: 23, color: '#7E8CA9'},
	'hierro' : {alpha: 12, color: '#555D6E'},
}

var coef_vol = {
	'oro' : {alpha: 42, color: '#D7C505'},
	'cobre' : {alpha: 51, color: '#D17813'},
	'plata' : {alpha: 54, color: '#9D9D9D'},
	'aluminio' : {alpha: 69, color: '#7E8CA9'},
	'hierro' : {alpha: 33.3, color: '#555D6E'},
}

//oro congelador
cylinder1 = new termicObject(coef.oro)
cylinder1.dom = document.querySelector("#cylinder1");
//plata congelador
cylinder2 = new termicObject(coef.plata)
cylinder2.dom = document.querySelector("#cylinder2");
//cobre congelador
cylinder3 =new termicObject(coef.cobre)
cylinder3.dom = document.querySelector("#cylinder3");
//oro horno
cylinder4 = new termicObject(coef.oro)
cylinder4.dom = document.querySelector("#cylinder4");
//plata horno
cylinder5 = new termicObject(coef.plata)
cylinder5.dom = document.querySelector("#cylinder5");
//cobre horno
cylinder6 = new termicObject(coef.cobre)
cylinder6.dom = document.querySelector("#cylinder6");

volume1 = coef_vol.oro
volume1.dom = document.querySelector("#vol1");
volume1.position_org = volume1.dom.getAttribute('position')
volume1.original = volume1.dom.getAttribute('geometry')

volume2 = coef_vol.aluminio
volume2.dom = document.querySelector("#vol2");
volume2.position_org = volume2.dom.getAttribute('position')
volume2.original = volume2.dom.getAttribute('geometry')


var teleporthorno = document.querySelector('#botonhorno');
var teleportfrigorifico = document.querySelector('#botonfrigorifico');
var teleport3d = document.querySelector('#botonhorno3d');
var teleportinicio = document.querySelector('#panelquimico');

initDom()

teleporthorno.addEventListener('click',function(){
	$("#cameraWrapper").object3D.position.set(-6,0,0);
	hints.toStep3();
})

teleportfrigorifico.addEventListener('click',function(){
	hints.toStep1();
	$("#cameraWrapper").object3D.position.set(1,0,0);
})

teleport3d.addEventListener('click',function(){
	$("#cameraWrapper").object3D.position.set(5,0,1);
	hints.toStep5();
})

teleportinicio.addEventListener('click', function(){
	$("#cameraWrapper").object3D.position.set(0,0,3);
})

$('#volverInicio').addEventListener('click', function(){
	$("#cameraWrapper").object3D.position.set(0,0,3);
})

btnCambio.addEventListener('click',function(){
	hints.toStep7();
	if(boolEsfera){
		$('#vol1').setAttribute('visible','false');
		$('#vol2').setAttribute('visible','true');
		boolEsfera = 0;
	}else {
		$('#vol1').setAttribute('visible','true');
		$('#vol2').setAttribute('visible','false');
		boolEsfera = 1;
	}
})

cylinder1.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#AuFrigorifico').setAttribute('visible',true);
	hints.change_frig_A();
})

cylinder2.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#AgFrigorifico').setAttribute('visible',true);
	hints.change_frig_A();

})

cylinder3.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#CuFrigorifico').setAttribute('visible',true);
	hints.change_frig_A();

})



cylinder4.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#AuHorno').setAttribute('visible',true);
	hints.change_horno_A();

})

cylinder5.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#AgHorno').setAttribute('visible',true);
	hints.change_horno_A();

})

cylinder6.dom.addEventListener('click',function(){
	oculatarEtiquetas();
	document.querySelector('#CuHorno').setAttribute('visible',true);
	hints.change_horno_A();

})


//horno 20
btn1.addEventListener('click', function(){
	changeLength(temp[0],0);
	hints.change_horno();
})
//horno 500
btn2.addEventListener('click', function(){
	changeLength(temp[1],0);
	hints.change_horno();
})
//horno 1000
btn3.addEventListener('click', function(){
	changeLength(temp[2],0);
	hints.change_horno();
})
//horno 2000
btn4.addEventListener('click', function(){
	changeLength(temp[3],0);
	hints.change_horno();
})

//refri 20
btn5.addEventListener('click', function(){
	console.log("btn 5");
	hints.change_frig();
	changeLength(temp[4],1);

})


//refri 0
btn6.addEventListener('click', function(){
	console.log("btn 6");
	hints.change_frig();
	changeLength(temp[5],1);
})
//refri -150
btn7.addEventListener('click', function(){
	console.log("btn 7");
	hints.change_frig();
	changeLength(temp[6],1);

})
//refri -273
btn8.addEventListener('click', function(){
	console.log("btn 8");
	hints.change_frig();
	changeLength(temp[7],1);

})

//volume
btn9.addEventListener('click', function(){
	console.log("btn 8");
	hints.change_vol();
	changeVolume(temp[7]);

})
btn10.addEventListener('click', function(){
	console.log("btn 9");
	hints.change_vol();
	changeVolume(temp[5]);

})
btn11.addEventListener('click', function(){
	console.log("btn 10");
	hints.change_vol();
	changeVolume(temp[3]);

})



function initDom() {
	cylinder1.dom.setAttribute('color',cylinder4.color);
	cylinder2.dom.setAttribute('color',cylinder5.color);
	cylinder3.dom.setAttribute('color',cylinder6.color);
	cylinder4.dom.setAttribute('color',cylinder4.color);
	cylinder5.dom.setAttribute('color',cylinder5.color);
	cylinder6.dom.setAttribute('color',cylinder6.color);
	//btn1.setAttribute('value',temp[0]+'°');
	//btn2.setAttribute('value',temp[1]+'°');
	//btn3.setAttribute('value',temp[2]+'°');
	$('#CuHorno').setAttribute('value','Cu\n 1.5[m]');
	$('#AuHorno').setAttribute('value','Au\n 1.5[m]');
	$('#AgHorno').setAttribute('value','Ag\n 1.5[m]');
	volume1.dom.setAttribute('color',volume1.color);
	volume2.dom.setAttribute('color',volume2.color);
}


function oculatarEtiquetas(){
	var etiquetados = document.querySelectorAll('.etiquetas');
	console.log(etiquetados);
	for(item of etiquetados){
		item.setAttribute('visible','false');
	}
}
/*
 * tipo { 0 : horno , 1 : Frigorifico  }
 */
function changeLength(temp,tipo){
	if(tipo == 0){
		length4 = getLength(initHeight,cylinder4,temp);
		length5 = getLength(initHeight,cylinder5,temp);
		length6 = getLength(initHeight,cylinder6,temp);
		REALlength4 = getLengthReal(initHeight,cylinder4,temp);
		REALlength5 = getLengthReal(initHeight,cylinder5,temp);
		REALlength6 = getLengthReal(initHeight,cylinder6,temp);
		$('#CuHorno').setAttribute('value','Cu\n'+REALlength6+'[m]');
		$('#AuHorno').setAttribute('value','Au\n'+REALlength4+'[m]');
		$('#AgHorno').setAttribute('value','Ag\n'+REALlength5+'[m]');
		cylinder4.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length4);
		cylinder5.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length5);
		cylinder6.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length6);
		cylinder4.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length4/2);
		cylinder5.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length5/2);
		cylinder6.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length6/2);
		console.log(backgroundColor(temp,tipo));
		suelohorno.setAttribute('animation__color',"property: material.color; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+backgroundColor(temp,tipo));

	}
	if(tipo == 1){
		length1 = getLength(initHeight,cylinder1,temp);
		length2 = getLength(initHeight,cylinder2,temp);
		length3 = getLength(initHeight,cylinder3,temp);
		REALlength1 = getLengthReal(initHeight,cylinder1,temp);
		REALlength2 = getLengthReal(initHeight,cylinder2,temp);
		REALlength3 = getLengthReal(initHeight,cylinder3,temp);
		$('#CuFrigorifico').setAttribute('value','Cu\n'+REALlength3+'[m]');
		$('#AuFrigorifico').setAttribute('value','Au\n'+REALlength1+'[m]');
		$('#AgFrigorifico').setAttribute('value','Ag\n'+REALlength2+'[m]');
		cylinder1.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length1);
		cylinder2.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length2);
		cylinder3.dom.setAttribute('animation',"property: height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length3);
		cylinder1.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length1/2);
		cylinder2.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length2/2);
		cylinder3.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+length3/2);
		console.log(backgroundColor(temp,tipo));
		suelorefri.setAttribute('animation__color',"property: material.color; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+backgroundColor(temp,tipo));
	}

}


function getLengthReal(L_o, obj, temp){
	temp = temp/10;
	console.log(L_o + (obj.alpha*Math.pow(10,-6)*L_o*temp));
	console.log(obj.alpha);
	return L_o + (obj.alpha*Math.pow(10,-6)*L_o*temp)
}

function getLength(L_o, obj, temp){
	oculatarEtiquetas();
	console.log(L_o + (obj.alpha*Math.pow(10,-6)*L_o*temp));
	console.log(obj.alpha);

	return L_o + (obj.alpha*Math.pow(10,-6)*L_o*temp)
}



function changeVolume(temp){
	//vol1 : la esfera
	//vol2 : el cubo
	oculatarEtiquetas();
	sphere = volume1.original
	cube = volume2.original
	vol1_ = (4/3)*Math.PI*Math.pow(radioesfera, 3)
	vol2_ = altocubo*anchocubo*largocubo
	console.log("cambio volumen");
	newvol1 = getVolume(vol1_,volume1,temp)
	newvol2 = getVolume(vol2_,volume2,temp)
	changeVolumeCube(newvol2,volume2)
	changeVolumeSphere(newvol1,volume1)
}

function getVolume(V_o, obj, temp){
	return V_o + (obj.alpha*Math.pow(10,-6)*V_o*temp)
}

function changeVolumeCube(final_volume,obj){
	cube = obj.original
	x = anchocubo
	y = altocubo
	z = largocubo
	x_ = Math.pow(final_volume*((x*x)/(y*z)),1/3)
	y_ = x_ * (y/x)
	z_ = x_ * (z/x)
	new_y = y_/2
	obj.dom.setAttribute('animation__height',"property: geometry.height; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+y_);
	obj.dom.setAttribute('animation__width',"property: geometry.width; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+x_);
	obj.dom.setAttribute('animation__depth',"property: geometry.depth; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+z_);
	obj.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+new_y);
	return true
}


/*
 * tipo { 0 : horno , 1 : Frigorifico  }
 */
function backgroundColor(t_act,tipo) {
	t_max = temp[3];
	t_min = temp[7];
	if (tipo==0){
		red = Math.round((t_act * 255)/t_max);
		blue = 255 - red;
		result = 'rgb('+red+',0,0)'
	}
	else {
		if(t_act > 0){
			t_act=0;

		}
		white = Math.round((t_act * 255)/t_min);
		//white = 255 - white;
		result = 'rgb('+white+','+white+','+255+')'
	}
	return result;
}

function changeVolumeSphere(final_volume,obj){
	sphere = obj.original
	r = radioesfera
	r_ = Math.pow((final_volume*3)/(4*Math.PI),1/3)
	obj.dom.setAttribute('animation__sphere',"property: geometry.radius; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+r_);
	obj.dom.setAttribute('animation__pos',"property: object3D.position.y; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: "+r_);
	return true
}

/*AFRAME.anime({
			targets: '#sphere',
			color: ['rgb(255,0,0)', '#FFF'], // Animate the background color to #FFF (from 'rgb(0,0,0)' to 'rgb(255,255,255)')
			duration: 1500
		});*/
