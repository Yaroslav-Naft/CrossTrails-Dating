import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Card, CardActionArea ,CardMedia,CardContent,CardActions ,IconButton, Typography, Button} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "250px",
    height: "300px",
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
    height: "250px"
  },
  cardImage: {
    maxWidth: "245px",
    height: "250px",
    objectFit: "cover"
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

//console.log(hikers)

  return (
    <div className={classes.row}>
    {loading === 0 ? (<p>Loading...</p>)
      :(
        <>
        {hikers.map(hiker => 
        <Card className={classes.root} >
              <CardActionArea key={hiker.hikerId}>
                {/* <CardMedia
                  className={classes.media}
                  src={hiker.imageUrl}
                  title="User Profile"
                /> */}
                <CardMedia 
                  className={classes.media}
                  square 
                  >
                    <img src={hiker.imageUrl} className={classes.cardImage}/>
                  </CardMedia>
                  </CardActionArea>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {hiker.firstName} {hiker.lastName}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {hiker.age}
                  </Typography>
                </CardContent>
                  <CardActions>
                  <IconButton size="small" color="primary">
                    {liked ? (<FavoriteIcon />) : (<FavoriteBorderIcon />)}
                  </IconButton>
                  </CardActions>
              
            </Card>
            )}
        </>
      )
    }
    </div>
  )
}
