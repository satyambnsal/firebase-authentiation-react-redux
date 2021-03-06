import './styles.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';
import withAuthentication from './components/Session/withAuthentication';
import * as ROUTES from './constants/routes';

// console.log(`API Key: ${process.env.REACT_APP_API_KEY}`);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <hr />
        <Switch>
          <Route exact path={ROUTES.LANDING}>
            <LandingPage />
          </Route>
          <Route path={ROUTES.HOME}>
            <HomePage />
          </Route>
          <Route path={ROUTES.SIGN_IN}>
            <SignInPage />
          </Route>
          <Route path={ROUTES.SIGN_UP}>
            <SignUpPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default withAuthentication(App);
