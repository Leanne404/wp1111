import { useState } from 'react';
import x_png from '../img/x.png';

const Item = ({input_todo, id, check_box}) => {

    function click_list(){
        var todos = document.getElementsByClassName("todo-app__item-detail")
        console.log("in",check_box)
        if(check_box === false){
            console.log("f to t");
            check_box = true
            todos[0].style.textDecoration = "line-through";
            todos[0].style.opacity = 0.5;
            console.log("t",check_box)
        }
        else{
            console.log("t to f")
            check_box = false
            todos[0].style.textDecoration = "none";
            todos[0].style.opacity = 1;   
            console.log("f",check_box)
        }
        console.log("in2",check_box)
    }
    console.log("out",check_box)

    
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