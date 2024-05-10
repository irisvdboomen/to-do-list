import React from 'react';
import TaskItem from './TaskItem';

// component to display the list of tasks, which includes a list of TaskItem components
function TaskList({ tasks, onToggleTask, onRemoveTask }) {
  return (
    <div className="task-list-container">
      <ul>
        {/* Looping through the tasks array and create a TaskItem component for each task */}
        {tasks.map(task => (
          <li key={task.id}>
            <TaskItem
              task={task}
              onToggleTask={onToggleTask}
              onRemoveTask={onRemoveTask}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;