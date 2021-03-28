import React from 'react'
import LoginPage from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'LoginPage',
    component: LoginPage,
}

const events = action({onSumbit: 'submit'})

export const Default = () => (
    <LoginPage {...events}></LoginPage>
)