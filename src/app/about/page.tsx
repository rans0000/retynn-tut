import React from "react";

const apiCall = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("done");
    }, 5000);
  });
};

async function AboutPage() {
  await apiCall();

  return <div>About Page</div>;
}

export default AboutPage;
