import React from 'react'

import { render } from '@testing-library/react-native'
import { ThemeProvider } from 'styled-components'
import { theme } from '../../../constants'

interface WrapStyledProps {
  children: React.Component
}

const WrapStyled = (props: WrapStyledProps) => {
  const { children } = props
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}

export const renderWithProvider = (
  component: React.ReactElement,
  options?: any
) => {
  return render(component, { wrapper: WrapStyled, ...options })
}

export * from '@testing-library/react-native'

// import { render } from '@testing-library/react-native'
// import { ThemeProvider } from 'styled-components'
// import { theme } from '../../../constants'

// const AllTheProviders = ({ children }) => {
//   return <ThemeProvider theme={theme}>{children}</ThemeProvider>
// }

// const renderWithProvider = (ui, options) =>
//   render(ui, { wrapper: AllTheProviders, ...options })

// // re-export everything
// export * from '@testing-library/react-native'

// // override render method
// export { renderWithProvider }
