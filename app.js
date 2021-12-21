let funcionesDeTareas = require("./modulos/funcionesDeTareas");
let process = require("process");
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

switch (comando) {
  case "listar":                                                             // Micro Desafios 2 - 1.a 
    let tareas = funcionesDeTareas;                                          // (Listar todas las notas existentes)
    if (tareas.length === 0) {
      console.log("La lista de tareas esta vacia");
    } else {
      console.log("********************************************************");
      console.log("*           Este es tu listado de tareas               *");
      console.log("********************************************************");
      for (let i = 0; i < tareas.length; i++) {
        console.log(
          "Titulo: " + tareas[i].titulo + " - estado: " + tareas[i].estado
        );
      }
    }

    break;
  
  case undefined:                                                       // Micro Desafios 2 - 1.b (Mensaje 
    console.log("Atención - tienes que pasar una acción ");             // si no recibe ninguna palabra después
    break;                                                              // del nombre del archivo

  default:                                                              // Micro Desafios 2 - 1.c (Mensaje 
    console.log("No entiendo qué quieres hacer ");                      // si recibe cualquier otro texto
    break;
}
