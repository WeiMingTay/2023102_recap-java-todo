import {Todo} from "../assets/todos.ts";
import "../assets/Todo.css"
import axios from "axios";


type TodoCardProps = {
    todo: Todo,
    onTodoItemChange: () => void
}
export default function TodoCard(props: TodoCardProps) {

    function deleteThisItem() {
        axios.delete("/api/todo/" + props.todo.id)
           .then(props.onTodoItemChange)
    }

    return (<article className="todo-card">
        {/*<p>{props.todo.id}</p>*/}
        <p>{props.todo.description}</p>
        <p>{props.todo.status}</p>
        <button onClick={deleteThisItem}>Delete</button>
        </article>);
}

