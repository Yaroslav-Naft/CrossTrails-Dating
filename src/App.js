// Components
import Signup from "./components/Signup/index"

function App() {
  return (
    <div className="App">
     <Signup onSubmit={(data) => console.log("submit signup", data)}/>
    </div>
  );
}

export default App;
