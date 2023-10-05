import {Todo} from "../assets/todos.ts";

type TodoCardSmallProps = {
    todo: Todo
}
export default function TodoCardSmall(props: TodoCardSmallProps) {
    return (
        <div>
            {
                props.todo.status === "OPEN"
                    ? <p className="status-open">{props.todo.description}</p>
                    : props.todo.status === "IN_PROGRESS"
                        ? <p className="status-inProgress">{props.todo.description}</p>
                        : <p className="status-done">{props.todo.description}</p>
            }
        </div>
    )
        ;
}

