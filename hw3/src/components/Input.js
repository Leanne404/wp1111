import { useState } from "react";

const Input = ({add}) => {

    const [input_todo, setInput_todo] = useState("")
    const [id, setId] = useState(0)
    var footer = document.getElementsByClassName("todo-app__footer")
    var cnt = document.getElementsByClassName("todo-count")[0]

    function addItem(event){
        if(event.key === 'Enter'){
            if(input_todo === ""){
                window.alert("Input cannot be empty!")
            }
            else{
                    add(function(prevData){
                        setId(id + 1)
                        global.todoCnt++
                        cnt.innerText = global.todoCnt + "left"
                        return ([...prevData,
                            {
                                input_todo,
                                id: id.toString(),
                                check_box: false,
                                index : prevData.length,
                            }
                        ])
                    })
                    function clearInput(){  
                        setInput_todo("")
                    }
                    clearInput()
                }
                checkFooter()
                checkCompleteBtn()
            }
    }

    const checkFooter = () =>{
        if(global.todoCnt === 0){
            footer[0].style.visibility = "hidden"
        }
        else{
            footer[0].style.visibility = "visible"
        }
    }

    function checkCompleteBtn(){
        let is_check = 0
        var todoCleanCon = document.getElementsByClassName("todo-app__clean")[0]
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                is_check = 1
                break
            }         
        }
        if(is_check === 0){
            todoCleanCon.style.visibility = "hidden"
        }
        else{
            todoCleanCon.style.visibility = "visible"
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