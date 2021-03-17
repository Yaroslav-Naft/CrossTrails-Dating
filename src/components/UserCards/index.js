import React, {useState, useEffect} from 'react';
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';


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

  }
}));

export default function UserCards() {
  const classes = useStyles();

  const [hikers, setHikers] = useState([])
  const [loading, setLoading] = useState(0)

    
  const handleExpandLike = () => {
    
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
        <div className={classes.row}>
            <div className={classes.column} >
                <div className={classes.row}>
                <span>{hikers[0].firstName}</span>
                <span>{hikers[0].lastName}</span>
                </div>
                <span>{hikers[0].age}</span>
            </div>
        </div>)
        }
      </>
    )
}

