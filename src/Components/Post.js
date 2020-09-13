import React from "react";
import PropTypes from "prop-types";
import { Button } from "reactstrap";
import { useHistory } from "react-router-dom";

const Post = (props) => {
  const history = useHistory();

  const openPost = () => history.push(`/posts/${props.id}`);

  return (
    <>
      <div className="container">
        <h3>{props.title}</h3>
        <h5>{props.author}</h5>
        <p>
          {props.isSummary
            ? `${props.content?.substring(0, 100)}...`
            : props.content}
        </p>
        {props.isSummary ? <Button onClick={openPost}>Read More</Button> : null}
      </div>
      <br />
    </>
  );
};

Post.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isSummary: PropTypes.bool.isRequired
};

export default Post;
