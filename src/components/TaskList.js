import React, { useEffect, useState } from 'react';
import { getTasks, updateTask, deleteTask } from '../services/taskService';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';
import TaskFilter from './TaskFilter';
import TaskStats from './TaskStats';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('All');

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setTasks(tasks);
    };
    fetchTasks();
  }, []);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleTaskUpdated = async (updatedTask) => {
    await updateTask(updatedTask);
    setTasks(tasks.map(task => (task._id === updatedTask._id ? updatedTask : task)));
  };

  const handleTaskDeleted = async (taskId) => {
    await deleteTask(taskId);
    setTasks(tasks.filter(task => task._id !== taskId));
  };

  const filteredTasks = tasks.filter(task => status === 'All' || task.status === status);

  return (
    <div>
      <h1>Liste des Tâches</h1>
      <TaskForm onTaskCreated={handleTaskCreated} />
      <TaskFilter status={status} setStatus={setStatus} />
      <TaskStats tasks={tasks} />
      <ul>
        {filteredTasks.map(task => (
          <TaskItem
            key={task._id}
            task={task}
            onUpdate={handleTaskUpdated}
            onDelete={handleTaskDeleted}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
