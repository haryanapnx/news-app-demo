import React from "react";
import { Alert } from "react-bootstrap";
const AlertComponent = ({ msg }) => {
  return (
    <Alert variant="danger">{msg}</Alert>
  );
};
export default AlertComponent;
