// Components
import LoginPage from "./components/LoginPage/index"
import SignupPage from "./components/SignupPage/index"
import UserAccountPage from './components/UserAccountPage/index'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.css'
import Settings from "./components/Settings";


function App() {
  return (
    <Router>
      <span>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </span>
      <Switch>
          <Route exact path="/settings">
            <Settings></Settings>
          </Route>
          <Route exact path="/account">
            <UserAccountPage username={username}></UserAccountPage>
          </Route>
          <Route path="/hikersDetails/:hikersId">
          <UserAccountPage username={username}></UserAccountPage>
          </Route>
        <Route path="/">
          <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
        </Route>

      </Switch>
    </Router>
  );
}
export default App;
