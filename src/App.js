import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTask] = useState([]);
  const inputRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    let Newtasks = tasks.slice();
    console.log();
    if (inputRef.current.value.length > 0) {
      Newtasks.push(inputRef.current.value);
    } else {
      alert("Please Enter a valid value");
    }
    setTask(Newtasks);
  }
  return (
    <div className="App">
      <div className="Control">
        <p>Todo List App</p>
        <form onSubmit={handleSubmit}>
          <input placeholder="Add Todo" ref={inputRef} type="text" />
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="tasks">
        {tasks.map((task) => {
          return (
            <div key={task} className="task">
              <div>{task}</div>

              <div className="btns">
                <button>Edit</button>
                <button className="">Remove</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
