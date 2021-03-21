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
const [likesList, setLikesList] = useState([])
const [deleteLikesId, setDeleteLikesId] = useState("1f042a70-89fd-11eb-b826-0f0160bc07dc")

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



useEffect( async () => {
    await Auth.currentAuthenticatedUser({
        bypassCache: false
    }).then(user => 
        setSenderUserName(user.username)
    )
    .catch();

    setLike({like: { senderUserName: senderUserName, targetUserName: 'maria' }} )

}, [])

useEffect(() => {
 setLike({like: { senderUserName: senderUserName, targetUserName: 'maria' }} )
}, [senderUserName])


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

        </div>
    )
}
