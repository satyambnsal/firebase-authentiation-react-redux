import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function PostsNavigation({ posts }) {
  const match = useRouteMatch();

  const content = posts.map(({ id, title }) => (
    <li key={id}>
      <Link to={`${match.url}/${title}`}>{title}</Link>
    </li>
  ));
  return <ul>{content}</ul>;
}
