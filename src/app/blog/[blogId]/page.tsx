import React from "react";

async function BlogPost({ params }: { params: Promise<{ blogId: string }> }) {
  const { blogId } = await params;
  //load fetch data fetch('http:..../1)
  return (
    <div>
      <h1>Blog {blogId}</h1>
      BlogPost
    </div>
  );
}

export default BlogPost;
