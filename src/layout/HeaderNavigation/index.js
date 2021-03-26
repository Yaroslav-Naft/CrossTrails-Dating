import NavBar from '../../components/NavBar/index'
import BackgroundCard from '../../components/BackgroundCard/index'

import { useHistory } from "react-router-dom"


export default function HeaderNavigation({user, setToken}) {
  const history = useHistory()

  const signOut = () => {
    // Remove the token from local storage
    setToken("")
    history.push("/")
  }

  return (
      <BackgroundCard>
        <NavBar
            title="Social Something"
            titleClicked={() => history.push("/match")}
            user={user}
            newPost={() => history.push("/setting")}
            profile={() => history.push("/profile")}
            login={() => history.push("/login")}
            signOut={signOut}
            ></NavBar>
    </BackgroundCard>
    )
}