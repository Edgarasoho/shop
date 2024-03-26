import React, { useState } from "react";
import {
  Form,
  Container,
  Col,
  Row,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { cfg } from "../../cfg/cfg";

function Admin() {
  const [validate, setValidate] = useState(false);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({
    value: null,
    message: "",
  });
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ImageUrl, setImageUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setValidate(true);

    const form = e.currentTarget;

    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      const data = {
        title,
        description,
      };

      if (ImageUrl.trim()) data.img = ImageUrl;
      console.log(data);
      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(data),
      });
      const product = await response.json();

      if (!response.ok) throw new Error(product.error);
      setStatus({ value: "success", message: "Product created" });
      console.log(product);
    } catch (error) {
      console.log("error", error);
      setStatus({
        value: "danger",
        message: error.message || "something went wrong",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="my-container">
      <h1>Add Product</h1>
      <Container>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
        <Form noValidate validated={validate} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid">
                Bad text
              </Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Image Url</Form.Label>
              <Form.Control
                type="text"
                placeholder="ImageUrl"
                value={ImageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={loading}>
            Create product
          </Button>
          {loading && <Spinner animation="border" variant="light" />}
        </Form>
      </Container>
    </div>
  );
}
export default Admin;
