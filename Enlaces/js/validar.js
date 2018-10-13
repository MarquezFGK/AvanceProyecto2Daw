var nombre, correo, asunto, mensaje, archivo, expresion; 



window.onload=function () {

document.getElementById("EnviarDatos").onclick= function(){
verificarDatos();
	// body...
}


}

function verificarDatos(){
nombre = document.getElementById("nombre").value;
correo = document.getElementById("correo").value;
asunto = document.getElementById("asunto").value;
mensaje = document.getElementById("mensaje").value;

 var reg = /^([a-z ñáéíóú]{3,60})*,([a-z ñáéíóú]{3,60})$/i;
 var regEmail=/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
 var regasun=/^([a-z ñáéíóú]{3,100})$/i;;

	if (reg.test(nombre)) {
		if (regEmail.test(correo)) {
			if (regasun.test(asunto)) {
				if (regasun.test(mensaje)) {

					document.getElementById("alerta").style.background = "#C6EBD6n";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Mensaje Enviado con EXITO'";

				}else{
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡No has ingresado un mensaje'";
				}

			}else{
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡No has ingresado un asunto'";
			}

		}

		else{
					document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Correo No Valido'";

		}

	}
	else{
		document.getElementById("alerta").style.background = "orange";
                   document.getElementById("alerta").style.width = "75%";
                   document.getElementById("alerta").style.margin = "auto";
                   document.getElementById("alerta").style.textAlign = "center";
                   document.getElementById("alerta").innerHTML = "¡Nombre no valido! 'Nombre','Apellido'";

	}
}





