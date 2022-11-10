import React from 'react'
import InputField from './components/InputField'
import TestComponent from './components/TestComponent'
import { Todo } from './model'

// React Function Component type
const App:React.FC = () => {

    // here I am setting the useState to be type string with the syntax shown. Union | also works inside the brackets. 
    // Array also works
    const [todo, setTodo] = React.useState<string>("")
    // now, lets create a separate state that holds an array of Todos that we created in model.ts
    const [todos, setTodos] = React.useState<Todo[]>([])

    // so, even for basic functions that take an event, we need to give it a type. Look this up later
    const handleAdd = (event: React.SyntheticEvent) => {
        event.preventDefault()
    }
 
    return (
        <>
        <div>
            Hello World, this is in the tsx only. Okay this is a good starting point for now. Until tomorrow!
        </div>
        {/* This proves that you can also just use straight JS components too */}
        <TestComponent/>
        {/* When we give something attributes or props, we need to make sure in the component itself that it is defined */}
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
        </>
    )
}

export default App