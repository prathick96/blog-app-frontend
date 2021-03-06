import React, { useState, useEffect } from "react";
import Post from "../Components/Post";
import { useRouteMatch, useHistory } from "react-router-dom";
import { Button } from "reactstrap";
import { trackPromise } from "react-promise-tracker";

const PostPage = () => {
  const [post, setPost] = useState({});

  const { params } = useRouteMatch();
  const { goBack } = useHistory();

  useEffect(() => {
    trackPromise(
      fetch(`https://react-blog-rest-api.herokuapp.com/posts/${params.id}`)
        .then((res) => res.json())
        .then((data) => setPost(data.post))
    );
  }, [params]);

  return (
    <>
      <div className="container">
        <br />
        <Button onClick={goBack}>Back</Button>
      </div>
      <br />
      <Post
        id={post._id}
        title={post.title}
        author={post.author?.name}
        content={post.content}
      />
    </>
  );
};
export default PostPage;
