import { toggleTarea } from "../store.js";

export function activarCompletar(render) {
  //Añadimos escuchar clicks en #task-list utilizando la delegacion de eventos  
  const taskList = document.querySelector('#task-List')
  
    taskList.addEventListener('click', (event) =>{
      //Actua solo si el boton tiene data-action = 'complete'  
      if(event.target.getAttribute('data-action') === 'complete'){
          //Con lo siguiente, obtenemos el id numerico dle li que contiene el boton
          const liElement =event.target.closest('li');
          const id = parseInt (liElement.dataset.id);
          //Llama a toggleTarea(id) y render()
          toggleTarea(id);
          render();
        }
    });
  // TODO feature/completar-tarea
  // 1. Escuchar clics en #task-list usando delegación de eventos.
  // 2. Comprobar que el botón tenga data-action="complete".
  // 3. Obtener el id numérico del <li data-id="...">.
  // 4. Llamar a toggleTarea(id) y después a render().
}
