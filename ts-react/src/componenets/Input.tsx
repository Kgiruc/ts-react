type InputPropse = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

function Input(props: InputPropse) {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event)
    }
  return (
    <input type="text" value={props.value} onChange={handleInputChange}/>
  )
}

export default Input