async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "force-cache",
  });
  const data = await res.json();
  return data;
}

export default async function SSGPage() {
  const posts = await fetchPosts();
  console.log("ssg - render");

  return (
    <main>
      <h1>SSG PAGE</h1>
      {JSON.stringify(posts)};
    </main>
  );
}
