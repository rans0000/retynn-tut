"use client";

import React from "react";

function error({ reset, error }: { reset: () => void; error: Error }) {
  return (
    <div>
      error page message {error.message} <br />{" "}
      <button onChange={() => reset()}>Reset Btn</button>
    </div>
  );
}

export default error;
