import { useState } from "react";
import Header from "./Components/Header";
import List from "./Components/List";


function App() {

  const [todo,setTodo] = useState([]);

  const addTask = (task) => {
      setTodo([
        ...todo,
        task
      ])
  }

  const deleteTask = (index) => {
    
    todo.splice(index,1);

    setTodo([
      ...todo
    ])
  }

  return (
    <div className="container mt-4">
        <Header addTask={addTask} />
        <List task={todo} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
