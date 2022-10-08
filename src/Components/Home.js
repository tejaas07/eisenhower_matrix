import React, { useState, useEffect } from "react";
import axios from "axios";

import AddTask from "./AddTask";
import TaskDisplay from "./TaskDisplay";

import "../CSS/Home.css";

const Home = () => {
  const [tasks, setTasks] = useState([]);
  const taskList = [];

  useEffect(() => {
    getTask();
  }, []);

  const getTask = () => {
    axios
      .get(
        "https://eisenhower-matrix-application-default-rtdb.firebaseio.com/task.json"
      )
      .then((response) => {
        // tasks.push(response.data);
        setTasks([response.data]);

        for (const list in response.data) {
          taskList.push({
            id: list,
            description: response.data[list].description,
            important: response.data[list].important,
            urgent: response.data[list].urgent,
            status: response.data[list].status,
            priority: response.data[list].priority,
          });
        }
        setTasks(taskList);
      })
      .catch((err) => {});
  };

  return (
    <div>
      <TaskDisplay allTasks={tasks} taskReloader={getTask} />
      <AddTask taskReloader={getTask} />
    </div>
  );
};

export default Home;
