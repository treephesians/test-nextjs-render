"use client";

import { useEffect, useState } from "react";

async function fetchPosts() {
  const res = await fetch("https://3.35.11.18:8000/notion/posts");
  const data = await res.json();
  return data;
}

export default function CSRPage() {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchPosts().then((data) => {
      setPost(data);
      console.log("csr - render");
    });
  }, []);

  return (
    <main>
      <h1>CSR PAGE</h1>
      {JSON.stringify(post)}
    </main>
  );
}
