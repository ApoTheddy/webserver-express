const hbs = require("hbs");

//Helpers
hbs.registerHelper('getAnio', () => new Date().getFullYear());
hbs.registerHelper('captalizar', (texto) => {
    let palabras = texto.split(' ');
    palabras.forEach((palabra, idx) => {
        palabra[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
    });
    return palabras.join(' ');
});