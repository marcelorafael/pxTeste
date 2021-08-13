import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'
import { ActivityIndicator } from 'react-native'
import { AuthContext } from '../src/contexts/auth'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { Home } from '../src/presentation/Screens/Home/Home'
import { Profile } from '../src/presentation/Screens/Profile/Profile'


const Tab = createBottomTabNavigator()

const Tabs = () => {

  const { user }: any = useContext(AuthContext)
  if (user === null) {
    <><ActivityIndicator color="#000" size={50} /></>
  } else {

    return (
      <Tab.Navigator
        tabBarOptions={{
          showLabel: false,
          style: {
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
            backgroundColor: '#000',
            borderTopColor: 'transparent',
            height: 55
          }
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Perfil" 
          component={Profile}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <Icon name="user-o" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    )
  }
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#CCC',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
})
export default Tabs