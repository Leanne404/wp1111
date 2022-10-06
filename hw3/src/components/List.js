import { useState } from 'react';
import Item from './Item'

const List = ({todoList}) => {

    
    return (
        <div className="todo-app__list">
            {todoList.map(item => <Item key = {item}/>)}
        </div>
    );
}
 
export default List;