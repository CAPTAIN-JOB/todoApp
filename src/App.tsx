import "./App.css";
import AddTodoForm from "./components/AddTodoForm";
import TodoList from "./components/TodoList";
import TotalComplete from "./components/TotalComplete";

function App() {
  return (
    <div>
      <h1>My Todo List</h1>
      <AddTodoForm />
      <TodoList />
      <TotalComplete />
    </div>
  );
}

export default App;
