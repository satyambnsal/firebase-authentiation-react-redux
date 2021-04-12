# Firebase authentication with React + Redux


## Part 1

1. Create a firebase project in firebase portal
2. Create a real time database in firebase portal
3. Enable Google Sign In in firebase portal
4. Create environment variables for firebase config
5. Add firebase, redux, react-redux as dependencies in code.

## Part 2
1. Create firebase context
2. Create firebase class 
3. Implement bare bone Google Sign In


## Part 3
1. Create redux folder structure (`constants\actionTypes.js`, `actions`, `reducers`, `store`)
2. Create action creater, reducer, and store
3. Attach redux store to React with `Provider` component of `react-redux` package.


## Part 4
1. Implement `onAuthChangeListener` in firebase class

## Part 5
1. Implement `Session/withAuthentication` higher order component
2. Implement `Session/withAuthorization` for protected routes.


## Part 6
1. Handle User Logout
2. Redirect user to `/signin` from `/home` if user is not logged in.
3. Redirect user to `/home` from `/signin` after successful sign in.







## Help
Integrate Redux dev tools extension
add second argument in `createStore` function call like 👇
```
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
```



## References

https://firebase.google.com/docs/database/web/read-and-write
https://create-react-app.dev/docs/adding-custom-environment-variables/
