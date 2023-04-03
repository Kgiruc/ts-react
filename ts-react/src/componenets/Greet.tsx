type GreetProps = {
    name: string
    messegeCount: number
    isLogin: boolean
}

function Greet(props: GreetProps) {
    return (
        <div>
            <h2>
                {props.isLogin ?
                    'Welcome {props.name} masz {props.messegeCount}  wiadomosci kurwa nieprzeczytane' :
                    'nie ma'
                }
            </h2>
        </div>
    )
}

export default Greet