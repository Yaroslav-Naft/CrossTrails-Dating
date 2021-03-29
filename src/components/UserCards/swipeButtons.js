import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import CloseIcon from "@material-ui/icons/Close";
import {IconButton} from '@material-ui/core';
import './swipebuttons.css'

export default function swipeButtons() {


    return (
        <div className="swipeButtons">
            <IconButton className="swipeButtons__left" >
              <CloseIcon fontSize="large" />
            </IconButton>
            <IconButton className="swipeButtons__right"> 
              <FavoriteIcon fontSize="large" />
            </IconButton>
        </div>
    )
}
