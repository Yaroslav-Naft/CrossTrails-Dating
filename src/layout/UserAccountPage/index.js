import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';
import EditProfile from './EditProfile'
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import {
    Card,
    CardContent,
    Typography,
    IconButton,
    CardMedia,
    Avatar,
    CardHeader
  } from "@material-ui/core";


const useStyles = makeStyles((theme)=>({
    root: {
        marginTop: 100,
        backgroundColor: "#F8F8F8",
        display: "flex",
      },
      column: {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
      },
      row: {
          display: "flex",
          flexDirection: "row",
      },
      leftContainer:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
      },
      large: {
          width: 150,
          height: 150,
          fontSize: 50,
      },
      editIcon: {
        zIndex: 100,
      },

      
}))



export default function UserAccountPage({user}) {

    const classes = useStyles();
    const [editing, setEditing] = useState(0)
    const history = useHistory()
    const {state} = useLocation()
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    const [hiker, setHiker] = useState([])
    const [loading, setLoading] = useState(1)
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

    function handleEditChange(){
        setEditing(1)
    }

    const displaySettings = async () => {
    fetch(`${url}/hikers/${user["cognito:username"]}`)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        setHiker(data)
        setLoading(0)
    })
    }   

    useEffect(() => {
            displaySettings()
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
    }, [hiker[0]])


    return (
        <>
      {loading === 1 ? (<p>loading...</p>) : (
        <Card className={classes.root}>
            {editing === 1 ? (
                <EditProfile onSubmit={(data) => console.log("submit info", data)} handleEditChange={handleEditChange}></EditProfile>
            )
            : (
        <>
            <CardContent className={classes.column}>
                <div className={classes.row}>
                    <CardMedia>
                        <Avatar alt={hiker[0].firstName} src="/static/images/avatar/1.jpg" className={classes.large} /> 
                    </CardMedia>
                    <IconButton aria-label="edit" onClick={handleEditChange}>
                        <EditIcon />
                    </IconButton>
                </div>
                <div className={classes.row}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {hiker[0].firstName} {hiker[0].lastName}
                    </Typography>
                </div>
                    <Typography gutterBottom variant="h6" component="h2">
                        Age: {hiker[0].age} Gender: {hiker[0].gender}
                    </Typography>
                    <Typography variant="subtitle1" component="subtitle1">
                        Favourite Hikes
                    </Typography>
                    <Typography variant="subtitle1" component="subtitle1">
                        {hiker[0].favouritesHikes}
                    </Typography>
            </CardContent>
        </>
        )}
    </Card> 
    )}
  </>
    
//         <div>
//         {loading === 1
//         ? (<p>Loading</p>) : (

//         <div>
//                 <form onSubmit={submit} >   

//                 <h4>Update Hiker</h4>
                
//                 {hiker.map(hiker => ( 
//                 <div>
//                 <div className="control">
//                     <label>First Name: </label>
//                     <input type="text" className="input" id="firstName"
//                     name="hiker[firstName]"
//                     placeholder={hiker.firstName} onChange={e => setNewFirstName(e.target.value) }/>
//                 </div> 
//                 <div className="control">
//                     <label>Last Name: </label>
//                     <input type="text" className="input" id="lastName"
//                     name="hiker[lastName]"
//                     placeholder={hiker.lastName} onChange={e => setNewLastName(e.target.value) }/>
//                 </div> 
//                  <div className="control">
//                     <label>Age: </label>
//                     <input type="text" className="input" id="age"
//                     name="hiker[age]" placeholder={hiker.age} onChange={e => setNewAge( e.target.value )}/>
//                 </div>
//                 <div className="control">
//                     <label>Gender: </label>
//                     <input type="text" className="input" id="gender"
//                     name="hiker[gender]" placeholder={hiker.gender} onChange={e => setNewGender( e.target.value )}/>
//                 </div>
//                 <div className="control">
//                     <label>Favourite Hikes: </label>
//                     <input type="text" className="input" id="favouritesHikes"
//                     name="hiker[favouritesHikes]" placeholder={hiker.favouritesHikes} onChange={e => setNewFavouritesHikes( e.target.value )}/>
//                 </div>
//                 <div className="control">
//                     <label>Image Url: </label>
//                     <input type="text" className="input" id="imageUrl"
//                     name="hiker[imageUrl]" placeholder={hiker.imageUrl} onChange={e => setNewImageUrl( e.target.value )}/>
//                 </div>
//                 <div className="control">
//                     <input type="submit" name="update" className="button is-black"/>
//                 </div>
//                 <br></br>
//                 <h4>Delete Student</h4>
//                 <div className="control">
//                     <span></span>
//                     <button className="button" onClick={deleteItem}>Delete Student</button>
//                 </div>
//             </div>
//                 ))
//             }

//                 </form>       
//         </div>

//     )
// }

//     </div>)
    )
}
