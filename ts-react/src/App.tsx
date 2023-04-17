import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";
import DomRef from "./componenets/ref/DomRef";
import MutableRef from "./componenets/ref/MutableRef";
import Profile from "./componenets/auth/Profile";
import Private from "./componenets/auth/Private";
import List from "./componenets/generics/List";
import RandomNumber from "./componenets/restriction/RandomNumber";


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
    <RandomNumber value={12} isPositive isNegative isZero/>
    </div>
  );
}

export default App;
