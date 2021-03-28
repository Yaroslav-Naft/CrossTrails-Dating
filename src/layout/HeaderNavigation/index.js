import NavBar from '../../components/NavBar/index'

import { useHistory } from "react-router-dom"


export default function HeaderNavigation({user, setToken}) {
  const history = useHistory()

  console.log({user})

  const signOut = () => {
    // Remove the token from local storage
    setToken("")
    history.push("/login")
  }

  return (

        <NavBar
            title="Cross Trail"
            titleClicked={() => history.push("/match")}
            user={user}
            userAccount={() => history.push("/setting")}
            profile={() => history.push("/account")}
            login={() => history.push("/login")}
            signOut={signOut}
            ></NavBar>

    )
}