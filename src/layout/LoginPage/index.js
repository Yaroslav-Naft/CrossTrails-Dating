import React from 'react'
import LoginForm from '../../components/Login/index'
import BGphoto from "../../assets/BgPhotos/hike_couple.jpg"
import './style.css'

export default function LoginPage({onSubmit}) {
    return (
        <div className="mainCard">
            <div className="imgContainer">
                <img src={BGphoto} className="img"/>
            </div>
            <div className="formContainer">
                <LoginForm onSubmit={(data) => console.log("submit login", data)}/>
            </div>
        </div>
    )
}
