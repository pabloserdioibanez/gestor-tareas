import { setFiltro } from "../store.js";

export function activarFiltro(render) {
  //Esta primera linea de codigo busca el select que tiene como id="filter"
  const filtro = document.getElementById("filter");
  //Añadimos un escuchador para cunado el ususario cambie la opcion del filtro
  filtro.addEventListener("change", () => {
    //Optiene el valor seleccionado y lo guarda mendiante el setFiltro
    setFiltro(filtro.value);
    //Actualiza la lista de tareas para aplica rel filtro
    render();
  })
}

