import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const taskList = [
  {
    task: "Make a todo list",
    id: Date.now(),
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList,
    };
  }

  addTask = (e, item) => {
    e.preventDefault();
    const newTask = {
      task: item,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      taskList: [...this.state.taskList, newTask],
    });
  };

  completeTask = (taskId) => {
    this.setState({
      taskList: this.state.taskList.map((task) => {
        if (taskId === task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      }),
    });
  };

  clearCompleted = (e) => {
    e.preventDefault();
    this.setState({
      taskList: this.state.taskList.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div>
        <h2>Todo List</h2>
        <TodoList
          taskList={this.state.taskList}
          completeTask={this.completeTask}
        />
        <TodoForm addTask={this.addTask} clearCompleted={this.clearCompleted} />
      </div>
    );
  }
}

export default App;
