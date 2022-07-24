import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <Input />
        </div>
      </div>
      <TodoList />
    </div>
  );
}

export default App;
