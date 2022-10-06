import { useState } from "react";

const Input = ({add}) => {

    const [input_todo, setInput_todo] = useState("")

    function addItem(event){
        if(event.key === 'Enter'){
            add(function(prevData){
                return ([...prevData,
                    {input_todo}
                ])
            })
        }
    }

    function change_todo(e){
        setInput_todo(e.target.value)
    }
    
    return (  
        <input onKeyPress = {addItem} value = {input_todo} onChange = {change_todo} type="text" className="todo-app__input" placeholder = "What needs to be done?"></input>
    );
}
 
export default Input;