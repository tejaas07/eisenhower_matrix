import React, { useState } from "react";
import { IoMdAdd } from "react-icons/md";
import { FaPlusCircle } from "react-icons/fa";
import NewTask from "./NewTask";
import { Link } from "react-router-dom";
import "../CSS/AddTask.css";

const AddTask = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <div className="addBody">
      <Link to="/addTask" style={{ textDecoration: "none" }}>
        <button className="addBtn">
          <FaPlusCircle /> <br />
          <div>Add Task</div>
        </button>
      </Link>
    </div>
  );
};

export default AddTask;
