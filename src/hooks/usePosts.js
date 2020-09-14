import { useEffect, useState } from "react";
import { trackPromise } from "react-promise-tracker";

const usePosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch("https://react-blog-rest-api.herokuapp.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data.posts))
    );
  }, []);

  return posts;
};

export default usePosts;
