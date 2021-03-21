import React from 'react'
import UserCards from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'UserCards',
    component: UserCards,
}

const events = action({liked: 'liked'})

export const Default = () => (
    <UserCards {...events}></UserCards>
)