import React, { useState } from "react";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import axios from "axios";

import "../CSS/NewTask.css";

const NewTask = (props) => {
  const [important, setImportant] = useState(false);
  const [urgent, setUrgent] = useState(false);
  const [description, setDescription] = useState(" ");

  const submitForm = (event) => {
    event.preventDefault();

    let priority;
    {
      important
        ? urgent
          ? (priority = 0)
          : (priority = 1)
        : urgent
        ? (priority = 2)
        : (priority = 3);
    }

    axios
      .post(
        "https://eisenhower-matrix-application-default-rtdb.firebaseio.com/task.json",
        { description, important, urgent, status: false, priority }
      )
      .then((response) => {
        window.location = "/";
      })
      .catch((err) => {});
  };

  return (
    <div className="addTaskCard">
      <form onSubmit={submitForm}>
        <div className="heading">Add New Task</div>

        <div className="displayCard">
          <br />
          <span>
            Description:{" "}
            <input
              type="text"
              onChange={(e) => {
                setDescription(e.target.value);
              }}
              required
            />
          </span>
          <br />
          <span>
            <input
              type="checkbox"
              onChange={(e) => {
                if (important) {
                  setImportant(false);
                }
                if (!important) {
                  setImportant(true);
                }
              }}
            />
            Important
          </span>
          <br />
          <span>
            <input
              type="checkbox"
              onChange={(e) => {
                if (urgent) {
                  setUrgent(false);
                }
                if (!urgent) {
                  setUrgent(true);
                }
              }}
            />
            Urgent
          </span>
          <br />
          <button
            type="submit"
            style={{
              backgroundColor: "#ef8f9e",
              height: "30px",
              width: "30%",
              marginBottom: "20px",
            }}
          >
            Submit
            {/* <Link to="/">Submit</Link> */}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTask;
