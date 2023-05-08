import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Checkbox, Form } from "semantic-ui-react";

export default function CreateForm() {
  const [firtname, setFirtname] = useState("");
  const [lastName, setLastName] = useState("");

  const [checkBox, setCheckBox] = useState(false);

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://62431f84b6734894c15b41ad.mockapi.io/users", {
        firtname,
        lastName,
        checkBox
      })
      .then(() => {
        navigate("/read");
      });
  };
  return (
    <Form className="create-form">
      <Form.Field>
        <label>First Name</label>
        <input
          placeholder="First Name"
          onChange={(e) => setFirtname(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <label>Last Name</label>
        <input
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
      </Form.Field>
      <Form.Field>
        <Checkbox
          label="I agree to the Terms and Conditions"
          onChange={(e) => setCheckBox(!checkBox)}
        />
      </Form.Field>
      <Button type="submit" onClick={postData}>
        Submit
      </Button>
    </Form>
  );
}
