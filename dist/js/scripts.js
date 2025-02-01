/*!
    * Start Bootstrap - SB Admin v7.0.7 (https://startbootstrap.com/template/sb-admin)
    * Copyright 2013-2023 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-sb-admin/blob/master/LICENSE)
    */
    // 
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('sb|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('sb-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('sb-sidenav-toggled');
            localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
        });
    }

});

const toggleButton = document.querySelector("#toggleButton");
const sidenavAccordion = document.querySelector("#sidenavAccordion");

toggleButton.addEventListener("click", e=>{
    e.preventDefault();
    sidenavAccordion.classList.toggle("sb-sidenav-light");
    
})

/* Añadir nuevos botones a las tablas */
let validador = 0;
const tabla = document.querySelectorAll("#cuerpoTabla > tr");
Array.from(tabla).forEach((element) => {
        /* Botón de Bloqueo */
        const nuevoTd = document.createElement("td");
        const botonBloquear = document.createElement("button");
        botonBloquear.classList.add("btn", "btn-danger");
        botonBloquear.innerText = "Bloquear";
        botonBloquear.style.margin = "0 5px";

        nuevoTd.appendChild(botonBloquear);
        element.appendChild(nuevoTd);

        /* Botón de Desbloqueo */

        const nuevoTd2 = document.createElement("td");
        const botonDesbloquear = document.createElement("button");
        botonDesbloquear.classList.add("btn", "btn-warning");
        botonDesbloquear.innerText = "Desbloquear";
        botonDesbloquear.style.margin = "0 5px";

        nuevoTd.appendChild(botonDesbloquear);
        element.appendChild(nuevoTd2);

        /* Botón de Borrar */

        const nuevoTd3 = document.createElement("td");
        const botonBorrar = document.createElement("button");
        botonBorrar.classList.add("btn", "btn-info", "borrar");
        botonBorrar.innerText = "Borrar";
        botonBorrar.style.margin = "0 5px";

        nuevoTd.appendChild(botonBorrar);
        element.appendChild(nuevoTd2);
/*         <button type="button" class="btn btn-danger">Bloquear</button> - 
        <button type="button" class="btn btn-warning">Desbloquear</button> -  */
});
console.log(tabla);

const botonesBloquear = document.querySelectorAll(".btn-danger");
const botonesDesbloquear = document.querySelectorAll(".btn-warning");
const aviso = document.querySelector(".aviso");
const confirmacionNegacion = document.querySelectorAll(".btn-secondary");
const botonesBorrar = document.querySelectorAll(".borrar");
console.log(botonesBorrar);
console.log(aviso);
console.log(botonesBloquear);

Array.from(botonesBloquear).forEach(e => {
    e.addEventListener("click", bloquear);
});

Array.from(botonesDesbloquear).forEach(e => {
    e.addEventListener("click", bloquear);
});

Array.from(confirmacionNegacion).forEach(e => {
    e.addEventListener("click", bloquear);
});

Array.from(botonesBorrar).forEach(e => {
    e.addEventListener("click", bloquear);
});

function bloquear(e){
    console.log(e);
    e.preventDefault();
    aviso.classList.toggle("avisoActivado");
}

