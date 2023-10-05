import {useEffect, useState} from "react";
import {Todo, allPossibleStatus} from "./assets/todos.ts";
import axios from "axios";
import "./assets/Todo.css"
import TodoColumn from "./Compontents/TodoColumn.tsx";
import AddTodo from "./Compontents/AddTodo.tsx";
import TodoUebersicht from "./Compontents/TodoUebersicht.tsx";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>();


    function getTodos() {
        axios.get('/api/todo')
            .then(response => {
                setTodos(response.data)
            })
            .catch(error => {
                console.log(error)
            })
    }

    useEffect(
        getTodos
        , []);

    if (!todos) {
        return <div>Loading...</div>
    }


    return (
        <div className="main-content">
            <h1>Todos</h1>
            <AddTodo onTodoItemChange={getTodos}/>
            <div>
                <section className={"section-columns"}>
                    {
                        allPossibleStatus.map(status => {
                            const filteredTodos = todos.filter(todo => todo.status === status)
                            return <TodoColumn
                                status={status}
                                todos={filteredTodos}
                                onTodoItemChange={getTodos}
                                key={status}
                            />
                        })
                    }
                </section>
                <section className={"todo-uebersicht"}>
                    <TodoUebersicht todos={todos}/>
                </section>
            </div>

        </div>
    )
}

