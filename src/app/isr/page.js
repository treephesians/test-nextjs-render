async function fetchPosts() {
  const res = await fetch("http://3.35.11.18:8000/notion/posts", {
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
