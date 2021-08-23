import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


const App=() => {

  const [showAddTask,  setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState( 
    [ 
     {
       id: 1,
       text: 'Do the laundry',
       day: 'Monday at 4:30pm', 
       reminder: true,
     },
     {
       id: 2,
       text: 'Go to the post office',
       day: 'Tuesday at 11:00am',
       reminder: true,
     },
     {
       id: 3, 
       text: 'Go shopping for shoes', 
       day: 'Friday at 6:00pm',
       reminder: false,
     },
   ])

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task
    )
    )
  }

  const addTask = (task) => {

    const id = Math.floor(Math.random +10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  return (
    <div className="container">
      <Header onAdd = {() => {setShowAddTask(!showAddTask)}} showAdd = {showAddTask}/>
      {showAddTask && <AddTask onAdd = {addTask}/>}
      {tasks.length > 0 
      ? <Tasks tasks = {tasks} 
      onDelete = {deleteTask} 
      onToggle = {toggleReminder}
      /> 
      : 'All Tasks Completed'}
    </div>  
  );
}

export default App;

// Class based example: 
// class App extends React.Component {
//   render() {
//     return <h1>Hello from a class</h1>
//   }
// }