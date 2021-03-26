import { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
  
  const [user, setUser] = useState();
  const [token, setToken] = useLocalStorage("token")

  useEffect(() => {
    const user = token ? jwtDecode(token) : null;
    setUser(user)
  }, [token])


  return (
    <Router>
      <HeaderNavigation user={user} setToken={setToken}></HeaderNavigation>
      <Switch>
          <Route exact path="/signup">
            <SignupPage onSubmit={(data) => console.log("submit signup", data)}/>
          </Route>
          <Route exact path="/login">
            <LoginPage onSubmit={(data) => console.log("submit login", data)} setToken={setToken}/>
          </Route>
          <Route exact path="/match" >
            <MatchPage />
          </Route>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/account">
            <UserAccountPage username={user}></UserAccountPage>
          </Route>
          <Route path="/hikersDetails/:hikersId">
          <UserAccountPage username={user}></UserAccountPage>
          </Route>
          <Route path="/likes">
          <Likes></Likes>
          </Route>
        <Route path="/">
          <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
          </Route>
      </Switch>
    </Router>
  );
}
export default App;