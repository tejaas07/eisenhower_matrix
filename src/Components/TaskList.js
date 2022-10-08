import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Table } from "@mantine/core";

import "../CSS/TaskList.css";

const TaskList = (props) => {
  const changeStatus = (id) => {
    axios
      .patch(
        `https://eisenhower-matrix-application-default-rtdb.firebaseio.com/task/${id}.json`,
        { status: true }
      )
      .then((response) => {
        props.taskReloader();
      })
      .catch();
  };

  const deleteTask = (id) => {
    axios
      .delete(
        `https://eisenhower-matrix-application-default-rtdb.firebaseio.com/task/${id}.json`
      )
      .then((response) => {
        props.taskReloader();
      })
      .catch();
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
          fontSize: "19px",
          fontWeight: "600",
        }}
      >
        {props.priority == "0" ? "Do it now" : ""}
        {props.priority == "1" ? "Decide when to do it" : ""}
        {props.priority == "2" ? "Delegate it" : ""}
        {props.priority == "3" ? "Drop it" : ""}
      </div>
      <Table
        highlightOnHover
        style={{ marginBottom: "20px", width: "100%" }}
        // horizontalSpacing="xs"
        // verticalSpacing="xs"
        // fontSize="s"
      >
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Status</th>
            <th>Delete</th>
            <th>Priority</th>
          </tr>
        </thead>
        {props.allTasks.map((val, i) => (
          <tbody key={i}>
            {val.priority == props.priority ? (
              <tr>
                <td>{val.description}</td>
                <td>
                  {val.status ? (
                    "Completed"
                  ) : (
                    <input
                      type="checkbox"
                      onChange={() => {
                        changeStatus(val.id);
                      }}
                    />
                  )}
                </td>
                <td>
                  <button
                    style={{
                      backgroundColor: "#ef8f9e",
                    }}
                    onClick={() => {
                      deleteTask(val.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>{val.priority}</td>
              </tr>
            ) : (
              ""
            )}
          </tbody>
        ))}
      </Table>
      <button
        style={{
          display: "flex",
          alignSelf: "center",
          alignContent: "center",
          justifyContent: "center",
          backgroundColor: "#ef8f9e",
          // width: "10%",
        }}
        onClick={() => {
          props.hideM();
        }}
      >
        Back
      </button>
    </div>
  );
};

export default TaskList;
