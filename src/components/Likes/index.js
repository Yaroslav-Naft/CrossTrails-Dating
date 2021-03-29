import React, {useState, useEffect, useNavigate} from 'react'
import { useHistory } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import PeopleIcon from '@material-ui/icons/People';
import {IconButton} from '@material-ui/core'
  const useStyles = makeStyles((theme)=>({
 
}))


export default function Likes({user}) {
const classes = useStyles();
const history = useHistory();
const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
const [likesList, setLikesList] = useState([])
const [likeBackList, setlikeBackList] = useState([])



// // STEP 1 - handle like user
// function handleLike(hiker, e){
//   setTargetUserName(hiker)
//   e.preventDefault()
//    fetch( url + '/likes', {
//       method: 'PUT',
//       body: JSON.stringify( like ),
//       headers: { 'Content-Type': 'application/json'}
//   })
//   //update body
//   .then(response => (response.json(), console.log(response)))
//   .catch(err => console.error(err.message))
// }

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
const getLikeBack = async () => {
  // fetch(`${url}/likes/${senderUserName}`)
  fetch(`${url}/likes/deletelikes/${user["cognito:username"]}`)
  .then(response => response.json())
  .then(data => {setlikeBackList(data)})
  .catch(err => {console.error(err.message)})
}   


    return (
        <>
          
          <TableContainer component={Paper}>
                  <Table className={classes.table} aria-label="Who liked you back">
                    <TableHead>
                      <TableRow>
                        <TableCell>Who liked you back</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {likeBackList.map((like) => (
                        <TableRow key={like.LikesId}>
                          <TableCell component="th" scope="row">
                            {like.SenderUserName}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <IconButton aria-label="edit" onClick={getLikeBack}>
                   <div className={classes.button}>
                      <PeopleIcon />
                    </div>
                </IconButton>
        </>
    )
}
