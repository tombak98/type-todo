import React from "react";
import axios from "axios";
import { Todo } from "../model";

interface Props {
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>> 
}

const TodoList = ({todos, setTodos}:Props) => {

    React.useEffect(()=>{
        const getStuff = async() => {
            const {data} = await axios.get('/api/todo/all')
            setTodos(data)
        }
        getStuff()
    },[])

    return (
        <>
            <div id="todo-holder">
                {todos?.map((todo)=>
                    <div className="todo-single" key={todo.id}>
                        <p className={todo.isDone ? 'strike' : ''}>{todo.name}</p>
                        <button value={todo.id}>Check</button>
                        <button value={todo.id}>Delete</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default TodoList