import { useState } from "react";
import {v4 as uuidv4} from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{task: "sample-task", id: uuidv4()}]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        setTodos((prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), done: false }];
        }); //[...todos] makes a copy of your old list (so React knows it’s a new array).
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id != id));
    };

    let uperCaseAll = () => {
        setTodos((todos) => 
            todos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    }

    let markAsDoneAll = () => {
        setTodos((todos) => 
            todos.map((todo) => {
                return {
                    ...todo,
                    done: true
                };
            })
        );
    }

    let upperCaseOne = (id) => {
        setTodos((todos) => 
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    let markAsDoneOne = (id) => {
        setTodos((todos) => 
            todos.map((todo) => {
                if(todo.id == id){
                    return {
                    ...todo,
                    done: true
                    };
                } else {
                    return todo;
                }
            })
        );
    }

    return (
        <div>
            <input placeholder="Add a task..." value={newTodo} onChange={updateTodoValue}/>
            <br /><br />
            <button onClick={addNewTask}>Add Task</button>
            <br /><br />
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} style={{textDecoration: todo.done ? "line-through" : "none"}}>
                        <span> {todo.task} </span>
                        &nbsp; &nbsp;
                        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                        <button onClick={() => upperCaseOne(todo.id)}>UpperCase One</button>
                        <button onClick={() => markAsDoneOne(todo.id)}>Mark As Done One</button>
                    </li>
                ))}
                <br /><br />
                <button onClick={uperCaseAll}>UpperCase All</button>
                <button onClick={markAsDoneAll}>Mark As Done All</button>
            </ul>
        </div>
    )
}