import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
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
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme)=>({
      name: {
          display: "flex",
      },
      column: {
          display: "flex",
          flexDirection: "column"
      }
}))

export default ({handleEditChange, onSubmit, data}) => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState()
    const [location, setLocation] = useState("")
    const [bio, setBio] = useState("")
    const [favouriteHikes, setFavouriteHikes] = useState([])
    const [loading, setLoading] = useState(true)

    const submit = e => {
        e.preventDefault()
        onSubmit({firstName,lastName})
    }
    // console.log(data)
    
    const editUserProfile = () => {
        
    }

    return (
        // <div className={classes.name}>
        //         <div onClick={()=> handleEditChange()}>Go Back</div>
        //         <Input placeholder={firstName} inputProps={{ 'aria-label': 'First Name' }} onChange={e=>setFirstName(e.target.value)}/>
        //         <Input placeholder={lastName} inputProps={{ 'aria-label': 'Last Name' }} onChange={e=>setLastName(e.target.value)}/>
        //         <IconButton aria-label="check mark" type="submit" onClick={submit}>
        //             <CheckIcon />
        //         </IconButton>
        

        <Card className={classes.root}>
            <CardActionArea>
                <CardContent className={classes.leftContainer}>
                </CardContent>
            </CardActionArea>

            <CardActions className={classes.column}>
                <div className={classes.row}>
                <Input placeholder={firstName} inputProps={{ 'aria-label': 'First Name' }} onChange={e=>setFirstName(e.target.value)}/>
                <Input placeholder={lastName} inputProps={{ 'aria-label': 'Last Name' }} onChange={e=>setLastName(e.target.value)}/>
                </div>
                    <Input placeholder={age} inputProps={{ 'aria-label': 'Age' }} onChange={e=>setAge(e.target.value)}/>
                    <Input placeholder={location} inputProps={{ 'aria-label': 'Location' }} onChange={e=>setLocation(e.target.value)}/>

                    <Typography variant="subtitle1" component="subtitle1">
                        Favourite Hikes
                    </Typography>
                    <List className={classes.column}>
                        <ListItem>
                            <ListItemText>
                            <Input placeholder={favouriteHikes} inputProps={{ 'aria-label': 'favouriteHikes' }} onChange={e=>setFavouriteHikes(e.target.value)}/>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                            <Input placeholder={favouriteHikes} inputProps={{ 'aria-label': 'favouriteHikes' }} onChange={e=>setFavouriteHikes(e.target.value)}/>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemText>
                            <Input placeholder={favouriteHikes} inputProps={{ 'aria-label': 'favouriteHikes' }} onChange={e=>setFavouriteHikes(e.target.value)}/>
                            </ListItemText>
                        </ListItem>
                    </List>
                <Typography gutterBottom variant="h6" component="h2">
                    Bio
                </Typography>
                <Input placeholder={bio} inputProps={{ 'aria-label': 'Bio' }} onChange={e=>setBio(e.target.value)}/>
            </CardActions>
            <IconButton aria-label="check mark" type="submit" onClick={submit}>
                <CheckIcon />
            </IconButton>
        </Card>
        // </div>
    )
}
