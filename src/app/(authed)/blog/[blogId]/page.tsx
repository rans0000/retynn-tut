import React from "react";

export async function generateStaticParams() {
  return [{ blogId: "1" }, { blogId: "2" }, { blogId: "3" }];
}

async function BlogPost({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  //load fetch data fetch('http:..../1)
  return (
    <div>
      <h1>Blog {blogId}</h1>
      BlogPost
      <p>Date is {new Date().toString()}</p>
    </div>
  );
}

export default BlogPost;
