import Button from "./componenets/Button";
import Container from "./componenets/Container";
import Input from "./componenets/Input";

function App() {
  return (
    <div className="App">
      <Button handleClick={(event, id) => console.log("button", event, id)} />
      <Input value="" handleChange={(event) => console.log(event)} />
      <Container styles={{ border: "1px solid green", padding: "1rem" }} />
    </div>
  );
}

export default App;
