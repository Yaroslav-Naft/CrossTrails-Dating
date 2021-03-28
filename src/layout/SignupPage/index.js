import React from 'react'
import SignupForm from '../../components/Signup/index'
import BGphoto from "../../assets/BgPhotos/hike_couple.jpg"
import { useHistory } from "react-router-dom"
import * as network from '../../network'
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

export default function SignupPage({setToken}) {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory()

    async function signUp(details) {
      let result 
      if (details.type === "signUp") {
        result = await network.signUp(details)
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
                <SignupForm onSubmit={signUp}
                onClose={() => history.push("/")}>
                </SignupForm>
                </div>
            </CardContent>
        </Card>
    )
}
