console.log("enter toDoPage");
document.addEventListener('DOMContentLoaded', function(){

    class Todoform{
        constructor(tasktodo, UserId){
          this.title=tasktodo,
          this.status = 1
          this.UserId = UserId
        }
  }

  const showList = async () =>{
      let user = JSON.parse(localStorage.getItem("user")??{})
    const requestOptions = {
        method: 'GET',
        
    };
    fetch(`http://localhost:3000/todos/get-todo-by-userid/${user.UserId}`, requestOptions)
        .then(response => response.json())
        .then(data => {
            console.log('list data: ', data)
            if(data.length>0){
                data.map(listItem=>{

                    const li = document.createElement("li");
                    li.innerHTML = listItem.title
                    document.getElementById("list").appendChild(li)
                })

            }

        }
        );
  }

  showList()

    let onTaskEnter = document.getElementById("todolistid");
    onTaskEnter?.addEventListener('submit',(evt)=>{evt.preventDefault(); addTask()} );
    function addTask() {
        console.log("task added");
        let task =  document.getElementById("taskId").value;
        
        if(task){
            let user = JSON.parse(localStorage.getItem("user")??{})
            let taskform=new Todoform(document.getElementById("taskId").value, user?.UserId)
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskform)
            };
            fetch('http://localhost:3000/todos/add-todo', requestOptions)
                .then(response => response.json())
                .then(data => {
                    console.log('data: ', data)
                    // window.location.href = "./login.html"
                    document.getElementById("todolistid").reset()

                    const li = document.createElement("li");
                    li.innerHTML = taskform.title
                    document.getElementById("list").appendChild(li)
                }
                );
        }
    
    }
})
