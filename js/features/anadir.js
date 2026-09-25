import { addTarea } from "../store.js";

export function activarAnadir(render) {
  const FORM = document.getElementById("task-form");


  FORM.addEventListener("submit", function (e) {
    e.preventDefault(); // evita que la pagina se recarge y se pierda los procesos de task
  
    const TASK = document.getElementById("task-input");
    const TASKTRIM = TASK.value.trim(); // eliminamos espacios vacios

    if (TASKTRIM === "") {
      return; // no añadimos tareas vacias
    
    }
    addTarea(TASKTRIM);
    TASK.value = "";
    render();
  });
}
