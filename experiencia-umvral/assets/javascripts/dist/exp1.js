let p1=$("#p1"),p2=$("#p2"),p3=$("#p3"),p1_w=$("#p1_w"),p2_w=$("#p2_w"),p3_w=$("#p3_w"),reset5=$("#m5"),reset15=$("#m15"),reset35=$("#m35"),reset100=$("#m100"),objeto=$("#ball"),cronometro=$("#chron"),scene2=$("#world1"),scene1=$("#scene1"),portal1=$("#portal1"),portal2=$("#portal2"),portal3=$("#portal3"),portal4=$("#portal4"),env=$("#env"),place="space",radius=.25;var tiempo,currentTimestamp=moment(),clockrun=!1,ultimoTiempo=0,tiemposHistoricos=[];class Hint{constructor(){this.btn_tooltips1=document.querySelector("#btn_tooltips1"),this.btn_tooltips2=document.querySelector("#btn_tooltips2"),this.hint_rectangle=document.querySelector("#hint_rectangle"),this.dom=document.querySelector("#hints"),this.active=!1,this.step=0,this.planet="Tierra",this.drop=2,this.changeHintText("Hola!, bienvenido a umVRal experiencia 1: Caida libre. Para comenzar, selecciona hacia la derecha una esfera mirando a su peso (etiqueta).")}reset(){this.step=1,this.active=!1,this.change_temp=0,this.pos_count=3,this.angle_count=3}fade_in(){let e=this;e.active=!0,e.dom.setAttribute("visible",!0),console.log("in fade in"),setTimeout(function(){e.hint_rectangle.setAttribute("animation","property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.7"),e.dom.setAttribute("animation","property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0.8")},500)}fade_out(){let e=this;this.active=!1,setTimeout(function(){e.hint_rectangle.setAttribute("animation","property: slice9.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0"),e.dom.setAttribute("animation","property: text.opacity; dir: alternate; dur: 1000; easing: easeInSine; loop: false; to: 0")},4e3)}changeHintText(e){this.dom.setAttribute("text",{value:e})}toStep1(){let e=this;0===e.step&&(e.changeHintText("Bien!. Ahora, selecciona el planeta en el cual quieres experimentar la caida libre, en el panel de la izquierda."),e.step=1)}toStep2(){let e=this;1===e.step&&(e.changeHintText("¡Bienvenido "+e.planet+"!. Ahora, centra la mira en las etiquetas destacadas de la regla Vertical, para lanzar pelota unas "+e.drop+" veces."),e.step=2)}toStep3(){let e=this;2===e.step&&(e.changeHintText("Ahora, cambia la masa del objeto soltado en el panel de la izquierda. Selecciona un peso diferente a 0.5 kg."),e.step=3)}toStep4(){let e=this;3===e.step&&(e.changeHintText("Bien!. Ahora lanza de nuevo la pelota una vez."),e.step=4)}toStep5(){let e=this;4===e.step&&(e.changeHintText("¡Muy bien!. Ya tienes los conocimientos para poder continuar con la experiencia."),e.step=5,setTimeout(function(){e.toStep6()},3e3))}toStep6(){let e=this;5===e.step&&(e.changeHintText("Si miras hacia la derecha, puedes ver un portal. En el, puedes cambiar el planeta de la experiencia, para cambiar la gravedad. ¡Que rinda el estudio!."),e.step=6,e.fade_out())}change_drop(){let e=this;console.log("in change drop"),2===e.step&&(console.log("si, entre al if del step = 2"),e.drop--,1===e.drop?e.changeHintText("Lanza la pelota una vez más."):e.changeHintText("Lanza la pelota unas "+e.drop+" veces más."),e.drop<=0&&e.toStep3())}}function setScene(e){"luna"==e&&(env.querySelectorAll("a-entity").forEach(e=>e.parentNode.removeChild(e)),env.querySelectorAll("a-sky").forEach(e=>e.parentNode.removeChild(e)),env.removeAttribute("environment"),env.setAttribute("environment",{preset:"starry",active:"true",grid:!1,playArea:1.1,groundColor:"#858585",groundColor2:"#898585",dressing:"stones",dressingColor:"#6f6c6c",ground:"canyon"}),colorRegla("cyan"),$("#selector").setAttribute("material","color: yellow; shader: flat"),$("a-scene").systems.physics.driver.world.gravity.y=-1.62,$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";")),"tierra"==e&&(env.querySelectorAll("a-entity").forEach(e=>e.parentNode.removeChild(e)),env.querySelectorAll("a-sky").forEach(e=>e.parentNode.removeChild(e)),env.removeAttribute("environment"),env.setAttribute("environment",{active:!0,seed:8,skyType:"atmosphere",skyColor:"#2642b3",horizonColor:"#eff9b7",fog:.8,playArea:1.2,ground:"noise",groundYScale:4.18,groundTexture:"walkernoise",groundColor:"#17351c",groundColor2:"#2d2e1f",dressing:"trees",dressingAmount:80,dressingColor:"#003c00",dressingScale:1,gridColor:"#c5a543",preset:"forest"}),env.setAttribute("environment",{shadow:!0}),colorRegla("black"),$("#regla100").setAttribute("visibility",""),$("a-scene").systems.physics.driver.world.gravity.y=-9.8,$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";")),"marte"==e&&(env.querySelectorAll("a-entity").forEach(e=>e.parentNode.removeChild(e)),env.querySelectorAll("a-sky").forEach(e=>e.parentNode.removeChild(e)),env.removeAttribute("environment"),env.setAttribute("environment",{active:!0,preset:"yavapai",skyType:"atmosphere",skyColor:"#3c0404",horizonColor:"#ffaaaa",fog:.8,playArea:1.1,dressingAmount:165}),env.setAttribute("environment",{shadow:!0}),$("#lights").setAttribute("visible",!1),colorRegla("black"),$("a-scene").systems.physics.driver.world.gravity.y=-3.7,$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";")),"space"==e&&(env.removeAttribute("environment"),$("#selector").setAttribute("material","color: black; shader: flat"),env.setAttribute("environment",{active:"false"}),$("#lights").setAttribute("visible",!0),stopChron(),cleanButton(p1),cleanButton(p2),cleanButton(p3))}function colorRegla(e){$("#regla").setAttribute("color",e),$("#regla10").setAttribute("color",e),$("#regla20").setAttribute("color",e),$("#regla30").setAttribute("color",e),$("#regla40").setAttribute("color",e),$("#regla50").setAttribute("color",e),$("#regla60").setAttribute("color",e),$("#regla70").setAttribute("color",e),$("#regla80").setAttribute("color",e),$("#regla90").setAttribute("color",e)}function changeScene(e,t){var o=e.parentNode;removeScene(o,e),createScene(o,t),setScene(place)}function registrarCaida(){}function removeScene(e,t){e.removeChild(t)}function createScene(e,t){e.appendChild(t)}function initChron(){cronometro.setAttribute("value","00:00:00")}function resetChron(){currentTimestamp=moment();console.log($("#chron")),console.log($("clock-text")),console.log(ultimoTiempo);var e=["luna",1.4,5,15,ultimoTiempo];tiemposHistoricos.push(e),console.log(tiemposHistoricos)}function stopChron(){clockrun=!1}function startChron(){clockrun=!0}function setHeight(e){hints.change_drop(),objeto.body.position.set(0,e,-15),objeto.body.velocity.set(0,0,0)}function cleanButton(e){var t=e.querySelectorAll("a-entity");1!=t.length&&(t[0].parentNode.removeChild(t[0]),t[1].parentNode.removeChild(t[1])),e.querySelectorAll("a-sound").forEach(e=>e.parentNode.removeChild(e))}function changeColor(e){"p1"==e?($("#obj1").setAttribute("color","red"),$("#obj2").setAttribute("color","blue"),$("#obj3").setAttribute("color","blue"),weight="0.5",radius="0.25"):"p2"==e?($("#obj1").setAttribute("color","blue"),$("#obj2").setAttribute("color","red"),$("#obj3").setAttribute("color","blue"),weight="10",radius="0.6"):"p3"==e?($("#obj1").setAttribute("color","blue"),$("#obj2").setAttribute("color","blue"),$("#obj3").setAttribute("color","red"),weight="100",radius="1"):"p1_w"==e?($("#p1_w").setAttribute("button-color","red"),$("#p2_w").setAttribute("button-color","blue"),$("#p3_w").setAttribute("button-color","blue"),weight="0.5",radius="0.25",$("#ball").body.position.set(0,3,-15),$("#ball").removeAttribute("geometry"),$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";")):"p2_w"==e?($("#p1_w").setAttribute("button-color","blue"),$("#p2_w").setAttribute("button-color","red"),$("#p3_w").setAttribute("button-color","blue"),weight="10",radius="0.6",$("#ball").body.position.set(0,3,-15),$("#ball").removeAttribute("geometry"),$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";")):"p3_w"==e&&($("#p1_w").setAttribute("button-color","blue"),$("#p2_w").setAttribute("button-color","blue"),$("#p3_w").setAttribute("button-color","red"),weight="100",radius="1",$("#ball").body.position.set(0,3,-15),$("#ball").removeAttribute("geometry"),$("#ball").setAttribute("geometry","primitive:sphere; radius: "+radius+";"))}hints=new Hint,hints.btn_tooltips1.addEventListener("click",function(){hints.fade_in(),hints.btn_tooltips2.setAttribute("visible","false"),pay={student_id:301,experience_id:3,slug:"tutorial",value:!0},this.setAttribute("visible","false")}),hints.btn_tooltips2.addEventListener("click",function(){hints.step=2,hints.fade_in(),hints.btn_tooltips1.setAttribute("visible","false"),pay={student_id:301,experience_id:3,slug:"tutorial",value:!0},this.setAttribute("visible","false")}),p1_w.addEventListener("click",function(){changeColor("p1_w")}),p2_w.addEventListener("click",function(){changeColor("p2_w"),hints.toStep4()}),p3_w.addEventListener("click",function(){changeColor("p3_w"),hints.toStep4()}),p1.addEventListener("click",function(){changeColor("p1"),hints.toStep1()}),p2.addEventListener("click",function(){changeColor("p2"),hints.toStep1()}),p3.addEventListener("click",function(){changeColor("p3"),hints.toStep1()}),$("#obj1").addEventListener("click",function(){changeColor("p1")}),$("#obj2").addEventListener("click",function(){changeColor("p2")}),$("#obj3").addEventListener("click",function(){changeColor("p3")}),$("#box1").addEventListener("click",function(){changeColor("p1")}),$("#box2").addEventListener("click",function(){changeColor("p2")}),$("#box3").addEventListener("click",function(){changeColor("p3")}),reset5.addEventListener("click",function(){setHeight(5),resetChron(),startChron()}),$("#regla5").addEventListener("click",function(){setHeight(5),hints.toStep5(),resetChron(),startChron()}),reset15.addEventListener("click",function(){setHeight(15),hints.toStep5(),resetChron(),startChron()}),$("#regla15").addEventListener("click",function(){setHeight(15),hints.toStep5(),resetChron(),startChron()}),reset35.addEventListener("click",function(){setHeight(35),hints.toStep5(),resetChron(),startChron()}),$("#regla35").addEventListener("click",function(){setHeight(35),hints.toStep5(),resetChron(),startChron()}),reset100.addEventListener("click",function(){setHeight(100),hints.toStep5(),resetChron(),startChron()}),$("#regla100").addEventListener("click",function(){setHeight(100),hints.toStep5(),resetChron(),startChron()}),portal1.addEventListener("click",function(){place="tierra",hints.step=1,hints.planet="al planeta Tierra",hints.toStep2();$("#cam").getAttribute("rotation").x;var e=-1*$("#cam").getAttribute("rotation").y;$("#cam").getAttribute("rotation").z;$("#camWrapper").setAttribute("rotation","0 "+e+" 0"),changeScene(scene1,scene2),initChron()}),portal2.addEventListener("click",function(){place="luna",hints.planet="a la Luna",hints.step=1,hints.toStep2();$("#cam").getAttribute("rotation").x;var e=-1*$("#cam").getAttribute("rotation").y;$("#cam").getAttribute("rotation").z;$("#camWrapper").setAttribute("rotation","0 "+e+" 0"),changeScene(scene1,scene2),initChron()}),portal3.addEventListener("click",function(){place="marte",hints.planet="al planeta Marte",hints.step=1,hints.toStep2();$("#cam").getAttribute("rotation").x;var e=-1*$("#cam").getAttribute("rotation").y;$("#cam").getAttribute("rotation").z;$("#camWrapper").setAttribute("rotation","0 "+e+" 0"),changeScene(scene1,scene2),initChron()}),portal4.addEventListener("click",function(){place="space";$("#cam").getAttribute("rotation").x;var e=-1*$("#cam").getAttribute("rotation").y;$("#cam").getAttribute("rotation").z;$("#camWrapper").setAttribute("rotation","0 "+e+" 0"),changeScene(scene2,scene1)}),on(objeto,"collide",e=>{stopChron()});