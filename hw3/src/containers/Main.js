import { useState } from "react";
import Input from '../components/Input'
import List from '../components/List'

const Main = () => {
    const [todo, setTodo] = useState([]);
    return ( 
        <div className="todo-app__main">
            <Input add = {setTodo}/>   
            <List todoList = {todo}/>         
        </div>
    );
}
    
export default Main;
