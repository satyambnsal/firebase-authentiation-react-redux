import React from "react";

export default function Post({ id, title, body }) {
  return (
    <div key={id}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
