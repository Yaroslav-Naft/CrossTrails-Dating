import React, {useState} from 'react'
import {Input, IconButton} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles";
import CheckIcon from '@material-ui/icons/Check';

const useStyles = makeStyles((theme)=>({
      name: {
          display: "flex",
      }
}))

export default ({handleEditChange, onSubmit}) => {
    const classes = useStyles();

    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [age, setAge] = useState()
    const [location, setLocation] = useState("")
    const [bio, setBio] = useState("")
    const [favouriteHikes, setFavouriteHikes] = useState([])

    const submit = e => {
        e.preventDefault()
        onSubmit({firstName,lastName})
    }
    return (
        <div className={classes.name}>
            <div onClick={()=> handleEditChange()}>Go Back</div>
            <Input placeholder={firstName} inputProps={{ 'aria-label': 'First Name' }} onChange={e=>setFirstName(e.target.value)}/>
            <Input placeholder={lastName} inputProps={{ 'aria-label': 'Last Name' }} onChange={e=>setLastName(e.target.value)}/>
            <IconButton aria-label="check mark" type="submit" onClick={submit}>
                <CheckIcon />
            </IconButton>
        </div>
    )
}
