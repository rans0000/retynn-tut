"use client";

import React, { useEffect, useState } from "react";

function Generic() {
  const [toggle, setToggle] = useState(false);
  return (
    <div>
      Generic
      <br />
      <input type="checkbox" onChange={(e) => setToggle(e.target.checked)} />
      {toggle && <InnerComponent />}
    </div>
  );
}

export default Generic;

const InnerComponent = () => {
  useEffect(() => {
    console.log("component mounted...");
    // add event listener
    // settimeout

    return () => {
      console.log("unmounted...");
      //   remove eent listener
      // cleartimeout
    };
  }, []);
  return <div>Inner Component</div>;
};
