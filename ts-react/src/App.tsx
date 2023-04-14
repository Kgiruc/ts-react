import { UserContextProvider } from "./componenets/context/UserContext";
import User from "./componenets/context/User";


function App() {
  return (
    <div className="App">
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
