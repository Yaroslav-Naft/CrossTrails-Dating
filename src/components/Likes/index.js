import React, {useState, useEffect, useNavigate} from 'react'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Button,
    TextField,
    Typography,
  } from "@material-ui/core";

  const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth: "400px",
        maxHeight: "464px",
        padding: "48px 40px",
    },
    input: {
      marginBottom: 10,
      borderRadius: "50%"
    },
    inputForm: {
      '& > *': {
        margin: "24px 0"
      },
    },
    title:{
        marginLeft: 20,
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


const addLike = s => {
    s.preventDefault()
     fetch( url + '/likes', {
        method: 'PUT',
        body: JSON.stringify( like ),
        headers: { 'Content-Type': 'application/json'}
    })
    //update body
    .then(response => (response.json(), console.log(response)))
    //.then(() => { displaySettings ()} )
}

useEffect( async () => {
    await Auth.currentAuthenticatedUser({
        bypassCache: false
    }).then(user => 
        setSenderUserName(user.username)
    )
    .then( console.log('now running'))
    .catch();

    setLike({like: { senderUserName: senderUserName, targetUserName: 'jacqueline' }} )

}, [])

useEffect(() => {
 setLike({like: { senderUserName: senderUserName, targetUserName: 'jacqueline' }} )
}, [senderUserName])

console.log({senderUserName})
console.log({like})

    return (
        <div>
                <TextField>John</TextField>
                


                <Button onClick={addLike}>Submit</Button>
        </div>
    )
}
