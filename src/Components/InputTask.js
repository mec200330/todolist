import { Select, Input, Button, Grid, Header, Icon } from "semantic-ui-react";
import { useState } from "react";
import {v4 as uuidv4} from 'uuid'

const options =[
{key: "deporte", text:"Deporte", value:"Deporte"},
{key: "casa", text:"Casa", value:"Casa"},
{key: "oficina", text:"Oficina", value:"Oficina"},
{key: "otra", text:"Otra", value:"Otra"}
]


export default function InputTask(props) {

const [task, setTask] = useState({
    idTask:"",
    taskName:"",
    categoryTask:""
});

const [error, setError] = useState(false)
const {createTask} = props;

const onChangeTask =(e)=>{
    setTask({...task, [e.target.name]: e.target.value })
}

const onChangeCategoryTask =(e, data)=>{
    setTask({...task, [data.name]:data.value })
    console.log(task);
}


const onSubmitTask =(e)=>{
    
    e.preventDefault() //no recarga l apagina

    if(task.taskName.trim()==="" || task.categoryTask.trim()===""){
        setError(true)
        return;
    }
//Eliminar mensaje de error
setError(false)
//Asignar un id
task.idTask = uuidv4()
console.log(uuidv4());
//Crear la tarea
createTask(task)

//Limpiando el form
setTask({idTask:"",
taskName:"",
categoryTask:""})

}


  return (
    <>
      <Grid centered columns={2}>
        <Input type="text" action>
          <Input
            size="small"
            icon="add"
            placeholder="Escribe tu tarea"
            iconPosition="left"
            name="taskName"
            value={task.taskName}
            onChange={onChangeTask}
          />
          <Select
            compact
            options={options}
            className="select-form-task"
            name="categoryTask"
            placeholder="Categoria"
            value={task.categoryTask}
            onChange={onChangeCategoryTask}
          />
          <Button type="submit" color="teal" onClick={onSubmitTask}>Añadir tarea</Button>
        </Input>
      </Grid>
      {error && (<Grid centered>
        <Header as='h4' color="red" className="alert-error-form">
            <Icon name="close"/>
            <Header.Content>No se puede dejar tarea ni categoría en blanco</Header.Content>
            <Icon name="close"/>
        </Header>
      </Grid>)}
    </>
  );
}
