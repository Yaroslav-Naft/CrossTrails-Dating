// Components
import Login from "./components/Login"
import Signup from "./components/Signup/index"
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <span>
      <ul>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/signup">Sign up</Link></li>
      </ul>
    </span>


    <Switch>
    <Route exact path="/signup"><Signup onSubmit={(data) => console.log("submit signup", data)}/></Route>
    <Route exact path="/login"><Login onSubmit={(data) => console.log("submit login", data)}/></Route>
    <Route path="/"></Route>
    </Switch>



    </Router>
  );
}

export default App;
