import "react-native-gesture-handler";
import * as React from "react";
import { AntDesign } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import JobStackScreen from "./JobStack";
import ProfileStackScreen from "./ProfileStack";

const Tab = createMaterialBottomTabNavigator();

const BottomTabs = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="JobStack"
        tabBarOptions={{
          activeTintColor: "#42f44b",
        }}
      >
        <Tab.Screen
          name="JobStack"
          component={JobStackScreen}
          options={{
            tabBarLabel: "Jobs",
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons name="home" size={28} color="black" />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileStack"
          component={ProfileStackScreen}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <AntDesign name="heart" size={28} color="black" />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default BottomTabs;
