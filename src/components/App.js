import React from "react";
import { connect } from "react-redux";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    const { loading } = this.props;

    if (loading === true) {
      return <h3>Loading</h3>;
    }

    return (
      <div>
        <div className="hero is-primary">
          <div className="hero-body">
            <h1 className="title is-3 has-text-centered">
              Goals Todo List with React-Redux
            </h1>
            <p className="has-text-centered">
              Open the console to see the current action and state.
            </p>
          </div>
        </div>
        <div className="hero-body">
          <ConnectedTodos />
          <ConnectedGoals />
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  loading: state.loading
}))(App);
