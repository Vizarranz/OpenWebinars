document.querySelector(".test").addEventListener("click", function (event) {
    event.stopPropagation();
    alert("click en el botón");
});

// document.addEventListener("contextmenu", function (event) {
//     event.preventDefault();

//     alert("menu contextual se encuentra intervenido");
// });

window.addEventListener("click", function (event) {
   console.log("hemos hecho click en la ventana de la web");
    
});