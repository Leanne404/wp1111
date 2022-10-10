const Buttons = () => {

    function showAll(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            todoAppListItem[i].style.display = "flex"
        }
    }

    function showActive(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                todoAppListItem[i].style.display = "none"
            }
            else{
                todoAppListItem[i].style.display = "flex"
            }          
        }
    }

    function showComplete(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                todoAppListItem[i].style.display = "flex"
            }
            else{
                todoAppListItem[i].style.display = "none"
            }         
        }
    }

    function clearComplete(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        let deleteNum = []
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                deleteNum.push(i)
            }
        }
        for(let j = deleteNum.length - 1; j >= 0; j--){
            todoAppListItem[deleteNum[j]].parentNode.removeChild(todoAppListItem[deleteNum[j]])
        }
        checkCompleteBtn()
        checkFooter()
    }

    function checkFooter(){
        var footer = document.getElementsByClassName("todo-app__footer")
        if(global.todoCnt === 0){
            footer[0].style.visibility = "hidden"
        }
        else{
            footer[0].style.visibility = "visible"
        }
    }

    function checkCompleteBtn(){
        let is_check = 0
        var todoCleanCon = document.getElementsByClassName("todo-app__clean")[0]
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                is_check = 1
                break
            }         
        }
        if(is_check === 0){
            todoCleanCon.style.visibility = "hidden"
        }
        else{
            todoCleanCon.style.visibility = "visible"
        }
        
    }

    return (  
        <>
        <ul className="todo-app__view-buttons">
            <li><button onClick = {showAll} className="todo-all">All</button></li>
            <li><button onClick = {showActive} className="todo-active">Active</button></li>
            <li><button onClick = {showComplete} className="todo-completed">Completed</button></li>
        </ul>
        <div className="todo-app__clean">
            <button onClick = {clearComplete} className="todo-clear-complete">Clear completed</button>
        </div>
        </>
    );
}
    
export default Buttons;