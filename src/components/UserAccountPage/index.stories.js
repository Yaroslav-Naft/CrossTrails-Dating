import React from 'react'
import UserAccountPage from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'UserAccountPage',
    component: UserAccountPage,
}

const events = action({onSumbit: 'submit'})

export const Default = () => (
    <UserAccountPage {...events}></UserAccountPage>
)