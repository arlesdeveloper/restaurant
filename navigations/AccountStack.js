import React from 'react'
import Account from '../screens/account/Account'
import {createStackNavigator} from '@react-navigation/stack'
import Login from '../screens/account/Login'
import Register from '../screens/account/Register'
import RecoverPassword from '../screens/account/RecoverPassword'

const Stack=createStackNavigator()
export default function AccountStack() {
  return (
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
            <Stack.Screen
             name='account'
             component={Account}
             options={{title:"Cuenta"}}
            />

            <Stack.Screen
             name='login'
             component={Login}
             options={{title:"Iniciar Sesión"}}
            />

            
            <Stack.Screen
             name='register'
             component={Register}
             options={{title:"Registrar Usuario"}}
            />

            <Stack.Screen
             name='recover-password'
             component={RecoverPassword}
             options={{title:"Recuperar Contraseña"}}
            />


            
      </Stack.Navigator>
    
  )
}