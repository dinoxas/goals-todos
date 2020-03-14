import React from "react";
import { connect } from "react-redux";
import LoadingBar from "react-redux-loading";
import ConnectedTodos from "./Todos";
import ConnectedGoals from "./Goals";
import Header from "./Header";
import { handleInitialData } from "../actions/shared";

class App extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(handleInitialData());
  }
  render() {
    return (
      <div>
        <LoadingBar />
        <Header />
        <div className="container" style={{ marginTop: "30px" }}>
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
