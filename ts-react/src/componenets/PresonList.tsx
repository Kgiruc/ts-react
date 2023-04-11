import { Name } from './Person.types'

type PersonListProps = {
    names: Name[]
}

function PresonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <h2>{name.first} {name.last}</h2>
                )
            })}
        </div>
    )
}

export default PresonList