import React, { useEffect, useState } from 'react';

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await fetch('/api/tasks');
        const data = await response.json();
        setTasks(data);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Task List</h2>

      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionComponent;