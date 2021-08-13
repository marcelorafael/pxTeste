import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Login } from './Login'

storiesOf('Screens/Login', module)
  .addDecorator(withKnobs)
  .add('default', () => <Login />)
