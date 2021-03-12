import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import {
    Card,
    CardContent,
    CardActionArea,
    Typography,
    CardActions,
    List,
    ListItem,
    ListItemText,
    IconButton,
    Input
  } from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        maxWidth: "1116px",
        height: "699px",
        backgroundColor: "#F8F8F8",
        display: "flex",
      },
      column: {
          display: "flex",
          alignItems: "start",
          flexDirection: "column"
      },
      row: {
          display: "flex",
          flexDirection: "row"
      }
}))

export default function UserAccountPage() {

    const classes = useStyles();
    const [editing, setEditing] = useState(false)
    const [hikes, setHikes] = useState(["asdfsafs","sadfasf","asdfasf"])
    const history = useHistory()
    const {state} = useLocation()
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    const [hikers, setHikers] = useState([])
    const [hiker, setHiker] = useState({})


    //get data from previous page
    let { hikersId } = useParams()
    // console.log(hikersId)
    


    //useNavigate

    // const username = state.username

    //const {username} = state.username
    console.log(state.username)
    // console.log(username)
    // console.log(state.username)
    let username = state.username
    //console.log(state.username)
    //console.log(`The params are: ${username}`)

    // const submit = (e) => {
    //     e.preventDefault()
    // }
    
    const displaySettings = async event => {
    fetch(`${url}/hikers/${state.username}`)
    .then(response => response.json())
    .then(data => {
        setHiker(data)
    })
    //console.log(hiker)
    }   

    // useEffect(() => {
    //     displaySettings()
    // }, [])


    const searchProduct = async () => {
        fetch(url + '/hikers')
        .then(response => response.json())
        .then(data => setHikers(
            JSON.parse(data.body)
        ))
    }

    useEffect(() => {
    //    searchProduct()
        displaySettings()
    }, [])


    return (
 <div>
        <form >   
                <h4>Update Product</h4>
                <div className="control">
                    <label>Product Name: </label>
                    <input type="text" className="input" id="hikers"
                    name="hiker[hikersId]" value={hiker.hikersId} />
                </div>


        </form>


        </div>



        

    )







        //     <div> 
                
        //     <table>
        //     <thead>
        //         <tr>
        //             <th>Id</th>
        //             <th>Age</th>
        //             <th>Favourite Hikes</th>
        //           </tr>
        //       </thead>
        //       <tbody>
        //           {hiker.hikersId}
        //           {/* {hiker.map(hiker =>
        //           <tr key={hiker.hikersId}>
        //               <td>{hiker.hikersId}</td>
        //               <td>{hiker.age}</td>
        //               <td>{hiker.favouritesHikes}</td>
        //           </tr>
        //           )} */}
        //       </tbody>
        //   </table>
              /* <Card className={classes.root}>
                <CardActionArea>
                    <CardContent>
                    <IconButton aria-label="add photo">
                        <AddAPhotoIcon />
                    </IconButton>
                    </CardContent>
                </CardActionArea>
                <CardActions className={classes.column}>
                <Typography gutterBottom variant="h4" component="h2">
                        John Doe
                </Typography>
                <div className={classes.row}>
                <Typography gutterBottom variant="h6" component="h2">
                        Age 25
                </Typography>
                <Typography  variant="subtitle1" component="subtitle1">
                        Vancouver, BC
                </Typography>
                </div>
                <div>
                    <Typography variant="subtitle1" component="subtitle1">
                            Favourite Hikes
                    </Typography>
                    <IconButton aria-label="editing" onClick={e => setEditing(true)}>
                        <EditIcon />
                    </IconButton>
                    <IconButton aria-label="check mark" onClick={e => setEditing(false)}>
                            <CheckIcon />
                    </IconButton>
                </div>
                {editing == true ?  (
                     <form className={classes.root} noValidate autoComplete="off" onSubmit={submit}>
                         <List>
                             {hikes.map((hike)=>{
                                <ListItem>
                                    <Input placeholder={hike} inputProps={{ 'aria-label': 'favourite hike 1' }} onChange={setHikes(e => e.target.value)}/>
                                </ListItem>
                             })}
                         </List>
                         
                     </form>
                 ) : 
                    (<List>
                        <ListItem>
                            {hikes.map((hike)=>(
                                <ListItemText>
                                    {hike}
                                </ListItemText>
                            )
                            )}
                            
                        </ListItem>
                    </List>
                    )}
                
                    <Typography gutterBottom variant="subtitle1" component="subtitle1">
                            Bio
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                        across all continents except Antarctica
                    </Typography>
                </CardActions>
                </Card> */
}
