import React from 'react'
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import theme from './constants/theme'
import AuthProvider from './src/contexts/auth'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

// export default require('./storybook').default
export default App
