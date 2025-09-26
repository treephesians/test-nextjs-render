import Button from "../components/Button";

async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
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
      {JSON.stringify(posts)};<Button>Fetch Posts</Button>
    </main>
  );
}
