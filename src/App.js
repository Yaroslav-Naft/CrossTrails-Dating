import { useEffect, useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import './app.css'
import Settings from "./components/Settings";
import Likes from "./components/Likes";
// JWT
import jwtDecode from "jwt-decode";
import useLocalStorage from "react-use-localstorage";
// Components
import LoginPage from "./layout/LoginPage/index"
import SignupPage from "./layout/SignupPage/index"
import UserAccountPage from './layout/UserAccountPage/index'
import MatchPage from './layout/MatchPage/index'
import HeaderNavigation from './layout/HeaderNavigation/index'



function App() {

  const [token, setToken] = useLocalStorage("token");
  const [user, setUser] = useState(token ? jwtDecode(token) : null);

  // let jwtToken = token

  
  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user);
  }, [token]);

  const PrivateRoute = ({ path, children }) => (
    <Route path={path}>
      { !!user ? children : <Redirect to='/login' /> }
    </Route>
  )



  return (
    <div>
      <Router>
        <HeaderNavigation user={user} setToken={setToken}></HeaderNavigation>
        <Switch>
            <Route exact path="/signup">
              {/* <SignupPage onSubmit={(data) => console.log("submit signup", data)} setToken={setToken}></SignupPage> */}
              <SignupPage setToken={setToken}></SignupPage>
            </Route>
            <Route exact path="/login">
              {/* <LoginPage onSubmit={(data) => console.log("submit login", data)} setToken={setToken}></LoginPage> */}
              <LoginPage  setToken={setToken}></LoginPage>
            </Route>
            <PrivateRoute exact path="/match" >
              <MatchPage />
            </PrivateRoute>
            <PrivateRoute exact path="/settings" >
              <Settings user={user}></Settings>
            </PrivateRoute>
            <PrivateRoute exact path="/account">
              <UserAccountPage user={user}></UserAccountPage>
            </PrivateRoute>
            {/* <PrivateRoute path="/hikersDetails/:hikersId">
            <UserAccountPage username={user}></UserAccountPage>
            </PrivateRoute> */}
            <PrivateRoute path="/likes">
              <Likes user={user}></Likes>
            </PrivateRoute>
          <Route path="/">
            {/* <LoginPage onSubmit={(data) => console.log("submit login", data)}/> */}
              {/* <p>Username: {user["cognito:username"]}</p>
              <p>Email: {user?.email}</p> */}
            </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
