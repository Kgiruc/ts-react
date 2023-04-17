import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";
import DomRef from "./componenets/ref/DomRef";
import MutableRef from "./componenets/ref/MutableRef";
import Profile from "./componenets/auth/Profile";
import Private from "./componenets/auth/Private";
import List from "./componenets/generics/List";
import RandomNumber from "./componenets/restriction/RandomNumber";
import Toast from "./componenets/templeteliterals/Toast";


const listelo = [
  {
    first: 'elo',
    last: 'zero'
  }, 
  {
    first: 'belo',
    last: 'fero'
  }, 
  {
    first: 'helo',
    last: 'perospero'
  },
]

function App() {
  return (
    <div className="App">
    <Toast position='center' />
    </div>
  );
}

export default App;
