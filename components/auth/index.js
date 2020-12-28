import React from 'react'

import RegisterScreen from "./Register";
import LoginScreen from "./Login";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
const AuthStack = createStackNavigator();

export default function AuthStackScreen() {
    return (
      <NavigationContainer>
        <AuthStack.Navigator initialRouteName="Login">
          <AuthStack.Screen
            name="Login"
            component={LoginScreen}
            options={{
              title: "Online Job Portal",
              headerTitleStyle: {
                textAlign:"center",              
              },
            }}
          />
          <AuthStack.Screen
            name="Register"
            component={RegisterScreen}
            options={{ headerShown: true }}
          />
        </AuthStack.Navigator>
      </NavigationContainer>
    );
}
