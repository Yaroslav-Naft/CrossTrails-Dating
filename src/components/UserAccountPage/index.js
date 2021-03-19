import React, {useState, useEffect} from 'react'
import { useHistory, useParams } from "react-router";
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import EditProfile from './EditProfile'
import { makeStyles } from "@material-ui/core/styles";
import AddAPhotoIcon from '@material-ui/icons/AddAPhoto';
import EditIcon from '@material-ui/icons/Edit';
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
          flexDirection: "column",
          width: "50%"
      },
      row: {
          display: "flex",
          flexDirection: "row",
      },
      leftContainer:{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "50%"
      }
      
}))

export default function UserAccountPage({username}) {

    const classes = useStyles();
    const [editing, setEditing] = useState(false)
    const [hikes, setHikes] = useState(["asdfsafs","sadfasf","asdfasf"])
    const history = useHistory()
    const {state} = useLocation()
    const url = "https://w4jzml8vu8.execute-api.us-west-1.amazonaws.com/prod"
    const [hiker, setHiker] = useState([])
    const [loading, setLoading] = useState(1)
    const [num, setNum] = useState(0)
    const [newHiker, setNewHiker] = useState({})

    const submit = s => {
        s.preventDefault()
        //Update product
        fetch( url + '/hikers', {
            method: 'PUT',
            body: JSON.stringify({ newHiker }),
            headers: { 'Content-Type': 'application/json'}
        })
        //update body
        .then(response => response.json())
        .then(() => { displaySettings ()} )
        console.log('Hikers sent')
        console.log({ newHiker })
    }

    
    const displaySettings = async () => {
    fetch(`${url}/hikers/${state.username}`)
    .then(response => response.json())
    .then(data => {
        setHiker(data)
        setLoading(0)
    })
        console.log({hiker})
    }   


    
const deleteItem = s => {
    s.preventDefault()
    //pass product
    fetch(url + `/hikers/${state.username}`, {
        method: 'DELETE',
        body: JSON.stringify( { hiker } ),
        headers: { 'Content-Type': 'application/json'}
    })
    history.push("/")
}

    useEffect(() => {
            displaySettings()
            console.log({ hiker })
    }, [])

    console.log({hiker})

    return (
        <div>
        {loading === 1
        ? (<p>Loading</p>) : (

        <div>
                <form onSubmit={submit} >   

                <h4>Update Hiker</h4>
                {/* Only works when uncommenting after initial load */}
                
                {hiker.map(hiker => (
                <div>
                <div className="control">
                    <label>Username: </label>
                    <input type="text" className="input" id="userName"
                    name="hiker[userName]"
                    value={newHiker.userName} onChange={e => setNewHiker({...hiker, userName: e.target.value } )}/>
                </div> 
                 <div className="control">
                    <label>Age: </label>
                    <input type="text" className="input" id="age"
                    name="hiker[age]" value={newHiker.age} onChange={e => setNewHiker({ ...newHiker, age: e.target.value })}/>
                </div>
                {/* <div className="control">
                    <label>Product Price: </label>
                    <input type="text" className="input" id="productPrice"
                    name="product[productName]" value={product.productPrice} onChange={e => setProduct({ ...product, productPrice: e.target.value })}/>
                </div> */}
                <div className="control">
                    <input type="submit" name="update" className="button is-black"/>
                </div>
                <br></br>
                <h4>Delete Student</h4>
                <div className="control">
                    <span></span>
                    <button className="button" onClick={deleteItem}>Delete Student</button>
                </div>
            </div>
                ))
            }

                </form>       
        </div>

    )
}

    </div>)
}
