import Login from "./Login"

function Private({ isLoggedIn, Component}) {
  if (isLoggedIn) {
    return <Component />
  } else {
    return <Login />
  }
}

export default Private