export type ProfileProps = {
  name: string
}

function Profile({ name }: ProfileProps) {
  return (
    <div>Profile Private component. Name is {name}</div>
  )
}

export default Profile