import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { SignUp } from './SignUp'

storiesOf('Screens/SignUp', module)
  .addDecorator(withKnobs)
  .add('default', () => <SignUp />)
