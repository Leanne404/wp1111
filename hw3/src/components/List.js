import Item from './Item'

const List = ({todoList}) => {
    
    return (
        <div className="todo-app__list">
            {todoList.map((todo_item) => {
                const {input_todo, id, check_box} = todo_item;
                return(<Item 
                    input_todo = {input_todo} 
                    key = {id} 
                    id = {id} 
                    check_box = {check_box}
                    />)      
                })
            }
        </div>
    );
}
 
export default List;