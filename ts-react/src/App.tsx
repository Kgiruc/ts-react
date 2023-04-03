import Greet from "./componenets/Greet"
import Person from "./componenets/Person"
import PresonList from "./componenets/PresonList"

function App() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diane'
    }
  ]

  return (
    <div className="App">
      <Greet name='karol' messegeCount={10} isLogin={false} />
      <Person name={personName} />
      <PresonList names={nameList}/>
    </div>
  )
}

export default App
