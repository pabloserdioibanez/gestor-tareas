import { addTarea } from "../store.js";

export function activarAnadir(render) {

  const TASK = document.getElementById("task-input");
  const TASKTRIM = TASK.value.trim(); // eliminamos espacios vacios

  if (TASKTRIM === "") {
    return; // no añadimos tareas vacias
  
  }
  addTarea(TASKTRIM);
  TASK = "";
  render();
}
