import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { Component } from "react";

import * as firebase from "firebase";
//import "@firebase/firestore";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDJPdzBsxp6Qmz82DmqJpTL_Gsb9mcnQAg",
  authDomain: "job-portal-c25fa.firebaseapp.com",
  projectId: "job-portal-c25fa",
  storageBucket: "job-portal-c25fa.appspot.com",
  messagingSenderId: "930027592047",
  appId: "1:930027592047:web:6d13731021e30defe7b09a",
  measurementId: "G-NK22YWGTPS",
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
//Sessions setting for logged in Users
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE)
// What I did and it's working with me but still I don't knwo if it's a good practice or not
// Navigated to file node_modules\react-native\Libraries\Core\Timers\JSTimers.js
// there is a function const MAX_TIMER_DURATION_MS = 60 * 1000 and I increased the time to be 60 * 100000 and it stopeed appearing
//two lines Related to time error with firebase web sdk

//import {LogBox} from 'react-native-web/dist/index'; //For web
//import { LogBox } from "react-native";     //Only for Mobile..we can later use Platform.os==adroid!?
//LogBox.ignoreLogs(["Setting a timer"]);   

import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./redux/reducers";
import thunk from "redux-thunk";

const store = createStore(rootReducer, applyMiddleware(thunk));


// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import { View, Text } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import LandingScreen from "./components/auth/Landing";
import BottomTabs from "./screens/BottomTabNavigator"
import RegisterScreen from "./components/auth/Register";
import LoginScreen from "./components/auth/Login";

import MainScreen from "./components/Main";

const Stack = createStackNavigator();

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        });
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        });
      }
    });
  }

  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Text>Loading..</Text>
        </View>
      );
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={LoginScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Register" component={RegisterScreen} />
            {/* <Stack.Screen name="Landing" component={LandingScreen} /> */}
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
    return (
      <Provider store={store}>
        <BottomTabs/>
        {/* <MainScreen /> */}
      </Provider>
    );
  }
}

export default App;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
