import React from 'react'
import UserCards from '../../components/UserCards/index'
import { makeStyles } from "@material-ui/core/styles";
import {Paper} from "@material-ui/core";
import {Auth} from 'aws-amplify'

const useStyles = makeStyles((theme)=>({
    root: {
        padding: 50,
        margin: "180px 80px",
    },
    row: {
        display: "flex",
        overflowY: "hidden",
        overflowX: "scroll",

    }
      
}))

export default function MatchPage() {
    const classes = useStyles();

    // let user = await Auth.currentAuthenticatedUser();

    // const {attribute} = user;

    // Auth.currentSession()
    // .then(data => console.log(data))
    // .catch(err => console.log(err));

    return (
        <Paper elevation={3} className={classes.root}>
            <div className={classes.row}>
                <UserCards />
            </div>
        </Paper>
    )
}
