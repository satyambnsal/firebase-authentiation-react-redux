import React from "react";

export default function ({ posts }) {
  const content = posts.map(({ id, title, body }) => (
    <li key={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </li>
  ));
  return <ul>{content}</ul>;
}
