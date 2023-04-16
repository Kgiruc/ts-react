import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";
import DomRef from "./componenets/ref/DomRef";
import MutableRef from "./componenets/ref/MutableRef";
import Profile from "./componenets/auth/Profile";
import Private from "./componenets/auth/Private";


function App() {
  return (
    <div className="App">
      <Private isLoggedIn={true} component={Profile}/>
    </div>
  );
}

export default App;
