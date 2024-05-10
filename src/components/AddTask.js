import React, { useState, useRef, useEffect } from "react";

// Component for adding a new task, which includes a form with an input field and a button to submit the task
function AddTask({ onAddTask }) {
  const [newTask, setNewTask] = useState('');
  const [showInput, setShowInput] = useState(false);
  const taskFormRef = useRef(null);

  useEffect(() => {
    // Function to detect clicks outside the form, so that the form can be closed when the user clicks away
    function handleClickOutside(event) {
      if (taskFormRef.current && !taskFormRef.current.contains(event.target)) {
        setShowInput(false);
      }
    }

    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [taskFormRef]); // Empty dependency array means this effect will only run once on mount

  // Handles form submission and adds the new task
  const handleSubmit = (event) => {
    event.preventDefault();
    if (newTask.trim()) {
      onAddTask(newTask);
      setNewTask('');
      setShowInput(false);
    }
  };

  // Display the input field when the user clicks the "+" button to add a new task
  return (
    <div ref={taskFormRef}>
      {showInput ? (
        <form onSubmit={handleSubmit} className="task-card">
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Add a new task"
          />
          <button type="submit">Add Task</button>
        </form>
      ) : (
        <div className="new-task">
          <button type="button" onClick={() => setShowInput(true)} aria-label="Add new task">+</button>
        </div>
      )}
    </div>
  );
}

export default AddTask;