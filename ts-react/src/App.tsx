import Button from "./componenets/button"

function App() {
  
  return (
    <div className="App">
      <Button  handleClick={() => console.log('button')}/>
    </div>
  )
}

export default App
