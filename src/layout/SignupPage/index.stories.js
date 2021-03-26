import React from 'react'
import SignupPage from './index'

import {action} from '@storybook/addon-actions'

export default {
    title: 'SignupPage',
    component: SignupPage,
}

const events = action({onSumbit: 'submit'})

export const Default = () => (
    <SignupPage {...events}></SignupPage>
)