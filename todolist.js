console.log("enter toDoPage");
document.addEventListener('DOMContentLoaded', function(){

    class Todoform{
        constructor(tasktodo){
          this.addtodo=tasktodo
        }
  }


    let onTaskEnter = document.getElementById("todolistid");
    onTaskEnter?.addEventListener('submit',(evt)=>{evt.preventDefault(); addTask()} );
    function addTask() {
        console.log("task added");
        let task =  document.getElementById("taskId").value;
        
        if(task){
            let taskform=new Todoform(document.getElementById("taskId").value)
            console.log("todolist",taskform)
        }
    
    }
})
