import {ChangeEvent, useState} from "react";
import axios from "axios";
import {Todo} from "../assets/todos.ts";


type AddTodoProps = {
    onTodoItemChange: () => void,
}

export default function AddTodo(props: AddTodoProps) {
    const [text, setText] = useState("");

    function changeText(event: ChangeEvent<HTMLInputElement>) {
        setText(event.target.value)
    }


    function saveTodo() {
        if (text.trim() === "") {
            return;
        }
        console.log("text:" + text)
        setText("");
        axios.post('/api/todo', {
            description: text,
            status: "OPEN",
        } as Todo)
            .then(props.onTodoItemChange)
          /*  .catch(error => {
                console.error("Error in POST request:", error);

                // Log detailed information about the error
                if (error.response) {
                    // Server responded with a non-2xx status code
                    console.error("Response Data:", error.response.data);
                    console.error("Response Status:", error.response.status);
                    console.error("Response Headers:", error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    console.error("Request:", error.request);
                } else {
                    // Something else happened while setting up the request
                    console.error("Error Details:", error.message);
                }
            });*/

    }

    return (
        <form className="add-todo" onSubmit={saveTodo}>
            <input type="text" placeholder={"Beschreibung"} value={text} onInput={changeText}/>
            <button>Speichern</button>
        </form>
    );
}