$(document).ready(function(){

    $("#bucle_while").click(function() {
        var num = prompt("Ingrese un número");
        var respuesta =comprobar_numero(num);
        var sum=0;
        while(!isNaN(respuesta)){
            num = parseInt(respuesta);
            sum = (sum + num);
            num = prompt(" La suma es: "+ sum +" \n Ingrese un número");
            respuesta =comprobar_numero(num);
        }
        $("#res").html("<h2>El resultado de la suma es: "+ sum +"</h2>");
        
      
    });

    $("#bucle_for").click(function() {
        var num = prompt("Ingrese un número");
        var respuesta =comprobar_numero(num);
        var sum=0;
        for(i=0;i=respuesta.length;i++){
            if(!isNaN(respuesta) && respuesta != ""){
            num = parseInt(respuesta);
            sum = (sum + num);
            num = prompt(" La suma es: "+ sum +" \n Ingrese un número");
            respuesta =comprobar_numero(num);
           
            }else{
                console.log("--->"+respuesta);
               respuesta = 0;
            }
        }
        $("#res").html("<h2>El resultado de la suma es: "+ sum +"</h2>");
    });

    function comprobar_numero(num){
        var aux=0;
//        console.log("--->num "+num );
        if(num === null){ //si es null quiere decir que presionaron el boton cancelar
            return "acabar";
        }
        if(!isNaN(num)){ //preguntamos si es numero
          if(num != "")//preguntamos si no esta vacio
          return num;  //devolvemos el numero para luego sumarlo
          else
          alert("entrada errónea, vuelva a intentarlo."); //el numero esta vacio
          return aux;
        }else{  
            respuesta=num.toLowerCase();
            if(respuesta === 'acabar'){
                return "acabar";
            }else{
                alert("entrada errónea, vuelva a intentarlo.");
                return aux;
            }
            
      }
    }
    
    
    
    
});