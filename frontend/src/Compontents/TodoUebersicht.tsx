import {Todo} from "../assets/todos.ts";
import TodoCardSmall from "./TodoCardSmall.tsx";

type TodoUebersichtProps = {
    todos: Todo[]
}

export default function TodoUebersicht(props: TodoUebersichtProps) {
    return (
        <>
            {props.todos.map(todo => <TodoCardSmall todo={todo} key={todo.id}/>)}
        </>
    );
}

