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

    const [edit, setEdit] = React.useState<string>("")
    const [editing, setEditing] = React.useState<boolean>(false)

    return (
        <div className="todo-single" key={id}>
            {editing ? <>
            <input placeholder={name}></input> <button>Submit</button>
            </>
            : <p className={isDone ? 'strike' : ''}>{name}</p>}
            <button onClick={checkOff} value={id}>Check</button>
            <button onClick={()=>setEditing(!editing)}>Edit</button>
            <button onClick={deleteTodo} value={id}>Delete</button>
        </div>
    )
}

export default TodoItem