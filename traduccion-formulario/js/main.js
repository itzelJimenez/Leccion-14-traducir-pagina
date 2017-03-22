
function translate(){
	//TRADUCIR INFORMACIÓN INGRESADA POR EL USUARIO
	var title = document.getElementById('form-signin-heading');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	//TRADUCIR FORMULARIO
	var remember = document.getElementsByTagName('span')[0];
	var button = document.getElementsByClassName('btn')[0];

	title.innerHTML = "Por favor inicia sesión";
	email.placeholder = "Correo electrónico";
	password.placeholder = "Contraseña";
	remember.innerHTML = "Recordar datos";
	button.innerHTML = "Iniciar sesión";

}
translate();

function mostrarResultado (){
	//Las siguientes variables guardaran los valores ingresados por el usuario en los campos email y password.
	var email = document.getElementById('inputEmail').value;
	var password = document.getElementById('inputPassword').value;
	//Las siguientes variables extraeran los elementos nodos de html para manipularlos con inner.
	var nicname = document.getElementById('usuario');
	var contraseña = document.getElementById('contraseña');
	var resultado = document.getElementById('resultados');
	var correoDelUsuario=document.getElementById('correoDelUsuario');
	var contraseñaDelUsuario = document.getElementById('contraseñaDelUsuario');
	//Finalmente escribimos sobre los nodos específicados los valores a imprimir.
	resultado.innerHTML='Tus datos son:';
	nicname.innerHTML="Tu correo electrónico es:";
	correoDelUsuario.innerHTML=email;
	contraseña.innerHTML="Tu contraseña es:";
	contraseñaDelUsuario.innerHTML=password

}