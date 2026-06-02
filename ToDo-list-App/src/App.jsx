import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { text: task, completed: false }]);
    setTask("");
  };

  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const completionPercentage =
    tasks.length === 0
      ? 0
      : Math.round((completedTasks / tasks.length) * 100);

  return (
    <div className="wrapper">
      <div className="container">
        <h1>📝 To-Do List</h1>

        <div className="progress">
          <p>Task Completion: {completionPercentage}%</p>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${completionPercentage}%` }}
            ></div>
          </div>
        </div>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter a task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
        </div>

        <ul>
          {tasks.map((item, index) => (
            <li key={index}>
              <span
                className={item.completed ? "completed" : ""}
              >
                {item.text}
              </span>

              {!item.completed && (
                <button
                  className="delete-btn"
                  onClick={() => completeTask(index)}
                >
                  Complete
                </button>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;