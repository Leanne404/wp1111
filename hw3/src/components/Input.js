import { useState } from "react";

const Input = ({add}) => {

    const [input_todo, setInput_todo] = useState("")
    const [id, setId] = useState(0)
    
    function addItem(event){

        if(event.key === 'Enter'){
            add(function(prevData){
                setId(id+1)
                return ([...prevData,
                    {
                        input_todo,
                        id: id.toString(),
                        check_box: false
                    }
                ])
            })
            function clearInput(){
                setInput_todo("")
            }
            clearInput()
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