import React, { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);
  const [status, setStatus] = useState(task.status);
  const [dueDate, setDueDate] = useState(task.dueDate);

  const handleUpdate = () => {
    onUpdate({ ...task, title, description, status, dueDate });
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Pending">En attente</option>
            <option value="In Progress">En cours</option>
            <option value="Completed">Terminé</option>
          </select>
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <button onClick={handleUpdate}>Enregistrer</button>
        </div>
      ) : (
        <div>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Échéance: {new Date(task.dueDate).toLocaleDateString()}</p>
          <button onClick={() => setIsEditing(true)}>Modifier</button>
          <button onClick={() => onDelete(task._id)}>Supprimer</button>
        </div>
      )}
    </li>
  );
};

export default TaskItem;
