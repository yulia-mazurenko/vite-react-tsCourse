import React, { useState } from "react";

import { IItem } from "../types/todo";

interface IProps {
  onAddTodo: (todo: IItem) => void;
}

//------------using ref-----------------
// const AddTodo: React.FC = () => {
//   const inputRef = useRef<HTMLInputElement>(null);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     console.log(inputRef.current?.value);
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Add Todo</label>
//       <input type="text" ref={inputRef} />
//       <button type="submit">Add Todo</button>
//     </form>
//   );
// };
//----------------------------------------
type OnlyTitle = Pick<IItem, "title">;

const AddTodo: React.FC<IProps> = ({ onAddTodo }) => {
  const [todo, titleTodo] = useState<Partial<OnlyTitle>>({});

  function titleHandler(e: React.ChangeEvent<HTMLInputElement>) {
    titleTodo({ title: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (!todo.title) {
      return;
    }
    onAddTodo(todo as IItem);
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>Add Todo</label>
      <input type="text" onChange={titleHandler} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default AddTodo;
