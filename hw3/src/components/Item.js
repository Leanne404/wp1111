import { useState } from 'react';
import x_png from '../img/x.png';

const Item = ({input_todo, id, check_box}) => {
    const [checkBoxChange, setCheckBoxChange] = useState(false)
    // const [indexTemp, setIndexTemp] = useState(0)
    var cnt = document.getElementsByClassName("todo-count")[0]
    //console.log("cnt =",todo_cnt+1);
    // let checkbox_temp = check_box
    // console.log("checkbox")
    console.log('item')
    function click_list(){
        console.log('click')
        var todos_checkbox = document.getElementById(id)
        var todos = todos_checkbox.parentNode.parentNode.getElementsByClassName("todo-app__item-detail")
        //console.log(todos[0])
        if(check_box === false){
            console.log("f to t");
            setCheckBoxChange(true)
            // setIndexTemp(index)
            //checkbox_temp = check_box
            // console.log("temp_in",checkbox_temp)
            todos[0].style.textDecoration = "line-through";
            todos[0].style.opacity = 0.5;
            global.todoCnt--;
            cnt.innerText = global.todoCnt + "left"
            checkCompleteBtn()
            // console.log("t",checkBoxChange)
        }
        else{
            console.log("t to f")
            setCheckBoxChange(false)
            // setIndexTemp(index)
            //checkbox_temp = check_box
            // console.log("temp_in",checkbox_temp)
            todos[0].style.textDecoration = "none";
            todos[0].style.opacity = 1;   
            global.todoCnt++
            cnt.innerText = global.todoCnt + "left"
            checkCompleteBtn()
            
            // console.log("f",checkBoxChange)
        }
        //console.log("in2",checkBoxChange)
        //console.log("todo",todos_checkbox.parentNode.parentNode)
    }
    // console.log("boxchange",checkBoxChange)
    // console.log("a",is_set)
    check_box = checkBoxChange
    console.log("box",check_box)
    //console.log("b",todoList)
    
    function checkCompleteBtn(){
        let is_check = 0
        var todoCleanCon = document.getElementsByClassName("todo-app__clean")[0]
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            //console.log("opacity of",i,"=",todoAppListItemText.style.opacity)
            if(todoAppListItemText.style.opacity === "0.5"){
                is_check = 1
                break
                //console.log("opacity 0.5")
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
        //console.log(global.todoCnt)
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
        console.log("todo item =",todoItem)
        if(todoH1.style.opacity === "0.5"){
            cnt.innerText = global.todoCnt + "left"
        }
        else{
            global.todoCnt--
            cnt.innerText = global.todoCnt + "left"
        }
        todoItem.parentNode.removeChild(todoItem)
        console.log("delete")
        checkCompleteBtn()
        console.log(allTodo.length - 1)
        if(allTodo_num  - 1 === 0){
            checkFooter()
        }
    }
    //todoList[indexTemp].check_box = checkBoxChange
    // console.log("boxInTodo",todoList[indexTemp].check_box )
    
    
    //console.log(check_box)
    // function resetTodo(){
    //     if(is_set === 1 && is_click == 1){
    //         setTodoList_list(todoList)
    //         console.log("in reset")
    //     }
    // }
    
    // console.log("temp_out",checkbox_temp)
    // check_box = checkbox_temp
    // console.log("out",check_box)


    
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
