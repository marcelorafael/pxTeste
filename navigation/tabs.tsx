import React, { useContext } from 'react'

import { ActivityIndicator } from 'react-native'
import { AuthContext } from '../src/contexts/auth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../src/presentation/Screens/Home/Home'

const Tab = createBottomTabNavigator()

const Tabs = () => {

  const { user }: any = useContext(AuthContext)
  if(user === null){
    <><ActivityIndicator color="#000" size={50} /></>
  } else {

  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Portfolio" component={Home} />
      <Tab.Screen name="Transaction" component={Home} />
      <Tab.Screen name="Prices" component={Home} />
      <Tab.Screen name="Settings" component={Home} />
    </Tab.Navigator>
  )
}
}

export default Tabs
