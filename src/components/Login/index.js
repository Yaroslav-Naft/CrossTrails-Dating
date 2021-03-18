import React, {useState, useEffect, useNavigate} from 'react'
import { Auth } from 'aws-amplify';
import { useHistory } from 'react-router-dom';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
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
        maxHeight: "464px",
        padding: "48px 40px",
    },
    input: {
      marginBottom: 10,
      borderRadius: "50%"
    },
    inputForm: {
      '& > *': {
        margin: "24px 0"
      },
    },
    title:{
        marginLeft: 20,
    }
}))

export default function Login({onSubmit, error}) {
    const classes = useStyles();
    const history = useHistory();
    //const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [hikers, setHikers] = useState([])
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    
      const submit = async event => {
        event.preventDefault()
        try {
          const loggedIn = await Auth.signIn({
            username,
            password
          }) 
          console.log("You have sucessfully logged In") 
          history.push('/account', { username })
          //history.push("/account",{params: username})

        } catch (error) {
          console.log(`You have the following error:`)
          console.log(error)
        }

        onSubmit({type: "login", username, password})
      }


      const searchProduct = async () => {
        fetch(url + '/hikers')
        .then(response => response.json())
        .then(data => setHikers(
            JSON.parse(data.body)
        ))
    }

    useEffect(() => {
        searchProduct()
    }, [])

    return (
      <div>
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
                        <Button color="primary" type="submit" fullWidth>LOGIN</Button>
                    </form>
                    <Typography  color="black" gutterBottom>
                       Don't have an account? <Link to="/signup">Sign up</Link>
                    </Typography>
                </CardContent>
            </Card>
</div>
    )
}
