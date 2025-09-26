"use client";

export default function Button({ children }) {
  const onClick = () => {
    alert("Button clicked");
  };
  return <button onClick={onClick}>{children}</button>;
}
