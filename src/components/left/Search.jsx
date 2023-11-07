import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { searchContact } from "../../reducers/ContextReducer";

// this is a search component in which we can search our contacts we use useDispatch() so that we can call the reducer function of searc 
const Search = () => {
  const dispatch = useDispatch();
  return (
    <Row className="mt-3">
      <Col sm={9}>
        <Form.Control
          type="text"
          placeholder="search names"
          title="search"
          onChange={(e)=>dispatch(searchContact(e.target.value))}
        />
      </Col>
      <Col sm={3}>
        <Button style={{ backgroundColor: "#FF4B91",border:"none"}}>Search</Button>{" "}
      </Col>
    </Row>
  );
};

export default Search;
