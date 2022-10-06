import Item from './Item'

const List = ({todoList}) => {
    return (
        <div className="todo-app__list">
            {todoList.map((todo_item) => {
                const {input_todo} = todo_item;
                return(<Item input_todo = {input_todo} key = {input_todo}/>)
        })
        }
        </div>
    );
}
 
export default List;