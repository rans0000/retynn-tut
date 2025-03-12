"use client";

import { useRouter } from "next/navigation";
import React from "react";

const blogs = [
  { title: "Some title", id: 1 },
  { title: "Some title", id: 100 },
  { title: "Some title", id: "hfhfyy" },
];

function Blog() {
  const router = useRouter();

  return (
    <div>
      Blog
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            {blog.title}{" "}
            <button
              type="button"
              onClick={() => router.push(`/blog/${blog.id}`)}
            >
              Read more
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Blog;
