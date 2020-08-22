import React, { Component } from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Solve pending questions",
        completed: false,
      },
      {
        id: 2,
        title: "Assignment works completion",
        completed: false,
      },
      {
        id: 3,
        title: "Take a nap",
        completed: false,
      },
    ],
  };

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

  render() {
    // console.log(this.state.todos);
    return (
      <div className="App">
        {/* <h1>App</h1> */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
