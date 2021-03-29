import React from 'react'
import UserCards from '../../components/UserCards/index'
import SwipeButtons from '../../components/UserCards/swipeButtons'
import './matchpage.css'


export default function MatchPage({user}) {
    return (
            <div className="cards-wrapper">
                <UserCards user={user}/>
            </div>
    )
}
