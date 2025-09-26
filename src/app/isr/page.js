async function fetchPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 2 },
  });
  const data = await res.json();
  return data;
}

export default async function ISRPage() {
  const posts = await fetchPosts();
  console.log("isr - render");

  return (
    <main>
      <h1>ISR PAGE</h1>
      {JSON.stringify(posts)};
    </main>
  );
}
