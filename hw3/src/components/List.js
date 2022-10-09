import Item from './Item'

const List = ({todoList}) => {
    console.log("list")
    return (
        <ul className="todo-app__list" id = "todo-list">
            {todoList.map((todo_item) => {
                const {input_todo, id, check_box} = todo_item;
                return(<Item 
                    input_todo = {input_todo} 
                    key = {id} 
                    id = {id} 
                    check_box = {check_box}
                    // index = {index}
                    />)      
                })
            }
        </ul>
    );
}
 
export default List;