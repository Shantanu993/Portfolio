'use client'

import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  return (
    <div className="flex flex-col justify-center pb-3 w-{100vw} gap-14">
      <div>
      <h1 className="pb-5">
        Days I <strong className="green">Code</strong>
      </h1>
      </div>
      <div className="w-{100vw}">
      <GitHubCalendar
        username="Shantanu993"
        blockSize={15}
        blockMargin={5}
        color="#88f584"
        fontSize={16}
      />
      </div>    
    </div>
  );
}

export default Github;