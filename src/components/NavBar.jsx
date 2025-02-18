import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router";

function Navbarr() {
  return (
    <Navbar
      className="justify-content-between navbar m-4"
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
    >
      <Container fluid className="justify-content-between">
        <Navbar.Brand>NC News</Navbar.Brand>
        <Nav className="ms-auto me-4">
          <Link className="me-4" to={"/"}>
            Home
          </Link>

          <Link className="me-4" to="/articles">
            Articles
          </Link>
          <Link className="me-4" to={"/topics"}>
            Topic
          </Link>
          <Link className="me-4" to="/users">
            Users
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navbarr;
