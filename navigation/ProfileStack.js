import React from "react";

import Profile from "../screens/Profile";
import UpdateProfile from "../screens/ProfileUpdate";
import {createStackNavigator} from "@react-navigation/stack";

const ProfileStack = createStackNavigator();

const ProfileStackScreen = () => (
  <ProfileStack.Navigator
    initialRouteName="profile"
    screenOptions={{
      headerTitleStyle: { textAlign: "center" },
    }}
  >
    <ProfileStack.Screen
      name="profile"
      component={Profile}
      options={{
        headerTitle: "Profile",
      }}
      screenOptions={{
        headerStyle: { backgroundColor: "#42f44b" },
        headerTintColor: "#fff",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    />
    <ProfileStack.Screen
      name="updateProfile"
      component={UpdateProfile}
      options={{
        headerTitle: "Profile Update",
      }}
    />
  </ProfileStack.Navigator>
);
export default ProfileStackScreen;;
