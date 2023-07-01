import React from "react";
import TodoForm from "@/components/TodoForm";
import Link from "next/link";
import "./todo.scss"

const TodoComponent: React.FC = () => {

  return (
    <div>
      <Link href="/">Go to home</Link>
      <TodoForm/>
    </div>
  );
};

export default TodoComponent;
