import { useState } from "react";

const Input = ({add}) => {

    const [input_todo, setInput_todo] = useState("")
    const [id, setId] = useState(0)
    var footer = document.getElementsByClassName("todo-app__footer")
    
    function addItem(event){
        if(event.key === 'Enter'){
            if(input_todo === ""){
                window.alert("Input cannot be empty!")
            }
            else{
                    add(function(prevData){
                        setId(id + 1)
                        global.todoCnt++
                        return ([...prevData,
                            {
                                input_todo,
                                id: id.toString(),
                                check_box: false,
                            }
                        ])
                    })
                    function clearInput(){
                        setInput_todo("")
                    }
                    clearInput()
                }
                checkFooter()
            }
        //console.log(global.todoCnt)
    }

    const checkFooter = () =>{
        //console.log(global.todoCnt)
        if(global.todoCnt === 0){
            footer[0].style.visibility = "hidden"
        }
        else{
            footer[0].style.visibility = "visible"
        }
    }

    function change_todo(e){
        //console.log(global.todoCnt)
        setInput_todo(e.target.value)
    }
  
    return (  
        <input onKeyPress = {addItem} value = {input_todo} onChange = {change_todo} type="text" className="todo-app__input" placeholder = "What needs to be done?"></input>
    );
}
 
export default Input;