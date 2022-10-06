const Item = () => {
    return ( 
        <li class="todo-app__item">
            <div class="todo-app__checkbox">
            <input id="0" type="checkbox" />
            <label for="0"></label>
            </div>
            <h1 class = "todo-app_item-detail">
                This is the first TODO!
            </h1>
            <img class = "todo-app_item-x" scr = "./img/x.png" />               
        </li>
     );
}
 
export default Item;