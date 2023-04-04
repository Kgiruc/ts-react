type GreetProps = {
    name: string
    messegeCount?: number
    isLogin: boolean
}

function Greet(props: GreetProps) {
    const {messegeCount = 0} = props
    return (
        <div>
            <h2>
                {props.isLogin ?
                    `Welcome ${props.name} masz ${messegeCount}  wiadomosci kurwa nieprzeczytane` :
                    'nie ma'
                }
            </h2>
        </div>
    )
}

export default Greet