import React from "react";

interface Props{
    todo: string;
    // by hovering over the setTodo function in App, we can see in GREEN what type it is, and copy it into here.
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    // we need to add this here too, since its passed as a prop
    handleAdd: (event:React.SyntheticEvent) => void;
}

// so here, we see that we set the type of that object that is input into as a Props interface
// you can ALSO do. InputField:React.FC<Props> = ({todo, setTodo})
const InputField = ({todo, setTodo, handleAdd}:Props) => {
    return (
        <div>Hello</div>
    )
}

export default InputField