import React, {useState, useEffect, useNavigate} from 'react'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActionArea, CardHeader ,CardMedia,CardContent,CardActions ,IconButton, Typography, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

  const useStyles = makeStyles((theme)=>({
    root: {
        width: "250px",
        height: "400px",
        margin: "10px 5px",
        padding: "10px"
      },
      row: {
          display: "flex",
          flexWrap: "wrap",
      },
      column: {
          display: "flex",
          flexDirection: "column"
      },
      card: {
        maxWidth: "250px",
        height: "500px",
        borderRadius: "15px"
      },
      media: {
        width: "245px",
        height: "200px"
      }
    
}))


export default function Likes() {
const classes = useStyles();
const history = useHistory();
const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
const [like, setLike] = useState( {like: { senderUserName: 'yaro', targetUserName: 'jacqueline' }})
//const [likesId, setLikesId] = useState("")
const [senderUserName, setSenderUserName] = useState("sender Username")
const [targetUserName, setTargetUserName] = useState("target Username")
const [likesList, setLikesList] = useState([])
const [deleteLikesId, setDeleteLikesId] = useState("1f042a70-89fd-11eb-b826-0f0160bc07dc")
const [hikers, setHikers] = useState([])
const [loading, setLoading] = useState(0)
const [liked, setLiked] = useState(true)




function addLike(hiker, e){


  //console.log(hiker)
  setTargetUserName(hiker)
  console.log({targetUserName})
    e.preventDefault()
    //setTargetUserName(e)
     fetch( url + '/likes', {
        method: 'PUT',
        body: JSON.stringify( like ),
        headers: { 'Content-Type': 'application/json'}
    })
    //update body
    .then(response => (response.json(), console.log(response)))
    //.then(() => { displaySettings ()} )
}

//with no path
// const getLike = async () => {
//     fetch(url + '/likes')
//     .then(response => response.json())
//     .then(data => setHikers(
//         JSON.parse(data.body)
//     ))
// }


//Display hikers

// const displaySettings = async () => {
//     fetch(`${url}/hikers/${state.username}`)
//     .then(response => response.json())
//     .then(data => {
//         setHiker(data)
//     })
//     }   


//Delete Like

// const deleteLike = s => {
//     s.preventDefault()
//      fetch( url + `/like/${senderUserName}`, {
//         method: 'PUT',
//         body: JSON.stringify( {"likesId: } ),
//         headers: { 'Content-Type': 'application/json'}
//     })
//     //update body
//     .then(response => (response.json(), console.log(response)))
//     //.then(() => { displaySettings ()} )
// }


const deleteLike = s => {
    //console.log({deleteLikesId})
    s.preventDefault()
    //pass product
    fetch(url + `/like/${deleteLikesId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json'}
    })
    history.push("/")
}


// function settingLikes(e) {
// setTargetUserName(e)
// console.log(targetUserName)
// //addLike
// }



//with path
const getLike = async () => {
    fetch(`${url}/likes/${senderUserName}`)
    .then(response => response.json())
    .then(data => {
        //console.log({data})
        setLikesList(data)
        //setHiker(data)
        //console.log({likesList})
        //setLoading(0)
    })
    }   

    useEffect(() => {
        //const test = likesList[1]
        console.log(likesList)
        console.log(`printed`)
    }, [likesList])


    const displayUserCard = async event => {
        fetch(`${url}/hikers`)
        .then(response => response.json())
        .then(data => {
            setHikers(JSON.parse(data.body))
            setLoading(1)
        })
    }

useEffect( async () => {
    await Auth.currentAuthenticatedUser({
        bypassCache: false
    }).then(user => 
        setSenderUserName(user.username)
    )
    .catch();

    setLike({like: { senderUserName: senderUserName, targetUserName: targetUserName }} )
}, [])

useEffect(() => {
    displayUserCard()
}, [])



useEffect(() => {
 setLike({like: { senderUserName: senderUserName, targetUserName: targetUserName }} )
}, [senderUserName, targetUserName])


    return (
        <div>
                <Button onClick={addLike}>Add Like</Button>

                <h2>All likes for current User</h2>

                <table>
                <thead>
                    <tr>
                        <th>Users Who Liked you</th>
                    </tr>
                </thead>
                <tbody>
                {likesList.map(like =>
                <tr key={like.LikesId}> 
                    <td>{like.TargetUserName}</td>
                    <Button onClick={ deleteLike}>Delete Like</Button>
                </tr>          
                )}
                </tbody>
            </table>
                
                <Button onClick={getLike}>Get Like</Button>

                <div className={classes.row}>
    {loading === 0 ? (<p>Loading...</p>)
      :(
        <>
        {hikers.map(hiker => 
        <Card className={classes.root}>
              <CardActionArea>
                {/* <CardMedia
                  className={classes.media}
                  src={hiker.imageUrl}
                  title="User Profile"
                /> */}
                <CardMedia 
                  className={classes.media}
                  square 
                  imageUrl='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' 
                  
                  />
                  </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {hiker.firstName} {hiker.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {hiker.age}
                  </Typography>
                </CardContent>
                  <CardActions>
                
                  <IconButton size="small" color="primary"  onClick={(e) => addLike(hiker.userName, e)}>
                    {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
                  </IconButton>
                  </CardActions>
              
            </Card>
            )}
        </>
      )
    }
    </div>

        </div>
    )
}
