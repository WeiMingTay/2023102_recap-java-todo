import {Todo, TodoStatus} from "../assets/todos.ts";
import TodoCard from "./TodoCard.tsx";
import "../assets/Todo.css"


type TodoColumnProps = {
    todos: Todo[],
    status: TodoStatus,
    onTodoItemChange: () => void

}
export default function TodoColumn(props: TodoColumnProps) {
    return (<>

            <section className={"section-status"}>

                {props.status === "OPEN"
                    ? <h2 className="status-open">{props.status.toLowerCase()}</h2>
                    : props.status === "IN_PROGRESS"
                        ? <h2 className="status-inProgress">{props.status.toLowerCase()}</h2>
                        : <h2 className="status-done">{props.status.toLowerCase()}</h2>
                }

                {
                    props.todos.map(todo => <TodoCard todo={todo} key={todo.id}
                                                      onTodoItemChange={props.onTodoItemChange}/>)
                }
            </section>
        </>
    );
}
