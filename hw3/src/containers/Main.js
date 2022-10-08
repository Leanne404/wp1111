import { useState } from "react";
import Input from '../components/Input'
import List from '../components/List'

const Main = ({setNote}) => {
    const [todo, setTodo] = useState([]);

    function putTodoListOut(event){
        if(event.key === 'Enter'){
            console.log('main')
            setNote(todo)
        }
        //console.log(setNote)
    }

    return ( 
        <div onKeyPress ={putTodoListOut} className="todo-app__main">
            <Input add = {setTodo} />   
            <List todoList = {todo} />         
        </div>
    );
}
    
export default Main;
