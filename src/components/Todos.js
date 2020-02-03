import React from "react";
import { connect } from "react-redux";
import List from "./List";
import {
  handleAddTodo,
  handleDeleteTodo,
  handleToggle
} from "../actions/todos";

import { FaPlusSquare } from "react-icons/fa";

class Todos extends React.Component {
  addItem = e => {
    e.preventDefault();

    this.props.dispatch(
      handleAddTodo(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = todo => {
    this.props.dispatch(handleDeleteTodo(todo));
  };
  toggleItem = id => {
    this.props.dispatch(handleToggle(id));
  };
  render() {
    return (
      <div className="content">
        <h2 className="title is-3">Todos</h2>
        <div className="field has-addons">
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Add Todo"
              ref={input => (this.input = input)}
            />
          </div>
          <div className="control">
            <button className="button" onClick={this.addItem}>
              <span>Add Todo</span>
              <span className="icon">
                <FaPlusSquare color="" />
              </span>
            </button>
          </div>
        </div>

        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    );
  }
}

export default connect(state => ({
  todos: state.todos
}))(Todos);
