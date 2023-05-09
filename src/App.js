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

export default class App extends Component {
  apiKey = "5b00bdec3e394d95a20a56679e29104c";
  render() {
    return (
      <>
        <Router>
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News
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
        </Router>
      </>
    );
  }
}
