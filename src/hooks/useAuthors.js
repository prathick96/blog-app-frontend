import { useState, useEffect } from "react";

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    fetch("https://react-blog-rest-api.herokuapp.com/authors")
      .then((res) => res.json())
      .then((data) => {
        setAuthors(data.authors);
      })
      .catch((e) => console.log(e));
  }, []);

  return { authors };
};

export default useAuthors;
