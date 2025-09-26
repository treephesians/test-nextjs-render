async function fetchPosts() {
  const res = await fetch("http://localhost:8000/notion/posts", {
    cache: "no-store",
  });
  const data = await res.json();
  return data;
}

export default async function SSRPage() {
  const posts = await fetchPosts();
  console.log("ssr - render");

  return (
    <main>
      <h1>SSR PAGE</h1>
      {JSON.stringify(posts)};
    </main>
  );
}
