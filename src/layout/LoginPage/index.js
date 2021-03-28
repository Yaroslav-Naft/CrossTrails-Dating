import React from 'react'
import LoginForm from '../../components/Login/index'
import BGphoto from "../../assets/BgPhotos/hike_couple.jpg"
import * as network from '../../network'
import { useHistory } from "react-router-dom"
import { Card, CardContent, CardMedia } from '@material-ui/core'
import { makeStyles, useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 100,
      width: '80%'
    },
    details: {
      display: 'flex',
    },
    content: {
      display: 'flex',
      alignItems: 'center',
      width: '100%'
    },
    cover: {
      flex: 1
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        flex: 1,
        margin: 30
    }
  }));

export default function LoginPage({setToken}) {
    const classes = useStyles();
    const theme = useTheme();

    const history = useHistory()

    async function login(details) {
      let result 
      if (details.type === "login") {
        result = await network.login(details)
      }
  
      // Store the JWT into local storage
      setToken(result.accessToken)
      history.push("/")
    }
    
    
    return (
        <Card className={classes.root}>
            <CardContent className={classes.content}>
                <CardMedia className={classes.cover}>
                    <img src={BGphoto}  />
                </CardMedia>
                <div className={classes.form}>
                    <LoginForm
                    onSubmit={login}
                    onClose={() => history.push("/")}
                    ></LoginForm>
                </div>
            </CardContent>
        </Card>
      )
}
