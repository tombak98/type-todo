import React from "react";
import { Todo } from "../model";

interface Props {
    id: number;
    isDone: boolean;
    name: string;
    checkOff: (event: any) => Promise<void>;
    deleteTodo: (event: any) => Promise<void>;
    editTodo: (event: any) => Promise<void>;
}

const TodoItem = ({id, name, isDone, checkOff, deleteTodo, editTodo}:Props) => {
    return (
        <div className="todo-single" key={id}>
            <p className={isDone ? 'strike' : ''}>{name}</p>
            <button onClick={checkOff} value={id}>Check</button>
            <button>Edit</button>
            <button onClick={deleteTodo} value={id}>Delete</button>
        </div>
    )
}

export default TodoItem