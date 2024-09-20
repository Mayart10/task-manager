import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const TaskStats = ({ tasks }) => {
  const data = [
    { name: 'En attente', value: tasks.filter(task => task.status === 'Pending').length },
    { name: 'En cours', value: tasks.filter(task => task.status === 'In Progress').length },
    { name: 'Terminé', value: tasks.filter(task => task.status === 'Completed').length },
  ];

  const COLORS = ['#FFBB28', '#FF8042', '#0088FE'];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};

export default TaskStats;
