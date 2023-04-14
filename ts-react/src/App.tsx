import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";
import DomRef from "./componenets/ref/DomRef";
import MutableRef from "./componenets/ref/MutableRef";


function App() {
  return (
    <div className="App">
      <MutableRef />
    </div>
  );
}

export default App;
