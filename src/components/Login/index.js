import React, {useState} from 'react'
import { makeStyles } from "@material-ui/core/styles";
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

export default function Login({onSubmit, error}) {
    const classes = useStyles();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    
      const submit = event => {
        event.preventDefault()
        onSubmit({type: "login", username, password})
      }

    return (
            <Card className={classes.root}>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Welcome!
                </Typography>
                <Typography className={classes.title} variant="h5" component="h2">
                    Join Our Community
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
                        {!!error && <Typography>{error}</Typography>}
                        <Button color="primary" type="submit" fullWidth>SUBMIT</Button>
                    </form>
                </CardContent>
            </Card>
    )
}
