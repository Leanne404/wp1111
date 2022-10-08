import { useState } from 'react';
import x_png from '../img/x.png';

const Item = ({input_todo, id, check_box}) => {
    const [checkBoxChange, setCheckBoxChange] = useState(false)
    //console.log("cnt =",todo_cnt+1);
    // let checkbox_temp = check_box
    // console.log("checkbox")
    function click_list(){
        var todos_checkbox = document.getElementById(id)
        var todos = todos_checkbox.parentNode.parentNode.getElementsByClassName("todo-app__item-detail")
        //console.log(todos[0])
        if(check_box === false){
            // console.log("f to t");
            setCheckBoxChange(true)
            //checkbox_temp = check_box
            // console.log("temp_in",checkbox_temp)
            todos[0].style.textDecoration = "line-through";
            todos[0].style.opacity = 0.5;
            global.todoCnt--;
            // console.log("t",check_box)
        }
        else{
            // console.log("t to f")
            setCheckBoxChange(false)
            //checkbox_temp = check_box
            // console.log("temp_in",checkbox_temp)
            todos[0].style.textDecoration = "none";
            todos[0].style.opacity = 1;   
            global.todoCnt++
            // console.log("f",check_box)
        }
        // console.log("in2",check_box)
    }
    check_box = checkBoxChange
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