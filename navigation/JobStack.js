import React from "react";

import JobListings from "../screens/JobListing";
import JobListingDetail from "../screens/JobDetail";

import { createStackNavigator } from "@react-navigation/stack";

const JobStack = createStackNavigator();
const JobStackScreen = () => (
  <JobStack.Navigator
    initialRouteName="joblist"
    screenOptions={{
      headerTitleStyle: { textAlign: "center" },
    }}
  >
    <JobStack.Screen
      name="joblist"
      component={JobListings}
      options={{
        title: "All Jobs",
        headerTitleStyle: {
          textAlign: "center",
        },
      }}
    />
    <JobStack.Screen name="jobDetail" component={JobListingDetail} />
  </JobStack.Navigator>
);

export default JobStackScreen;
