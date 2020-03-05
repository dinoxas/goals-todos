import React from "react";
import { connect } from "react-redux";
import List from "./List";
import { handleAddGoal, handleDeleteGoal } from "../actions/goals";
import { FaPlusSquare } from "react-icons/fa";

class Goals extends React.Component {
  addItem = e => {
    e.preventDefault();

    this.props.dispatch(
      handleAddGoal(this.input.value, () => (this.input.value = ""))
    );
  };
  removeItem = goal => {
    this.props.dispatch(handleDeleteGoal(goal));
  };
  render() {
    return (
      <div className="panel is-success">
        <p className="panel-heading">Goals</p>
        <div style={{ borderBottom: "1px solid #ededed", padding: "10px" }}>
          <div className="field has-addons">
            <div className="control is-expanded">
              <input
                className="input"
                type="text"
                placeholder="Add a goal..."
                ref={input => (this.input = input)}
              />
            </div>
            <div className="control">
              <button className="button is-success" onClick={this.addItem}>
                <span>Add Goal</span>
                <span className="icon">
                  <FaPlusSquare color="" />
                </span>
              </button>
            </div>
          </div>
        </div>
        <List items={this.props.goals} remove={this.removeItem} />
      </div>
    );
  }
}

export default connect(state => ({
  goals: state.goals
}))(Goals);
