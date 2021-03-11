// Components
import Login from "./components/Login"
import Signup from "./components/Signup/index"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
        <Route exact path="/signup"><Signup onSubmit={(data) => console.log("submit signup", data)}/></Route>
        <Route exact path="/login"><Login onSubmit={(data) => console.log("submit login", data)}/></Route>
        <Route exact path="/settings/:hikersId"><Settings /></Route>
        <Route path="/"><Login onSubmit={(data) => console.log("submit login", data)}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
