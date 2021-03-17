// Components
import LoginPage from "./components/LoginPage/index"
import SignupPage from "./components/SignupPage/index"
import UserAccountPage from './components/UserAccountPage/index'
import MatchPage from './components/MatchPage/index'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import './app.css'

function App() {


  return (
    <Router>
      {/* <MatchPage /> */}
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
          <Route exact path="/setting">
            <UserAccountPage onSubmit={(data) => console.log("submit info", data)}/>
          </Route>
          <Route path="/">
            <LoginPage onSubmit={(data) => console.log("submit login", data)}/>
          </Route>
      </Switch>
    </Router>
  );
}
export default App;