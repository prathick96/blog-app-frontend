import React from "react";
import { NavLink, Switch, Route, useHistory } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import useAuthors from "../hooks/useAuthors";
import Author from "../Components/Author";
import AddAuthor from "./AddAuthor";
import { Button } from "reactstrap";

const Authors = () => {
  const { authors } = useAuthors();
  const history = useHistory();
  const addAuthor = () => {
    history.push(`/add-author`);
  };

  let { path, url } = useRouteMatch();

  return (
    <div className="container">
      <>
        <br />
        <ul>
          {authors.map((author, index) => {
            return (
              <li key={index}>
                <NavLink to={`${url}/${author._id}`}>{author.name}</NavLink>
              </li>
            );
          })}
        </ul>
        <br />
        <Button onClick={addAuthor}>Add Author</Button>
        <br />
        <br />
        <Switch>
          <Route path={`${path}/:authorId`}>
            <Author />
          </Route>
          <Route exact path="/add-author">
            <AddAuthor />
          </Route>
        </Switch>
      </>
    </div>
  );
};

export default Authors;
