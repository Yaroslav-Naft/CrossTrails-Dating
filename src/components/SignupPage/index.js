import React from 'react'
import SignupForm from '../Signup/index'
import BGphoto from "../../assets/BgPhotos/hike_couple.jpg"
import './style.css'

export default function SignupPage() {
    return (
        <div className="mainCard">
            <div className="imgContainer">
                <img src={BGphoto} className="img"/>
            </div>
            <div className="formContainer">
                <SignupForm />
            </div>
        </div>
    )
}
