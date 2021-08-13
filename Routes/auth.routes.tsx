import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { Login } from '../src/presentation/Screens/Login/Login'
import { SignUp } from '../src/presentation/Screens/SignUp/SignUp'

const AuthStack = createStackNavigator();

function AuthRoutes() {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="SignIn"
          component={Login}
          options={{ headerShown: false }}
        />

        <AuthStack.Screen
          name="SignUp"
          component={SignUp}
          options={{
            headerStyle: {
              backgroundColor: '#131313',
              borderBottomWidth: 1,
              borderBottomColor: '#00b94a'
            },
            headerTintColor: '#FFF',
            headerBackTitleVisible: false,
            headerTitle: 'Voltar'
          }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
}

export default AuthRoutes;