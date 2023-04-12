import Button from "./componenets/Button";
import Container from "./componenets/Container";
import Input from "./componenets/Input";
import Counter from "./componenets/state/Counter";
import LoggedIn from "./componenets/state/LoggedIn";
import User from "./componenets/state/User";

function App() {
  return (
    <div className="App">
      {/* <LoggedIn /> */}
      {/* <User /> */}
      <Counter />
    </div>
  );
}

export default App;
