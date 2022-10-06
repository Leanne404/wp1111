import x_png from '../img/x.png';

const Item = (input_todo) => {
    return ( 
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
            <input type="checkbox" />
            <label htmlFor ="0"></label>
            </div>
            <p className = "todo-app__item-detail">
                {input_todo.input_todo}
            </p>
            <img className = "todo-app__item-x" src = {x_png} />               
        </li>
     );
}
 
export default Item;