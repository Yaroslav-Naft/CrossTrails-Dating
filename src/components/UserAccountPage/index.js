import React, {useState} from 'react'
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
    Input
  } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: "1116px",
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

export default function UserAccountPage({onSubmit, data}) {
    const classes = useStyles();

    const [editMode, setEditMode] = useState(0)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState(25)
    const [location, setLocation] = useState("")
    const [bio, setBio] = useState("Hello World!")
    const [favouriteHikes, setFavouriteHikes] = useState([])

    const handleEditChange = () => {
        setEditMode(1)
    }
   
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.leftContainer}>
                    <IconButton aria-label="add photo">
                        <AddAPhotoIcon />
                    </IconButton>
                </CardContent>
            </CardActionArea>
            {editMode ? (
                <EditProfile onSubmit={(data) => console.log("submit info", data)} handleEditChange={handleEditChange}/>
            )
            : (
            <CardActions className={classes.column}>
                <div className={classes.row}>
                    <Typography gutterBottom variant="h4" component="h2">
                        {firstName} {lastName}
                    </Typography>
                    <IconButton aria-label="editing" >
                        <EditIcon onClick={handleEditChange}/>
                    </IconButton>
                </div>
                    <Typography gutterBottom variant="h6" component="h2">
                        Age {age} {location}
                    </Typography>

                    <Typography variant="subtitle1" component="subtitle1">
                        Favourite Hikes
                    </Typography>
                    <List className={classes.column}>
                        <ListItem>
                            <ListItemText>
                                {favouriteHikes}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {favouriteHikes}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {favouriteHikes}
                            </ListItemText>
                        </ListItem>
                    </List>
                <Typography gutterBottom variant="h6" component="h2">
                    Bio
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                     {bio}
                </Typography>
                <Typography gutterBottom variant="h6" component="h2">
                    Highlights
                </Typography>
                <div>

                </div>
            </CardActions>
            )}
        </Card>
    )
}
