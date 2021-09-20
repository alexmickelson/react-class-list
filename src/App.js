import { useState } from "react";
import AddItem from "./components/AddItem";
import TodoList from "./components/TodoList";
import FilterList from "./components/FilterList";

function App() {
  const [todoList, setTodoList] = useState([{name: 'first', key: 1, description: 'description'}])
  const addItem = () => {
    
  }
  return (
    <div className="App container">
      <FilterList />
      <TodoList todoList={todoList} />
      <AddItem addItem={addItem} />
    </div>
  );
}

export default App;
