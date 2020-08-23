import React, { Component } from "react";
import {v4 as uuidv4} from "uuid";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuidv4(),
        title: "Solve pending questions",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Assignment works completion",
        completed: false,
      },
      {
        id: uuidv4(),
        title: "Take a nap",
        completed: false,
      },
    ],
  };

  // toggle complete
  markComplete = (id) => {
    // console.log('form app.js')
    // console.log(id)

    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  // Delete todos
  delTodo = (id) => {
    // console.log(id)
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  // Add todo
  addTodo = (title) => {
    // console.log(title)
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos
            todos={this.state.todos}
            markComplete={this.markComplete}
            delTodo={this.delTodo}
          />
        </div>
      </div>
    );
  }
}

export default App;
