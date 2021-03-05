import React from 'react'
import Login from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'Login',
    component: Login,
}

const events = action({onSumbit: 'submit'})

export const Default = () => (
    <Login {...events}></Login>
)