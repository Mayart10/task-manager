import React, { useState } from 'react';
import { createTask } from '../services/taskService';
import { toast } from 'react-toastify';

const TaskForm = ({ onTaskCreated }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Pending');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = { title, description, status, dueDate };
    const createdTask = await createTask(newTask);
    onTaskCreated(createdTask);
    setTitle('');
    setDescription('');
    setStatus('Pending');
    setDueDate('');
    toast.success('Tâche ajoutée avec succès!');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Titre"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
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
      <button type="submit">Ajouter Tâche</button>
    </form>
  );
};

export default TaskForm;
