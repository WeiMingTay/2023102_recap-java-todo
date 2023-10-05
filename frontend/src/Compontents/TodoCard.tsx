import {Todo, TodoStatus} from "../assets/todos.ts";
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

    function move(targetStatus: TodoStatus) {
        axios.put("/api/todo/" + props.todo.id, {
            ...props.todo,
            status: targetStatus,
        } as Todo)
            .then(props.onTodoItemChange)
    }

    return (<article className="todo-card">
        {/*<p>{props.todo.id}</p>*/}
        <p>{props.todo.description}</p>
        <p>{props.todo.status}</p>
        <button onClick={deleteThisItem}>Delete</button>
        <div>
            {
                props.todo.status === "OPEN"
                    ? <div></div>
                    : (
                        props.todo.status === "DONE"
                            ? <button onClick={() => move("IN_PROGRESS")}>◀</button>
                            : <button onClick={() => move("OPEN")}>◀</button>)
            }
            {
                props.todo.status === "DONE"
                    ? <div></div>
                    : (
                        props.todo.status === "OPEN"
                            ? <button onClick={() => move("IN_PROGRESS")}>▶</button>
                            : <button onClick={() => move("DONE")}>▶</button>)
            }
        </div>
    </article>);
}

