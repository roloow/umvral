pay={student_id:301,experience_id:2,slug:"inicio",value:!0};var webpage="http://192.168.0.24:8000/api/metric/post/";function send2api(e){var t=new FormData;t.append("json",JSON.stringify(e)),fetch("http://192.168.0.24:8000/api/metric/post/",{method:"POST",body:t}).then(function(e){return e.json()}).then(function(e){console.log("metric sent")})}var distanciaTarget,velocidades=[18],angulos=[30,45,60],angulos_h=[-1,0,1],respuestas=[],cant_respuestas=8,v_o=18,cannon_angle=0,gamma=30,yTarget=0,xTarget=0,gravity=9.8,launching_ball=!1,video=document.querySelector("#tutorial"),playTV=document.querySelector("#playTV"),indicadorcoordenadas=document.querySelector("#indicadorcoordenadas"),alfa1=document.querySelector("#alfa1"),alfa2=document.querySelector("#alfa2"),alfa3=document.querySelector("#alfa3"),textoPizarraEnBlanco=document.querySelector("#textoPizarraEnBlanco"),textoPizarra30grados=document.querySelector("#textoPizarra30grados"),textoPizarra45grados=document.querySelector("#textoPizarra45grados"),textoPizarra60grados=document.querySelector("#textoPizarra60grados"),offset_z=4,offset_y=0,target0=document.querySelector("#target0"),orange=document.querySelector("#orange"),shoot=document.querySelector(".cannon"),cannonL1=document.querySelector("#cannonL1"),cannonL2=document.querySelector("#cannonL2"),cannonL3=document.querySelector("#cannonL3"),cannon1=document.querySelector("#cannon1"),cannon2=document.querySelector("#cannon2"),cannon3=document.querySelector("#cannon3"),cannons=document.querySelector("#cannons"),start=document.querySelector("#start"),angle_1=document.querySelector("#v1"),angle0=document.querySelector("#v2"),angle1=document.querySelector("#v3");class Hint{constructor(){this.btn_tooltips=document.querySelector("#btn_tooltips"),this.hint_rectangle=document.querySelector("#hint_rectangle"),this.dom=document.querySelector("#hints"),this.active=!1,this.step=0,this.pos_count=3,this.angle_count=3,this.changeHintText("Hola, bienvenido a la experiencia N°2 de umVRal. Para comenzar, aprieta el botón 'empezar'.")}reset(){this.step=1,this.active=!1,this.change_temp=0,this.pos_count=3,this.angle_count=3}changeHintText(e){this.dom.setAttribute("text",{value:e})}change_funct(){let e=this;e.change_temp<2&&e.active?e.change_temp++:(e.changeHintText("Bien!. Continua experimentando en la experiencia, y aprende con nostoros! LH.",e.dom),e.fade_out())}start(){let e=this;1===e.step&&e.pos_count>0&&(e.changeHintText("La experiencia comienza!. Prueba cambiando la posición del cañon "+e.pos_count+" veces en el panel a tu derecha."),e.step=2)}toStep3(){let e=this;2===e.step&&(e.changeHintText("Prueba ahora cambiando el angulo del cañon "+e.angle_count+" veces"),e.step=3)}change_position(){let e=this;2===e.step&&(e.pos_count--,e.changeHintText("La experiencia comienza!. Prueba cambiando la posición del cañon "+e.pos_count+" veces en el panel a tu derecha."),e.pos_count<=0&&e.toStep3())}change_angle(){let e=this;3===e.step&&e.angle_count>0&&(e.angle_count--,e.changeHintText("Prueba ahora cambiando el angulo del cañon "+e.angle_count+" veces"),e.angle_count<=0&&e.toStep4())}toStep4(){let e=this;3===e.step&&(e.changeHintText("Bien!. Ahora llego la hora de lanzar proyectil. Ajusta coordenadas de cañon, y miralo para lanzar proyectil. Apunta a un Blanco."),e.step=4)}launch(){let e=this;4===e.step&&(e.changeHintText("Bien!. Ahora llego la hora de lanzar proyectil. Ajusta coordenadas de cañon, y miralo para lanzar proyectil. Apunta a un Blanco."),e.step++)}target(){let e=this;4!==e.step&&5!==e.step||(e.changeHintText("Ya tienes tu primer acierto!. Ahora, impacta unos 2 blancos más para poder completar la experiencia"),e.step++,setTimeout(function(){e.hint_rectangle.setAttribute("animation","property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0"),e.dom.setAttribute("animation","property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0"),setTimeout(function(){e.hint_rectangle.setAttribute("visible",!1),e.dom.setAttribute("visible",!1)},1e3)},4e3))}fade_out(){let e=this;this.active=!1,setTimeout(function(){e.hint_rectangle.setAttribute("animation","property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0"),e.dom.setAttribute("animation","property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0"),setTimeout(function(){e.hint_rectangle.setAttribute("visible","false"),e.dom.setAttribute("visible","false")},1e3)},1e3)}fade_in(){let e=this;e.active=!0,e.dom.setAttribute("visible",!0),setTimeout(function(){e.hint_rectangle.setAttribute("animation","property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.7"),e.dom.setAttribute("animation","property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.8")},500)}}hints=new Hint;var comenzo=!1;generateAnswers(),nextTarget(),hints.btn_tooltips.addEventListener("click",function(){hints.fade_in(),1===hints.step&&hints.start(),pay={student_id:301,experience_id:2,slug:"tutorial",value:!0},send2api(pay)}),start.addEventListener("click",function(){hints.step=1,hints.start(),nextTarget(),comenzo=!0,target0.setAttribute("visible","true"),start.setAttribute("visible","false"),indicadorcoordenadas.setAttribute("visible","true")}),cannon1.addEventListener("click",function(){orange.setAttribute("material","color: orange; shader: flat"),cannonL1.setAttribute("visible","true"),cannonL2.setAttribute("visible","false"),cannonL3.setAttribute("visible","false")}),cannon2.addEventListener("click",function(){orange.setAttribute("material","color: black; shader: flat"),cannonL1.setAttribute("visible","false"),cannonL2.setAttribute("visible","true"),cannonL3.setAttribute("visible","false")}),cannon3.addEventListener("click",function(){orange.setAttribute("material","color: blue; shader: flat"),cannonL1.setAttribute("visible","false"),cannonL2.setAttribute("visible","false"),cannonL3.setAttribute("visible","true")}),alfa1.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","false"),textoPizarra60grados.setAttribute("visible","false"),textoPizarra30grados.setAttribute("visible","true"),gamma=30,cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")}),alfa2.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","true"),textoPizarra60grados.setAttribute("visible","false"),textoPizarra30grados.setAttribute("visible","false"),gamma=45,cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")}),alfa3.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","false"),textoPizarra60grados.setAttribute("visible","true"),textoPizarra30grados.setAttribute("visible","false"),gamma=60,cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")});var alfa1panel=document.querySelector("#h1"),alfa2panel=document.querySelector("#h2"),alfa3panel=document.querySelector("#h3");function myHandler(e){playTV.setAttribute("visible","true")}function targetPos(e,t,a){-1===e?(position=getTargetPosition(t,a,-1),target0.object3D.position.set(position[0],position[1]+offset_y,-(position[2]+offset_z)),target0.object3D.rotation.y=degToRad(20)):1===e?(position=getTargetPosition(t,a,1),target0.object3D.position.set(position[0],position[1]+offset_y,-(position[2]+offset_z)),target0.object3D.rotation.y=degToRad(-20)):(position=getTargetPosition(t,a,0),target0.object3D.position.set(0,position[1]+offset_y,-(position[2]+offset_z)),target0.object3D.rotation.y=degToRad(0))}function generateAnswers(){for(i=0;i<cant_respuestas;i++){var e={};e.vel=velocidades[getRandNumber(velocidades.length)],e.vertangl=angulos[getRandNumber(angulos.length)],e.horangl=angulos_h[getRandNumber(angulos_h.length)],respuestas.push(e)}}function nextTarget(){if(respuestas.length>=1){let e=respuestas.pop();targetPos(e.horangl,e.vel,e.vertangl)}else target0.setAttribute("visible",!1),indicadorcoordenadas.setAttribute("value","Experiencia Finalizada!");return!0}function getRandNumber(e){return Math.floor(Math.random()*e)}function getVelocity(e,t,a){return t=degToRad(t),v_x=0,v_z=e*Math.cos(t),1===a?(v_x=v_z*Math.cos(70),v_z*=Math.sin(70)):-1===a&&(v_x=-v_z*Math.cos(70),v_z*=Math.sin(70)),v_y=e*Math.sin(t),[v_x,v_y,v_z]}function getTargetPosition(e,t,a){return t=degToRad(t),v_y=e*Math.sin(t),v_x=e*Math.cos(t),time_max=2*v_y/gravity,interval=(time_max-.3)/7,rand=Math.floor(8*Math.random()),time=rand*interval+.3,p_y=v_y*time-.5*gravity*Math.pow(time,2),p_x=0,p_z=v_x*time,-1===a?(p_x=-p_z*Math.cos(70),p_z*=Math.sin(70)):1===a&&(p_x=p_z*Math.cos(70),p_z*=Math.sin(70)),yTarget=Math.floor(100*(p_y+1))/100,xTarget=Math.floor(100*Math.sqrt(p_x*p_x+p_z*p_z))/100,indicadorcoordenadas.setAttribute("value","( "+xTarget+"[m] , "+yTarget+"[m] )"),[p_x,p_y+1,p_z]}function degToRad(e){return e*Math.PI/180}function changeCanonPosition(e){hints.change_position(),-1===e?(cannonL1.object3D.rotation.y=grad20,cannonL2.object3D.rotation.y=grad20,cannonL3.object3D.rotation.y=grad20,cannon_angle=-1):1===e?(cannonL1.object3D.rotation.y=-grad20,cannonL2.object3D.rotation.y=-grad20,cannonL3.object3D.rotation.y=-grad20,cannon_angle=1):(cannonL1.object3D.rotation.y=0,cannonL2.object3D.rotation.y=0,cannonL3.object3D.rotation.y=0,cannon_angle=0)}alfa1panel.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","false"),textoPizarra60grados.setAttribute("visible","false"),textoPizarra30grados.setAttribute("visible","true"),gamma=30,hints.change_angle(),cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")}),alfa2panel.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","true"),textoPizarra60grados.setAttribute("visible","false"),textoPizarra30grados.setAttribute("visible","false"),gamma=45,hints.change_angle(),cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")}),alfa3panel.addEventListener("click",function(){textoPizarraEnBlanco.setAttribute("visible","false"),textoPizarra45grados.setAttribute("visible","false"),textoPizarra60grados.setAttribute("visible","true"),textoPizarra30grados.setAttribute("visible","false"),gamma=60,hints.change_angle(),cannonL1.object3D.rotation.x=degToRad(90+gamma),cannonL2.object3D.rotation.x=degToRad(90+gamma),cannonL3.object3D.rotation.x=degToRad(90+gamma),comenzo&&document.querySelector("#coordenadastarget").setAttribute("value","coordenadas ( x="+xTarget+"[m] ,y="+yTarget+"[m] ) \n Velocidad disparo= 18[m/s]")}),playTV.addEventListener("click",function(){video.play(),playTV.setAttribute("visible","false")}),video.addEventListener("ended",myHandler,!1),cannons.addEventListener("click",function(){(!1===launching_ball||orange.body.position<-1||orange.body.position.y<.8)&&(launching_ball=!0,hints.launch(),pay={student_id:301,experience_id:2,slug:"disparo",value:!0},send2api(pay),orange.body.angularVelocity.set(0,0,0),orange.body.quaternion.set(0,0,0,1),orange.body.position.set(0,1.5,-4.5),velocity=getVelocity(v_o,gamma,cannon_angle),orange.body.velocity.set(velocity[0],velocity[1],-velocity[2]))}),shoot.addEventListener("click",function(){(!1===launching_ball||orange.body.position<-1||orange.body.position.y<.8)&&(launching_ball=!0,hints.launch(),pay={student_id:301,experience_id:2,slug:"disparo",value:!0},send2api(pay),orange.body.angularVelocity.set(0,0,0),orange.body.quaternion.set(0,0,0,1),orange.body.position.set(0,1.5,-4.5),velocity=getVelocity(v_o,gamma,cannon_angle),orange.body.velocity.set(velocity[0],velocity[1],-velocity[2]))}),orange.addEventListener("raycaster-intersection",function(e){launching_ball=!1,"plano"===e.detail.els[0].getAttribute("id")?(orange.body.velocity.set(0,0,0),orange.body.position.set(0,-4,-4.5)):"target0"===e.detail.els[0].getAttribute("id")&&(hints.target(),pay={student_id:301,experience_id:2,slug:"acierto",value:!0},send2api(pay),orange.body.velocity.set(0,0,0),orange.body.position.set(0,-4,-4.5),nextTarget())}),angle_1.addEventListener("click",function(){changeCanonPosition(-1)}),angle0.addEventListener("click",function(){changeCanonPosition(0)}),angle1.addEventListener("click",function(){changeCanonPosition(1)}),grad20=degToRad(20);