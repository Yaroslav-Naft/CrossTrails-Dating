import React, {useState, useEffect} from 'react'
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    CardContent,
    Typography,
    FormLabel,
    TextField,RadioGroup,MenuItem,Select,FormControlLabel,Radio,IconButton
  } from "@material-ui/core";
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';

  
const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"

const useStyles = makeStyles((theme)=>({
      name: {
          display: "flex",
      },
      column: {
          display: "flex",
          flexDirection: "column"
      },
      leftContainer: {
          maxWidth: "50%"
      },
      root: {
          padding: 20
      }
}))

export default ({hiker, onClose}) => {
    const history = useHistory()
    const classes = useStyles();
    const [newAge, setNewAge] = useState("")
    const [newFirstName, setNewFirstName] = useState("")
    const [newLastName, setNewLastName] = useState("")
    const [newGender, setNewGender] = useState("")
    const [newImageUrl, setNewImageUrl] = useState("")
    const [newFavouritesHikes, setNewFavouritesHikes] = useState("")
    const [hikersId, setHikersId] = useState("")
    const [newHiker, setNewHiker] = useState({})

    const ageOptions = []
    for (let i = 18; i < 80; i++){
      ageOptions.push(i)
    }

    const submit = s => {
        s.preventDefault()
        //console.log({newHiker})
         fetch( url + '/hikers', {
            method: 'PUT',
            body: JSON.stringify(newHiker),
            headers: { 'Content-Type': 'application/json'}
        })
        //update body
        .then(response => (response.json(), console.log(response)))
        history.push('/account')
    }

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

    //console.log(hiker[0])

    return (
            <Card className={classes.root} action={
                <IconButton aria-label="close" onClick={onClose}>
                    <CloseIcon />
                </IconButton>
                    }>
            <CardContent>
                    <form onSubmit={submit}>
                    <TextField 
                        placeholder={hiker[0].firstName}
                        className={classes.input} 
                        label="First Name" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setNewFirstName(e.target.value)}>
                        </TextField>
                        <TextField 
                        placeholder={hiker[0].lastName}
                        className={classes.input} 
                        label="Last Name" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setNewLastName(e.target.value)}>
                        </TextField>
                        <div>
                          <FormLabel component="gender">Gender</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" onChange={e => setNewGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                          </RadioGroup>
                          <FormLabel component="age">Age</FormLabel>
                          <TextField 
                            placeholder={hiker[0].age}
                            className={classes.input} 
                            label="age" 
                            variant="outlined" 
                            fullWidth
                            onChange={e => setNewAge(e.target.value)}>
                            </TextField>
                        </div>
                        <IconButton type="submit">
                            <CheckIcon />
                        </IconButton>
                    </form>
                </CardContent>
            </Card> 
    )
}

{/* <form onSubmit={submit} >   
                <h4>Update Hiker</h4>
                <div>
                <div className="control">
                    <label>First Name: </label>
                    <input type="text" className="input" id="firstName"
                    name="hiker[firstName]"
                    placeholder={hiker[0].firstName} onChange={e => setNewFirstName(e.target.value) }/>
                </div> 
                <div className="control">
                    <label>Last Name: </label>
                    <input type="text" className="input" id="lastName"
                    name="hiker[lastName]"
                    placeholder={hiker[0].lastName} onChange={e => setNewLastName(e.target.value) }/>
                </div> 
                 <div className="control">
                    <label>Age: </label>
                    <input type="text" className="input" id="age"
                    name="hiker[age]" placeholder={hiker[0].age} onChange={e => setNewAge( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Gender: </label>
                    <input type="text" className="input" id="gender"
                    name="hiker[gender]" placeholder={hiker[0].gender} onChange={e => setNewGender( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Favourite Hikes: </label>
                    <input type="text" className="input" id="favouritesHikes"
                    name="hiker[favouritesHikes]" placeholder={hiker[0].favouritesHikes} onChange={e => setNewFavouritesHikes( e.target.value )}/>
                </div>
                <div className="control">
                    <label>Image Url: </label>
                    <input type="text" className="input" id="imageUrl"
                    name="hiker[imageUrl]" placeholder={hiker[0].imageUrl} onChange={e => setNewImageUrl( e.target.value )}/>
                </div>
                <div className="control">
                    <input type="submit" name="update" className="button is-black"/>
                </div>
                </div>
                </form>       
 */}
