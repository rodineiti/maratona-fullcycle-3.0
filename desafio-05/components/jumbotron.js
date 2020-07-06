import React from "react";

export default function Jumbotron({ subtitle }) {
  return (
    <div className="jumbotron jumbotron-fluid">
      <div className="container text-center">
        <h1 className="display-4">Maratona Fullcycle 3.0</h1>
        <p className="lead">{subtitle}</p>
      </div>
    </div>
  );
}
