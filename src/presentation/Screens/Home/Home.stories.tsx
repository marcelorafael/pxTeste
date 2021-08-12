import { withKnobs } from '@storybook/addon-knobs'
import { storiesOf } from '@storybook/react-native'
import React from 'react'
import { Home } from './Home'

storiesOf('Screens/Home', module)
  .addDecorator(withKnobs)
  .add('default', () => <Home />)
