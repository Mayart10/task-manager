const API_URL = 'http://localhost:5000/tasks';

export const getTasks = async () => {
  const response = await fetch(API_URL);
  return response.json();
};

export const createTask = async (task) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const updateTask = async (task) => {
  const response = await fetch(`${API_URL}/${task._id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  });
  return response.json();
};

export const deleteTask = async (taskId) => {
  await fetch(`${API_URL}/${taskId}`, {
    method: 'DELETE',
  });
};
