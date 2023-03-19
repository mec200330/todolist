import 'semantic-ui-css/semantic.min.css'
import './App.css';
import Container from './Components/Container'
import Header from './Components/Header';
import InputTask from './Components/InputTask';
import { useEffect, useState } from 'react';
import TaskContent from './Components/TaskContent';


function App() {
//pasar al localstorage
let initialTask = JSON.parse(localStorage.getItem("tasks"))

if(!initialTask){
  initialTask=[]
}

const [tasks, setTasks] = useState(initialTask);


useEffect(()=>{
if(initialTask){
  localStorage.setItem("tasks", JSON.stringify(tasks))
}else{
  localStorage.setItem("tasks", JSON.stringify([]))
}
}, [initialTask, tasks])


const createTask =(task)=>{
console.log(task);
setTasks([...tasks, task])
}

const deleteTask =(id)=>{

const currentTask = tasks.filter((task)=>task.idTask !== id)
setTasks(currentTask)


}

  return (
   <Container>
    <Header/>
    <InputTask createTask={createTask} />
    <TaskContent  tasks={tasks} deleteTask={deleteTask}/>
   </Container>
  );
}

export default App;
