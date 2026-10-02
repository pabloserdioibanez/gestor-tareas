function activarEliminar(render) {
    const taskList = document.querySelector('#task-list');

    // Escuchar clics en #task-list utilizando delegación de eventos
    taskList.addEventListener('click', (event) => {
        
        // Actuar solo si el botón tiene data-action="delete"
        if (event.target.getAttribute('data-action') === 'delete') {
            
            // Obtener el id numérico del li que contiene el botón
            const liElement = event.target.closest('li');
            const id = parseInt(liElement.dataset.id); // Asegúrate de que el HTML usa data-id="X" en el li
            
            // Llamar a deleteTarea(id) y después a render()
            deleteTarea(id);
            render();
        }
    });
}