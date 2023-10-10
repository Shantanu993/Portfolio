import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="green">Code</strong>
      </h1>
      <GitHubCalendar
        username="Shantanu993"
        blockSize={15}
        blockMargin={5}
        color="#88f584"
        fontSize={16}
      />
    </Row>
  );
}

export default Github;