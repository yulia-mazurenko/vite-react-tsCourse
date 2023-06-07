import React, { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import { IItem } from "./types/todo";

const App: React.FC = () => {
  const [todos, setTodos] = useState<IItem[]>([]);

  function todoAppHandler(todo: IItem) {
    setTodos((prevTodos) => {
      return [
        ...prevTodos,
        { id: Math.random().toString(), title: todo.title },
      ];
    });
  }

  function todoRemoveHandler(id: string) {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  }
  return (
    <div>
      <AddTodo onAddTodo={todoAppHandler} />
      <TodoList todos={todos} onRemoveTodo={todoRemoveHandler} />
    </div>
  );
};

export default App;
