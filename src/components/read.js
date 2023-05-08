import { Table, Button } from "semantic-ui-react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Read() {
  const [apiData, setApiData] = useState([]);

  useEffect(() => {
    axios
      .get("https://62431f84b6734894c15b41ad.mockapi.io/users")
      .then((res) => {
        setApiData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const setData = (data) => {
    let { id, firtname, lastName, checkBox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("Firt-Name", firtname);
    localStorage.setItem("Last-Name", lastName);
    localStorage.setItem("Checkbox-Value", checkBox);
    console.log(data);
  };
  const onDelete = (id) => {
    axios
      .delete(`https://62431f84b6734894c15b41ad.mockapi.io/users/${id}`)
      .then(() => getData())
      .catch((error) => {
        console.log(error);
      });
  };
  const getData = () => {
    axios
      .get("https://62431f84b6734894c15b41ad.mockapi.io/users")
      .then((getData) => {
        setApiData(getData.data);
      });
  };
  return (
    <div>
      <Table singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirtName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Checked</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {apiData.map((data) => (
            <Table.Row key={data.id}>
              <Table.Cell>{data.firtname}</Table.Cell>
              <Table.Cell>{data.lastName}</Table.Cell>
              <Table.Cell>{data.checkBox ? "checked" : "unchecked"}</Table.Cell>
              <Link to="/update">
                <Table.Cell>
                  <Button onClick={() => setData(data)}>Update</Button>
                </Table.Cell>
              </Link>
              <Table.Cell>
                <Button onClick={() => onDelete(data.id)}>Delete</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
}
