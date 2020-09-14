import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import Post from "./Post";

const Author = () => {
  const [author, setAuthor] = useState({});

  const { params } = useRouteMatch();

  useEffect(() => {
    trackPromise(
      fetch(
        `https://react-blog-rest-api.herokuapp.com/posts/author/${params.authorId}`
      )
        .then((res) => res.json())
        .then((data) => setAuthor(data.post))
    );
  }, [params]);

  return (
    <div>
      {author.map((element, index) => {
        return (
          <Post
            key={index}
            id={element._id}
            author={element.author?.name}
            title={element.title}
            content={element.content}
            isSummary
          />
        );
      })}
    </div>
  );
};

export default Author;
