import { useState } from 'react';
import x_png from '../img/x.png';

const Item = ({todoList, input_todo, id, check_box}) => {
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
            // console.log("f",checkBoxChange)
        }
        //console.log("in2",checkBoxChange)
        //console.log("todo",todos_checkbox.parentNode.parentNode)
    }
    // console.log("boxchange",checkBoxChange)
    // console.log("a",is_set)
    check_box = checkBoxChange
    console.log("box",check_box)
    //todoList[indexTemp].check_box = checkBoxChange
    // console.log("boxInTodo",todoList[indexTemp].check_box )
    // console.log("b",todoList, indexTemp)
    
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
            <img className = "todo-app__item-x" src = {x_png} />               
        </li>
     );
}
export default Item;
