import React from 'react'
import UserCards from '../../components/UserCards/index'
import './matchpage.css'


export default function MatchPage({user}) {
    return (
            <>
                <UserCards user={user}/>
            </>
    )
}
