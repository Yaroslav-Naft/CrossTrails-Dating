import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import {
    Card,
    Tabs,
    Tab,
    CardContent,
    CardHeader,
    Button,
    IconButton,
    TextField,
    Typography,
  } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root:{
        maxWidth: "400px",
        padding: 20,
    },
    input: {
      marginBottom: 10,
      borderRadius: "50%"
    },
    inputForm: {
      '& > *': {
        margin: "10px 0"
      },
    },
    title:{
        marginLeft: 20,
    }
}))


export default function Signup({onSubmit, error}) {
    const classes = useStyles();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState(0);
    
      const submit = event => {
        event.preventDefault()
        onSubmit({type: "signup",email, username, password})
      }

    return (
            <Card className={classes.root}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Create
                </Typography>
                <Typography className={classes.title} variant="h5" component="h2">
                    Your Profile
                </Typography>
                <CardContent>
                    <form className={classes.inputForm} onSubmit={submit}>
                        <TextField 
                        value={username} 
                        className={classes.input} 
                        label="username" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setUsername(e.target.value)}>
                        </TextField>
                        <TextField 
                        value={password} 
                        className={classes.input} 
                        label="password" 
                        variant="outlined"
                        fullWidth
                        type="password"
                        onChange={e => setPassword(e.target.value)}>
                        </TextField>
                        <TextField 
                        value={gender} 
                        className={classes.input} 
                        label="password" 
                        variant="outlined"
                        fullWidth
                        type="Gender"
                        onChange={e => setGender(e.target.value)}>
                        </TextField>
                        <TextField 
                        value={password} 
                        className={classes.input} 
                        label="age" 
                        variant="outlined"
                        fullWidth
                        type="Age"
                        onChange={e => setAge(e.target.value)}>
                        </TextField>
                        {!!error && <Typography>{error}</Typography>}
                        <Button color="primary" type="submit" fullWidth>SUBMIT</Button>
                    </form>
                </CardContent>
            </Card>
    )
}
