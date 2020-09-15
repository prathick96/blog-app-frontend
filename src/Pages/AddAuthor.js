import React, { useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { trackPromise } from "react-promise-tracker";
import { useHistory } from "react-router-dom";

const AddAuthor = () => {
  const [name, setName] = useState({ text: "", isValid: "validator" });
  const history = useHistory();

  const nameInput = (e) => {
    let validator = "invalid";
    if (e.target.value.length >= 10) {
      validator = "valid";
    }
    const data = { text: e.target.value, isValid: validator };
    setName(data);
  };

  const addAuthor = (e) => {
    e.preventDefault();
    if (name.isValid === "valid") {
      const formData = new FormData();
      formData.append("title", name.text);
      let authorDetail = {
        name: name.text
      };
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(authorDetail)
      };
      trackPromise(
        fetch(`https://react-blog-rest-api.herokuapp.com/authors`, config)
          .then((response) => response.json())
          .then((data) => {
            alert("Author has been added Successfully");
            history.push("/authors");
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
          <Label for="title">Author Name: </Label>
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Enter Author's Name"
            value={name.text}
            onChange={nameInput}
            valid={name.isValid === "valid" ? true : false}
            invalid={name.isValid === "invalid" ? true : false}
            required
          />
          <br />
          <Button type="submit" onClick={addAuthor}>
            Add
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default AddAuthor;
