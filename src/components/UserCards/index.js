import React, {useState, useEffect} from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea, CardHeader ,CardMedia,CardContent,CardActions ,IconButton, Typography, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "400px",
    margin: "10px 5px",
    padding: "10px"
  },
  row: {
      display: "flex",
      flexWrap: "wrap",
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
  media: {
    width: "245px",
    height: "325px"
  }

}));

export default function UserCards() {
  const classes = useStyles();

  const [hikers, setHikers] = useState([])
  const [loading, setLoading] = useState(0)
  const [liked, setLiked] = useState(true)

    
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
    <div className={classes.row}>
    {loading === 0 ? (<p>Loading...</p>)
      :(
        <>
        {hikers.slice(0,4).map(hiker => 
        <Card className={classes.root}>
              <CardActionArea>
                {/* <CardMedia
                  className={classes.media}
                  src={hiker.imageUrl}
                  title="User Profile"
                /> */}
                <CardMedia 
                  className={classes.media}
                  square 
                  imageUrl='https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg' 
                  
                  />
                  </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {hiker.firstName} {hiker.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {hiker.age}
                  </Typography>
                  <CardActions>
                  <IconButton size="small" color="primary">
                    {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
                  </IconButton>
                  </CardActions>
                </CardContent>
              
            </Card>
            )}
        </>
      )
    }
    </div>
  )
}
