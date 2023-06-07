import React from "react";

import { IItem } from "../types/todo";

interface IProps {
  todos: IItem[];
  onRemoveTodo: (id: string) => void;
}

// interface IState {
//   count: number;
// }

//-----------Class Component-----------------------------------
// class TodoList extends React.Component<IProps, IState> {
//   stateHandler() {
//     this.setState(({ count }) => {});
//   }

//   render() {
//     return null;
//   }
// }

//------------Function Component--------------------------------
const TodoList: React.FC<IProps> = ({ todos, onRemoveTodo }) => {
  return (
    <ul>
      {todos.map(({ id, title }) => {
        return (
          <li key={id}>
            <p>{id}</p>
            <p>{title}</p>
            <button onClick={() => onRemoveTodo(id)}>Remove Todo </button>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
