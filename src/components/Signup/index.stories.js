import React from 'react'
import Signup from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'Signup',
    component: Signup,
}

const events = action({onSumbit: 'submit'})

export const Default = () => (
    <Signup {...events}></Signup>
)