import {Todo} from "../assets/todos.ts";
import "../assets/Todo.css"


type TodoCardProps = {
    todo: Todo,
}
export default function TodoCard(props: TodoCardProps) {
    return (<article className="todo-card">
        <p>{props.todo.id}</p>
        <p>{props.todo.description}</p>
        <p>{props.todo.status}</p>
        </article>);
}

