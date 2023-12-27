const inputList = document.querySelector("input");
const boton = document.querySelector(".btn-add");
const lista = document.querySelector("ul");
const taskCompleted = document.querySelector(".empty");

// Función para agregar una nueva tarea
function nuevaTarea() {
    const textoTarea = inputList.value;
    
    if (textoTarea.trim() !== "") {
        // Crear un nuevo elemento <li> y añadirlo a la lista
        const nuevaTarea = document.createElement("li");
        nuevaTarea.innerHTML = `${textoTarea} <button class="boton-eliminar">Delete</button>`;
        lista.appendChild(nuevaTarea);

        // Limpiar el input después de agregar la tarea
        inputList.value = "";

        // Mostrar la lista y ocultar el mensaje de lista vacía
        lista.style.display = "block";
        taskCompleted.style.display = "none";

        // Darle funcionalidad al botón de eliminar
        const deleteButton = nuevaTarea.querySelector(".boton-eliminar");
        deleteButton.addEventListener("click", function () {
            // Eliminar la tarea de la lista
            lista.removeChild(nuevaTarea);

            // Mostrar el mensaje "All task are completed" si no hay más tareas
            if (lista.children.length === 0) {
                lista.style.display = "none";
                taskCompleted.style.display = "block";
            }
        });
    }
}



//al clicar el boton se me enviaba el formulario directamente, por lo que elimino el submit con prevent y luego le doy la funcion de nuevaTarea
const form = document.querySelector("form");
boton.addEventListener("click", function(event){
    event.preventDefault(); //evitar que se envie de forma predeterminada
    nuevaTarea();
})
