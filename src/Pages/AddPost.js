import React, { useState, useEffect } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import useAuthors from "../hooks/useAuthors";
import { useHistory } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";

const AddPost = () => {
  const [title, setTitle] = useState({ text: "", isValid: "validator" });
  const [content, setContent] = useState({ text: "", isValid: "validator" });
  const [authorId, setauthorId] = useState("");
  const { authors } = useAuthors();
  const history = useHistory();

  const titleInput = (e) => {
    let validator = "invalid";
    if (e.target.value.length >= 10) {
      validator = "valid";
    }
    const data = { text: e.target.value, isValid: validator };
    setTitle(data);
  };

  useEffect(() => {
    setauthorId(authors[0]?._id);
  }, [authors]);

  const contentInput = (e) => {
    let validator = "invalid";
    if (e.target.value.length >= 200) {
      validator = "valid";
    }
    const data = { text: e.target.value, isValid: validator };
    setContent(data);
  };

  const authorInput = (e) => {
    setauthorId(e.target.value);
  };

  const addPosts = (e) => {
    e.preventDefault();
    if (content.isValid === "valid" && title.isValid === "valid") {
      const formData = new FormData();
      formData.append("title", title.text);
      formData.append("content", content.text);
      formData.append("authorId", authorId);
      let postDetail = {
        title: title.text,
        content: content.text,
        authorId: authorId
      };
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(postDetail)
      };
      trackPromise(
        fetch(`https://react-blog-rest-api.herokuapp.com/posts`, config)
          .then((response) => response.json())
          .then((data) => {
            alert("Post has been added Successfully");
            history.push("/");
          })
          .catch((error) => {
            console.log(error);
            alert("Error! Please check the data");
          })
      );
    } else {
      alert("Please enter valid data");
    }
  };

  return (
    <div className="container">
      <Form>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            id="title"
            placeholder="Enter the Title"
            value={title.text}
            onChange={titleInput}
            valid={title.isValid === "valid" ? true : false}
            invalid={title.isValid === "invalid" ? true : false}
            required
          />
          <FormGroup>
            <Label for="authors">Author:</Label>
            <Input
              type="select"
              name="authors"
              id="authors"
              onChange={authorInput}
              required
            >
              {authors.map((element, index) => {
                return (
                  <option key={index} id={element._id} value={element._id}>
                    {element.name}
                  </option>
                );
              })}
            </Input>
          </FormGroup>
        </FormGroup>
        <FormGroup>
          <Label for="content">Content: </Label>
          <Input
            type="textarea"
            name="content"
            id="content"
            rows="10"
            value={content.text}
            onChange={contentInput}
            placeholder="Write the content here(not less than 200 characters).."
            valid={content.isValid === "valid" ? true : false}
            invalid={content.isValid === "invalid" ? true : false}
            required
          />
        </FormGroup>
        <Button type="submit" onClick={addPosts}>
          Add Post
        </Button>
      </Form>
    </div>
  );
};

export default AddPost;
