// Components
import LoginPage from "./components/LoginPage/index"
import SignupPage from "./components/SignupPage/index"
import UserAccountPage from './components/UserAccountPage/index'
import MatchPage from './components/MatchPage/index'
import UserAccountPage from "./components/UserAccountPage";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.css'
import Settings from "./components/Settings";


function App() {
const username = "yaronaftulyev"

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
          <Route exact path="/signup">
            <SignupPage onSubmit={(data) => console.log("submit signup", data)}/>
          </Route>
          <Route exact path="/login">
            <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
          </Route>
          <Route exact path="/match">
            <MatchPage />
          </Route>
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