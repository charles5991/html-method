import React, { useEffect, useState } from "react";
import { Button, Checkbox, Form } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Update() {
  const [firtname, setFirtname] = useState("");
  const [lastName, setLastName] = useState("");

  const [checkBox, setCheckBox] = useState(false);
  const [id, setID] = useState(null);
  const his = useNavigate();
  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirtname(localStorage.getItem("Firt-Name"));
    setLastName(localStorage.getItem("Last-Name"));
    setCheckBox(localStorage.getItem("Checkbox-Value"));
  }, []);
  const UpdateApi = () => {
    axios
      .put(`https://62431f84b6734894c15b41ad.mockapi.io/users/${id}`, {
        firtname,
        lastName,
        checkBox
      })
      .then(() => {
        his("/read");
      });
  };
  return (
    <div>
      <Form className="create-form">
        <Form.Field>
          <label>First Name</label>
          <input
            value={firtname}
            placeholder="First Name"
            onChange={(e) => setFirtname(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            value={lastName}
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Checkbox
            checked={checkBox}
            label="I agree to the Terms and Conditions"
            onChange={(e) => setCheckBox(!checkBox)}
          />
        </Form.Field>
        <Button type="submit" onClick={UpdateApi}>
          Update
        </Button>
      </Form>
    </div>
  );
}
