import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div style={{ minHeight: "70vh" }}>
      {/* <Spinner className="text-primary mt-5" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner> */}
      <div className="loadingio-spinner-ellipsis-s7y61lziyvq">
        <div className="ldio-0g354q57q0a8">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
