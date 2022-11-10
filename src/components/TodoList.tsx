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

    const checkOff = async(event:any) => {
        event.preventDefault()
        const {data} = await axios.put(`api/todo/checkoff/${event.target.value}`)
        setTodos(data)
    }

    const deleteTodo = async(event:any) => {
        event.preventDefault()
        const {data} = await axios.delete(`api/todo/delete/${event.target.value}`)
        setTodos(data)
    }

    return (
        <>
            <div id="todo-holder">
                {todos?.map((todo)=>
                    <div className="todo-single" key={todo.id}>
                        <p className={todo.isDone ? 'strike' : ''}>{todo.name}</p>
                        <button onClick={checkOff} value={todo.id}>Check</button>
                        <button onClick={deleteTodo} value={todo.id}>Delete</button>
                    </div>
                )}
            </div>
        </>
    )
}

export default TodoList