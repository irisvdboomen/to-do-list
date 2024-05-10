import React, { useState } from 'react';
import './App.css';
import AddTask from './components/AddTask';
import SelectedDate from './components/SelectedDate';
import TaskList from './components/TaskList';

// main component
function App() {
  const [tasks, setTasks] = useState([]); // state to store list of tasks
  
  // function to add a new task, each getting a unique id and completion status
  function handleAddTask(taskText) {
    const newTaskObj = { id: Date.now(), text: taskText, isCompleted: false };
    setTasks([...tasks, newTaskObj]);
  };
  
  // function to toggle the completion status of a task, based on its id
  const toggleTaskCompletion = (taskId) => {
    const updatedTask = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isCompleted: !task.isCompleted };
      }
      return task;
    });
    setTasks(updatedTask);
  };

  // function to remove a task from the list, based on its id
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  // rendering the main component, which has three components: SelectedDate -> for updating the day, TaskList -> for the list of tasks, and AddTask -> for adding a new task
  return (
    <div className="App">
      <div className='date'>
        <SelectedDate />
      </div>
      <div className='tasks'>
        <TaskList tasks={tasks} onToggleTask={toggleTaskCompletion} onRemoveTask={removeTask} />
        <AddTask onAddTask={handleAddTask} />
        </div>
    </div>
  );
}

export default App;