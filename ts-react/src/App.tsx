import Greet from "./componenets/Greet"
import Heading from "./componenets/Heading"
import Oscar from "./componenets/Oscar"
import Status from "./componenets/Status"

function App() {
  
  return (
    <div className="App">
      <Status status="loading"/>
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonadro Dicaprio</Heading>
      </Oscar>
      <Greet name="Karol"  isLogin={false}/>
    </div>
  )
}

export default App
