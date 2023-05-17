// -- Debutando en JavaScript  --  

// <i class="fi fi-br-times-hexagon"></i>  incorrecto
// <i class="fi fi-br-fi-br-check-circle"></i>    correcto

const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const campos = {
    nombre_apellido : false,
    email : false,
    telefono : false,
    dni : false,
    domicilio : false
}

const expresiones = {
	nombre_apellido: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,   // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/,     // 7 a 14 numeros.
    dni: /^\d{7,8}$/,           // 7 a 8 numeros.
    domicilio: /^[a-zA-Z0-9\_\-\,]{4,20}$/     // Letras, numeros, guion, guion_bajo y coma.
}


const validarFormulario = (e) => {
    switch (e.target.name){               // e.target.name   me devuelve el nombre del input
        case "nombre_apellido":
            validarCampo(expresiones.nombre_apellido, e.target, e.target.name);
        break;
        case "email":
            validarCampo(expresiones.email, e.target, e.target.name);
        break;
        case "telefono":
            validarCampo(expresiones.telefono, e.target, e.target.name);
        break;
        case "dni":
            validarCampo(expresiones.dni, e.target, e.target.name);
        break;
        case "domicilio":
            validarCampo(expresiones.domicilio, e.target, e.target.name);
        break;
    }   
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)){
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo_incorrecto');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo_correcto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fi-br-times-hexagon');
        document.querySelector(`#grupo_${campo} i`).classList.add('fi-br-check-circle');
        document.querySelector(`#grupo_${campo} .form_inputError`).classList.remove('form_inputError_activo');
        campos[campo] = true;
    
    } else {
        document.getElementById(`grupo_${campo}`).classList.remove('form_grupo_correcto');
        document.getElementById(`grupo_${campo}`).classList.add('form_grupo_incorrecto');
        document.querySelector(`#grupo_${campo} i`).classList.remove('fi-br-check-circle');
        document.querySelector(`#grupo_${campo} i`).classList.add('fi-br-times-hexagon');
        document.querySelector(`#grupo_${campo} .form_inputError`).classList.add('form_inputError_activo');
        campos[campo] = false;
    }
}

// invoca a validar formulario cada vez que se presiona una tecla
inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);

});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre_apellido && campos.email && campos.telefono && campos.dni && campos.domicilio){
   
        formulario.reset();
        
        document.getElementById('msj_exito').classList.add('msj_exito_activo');
        
        // setTimeout hace desaparecer el mensaje del submit a los 5 seg
        setTimeout(()=> {
            document.getElementById('msj_exito').classList.remove('msj_exito_activo');
        }, 5000);
        
        document.querySelectorAll('.form_grupo_correcto').forEach((icono) => {
            icono.classList.remove('form_grupo_correcto');
        });

    } else {
        document.getElementById('msj_alerta').classList.add('msj_alerta_activo');
        
        // setTimeout hace desaparecer el mensaje del submit a los 5 seg
        setTimeout(()=> {
            document.getElementById('msj_alerta').classList.remove('msj_alerta_activo');
        }, 5000);
    }
});