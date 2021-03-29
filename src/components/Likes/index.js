import React, {useState, useEffect, useNavigate} from 'react'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import {Card, CardActionArea ,CardMedia,CardContent,CardActions ,IconButton, Typography, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import UserCards from '../UserCards';

  const useStyles = makeStyles((theme)=>({
    root: {
        width: "250px",
        height: "150px",
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


export default function Likes({user}) {
const classes = useStyles();
const history = useHistory();
const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
const [like, setLike] = useState( {like: { senderUserName: 'yaro', targetUserName: 'jacqueline' }})
const [likesId, setLikesId] = useState("")
const [senderUserName, setSenderUserName] = useState(user["cognito:username"])
const [targetUserName, setTargetUserName] = useState("")
const [likesList, setLikesList] = useState([])
const [deleteLikesId, setDeleteLikesId] = useState("1f042a70-89fd-11eb-b826-0f0160bc07dc")
const [hikers, setHikers] = useState([])
const [loading, setLoading] = useState(0)
const [liked, setLiked] = useState(false)
const [likeBack, setLikeBack] = useState([])


// STEP 1 - handle like user
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

// STEP 2 - See users that you liked
// Get all liked users by current logged in user
const getLike = async () => {
  // fetch(`${url}/likes/${senderUserName}`)
  fetch(`${url}/likes/${user["cognito:username"]}`)
  .then(response => response.json())
  .then(data => {setLikesList(data)})
  .catch(err => {console.error(err.message)})
}

// STEP 3 - see users that liked you back
// compare senderUsername and targetUsername 
// filter targetusername and compare to current logged in username


//with no path
// const getLike = async () => {
//     fetch(url + '/likes')
//     .then(response => response.json())
//     .then(data => setHikers(
//         JSON.parse(data.body)
//     ))
// }


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


// const deleteLike = s => {
//     //console.log({deleteLikesId})
//     s.preventDefault()
//     //pass product
//     fetch(url + `/like/${deleteLikesId}`, {
//         method: 'DELETE',
//         headers: { 'Content-Type': 'application/json'}
//     })
//     history.push("/")
// }




// useEffect(() => {
    
// }, [likesList])

// TEST Like button on profile
// const displayUserCard = async event => {
//         fetch(`${url}/hikers`)
//         .then(response => response.json())
//         .then(data => {
//             setHikers(JSON.parse(data.body))
//             setLoading(1)
//         })
//     }

// useEffect(() => {
//     displayUserCard()
// }, [])

// useEffect( async () => {
//     await Auth.currentAuthenticatedUser({
//         bypassCache: false
//     }).then(user => 
//         setSenderUserName(user["cognito:username"])
//     )
//     .catch();

//     setLike({like: { senderUserName: senderUserName, targetUserName: targetUserName }} )
// }, [])



// useEffect(() => {
//  setLike({like: { senderUserName: senderUserName, targetUserName: targetUserName }} )
// }, [senderUserName, targetUserName])


    return (
        <div>
                <Button onClick={handleLike}>Add Like</Button>

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
                </tr>          
                )}
                </tbody>
                </table>
                <Button onClick={getLike}>Get Like</Button>
            <div>
               <table>
                <thead>
                    <tr>
                        <th>Users Who Liked you back</th>
                    </tr>
                </thead>
                <tbody>
                {likesList.map(l =>
                <tr key={l.LikesId}> 
                    <td>{l.senderUserName}</td>
                </tr>          
                )}
                </tbody>
            </table>
               <Button onClick="">Get Like</Button>
              </div> 
        </div>
    )
}


// {loading === 0 ? (<p>Loading...</p>)
//   :(
//     <>
//     {hikers.map(hiker => 
//     <Card className={classes.root}>
//           <CardActionArea>
//             {/* <CardMedia
//               className={classes.media}
//               src={hiker.imageUrl}
//               title="User Profile"
//             /> */}
//             {/* <CardMedia 
//               className={classes.media}
//               square 
//               imageUrl='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' 
//               /> */}
//               </CardActionArea>
//             <CardContent>
//               <Typography gutterBottom variant="h5" component="h2">
//                 {hiker.firstName} {hiker.lastName}
//               </Typography>
//               <Typography variant="body2" color="textSecondary" component="p">
//                 {hiker.age}
//               </Typography>
//             </CardContent>
//               <CardActions>
            
//               <IconButton size="small" color="primary"  
//               // onClick={async (e) => {
//               //   like ? await removeLike(LikesId) : await addLike(LikesId);
//               //   setLiked(!liked);
//               // }}
//               >
//                 {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
//               </IconButton>
//               </CardActions>
          
//         </Card>
//         )}
//     </>
//   )
// }