import "./App.css";
import React, { useState } from "react";
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

const App = () => {
  const [progress, setProgress] = useState(10);
  const ref = null;
  const apiKey = process.env.REACT_APP_NEWS_API;

  const barColor = "red";
  return (
    <>
      <Router>
        <Navbar />
        <LoadingBar color={barColor} progress={progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={"general1"}
                pageSize={6}
                country={"in"}
                category={"general"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/general"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                pageSize={6}
                country={"in"}
                category={"general"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key={"business"}
                pageSize={6}
                country={"in"}
                category={"business"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key={"entertainment"}
                pageSize={6}
                country={"in"}
                category={"entertainment"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                setProgress={setProgress}
                key={"health"}
                pageSize={6}
                country={"in"}
                category={"health"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key={"general"}
                pageSize={6}
                country={"in"}
                category={"science"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                setProgress={setProgress}
                key={"sports"}
                pageSize={6}
                country={"in"}
                category={"sports"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key={"technology"}
                pageSize={6}
                country={"in"}
                category={"technology"}
                apiKey={apiKey}
              />
            }
          ></Route>
          <Route path="*" element={<p>Path not resolved</p>} />

          {/* <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route> */}
        </Routes>
        <LoadingBar color="#f11946" ref={ref} />
      </Router>
    </>
  );
};

export default App;
