// Components
import Login from "./components/Login"
import Signup from "./components/Signup/index"

function App() {
  return (
    <div className="App">
     <Signup onSubmit={(data) => console.log("submit signup", data)}/>
     <Login onSubmit={(data) => console.log("submit login", data)}/>
    </div>
  );
}

export default App;
