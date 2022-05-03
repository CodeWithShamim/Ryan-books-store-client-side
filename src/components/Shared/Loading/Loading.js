import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      <Spinner className="text-primary mt-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
};

export default Loading;
