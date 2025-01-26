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

const botonesBloquear = document.querySelectorAll(".btn-danger");
const botonesDesbloquear = document.querySelectorAll(".btn-warning");
const aviso = document.querySelector(".aviso");
const confirmacionNegacion = document.querySelectorAll(".btn-secondary");
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

function bloquear(e){
    console.log(e);
    e.preventDefault();
    aviso.classList.toggle("avisoActivado");
}
/* bloquear.addEventListener("click", e=>{
    e.preventDefault();
    aviso.classList.toggle("avisoActivado");
})
 */