import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
  return (
    <div>
      {props.taskList.map((item) => {
        return (
          <Todo key={item.id} item={item} completeTask={props.completeTask} />
        );
      })}
    </div>
  );
};

export default TodoList;
