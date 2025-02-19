import { Alert } from "react-bootstrap";

function Error(error) {
  return <Alert>{error.error}, Bad request</Alert>;
}

export default Error;
