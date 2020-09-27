import { Todo } from "../classes";
import {todoList} from '../index';

// Referencias en el html
const divTodoList = document.querySelector(".todo-list");
const txtImput = document.querySelector(".new-todo");
const btnBorrar = document.querySelector('.clear-completed');
const ulFiltros = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');

export const crearTodoHtml = (todo) => {
    const htmlTodo = `
    <li class="${ (todo.completado) ? 'completed' : ''}" data-id="${ todo.id}">
        <div class="view">
            <input class="toggle" type="checkbox" ${ (todo.completado) ? 'checked' : ''}>
            <label>${  todo.tarea}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>
    `;

    const div = document.createElement('div');
    div.innerHTML = htmlTodo;

    divTodoList.append(div.firstElementChild);

    return div;
}

// eventos
txtImput.addEventListener('keyup', (event) => {
    // console.log(event);
    if(event.keyCode === 13 && txtImput.value.length > 0){
        const nuevoTodo =  new Todo(txtImput.value);

        todoList.nuevoTodo(nuevoTodo);
        console.log(todoList);
        crearTodoHtml(nuevoTodo);
        txtImput.value = '';
    }
});



divTodoList.addEventListener('click', (event) => {
    const nombreElemento = event.target.localName;
    const todoElemento = event.target.parentElement.parentElement;
    const todoId = todoElemento.getAttribute('data-id');

    if(nombreElemento.includes('input')){
        todoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');

    }else if(nombreElemento.includes('button')){ // hay que borrar
        todoList.eliminarTodo(todoId);
        divTodoList.removeChild(todoElemento);
    }

    console.log(todoList);
});


btnBorrar.addEventListener('click', () => {
    todoList.eliminarCompletados();
    for(let i= divTodoList.children.length - 1; i >= 0; i--){
        const elemento= divTodoList.children[i];
        if(elemento.classList.contains('completed')){
            divTodoList.removeChild(elemento);
        }
    }
});


ulFiltros.addEventListener('click', (event) => {
    // console.log(object);
    const filtro = event.target.text;
    if(!filtro){ return; }

    // para mover el obotn
    anchorFiltros.forEach(elm => elm.classList.remove('selected'));
    event.target.classList.add('selected');

    for( const elemeento of divTodoList.children){
        elemeento.classList.remove('hidden');
        const completado = elemeento.classList.contains('completed');

        switch(filtro){
            case 'Pendientes':
                if(completado){
                    elemeento.classList.add('hidden');
                }
            break;

            case 'Completados':
                if(completado){
                    elemeento.classList.add('hidden');
                }
            break;
        }
    }
});