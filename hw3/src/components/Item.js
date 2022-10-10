import { useState } from 'react';
import x_png from '../img/x.png';

const Item = ({input_todo, id, check_box}) => {
    const [checkBoxChange, setCheckBoxChange] = useState(false)
    var cnt = document.getElementsByClassName("todo-count")[0]
    function click_list(){
        var todos_checkbox = document.getElementById(id)
        var todos = todos_checkbox.parentNode.parentNode.getElementsByClassName("todo-app__item-detail")
        if(check_box === false){
            setCheckBoxChange(true)
            todos[0].style.textDecoration = "line-through";
            todos[0].style.opacity = 0.5;
            global.todoCnt--;
            cnt.innerText = global.todoCnt + "left"
            checkCompleteBtn()
        }
        else{
            setCheckBoxChange(false)
            todos[0].style.textDecoration = "none";
            todos[0].style.opacity = 1;   
            global.todoCnt++
            cnt.innerText = global.todoCnt + "left"
            checkCompleteBtn()
        }
    }
    check_box = checkBoxChange
    
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

    function checkFooter(){
        var footer = document.getElementsByClassName("todo-app__footer")
        if(global.todoCnt === 0){
            footer[0].style.visibility = "hidden"
        }
        else{
            footer[0].style.visibility = "visible"
        }
    }

    function deleteTodo(){
        var todos_checkbox = document.getElementById(id)
        var todoItem = todos_checkbox.parentNode.parentNode
        var todoH1 = todoItem.getElementsByTagName("h1")[0]
        var allTodo = document.getElementsByClassName("todo-app__list")[0]
        var allTodo_num = allTodo.getElementsByTagName("li").length
        if(todoH1.style.opacity === "0.5"){
            cnt.innerText = global.todoCnt + "left"
        }
        else{
            global.todoCnt--
            cnt.innerText = global.todoCnt + "left"
        }
        todoItem.parentNode.removeChild(todoItem)
        checkCompleteBtn()
        if(allTodo_num  - 1 === 0){
            checkFooter()
        }
    }
    
    return ( 
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
            <input onClick = {click_list} id ={id} type="checkbox" />
            <label htmlFor ={id}></label>
            </div>
            <h1 className = "todo-app__item-detail">
                {input_todo}
            </h1>
            <img onClick = {deleteTodo} className = "todo-app__item-x" src = {x_png} />               
        </li>
     );
}
export default Item;
