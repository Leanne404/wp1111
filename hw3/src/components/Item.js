import x_png from '../img/x.png';

const Item = () => {
    return ( 
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
            <input id="0" type="checkbox" />
            <label htmlFor ="0"></label>
            </div>
            <p className = "todo-app__item-detail">
                aaa
            </p>
            <img className = "todo-app__item-x" src = {x_png} />               
        </li>
     );
}
 
export default Item;