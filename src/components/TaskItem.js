import React, { useState } from 'react';
// for the close icon
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

// component for each task item in the list. It receives a task object (including details like ID and status), a function to toggle the task's completion on checkbox click, and another function to remove the task when its corresponding button is clicked.
function TaskItem({ task, onToggleTask, onRemoveTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [description, setDescription] = useState(task.description || '');

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
        };

    // Prevent the default behavior of the Enter key, and call the saveDescription function instead to save the description
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
        saveDescription();
        }
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
        };

    const saveDescription = () => {
        setIsEditing(false);
    }

    // the task card with the task title, checkbox, remove button, and description
    return (
      <div className='task-card'>
        <div className='task-header'>
          <label className='task-label'>
            <input 
              type="checkbox" 
              checked={task.isCompleted} 
              onChange={() => onToggleTask(task.id)} 
              style={{ display: 'none' }} // Hide the checkbox
            />
            <span className="checkbox-container"></span> {/* Custom checkbox */}
            <span className={task.isCompleted ? 'task-title task-completed' : 'task-title'}>
              {task.text}
            </span>
          </label>
          <button className='remove-btn' onClick={() => onRemoveTask(task.id)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
        <div className='description-container'>
            {isEditing ? (
                <textarea
                type='text'
                value={description}
                onChange={handleDescriptionChange}
                onBlur={saveDescription}
                autoFocus
                onKeyDown={handleKeyDown}
                style={{ width: '100%' }}
                />
            ) : (
                <p className='task-description' onClick={toggleEdit}>
                    {description || "Click to add a description..."}
                </p>
            )}
        </div>
      </div>
    );
  }
  

export default TaskItem;