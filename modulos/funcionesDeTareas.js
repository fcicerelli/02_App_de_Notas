let fs = require("fs");                           // Micro Desafios 2 - 2 
                                                  // (Modularización de la aplicación)
let funcionesDeTareas = leerJSON();

function leerJSON() {
  let listaDeTareas = fs.readFileSync("./dataBase/tareas.json", "utf-8");
  return JSON.parse(listaDeTareas);
}

module.exports = funcionesDeTareas;