// *** AUTORIDADES de la pag INSTITUCIONAL ***


let tarjetas_autoridades = `<div class="contenedor_integrantes" id="contenedor_autoridades">`

const generarPerfil = async () => {
   
    for (i = 0; i < 3; i++){
    //consultar a la API
    const url = 'https://randomuser.me/api/';
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];

    const cargo = ["Presidente", "Vicepresidente", "Coordinación"];

       
        tarjetas_autoridades = tarjetas_autoridades + `
            <div class="integrante" id="integrante_autoridades">
                <p>${cargo[i]}</p>
                <div class="contenedor_img_autoridades" id="contenedor_img_autoridades">
                    <img src= ${datos.picture.large} alt="Autoridades" id="img_autoridades">
                </div>  
                <p>${datos.name.first + " " + datos.name.last}</p>
            </div>
        `
    }
    
    document.querySelector("#contenedor_autoridades").innerHTML = tarjetas_autoridades;
}


document.addEventListener('DOMContentLoaded', generarPerfil);


