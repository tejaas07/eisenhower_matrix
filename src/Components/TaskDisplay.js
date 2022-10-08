import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Group } from "@mantine/core";

import TaskList from "./TaskList";

import "../CSS/TaskDisplay.css";

const TaskDisplay = (props) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [priority, setPriority] = useState("");

  const modalHider = () => {
    setModal(false);
  };

  return (
    <div>
      <div></div>
      <div className="table">
        <table>
          <thead>
            <tr>
              <th>Priority</th>
              <th>Urgent</th>
              <th>Not Urgent</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="sideP">
                <div>Important</div>
              </th>
              <th
                className="card"
                id="c1"
                onClick={() => {
                  setPriority(0);
                  setModal(true);
                }}
              >
                Do it
              </th>
              <th
                className="card"
                id="c2"
                onClick={() => {
                  setPriority(1);
                  setModal(true);
                }}
              >
                Decide
              </th>
            </tr>
            <tr>
              <th className="sideP">
                <div> Not Important</div>
              </th>
              <th
                className="card"
                id="c3"
                onClick={() => {
                  setPriority(2);
                  setModal(true);
                }}
              >
                Delegate
              </th>
              <th
                className="card"
                id="c4"
                onClick={() => {
                  setPriority(3);
                  setModal(true);
                }}
              >
                Delete
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      {modal ? (
        <Modal size="lg" opened={modal} onClose={() => setModal(false)}>
          <div>
            <TaskList
              hideM={modalHider}
              priority={priority}
              allTasks={props.allTasks}
              taskReloader={props.taskReloader}
            />
          </div>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};

export default TaskDisplay;
