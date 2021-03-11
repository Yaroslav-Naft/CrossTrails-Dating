import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
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
          flexDirection: "column"
      },
      row: {
          display: "flex",
          flexDirection: "row"
      }
}))

export default function UserAccountPage() {
    const classes = useStyles();

    const [editing, setEditing] = useState(false)
    const [hikes, setHikes] = useState(["GARIBALDI LAKE TRAIL", "MOUNT CHEAM", "JOFFRE LAKES TRAIL"])

    const submit = (e) => {
        e.preventDefault()
    }


    return (
        
              <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <IconButton aria-label="add photo">
                        <AddAPhotoIcon />
                    </IconButton>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.column}>
                <Typography gutterBottom variant="h4" component="h2">
                        John Doe
                </Typography>
                <div className={classes.row}>
                <Typography gutterBottom variant="h6" component="h2">
                        Age 25
                </Typography>
                <Typography  variant="subtitle1" component="subtitle1">
                        Vancouver, BC
                </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" component="subtitle1">
                            Favourite Hikes
                    </Typography>
                    <IconButton aria-label="editing" onClick={e => setEditing(true)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="check mark" onClick={e => setEditing(false)}>
                            <CheckIcon />
                    </IconButton>
                </div>
                {editing == true ?  (
                     <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
                         <List>
                            <ListItem>
                                <Input placeholder={hikes[0]} inputProps={{ 'aria-label': 'favourite hike 1' }} />
                            </ListItem>
                            <ListItem>
                                <Input placeholder={hikes[1]} inputProps={{ 'aria-label': 'favourite hike 2' }} />
                            </ListItem>
                            <ListItem>
                                <Input placeholder={hikes[2]} inputProps={{ 'aria-label': 'favourite hike 3' }} />
                            </ListItem>
                         </List>
                         
                     </form>
                 ) : 
                    (<List>
                        <ListItem>
                            <ListItemText>
                                {hikes[0]}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {hikes[1]}
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                                {hikes[2]}
                            </ListItemText>
                        </ListItem>
                    </List>
                    )}
                
                    <Typography gutterBottom variant="subtitle1" component="subtitle1">
                            Bio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardActions>
                </Card>
      
    )
}
