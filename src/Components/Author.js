import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

const Author = () => {
  const [author, setAuthor] = useState({});

  const { params } = useRouteMatch();

  useEffect(() => {
    fetch(
      `https://react-blog-rest-api.herokuapp.com/authors/${params.authorId}`
    )
      .then((res) => res.json())
      .then((data) => setAuthor(data.author));
  }, [params]);

  return <p>{author.name}</p>;
};

export default Author;
