// Components
import LoginPage from "./components/LoginPage/index"
import SignupPage from "./components/SignupPage/index"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.css'
function App() {
  return (
    <Router>
      {/* <span>
        <ul>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/signup">Sign up</Link></li>
        </ul>
      </span> */}
      <Switch>
          <Route exact path="/signup">
            <SignupPage onSubmit={(data) => console.log("submit signup", data)}/>
          </Route>
          <Route exact path="/login">
            <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
          </Route>
        <Route path="/">
          <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
          </Route>
      </Switch>
    </Router>
  );
}
export default App;