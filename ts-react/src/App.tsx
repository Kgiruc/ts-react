import Box from "./componenets/context/Box";
import ThemeContextProvider from "./componenets/context/ThemeContext";


function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
    </div>
  );
}

export default App;
