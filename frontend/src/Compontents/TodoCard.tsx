import {Todo, TodoStatus} from "../assets/todos.ts";
import "../assets/Todo.css"
import axios from "axios";
import {ChangeEvent, useState} from "react";


type TodoCardProps = {
    todo: Todo,
    onTodoItemChange: () => void
}
export default function TodoCard(props: TodoCardProps) {

    const [description, setDescription] = useState(props.todo.description);

    function deleteThisItem() {
        axios.delete("/api/todo/" + props.todo.id)
            .then(props.onTodoItemChange)
    }

    function changeText(event: ChangeEvent<HTMLInputElement>) {
        const newDescription = event.target.value;
        setDescription(newDescription);
        axios.put("/api/todo/"+props.todo.id, {
            ...props.todo,
            description: newDescription
        } as Todo)
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
        <input type="text" value={description} onInput={changeText}/>
        {/*<p>{props.todo.status}</p>*/}
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

