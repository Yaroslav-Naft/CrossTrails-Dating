import React, {useState, useEffect} from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardHeader ,CardMedia,CardContent,CardActions ,IconButton, Typography, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
  },
  row: {
      display: "flex",
      flexWrap: "wrap"
  },
  column: {
      display: "flex",
      flexDirection: "column"
  },
  card: {
    maxWidth: "250px",
    height: "400px",
    borderRadius: "15px"
  },

}));

export default function UserCards() {
  const classes = useStyles();

  const [hikers, setHikers] = useState([])
  const [loading, setLoading] = useState(0)

    
  const handleLike = () => {
    
  };
  


useEffect(() => {
    displayUserCard()
}, [])

const displayUserCard = async event => {
    fetch(`${url}/hikers`)
    .then(response => response.json())
    .then(data => {
        setHikers(JSON.parse(data.body))
        setLoading(1)
    })
}

console.log(hikers)

  return (
      <>
      {loading === 0 ? (<p>Loading...</p>)
        :
        (
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80"
                title="User Card"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {hikers[0].firstName} {hikers[0].lastName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {hikers[0].age}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <IconButton size="small" color="primary">
                <FavoriteBorderIcon />
              </IconButton>
            </CardActions>
          </Card>)}
      </>
    )
}

// <div className={classes.card}>
        //     <div className={classes.column} >
        //       <div>
        //         <img src='https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=250&q=80' />
        //       </div>
        //         <div className={classes.row}>
        //         <Typography>{hikers[0].firstName}</Typography>
        //         <Typography>{hikers[0].lastName}</Typography>
        //         </div>
        //         <Typography>{hikers[0].age}</Typography>
        //     </div>
        // </div>