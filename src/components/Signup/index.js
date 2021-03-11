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
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
    MenuItem,
    Select
  } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root:{
        width: "500px",
        maxHeight: "800px",
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
    },
    row: {
      display: "flex",
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

    const ageOptions = []
    for (let i = 18; i < 60; i++){
      ageOptions.push(i)
    }

    
      const submit = async event => {
        event.preventDefault()
        onSubmit({type: "signup",email, username, password, gender, age})
        try {
          const signedIn = await Auth.signUp({
            username,
            password,
            attributes: {
              email: email,
            }
          })
          console.log("You have sucessfully signed up")
          alert("We have sent you a confirmation email!");
          history.push("/login")
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
                    <FormLabel component="legend">Email</FormLabel>
                    <TextField 
                        value={email} 
                        className={classes.input} 
                        label="email" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setEmail(e.target.value)}>
                        </TextField>
                        <FormLabel component="legend">Username</FormLabel>
                        <TextField 
                        value={username} 
                        className={classes.input} 
                        label="username" 
                        variant="outlined" 
                        fullWidth
                        onChange={e => setUsername(e.target.value)}>
                        </TextField>
                        <FormLabel component="legend">Password</FormLabel>
                        <TextField 
                        value={password} 
                        className={classes.input} 
                        label="password" 
                        variant="outlined"
                        fullWidth
                        type="password"
                        onChange={e => setPassword(e.target.value)}>
                        </TextField>
                        <div>
                          <FormLabel component="legend">Gender</FormLabel>
                          <RadioGroup aria-label="gender" name="gender1" value={gender} onChange={e => setGender(e.target.value)}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                          </RadioGroup>
                          <FormLabel component="legend">Age</FormLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={age}
                            onChange={e => setAge(e.target.value)}
                            label="Age"
                          >
                            {ageOptions.map((a) => {
                              return (<MenuItem value={a}>{a}</MenuItem>)
                            })}
                          </Select>
                        </div>
                        {!!error && <Typography>{error}</Typography>}
                        <Button color="primary" type="submit" fullWidth>SUBMIT</Button>
                        
                    </form>
                </CardContent>
            </Card>
    )
}
