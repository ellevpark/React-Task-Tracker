import React from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {

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
    setTasks(tasks.filter((task) => task.id != id))
  }

  return (
    <div className="container">
      <Header/>
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete = {deleteTask}/> : ''}
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