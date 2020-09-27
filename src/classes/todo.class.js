
// como esta clase se va usar fuera del archivo, colocar lo siguiente
export class Todo {

    // usado para reconstruir  la instancia proveniente de localstorage, 
    // de esta forma se puede acceder a los metodos de la clase
    static fromJson({id, tarea, completado, creado}){
        const tempTodo = new Todo(tarea);
        tempTodo.id = id;
        tempTodo.completado = completado;
        tempTodo.creado = creado;
        return tempTodo;
    }

    constructor(tarea){
        this.tarea = tarea;
        this.id = new Date().getTime(); //123456789
        this.completado = false;
        this.creado = new Date();
    }

    imprimirTarea(){
        
    }
}