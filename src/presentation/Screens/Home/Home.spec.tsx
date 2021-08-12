import React from 'react'
// import { renderWithProvider } from '../../tests/utils'
import { render } from '@testing-library/react-native'
import { Home } from './Home'
import 'setimmediate'

describe('Screens/Home', () => {
  it('should match snapshot', () => {
    const sut = <Home />

    const renderScreen = render(sut)

    expect(renderScreen).toMatchSnapshot()
  })
})
