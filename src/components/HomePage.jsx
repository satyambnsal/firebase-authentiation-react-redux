import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
// import Posts from "./Posts";
import Post from './Post';
import PostsNavigation from './PostsNavigation';
import withAuthorization from './Session/withAuthorization';
const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

/**
 * https://xk5wz.csb.app/home/posts/sunt%20aut%20facere%20repellat%20provident%20occaecati%20excepturi%20optio%20reprehenderit
 * https://xk5wz.csb.app/home/posts
 */

function HomePage() {
  const match = useRouteMatch();
  console.log(match);
  const [posts, setPosts] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetch(`${API_BASE_URL}/posts`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        // console.log(jsonResponse);
        setPosts(jsonResponse);
      })
      .catch((error) => {
        console.log(error);
        setErrorMessage(error.message);
      });
  }, []);

  if (errorMessage) {
    return <p style={{ color: 'red' }}>{errorMessage}</p>;
  }
  const allPostRoutes = posts.map(({ id, title, body }) => (
    <Route path={`${match.path}/posts/${title}`} key={id}>
      <Post id={id} title={title} body={body} />
    </Route>
  ));
  return (
    <div>
      <h3> Home Page </h3>
      <Link to={`${match.url}/posts`}>See all posts links</Link>
      <Switch>
        {allPostRoutes}
        <Route path={`${match.path}/posts`}>
          {/* <Posts posts={posts} /> */}
          <PostsNavigation posts={posts} />
        </Route>
        {/* <Route path={`${match.path}/services/:serviceName`}>
          <h3>Hello Services</h3>
        </Route> */}
      </Switch>
      <hr />
      {/* <Switch>{allPostRoutes}</Switch> */}
    </div>
  );
}

export default withAuthorization(HomePage);
