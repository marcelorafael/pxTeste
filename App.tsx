import React from 'react'
<<<<<<< HEAD
import { StatusBar } from 'react-native'
=======
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
import { ThemeProvider } from 'styled-components'
import Routes from './Routes'
import theme from './constants/theme'
import AuthProvider from './src/contexts/auth'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
<<<<<<< HEAD
      <StatusBar backgroundColor="#000" barStyle="light-content" />
=======
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}

// export default require('./storybook').default
export default App
