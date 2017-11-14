
function crear_cuenta(){
	var consuNombre=$("#consuNombre").val();
	var consuApellido=$("#consuApellido").val();
	var consuMail=$("#consuMail").val();
	var consuContra=$("#consuContra").val();
	var consuRepetirContra=$("#consuRepetirContra").val();
	
	if(consuNombre==''|| consuApellido==''||consuMail==''||consuContra==''|| consuRepetirContra==''){
         
         swal({
                title: "Faltan datos!",
                text: "No has completado todos los campos !",
                type: "warning",
                confirmButtonText: "Completar los campos"
                    });
	}
	else{
		if(consuContra!=consuRepetirContra){
			swal({
                title: "Campos no iguales!",
                text: "El campo de contraseña debe ser igual a repetir contraseña",
                type: "info",
                confirmButtonText: "Volver a intentarlo"
                    });

		}	
		else{
			swal({
			  title: 'Esta seguro de crear una cuenta ?',
			  text: "Informacion Ingresada:",
			  type: 'info',
			  html: '<b >Nombres y Apellidos:</b> ' + 'Steve James Foncy Arias Arias'+
			   '<h4><b>Correo: </b> ' + 'steveariasarias@hotmail.com </h4>'+
			   '<h4><b>Contraseña: </b> ' + 'foncy12345 </h4>',
  			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: 'Si, crear cuenta!'
				}).then(function () {
				  swal({
				  title: 'Creando cuenta!',
				  text: 'I will close in 5 seconds.',
				  timer: 5000,
				  onOpen: function () {
				    swal.showLoading()
				  }
				}).then(
				  function () {},
				  // handling the promise rejection
				  function (dismiss) {
				    if (dismiss === 'timer') {
				      console.log('I was closed by the timer')
				    	 $('#myModal2').modal('toggle');
				         $('#myModal').modal('toggle');
				         $('#myModal3').modal('show');
				    }
				  }
				)
			});
		}
	}
	//alert(consuNombre+consuApellido+consuMail+consuContra);

}

function validar_datos(){
	var consuNombre=$("#consuNombre").val();
	if(consuNombre!=''){
		document.getElementById("consuNombre2").style.backgroundColor='#00c0ef';			
	}
	else{
		document.getElementById("consuNombre2").style.backgroundColor='red';			
		
	}
}

function cambiar_estado(id){
	switch(id){
		case 1: document.getElementById("consuNombre").style.backgroundColor='#c8de37';	break;
		case 2:	document.getElementById("consuApellido").style.backgroundColor='#c8de37';	break;
		case 3:	document.getElementById("consuMail").style.backgroundColor='#c8de37';	break;
		case 4:	document.getElementById("consuContra").style.backgroundColor='#c8de37';	break;
		case 5:	document.getElementById("consuRepetirContra").style.backgroundColor='#c8de37';	break;
					
	}
}


function prueba(s) {
  return document.querySelector(s)
}

function mostrar_contra(){

// The main instance which most tooltips are created by
var instance = 
  tippy('.tippy', {
      position: 'top',
      animation: 'fade',
      arrow: true,
      popperOptions: {
        modifiers: {
          flip: {
            behavior: ['right', 'bottom']
          }
        }
      }
    })

// Show the animated tippy on load
instance.show(instance.getPopperElement(prueba('#animated-tippy')))

}