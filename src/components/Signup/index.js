import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import {
    Card,
    CardContent,
    Button,
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
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [gender, setGender] = useState("");
    const [age, setAge] = useState("");
    
      const submit = async event => {
        event.preventDefault()
        onSubmit({type: "signup",email, username, password, gender, age})
        try {
          const signedIn = await Auth.signUp({
            username,
            password,
            attributes: {
              email: email
            }
          })
          console.log("You have sucessfully signed up")
        } catch(error) {
          console.log(`You have the following error:`)
          console.log(error)
        }

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
                        value={email} 
                        className={classes.input} 
                        label="email" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setEmail(e.target.value)}>
                        </TextField>
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
                        label="gender" 
                        variant="outlined"
                        fullWidth
                        type="Gender"
                        onChange={e => setGender(e.target.value)}>
                        </TextField>
                        <TextField 
                        value={age} 
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
