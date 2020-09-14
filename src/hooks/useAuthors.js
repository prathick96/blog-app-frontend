import { useState, useEffect } from "react";
import { trackPromise } from "react-promise-tracker";

const useAuthors = () => {
  const [authors, setAuthors] = useState([]);

  useEffect(() => {
    trackPromise(
      fetch("https://react-blog-rest-api.herokuapp.com/authors")
        .then((res) => res.json())
        .then((data) => {
          setAuthors(data.authors);
        })
    );
  }, []);

  return { authors };
};

export default useAuthors;
