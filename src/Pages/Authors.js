import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import useAuthors from "../hooks/useAuthors";
import Author from "../Components/Author";

const Authors = () => {
  const { authors } = useAuthors();
  let { path, url } = useRouteMatch();
  return (
    <div className="container">
      <ul>
        {authors.map((author, index) => {
          return (
            <li key={index}>
              <NavLink to={`${url}/${author._id}`}>{author.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Switch>
        <Route path={`${path}/:authorId`}>
          <Author />
        </Route>
      </Switch>
    </div>
  );
};

export default Authors;
