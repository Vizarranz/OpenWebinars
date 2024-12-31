//Funciones anónimas

// let result = function (name, year = 2024) {
//     let copyright = name + " - " + year;
//     return copyright;
// };

// console.log(result("Wanolo"));

//Callback

// let result = function (name, year, formatter) {
//     let copyright = formatter(name, year);
//     return copyright;
// };

// let formatter = function (name, year) {
//     return name + " | " + year;
// }

// console.log(result("Wanolo", 2024, formatter));


//Funciones auto-invocadas
(function (name, year) {
    console.log(name, year);
})("Wanolo",2024);