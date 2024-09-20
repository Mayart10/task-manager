import React from 'react';

const TaskFilter = ({ status, setStatus }) => {
  return (
    <div>
      <select value={status} onChange={(e) => setStatus(e.target.value)}>
        <option value="All">Tous</option>
        <option value="Pending">En attente</option>
        <option value="In Progress">En cours</option>
        <option value="Completed">Terminé</option>
      </select>
    </div>
  );
};

export default TaskFilter;
