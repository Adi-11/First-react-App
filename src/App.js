import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { v4 as uuidv4 } from "uuid";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuidv4(),
      //   title: "Solve pending questions",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Assignment works completion",
      //   completed: false,
      // },
      // {
      //   id: uuidv4(),
      //   title: "Take a nap",
      //   completed: false,
      // },
    ],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }

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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res =>  this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)]
    }));
    // console.log(id)
   
  };

  // Add todo
  addTodo = (title) => {
    // console.log(title)
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title: title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    // console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          {/* <h1>App</h1> */}
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
