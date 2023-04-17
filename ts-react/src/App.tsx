import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";
import DomRef from "./componenets/ref/DomRef";
import MutableRef from "./componenets/ref/MutableRef";
import Profile from "./componenets/auth/Profile";
import Private from "./componenets/auth/Private";
import List from "./componenets/generics/List";
import RandomNumber from "./componenets/restriction/RandomNumber";
import Toast from "./componenets/templeteliterals/Toast";
import Button from "./componenets/html/Button";
import Input from "./componenets/html/Input";


function App() {
  return (
    <div className="App">
      <Button varient="primary" onClick={() => console.log('clicker')}>
        Primary Button
      </Button>
      <Input />
    </div>
  );
}

export default App;
