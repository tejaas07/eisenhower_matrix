import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Modal, Button, Group } from "@mantine/core";
import { Switch } from "@mantine/core";

import TaskList from "./TaskList";

import "../CSS/TaskDisplay.css";

const TaskDisplay = (props) => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const [priority, setPriority] = useState("");
  const [displayStyle, setDisplayStyle] = useState(false);

  const modalHider = () => {
    setModal(false);
  };

  return (
    <div className="container">
      {displayStyle ? (
        <div>
          <div style={{ marginTop: "10%", marginBottom: "3%" }}> Grid View</div>
          <div className="table">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Urgent</th>
                  <th>Not Urgent</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    className="sideP"
                    style={{ height: "2px", margin: "0px", padding: "0px" }}
                  >
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
                  <th
                    className="sideP"
                    style={{
                      width: "1px",
                      // height: "2px",
                      margin: "0px",
                      padding: "0px",
                    }}
                  >
                    <div> Not-Important</div>
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
        </div>
      ) : (
        <div className="tabContainer">
          List View
          <div className="list" id="c1">
            <div className="listText">Do it now</div>
            <div
              className="pButton"
              onClick={() => {
                setPriority(0);
                setModal(true);
              }}
            >
              0
            </div>
          </div>
          <div className="list" id="c2">
            <div className="listText">Decide when to do</div>
            <div
              className="pButton"
              onClick={() => {
                setPriority(1);
                setModal(true);
              }}
            >
              1
            </div>
          </div>
          <div className="list" id="c3">
            <div className="listText">Delegate it</div>
            <div
              className="pButton"
              onClick={() => {
                setPriority(2);
                setModal(true);
              }}
            >
              2
            </div>
          </div>
          <div className="list" id="c4">
            <div className="listText">Delete it</div>
            <div
              className="pButton"
              onClick={() => {
                setPriority(3);
                setModal(true);
              }}
            >
              3
            </div>
          </div>
        </div>
      )}
      <div className="toogleButton">
        <div> View Type</div>

        <Switch
          checked={displayStyle}
          onChange={() => {
            if (displayStyle) {
              setDisplayStyle(false);
            } else {
              setDisplayStyle(true);
            }
          }}
        />
      </div>

      {modal ? (
        <Modal size="110%" opened={modal} onClose={() => setModal(false)}>
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
