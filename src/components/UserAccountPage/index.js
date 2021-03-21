import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import EditProfile from './EditProfile'
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    CardActions,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Input,
    CardMedia
  } from "@material-ui/core";
import { Route53Resolver } from 'aws-sdk';

const useStyles = makeStyles((theme)=>({
    root: {
        width: "1280px",
        height: "699px",
        backgroundColor: "#F8F8F8",
        display: "flex",
      },
      column: {
          display: "flex",
          alignItems: "start",
          flexDirection: "column",
          width: "50%"
      },
      row: {
          display: "flex",
          flexDirection: "row",
      },
      leftContainer:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%"
      }
      
}))


export default function UserAccountPage({username}) {

    const classes = useStyles();
    const [editing, setEditing] = useState(false)
    const [hikes, setHikes] = useState(["asdfsafs","sadfasf","asdfasf"])
    const history = useHistory()
    const {state} = useLocation()
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    const [hiker, setHiker] = useState([])
    const [loading, setLoading] = useState(1)
    const [num, setNum] = useState(0)
    const [newHiker, setNewHiker] = useState({})
    const [newAge, setNewAge] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newGender, setNewGender] = useState("")
    const [newImageUrl, setNewImageUrl] = useState("")
    const [newFavouritesHikes, setNewFavouritesHikes] = useState("")
    const [hikersId, setHikersId] = useState("")


    const submit = s => {
            s.preventDefault()
            console.log({newHiker})
             fetch( url + '/hikers', {
                method: 'PUT',
                body: JSON.stringify(newHiker),
                headers: { 'Content-Type': 'application/json'}
            })
            //update body
            .then(response => (response.json(), console.log(response)))
            .then(() => { displaySettings ()} )
    }


    const displaySettings = async () => {
    fetch(`${url}/hikers/${state.username}`)
    .then(response => response.json())
    .then(data => {
        setHiker(data)
        setLoading(0)
    })
    }   

    
const deleteItem = s => {
    s.preventDefault()
    //pass product
    fetch(url + `/hikers/${state.username}`, {
        method: 'DELETE',
        body: JSON.stringify( { hiker } ),
        headers: { 'Content-Type': 'application/json'}
    })
    history.push("/")
}

    useEffect(() => {
            displaySettings()
            // setHikersId(hiker[0].hikersId)
    }, [])

    useEffect(() => {
        setNewHiker({hikers: { hikersId: hikersId, age: newAge, firstName: newFirstName, lastName: newLastName, favouritesHikes: newFavouritesHikes, imageUrl: newImageUrl, gender: newGender }} )
    }, [newAge, newFirstName, newLastName, newFavouritesHikes, newGender, newImageUrl, hikersId ])

    useEffect(() => {
        try{
            setHikersId(hiker[0].hikersId)
        } catch(error){
            console.log(error)
        }
        console.log({hiker})
    }, [hiker[0]])


    return (
      
//        <Card className={classes.root}>
//             <CardActionArea>
//                 <CardContent className={classes.leftContainer}>
//                     <IconButton aria-label="add photo">
//                         <AddAPhotoIcon />
//                     </IconButton>
//                 </CardContent>
//             </CardActionArea>

//             {editMode ? (
//                 <EditProfile onSubmit={(data) => console.log("submit info", data)} handleEditChange={handleEditChange}/>
//             )
//             : (
//             <CardContent className={classes.column}>
//                 <div className={classes.row}>
//                     <Typography gutterBottom variant="h4" component="h2">
//                         {firstName} {lastName}
//                     </Typography>
//                     <IconButton aria-label="editing" >
//                         <EditIcon onClick={handleEditChange}/>
//                     </IconButton>
//                 </div>
//                     <Typography gutterBottom variant="h6" component="h2">
//                         Age {age} {location}
//                     </Typography>

//                     <Typography variant="subtitle1" component="subtitle1">
//                         Favourite Hikes
//                     </Typography>
//                     <List className={classes.column}>
//                         <ListItem>
//                             <ListItemText>
//                                 {favouriteHikes}
//                             </ListItemText>
//                         </ListItem>
//                         <ListItem>
//                             <ListItemText>
//                                 {favouriteHikes}
//                             </ListItemText>
//                         </ListItem>
//                         <ListItem>
//                             <ListItemText>
//                                 {favouriteHikes}
//                             </ListItemText>
//                         </ListItem>
//                     </List>
//                 <Typography gutterBottom variant="h6" component="h2">
//                     Bio
//                 </Typography>
//                 <Typography variant="body2" color="textSecondary" component="p">
//                      {bio}
//                 </Typography>
//                 <Typography gutterBottom variant="h6" component="h2">
//                     Highlights
//                 </Typography>
//                 <div>
//                     <CardMedia
//                         className={classes.cover}
//                         image=""
//                         title="Highlight 1"
//                     />
//                     <CardMedia
//                         className={classes.cover}
//                         image=""
//                         title="Highlight 2"
//                     />
//                 </div>
//             </CardContent>
//             )}
//         </Card> 
      
        <div>
        {loading === 1
        ? (<p>Loading</p>) : (

        <div>
                <form onSubmit={submit} >   

                <h4>Update Hiker</h4>
                
                {hiker.map(hiker => ( 
                <div>
                <div className="control">
                    <label>First Name: </label>
                    <input type="text" className="input" id="firstName"
                    name="hiker[firstName]"
                    placeholder={hiker.firstName} onChange={e => setNewFirstName(e.target.value) }/>
                </div> 
                <div className="control">
                    <label>Last Name: </label>
                    <input type="text" className="input" id="lastName"
                    name="hiker[lastName]"
                    placeholder={hiker.lastName} onChange={e => setNewLastName(e.target.value) }/>
                </div> 
                 <div className="control">
                    <label>Age: </label>
                    <input type="text" className="input" id="age"
                    name="hiker[age]" placeholder={hiker.age} onChange={e => setNewAge( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Gender: </label>
                    <input type="text" className="input" id="gender"
                    name="hiker[gender]" placeholder={hiker.gender} onChange={e => setNewGender( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Favourite Hikes: </label>
                    <input type="text" className="input" id="favouritesHikes"
                    name="hiker[favouritesHikes]" placeholder={hiker.favouritesHikes} onChange={e => setNewFavouritesHikes( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Image Url: </label>
                    <input type="text" className="input" id="imageUrl"
                    name="hiker[imageUrl]" placeholder={hiker.imageUrl} onChange={e => setNewImageUrl( e.target.value )}/>
                </div>
                <div className="control">
                    <input type="submit" name="update" className="button is-black"/>
                </div>
                <br></br>
                <h4>Delete Student</h4>
                <div className="control">
                    <span></span>
                    <button className="button" onClick={deleteItem}>Delete Student</button>
                </div>
            </div>
                ))
            }

                </form>       
        </div>

    )
}

    </div>)
}
