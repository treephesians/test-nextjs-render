"use client";

import { useEffect, useState } from "react";
import Button from "../components/Button";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
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
      <Button>Fetch Posts</Button>
    </main>
  );
}
