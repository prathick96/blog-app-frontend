import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import { Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Authors from "./Pages/Authors";
import PostPage from "./Pages/PostPage";
import AddPost from "./Pages/AddPost";
import ErrorBoundry from "./Components/ErrorBoundry";
import "./styles.css";
import AddAuthor from "./Pages/AddAuthor";
// const CountReducer = (state, action) => {
//   switch (action) {
//     case "increment":
//       return state + 1;

//     case "decrement":
//       return state - 1;

//     default:
//       return state;
//   }
// };
export default function App() {
  //const [count, dispatch] = useReducer(CountReducer, 0);

  return (
    <>
      <Header />
      {/* <h1>{count}</h1>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("decrement")}>-</button> */}
      <Switch>
        <Route exact path="/">
          <ErrorBoundry>
            <Home />
          </ErrorBoundry>
        </Route>

        <Route exact path="/posts/:id">
          <ErrorBoundry>
            <PostPage />
          </ErrorBoundry>
        </Route>

        <Route path="/authors">
          <ErrorBoundry>
            <Authors />
          </ErrorBoundry>
        </Route>

        <Route exact path="/add-post">
          <ErrorBoundry>
            <AddPost />
          </ErrorBoundry>
        </Route>

        <Route exact path="/add-author">
          <ErrorBoundry>
            <AddAuthor />
          </ErrorBoundry>
        </Route>
      </Switch>
    </>
  );
}
