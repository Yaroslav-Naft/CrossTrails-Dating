// Components
import Login from "./components/Login"
import Signup from "./components/Signup/index"
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import GuardedRoute from './components/auth/GuardedRoute'
import Home from './components/Protected';

export default function App() {
  const [isAuthenticaed, setisAuthenticated] = useState(false);

  //authenticate user going to is Authenticated 
  const authenticateUser = (authstate) => {
    setisAuthenticated(authState)
  }
}

useEffect(() => {
  console.log('Authenticated: $(isAuthenticated');
})

return (
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home page</Link></li>
        <li><Link to='/'>Protected Page</Link></li>
        <li><Link to='/'>Register</Link></li>
        <li><Link to='/'>Login</Link></li>
      </ul>
    </div>
  </Router>
)

export default App;


function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component ={Home} />
          <Route path='/' exact component ={About} />
          <Route path='/matches' exact component={Matches} />
          <Route path="/profile" exact component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}
const Home  = () => <h1>Home</h1>;
const About = () => <h1>About</h1>;
const Matches  = () => <h1>Matches</h1>;
const Profile = () => <h1>Profile</h1>;

