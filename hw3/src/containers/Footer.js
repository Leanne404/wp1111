import View_btn from '../components/View_btn'
import Clean_btn from '../components/Clean_btn'
import { useEffect, useState } from 'react';

const Footer = () => {

    // const [todoCnt, setTodoCnt] = useState(0)
    
    // const set_todo_cnt = () =>{
    //     console.log(global.todoCnt)
    //     setTodoCnt(global.todoCnt)
    // }

    // useEffect(() =>{
    //     set_todo_cnt()
    //     console.log("gcnt=",global.todoCnt)
    // },[global.todoCnt])
    

    return (  
        <footer className="todo-app__footer">
            <div className="todo-app__total">
                <span className="todo-count">{global.todoCnt}</span>
                left
            </div>
            <View_btn />
            <Clean_btn />
        </footer>
    );
}
 
export default Footer;
