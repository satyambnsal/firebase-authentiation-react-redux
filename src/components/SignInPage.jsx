import React, { useState, useContext } from 'react';
import { withRouter } from 'react-router-dom';
import FirebaseContext from './Firebase/context';
import * as ROUTES from '../constants/routes';

function SignInPage(props) {
  const firebase = useContext(FirebaseContext);
  const [errorMessage, setErrorMessage] = useState('');
  const handleGoogleSignIn = () => {
    firebase
      .doGoogleSignIn()
      .then((authUser) => {
        // console.log({ email: authUser.email, username: authUser.displayName });
        // console.log(authUser);
        return firebase.user(authUser.user.uid).set({
          email: authUser.user.email,
          username: authUser.user.displayName,
          roles: {},
        });
      })
      .then(() => {
        props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  const handleSignOut = () => {
    firebase.doSignOut();
  };
  return (
    <div>
      <h3>Sign In Page</h3>
      <button onClick={handleGoogleSignIn}>Sign In with Google </button>
      <button onClick={handleSignOut}>Logout</button>
      {!!errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
    </div>
  );
}

export default withRouter(SignInPage);
