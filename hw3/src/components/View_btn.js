const View_btn = () => {
    return (  
        <ul className="todo-app__view-buttons">
            <li><button className="todo-all">All</button></li>
            <li><button className="todo-active">Active</button></li>
            <li><button className="todo-completed">Completed</button></li>
        </ul>
    );
}
    
export default View_btn;