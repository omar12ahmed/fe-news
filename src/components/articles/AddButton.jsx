import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { Link, useParams } from "react-router";
import { postCommentArticle } from "../../../api";
function AddButton({ setComments }) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const [username, setUsername] = useState("");
  const [body, setBody] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const { article_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!body.trim(" ") || !username.trim(" ")) {
      setError("Both inputs required!");
      return;
    }

    setLoading(true);
    setError("");
    postCommentArticle(article_id, body, username)
      .then((newComment) => {
        setShow(false);
        setLoading(false);
        setComments((currentComments) => [...currentComments, newComment]);
        setBody("");
        setUsername("");
      })
      .catch((err) => {
        setLoading(false);
        if (err.response.status) {
          setError("Wrong username! please provide a valid username.");
        }
      });
  };
  if (loading) {
    return <h2>Loading ....</h2>;
  }
  return (
    <>
      <Link>
        <Button
          variant="primary"
          onClick={() => {
            setShow(true);
            setError("");
            setBody("");
            setUsername("");
          }}
        >
          Add Comment
        </Button>
      </Link>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              {error ? <p className="text-danger"> {error} </p> : null}
              <Form.Control
                type="text"
                placeholder="Enter Name"
                autoFocus
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Body</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                  setError("");
                }}
              />
            </Form.Group>

            <Modal.Footer>
              <Button
                variant="secondary"
                onClick={() => {
                  setShow(false);
                }}
              >
                Close
              </Button>
              <Button variant="primary" type="submit">
                Save Changes
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddButton;
