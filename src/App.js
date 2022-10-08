import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import NewTask from "./Components/NewTask";
import TaskList from "./Components/TaskList";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/addTask" element={<NewTask />} />
          <Route path="/taskList" element={<TaskList />} />
        </Routes>
    </div>
  );
}

export default App;
