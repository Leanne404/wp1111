const Buttons = () => {

    function showAll(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        // console.log(todoAppList)
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        // console.log(todoAppListItem)
        for(let i = 0; i < todoAppListItem.length; i++){
            todoAppListItem[i].style.display = "flex"
        }
        // console.log("all")
    }

    function showActive(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        //console.log(todoAppList)
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        // console.log(todoAppListItem)
        // console.log("len",todoAppListItem.length)
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            console.log("opacity of",i,"=",todoAppListItemText.style.opacity)
            if(todoAppListItemText.style.opacity === "0.5"){
                todoAppListItem[i].style.display = "none"
                //console.log("opacity 0.5")
            }
            else{
                todoAppListItem[i].style.display = "flex"
            }          
        }
        // console.log("active")
    }

    function showComplete(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        // console.log(todoAppList)
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        // console.log(todoAppListItem)
        for(let i = 0; i < todoAppListItem.length; i++){
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            if(todoAppListItemText.style.opacity === "0.5"){
                todoAppListItem[i].style.display = "flex"
            }
            else{
                todoAppListItem[i].style.display = "none"
            }         
        }
        // console.log("complete");
    }

    function clearComplete(){
        let todoAppList = document.getElementsByClassName("todo-app__list")[0];
        let todoAppListItem = todoAppList.getElementsByTagName("li");
        let deleteNum = []
        console.log("len",todoAppListItem.length)
        for(let i = 0; i < todoAppListItem.length; i++){
            // console.log(i)
            let todoAppListItemText = todoAppListItem[i].getElementsByTagName("h1")[0]
            console.log("opacity of",i,"=",todoAppListItemText.style.opacity)
            if(todoAppListItemText.style.opacity === "0.5"){
                // console.log("i=",i)
                deleteNum.push(i)
            }
        }
        console.log(deleteNum)
        for(let j = deleteNum.length - 1; j >= 0; j--){
            todoAppListItem[deleteNum[j]].parentNode.removeChild(todoAppListItem[deleteNum[j]])
        }
        checkFooter()
    }

    function checkFooter(){
        var footer = document.getElementsByClassName("todo-app__footer")
        var todoCleanCon = document.getElementsByClassName("todo-app__clean")[0]
        //console.log(global.todoCnt)
        if(global.todoCnt === 0){
            footer[0].style.visibility = "hidden"
            gtodoCleanCon.style.visibility = "hidden"
        }
        else{
            footer[0].style.visibility = "visible"
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