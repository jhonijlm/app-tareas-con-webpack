import './styles.css';

// los archivos importadps
import {Todo, TodoList} from './classes';
import {crearTodoHtml} from './js/componentes'


export const todoList =new TodoList();

// para listar las tareas, 
// primera forma
// todoList.todos.forEach(todo => crearTodoHtml(todo));

// segunda forma
todoList.todos.forEach( crearTodoHtml);

// const tarea = new Todo('aprender JS');
// const tarea2 = new Todo('aprender C#');

// // tarea.completado = true;

// todoList.nuevoTodo(tarea);
// todoList.nuevoTodo(tarea2);

// crearTodoHtml(tarea);
// crearTodoHtml(tarea2);
