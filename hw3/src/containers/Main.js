import { useState } from "react";
import Input from '../components/Input'
import List from '../components/List'

const Main = ({setNote}) => {
    const [todo, setTodo] = useState([]);

    function putTodoListOut(){
        console.log('main')
        setNote(todo)
        //console.log(setNote)
    }

    return ( 
        <div onChange ={putTodoListOut} className="todo-app__main">
            <Input add = {setTodo} />   
            <List todoList = {todo} />         
        </div>
    );


}
    
export default Main;
