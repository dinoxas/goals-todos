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
      <div className="panel is-info">
        <p className="panel-heading">Todos</p>
        <div style={{ borderBottom: "1px solid #ededed", padding: "10px" }}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Add a todo..."
                ref={input => (this.input = input)}
              />
            </div>
            <div className="control">
              <button className="button is-info" onClick={this.addItem}>
                <span className="icon">
                  <FaPlusSquare size="28" />
                </span>
              </button>
            </div>
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
