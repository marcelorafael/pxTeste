import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'

import Tabs from '../navigation/tabs'
import { ModalDetails } from '../src/presentation/Base/ModalDetails/ModalDetails'

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
          <Stack.Screen name="ModalDetails" component={ModalDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}

export default AppRoutes