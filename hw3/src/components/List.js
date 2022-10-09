import { useState } from 'react';
import Item from './Item'

const List = ({todoList}) => {
    

    console.log("list")
    return (
        <div className="todo-app__list">
            {todoList.map((todo_item) => {
                const {input_todo, id, check_box} = todo_item;
                return(<Item 
                    todoList = {todoList}
                    input_todo = {input_todo} 
                    key = {id} 
                    id = {id} 
                    check_box = {check_box}
                    // index = {index}
                    />)      
                })
            }
        </div>
    );
}
 
export default List;