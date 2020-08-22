import React, { Component } from "react";
import PropTypes from "prop-types";

export class Todoitem extends Component {
  getStyle = () => {
    // if (this.props.todo.completed){
    //     return {
    //         textDecoration: 'line-through'
    //     }
    // } else{
    //     return {
    //         textDecoration: 'none'
    //     }
    // }
    // Now ssmall way
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  //   markComplete = (e) => {
  //     console.log(this.props)
  //   }

  render() {
    //   Using this we don't have to type this.props.todo all the time
    const {id, title } = this.props.todo;
    
    return (
      // <div style={ itemStyle }>
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} />{" "}
          {title}
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: PropTypes.object.isRequired,
};

// Style can also be done by creating variables
// const itemStyle = {
//     backgroundColor: '#f4f4f4'
// }

export default Todoitem;
