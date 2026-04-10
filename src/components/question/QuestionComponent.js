import React, { useEffect, useState } from 'react';

function QuestionComponent() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      let data;

      try {
        const response = await fetch('/api/tasks');
        data = await response.json();
      } catch (err) {
        data = [
          {
            _id: "1",
            title: "Complete Assignment",
            description: "React lab work",
            status: "pending"
          },
          {
            _id: "2",
            title: "Prepare PPT",
            description: "Make slides",
            status: "completed"
          }
        ];
      }

      setTasks(data);
    };

    fetchTasks();
  }, []);

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2 style={{ textAlign: 'center' }}>Task List</h2>

      {tasks.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No tasks available</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} style={{ 
            border: '1px solid #ccc', 
            margin: '10px', 
            padding: '10px',
            backgroundColor: '#f9f9f9'
            }}>
            <h3 style={{ marginBottom: '5px' }}>{task.title}</h3>
            <p style={{ color: '#555' }}>{task.description}</p>
            <p><strong>Status:</strong> {task.status}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionComponent;