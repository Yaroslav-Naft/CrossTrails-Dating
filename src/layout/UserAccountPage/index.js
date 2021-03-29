import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router";
import { useLocation } from 'react-router-dom';
import EditProfile from './EditProfile'
import { makeStyles } from "@material-ui/core/styles";
import EditIcon from '@material-ui/icons/Edit';
import UserTable from '../../components/Likes/index.js'
// material ui
import {Card, CardContent, CardMedia, Avatar, IconButton, Typography} from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: 'center',
  },
  root: {
      marginTop: 100,
      backgroundColor: "#F8F8F8",
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      width: "500px"
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
    button: {
      display: 'flex',
      color: 'white',
      backgroundColor: "#323232",
      padding: "8px",
      borderRadius: '2px'
    }

    
}))



export default function UserAccountPage({user}) {
    const classes = useStyles();
    const [editing, setEditing] = useState(0)
    const history = useHistory()
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    const [hiker, setHiker] = useState()
    const [loading, setLoading] = useState(1)



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

    return (
    <div className={classes.container}>
      {loading === 1 ? (<p>loading...</p>) : (
            <Card className={classes.root}>
                {editing === 1 ? (
                    <EditProfile hiker={hiker} handleEditChange={handleEditChange}></EditProfile>
                )
                : (
                <CardContent className={classes.column}>
                    <div className={classes.row}>
                        <CardMedia>
                            <Avatar alt={hiker[0].firstName} src={hiker[0].imageUrl} className={classes.large} /> 
                        </CardMedia>
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
                        <IconButton aria-label="edit" onClick={handleEditChange}>
                          <div className={classes.button}>
                            <EditIcon />
                            <Typography >
                              Setting
                            </Typography>
                          </div>
                        </IconButton>
                        <UserTable user={user}/>
                </CardContent>
                    )}
            </Card> 
        )}
    </div>
    
    )
}
