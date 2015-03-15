function calculaAreaPared(){
	var resp1;
	var resp2;
	var altura = prompt("Ingrese la altura de la pared en metros");
	resp1 = validacionArea(altura,"Por favor ingrese un número");
	var anchura = prompt("Ingrese la anchura de la pared en metros");
	resp2=validacionArea(anchura,"Por favor vuelva a intertarlo");

	if(resp1 == true && resp2 == true){
		calcular(altura,anchura);
	}
}
function validacionArea(numero,msg){
	
 	var num =parseInt(numero); 
 	if(isNaN(num)){
 		alert(msg);
 		return false;
 	}else{
 		return true;
 	}

 	return true;

}
function calcular(altura,anchura){

	var resultado = altura * anchura;
	//var respuesta = document.getElementById("mensaje");
	var cad;
	cad="";
	cad +=" <a href='javascript:document.location.reload();'><b>HOME</b></a>";
	cad +="<div id='mensaje2'>";
	cad += "<h1>El resultado del area de la pared es: "+resultado+" metros</h1>";
	cad +="<br>";
	cad +="<img src='img/js.jpeg' alt='javascript' class='imgjs' >";
	cad +="</div>";
    //mensaje.innerHTML = "<div id='mensaje2'><h1>El resultado del area de la pared es: "+resultado+" metros</h1></div>";
    mensaje.innerHTML=cad;
	

}
function realizarPregunta(){

	 document.getElementById("respuestaPregunta").innerHTML="";


	var respuesta = prompt("¿Capital de España?");
	if(isNaN(respuesta)){

		respuesta=respuesta.toLowerCase();
		var cad;
		cad="";
		if(respuesta === 'madrid'){
			cad +="<img src='img/bien.png' style='width:20px;'>";
			cad +=" Correcto, <b>Madrid</b> es la capital de España.";
		}else{
			cad +="<img src='img/mal.jpeg' style='width:20px;'>";
			cad +="	Su respuesta <b>"+ respuesta +"</b> no es correcta.";
		}
			respuestaPregunta.innerHTML=cad;
	}else{
		alert("Por favor introduzca un TEXTO");
	}
}
