import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  ref = null;
  // apiKey = "5b00bdec3e394d95a20a56679e29104c";
  apiKey = process.env.REACT_APP_NEWS_API;

  barColor = "red";
  progress = 100;

  state = {
    progress: 0,
  };
  setProgress = (progress) => {
    this.setState({
      progress: progress,
    });
  };
  render() {
    // console.log("process ", apiKey);
    return (
      <>
        <Router>
          <Navbar />
          <LoadingBar color={this.barColor} progress={this.state.progress} />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general1"}
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/general"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={6}
                  country={"in"}
                  category={"general"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/business"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"business"}
                  pageSize={6}
                  country={"in"}
                  category={"business"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/entertainment"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"entertainment"}
                  pageSize={6}
                  country={"in"}
                  category={"entertainment"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/health"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"health"}
                  pageSize={6}
                  country={"in"}
                  category={"health"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/science"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"general"}
                  pageSize={6}
                  country={"in"}
                  category={"science"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/sports"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"sports"}
                  pageSize={6}
                  country={"in"}
                  category={"sports"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            <Route
              exact
              path="/technology"
              element={
                <News
                  setProgress={this.setProgress}
                  key={"technology"}
                  pageSize={6}
                  country={"in"}
                  category={"technology"}
                  apiKey={this.apiKey}
                />
              }
            ></Route>
            {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
          </Routes>
          <LoadingBar color="#f11946" ref={this.ref} />
        </Router>
      </>
    );
  }
}
