import x_png from '../img/x.png';

const Item = ({input_todo, id}) => {
    console.log(id)
    return ( 
        <li className="todo-app__item">
            <div className="todo-app__checkbox">
            <input id ={id} type="checkbox" />
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