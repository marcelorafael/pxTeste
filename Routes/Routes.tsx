import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from '../navigation/tabs'
<<<<<<< HEAD
import { ModalDetails } from '../src/presentation/Base/ModalDetails/ModalDetails'
=======
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84

const Stack = createStackNavigator()

const AppRoutes = () => {

    return (
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName={'Home'}
        >
          <Stack.Screen name="Home" component={Tabs} />
<<<<<<< HEAD
          <Stack.Screen name="ModalDetails" component={ModalDetails} />
=======
>>>>>>> 2a13b68fae3e559fed7a58423ff36ca2e38dfa84
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppRoutes
