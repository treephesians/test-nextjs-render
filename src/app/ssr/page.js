async function fetchPosts() {
  const res = await fetch("https://3.35.11.18:8000/notion/posts", {
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
