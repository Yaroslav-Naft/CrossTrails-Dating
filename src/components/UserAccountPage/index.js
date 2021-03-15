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

export default function UserAccountPage({onSubmit}) {
    const classes = useStyles();

    const [editMode, setEditMode] = useState(false)
    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Doe")
    const [age, setAge] = useState(25)
    const [location, setLocation] = useState("Vancouver, BC")
    const [bio, setBio] = useState("Hello World!")
    const [favouriteHikes, setFavouriteHikes] = useState([])

    const handleEditChange = () => {
        setEditMode(false)
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
                    <IconButton aria-label="editing" z>
                        <EditIcon />
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
            </CardActions>
            )}
        </Card>
    )
}
