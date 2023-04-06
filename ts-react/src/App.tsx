import Button from "./componenets/Button"
import Input from "./componenets/Input"

function App() {
  
  return (
    <div className="App">
      <Button  handleClick={(event, id) => console.log('button', event, id)}/>
      <Input value="" handleChange={event => console.log(event)}/>
    </div>
  )
}

export default App
