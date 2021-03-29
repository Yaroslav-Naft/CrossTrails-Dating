import React, {useState, useEffect} from 'react';
import './cards.css'
import TinderCard from 'react-tinder-card'
import { Typography} from '@material-ui/core';
import SwipeButtons from './swipeButtons'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from "@material-ui/icons/Close";
import {IconButton} from '@material-ui/core';
import './swipebuttons.css'



const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"


export default function UserCards() {


  const [hikers, setHikers] = useState([])
  const [loading, setLoading] = useState(0)
  const [like, setLike] = useState(false)
  const [targetUserName, setTargetUserName] = useState("")

  function handleLike(hiker, e){
    setTargetUserName(hiker)
    e.preventDefault()
     fetch( url + '/likes', {
        method: 'PUT',
        body: JSON.stringify( like ),
        headers: { 'Content-Type': 'application/json'}
    })
    //update body
    .then(response => (response.json(), console.log(response)))
    .catch(err => console.error(err.message))
  }

  const swiped = (direction, nameToDelete) => {
    console.log("removing:" + nameToDelete);
    //setLastDirection(direction);
  };
  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };

// Display all user profiles
const displayUserCard = async event => {
    fetch(`${url}/hikers`)
    .then(response => response.json())
    .then(data => {
        setHikers(JSON.parse(data.body))
        setLoading(1)
    })
}

useEffect(() => {
  displayUserCard()
}, [])


  return (
    <div>
    {loading === 0 ? (<p>Loading...</p>)
      :(
        <>
        <div className="tinderCards">
          <div className="tinderCards__cardContainer">
            {hikers.map((hiker) => (
              <TinderCard
                className="swipe"
                key={hiker.hikersId}
                preventSwipe={["up", "down"]}
                onSwipe={(dir) => swiped(dir, hiker.firstName)}
                onCardLeftScreen={() => outOfFrame(hiker.firstName)}
              >
                <div
                  style={{ backgroundImage: " url(" + hiker.imageUrl + ")" }}
                  className="card"
                >
                  <Typography className="name">{hiker.firstName} {hiker.lastName}</Typography>
                </div>
              </TinderCard>
            ))}
          </div>
        </div>
        </>
      )
    }
        <div className="swipeButtons">
            <IconButton className="swipeButtons__left" >
              <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right" onClick={(e)=>handleLike(hikers,e)}> 
              <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    </div>
  )
}
