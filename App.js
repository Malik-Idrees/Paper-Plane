import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import React, { Component } from "react";
import { View, Text } from "react-native";

import * as firebase from "firebase";
//import "@firebase/firestore";
import "firebase/firestore";
import { firebaseConfig } from "./config";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}
//Sessions setting for logged in Users
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);

import { Provider } from "react-redux";
import store from "./redux/store";

import BottomTabs from "./navigation/BottomTabNavigator";
import AuthStackScreen from "./components/auth";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
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

   // if (!loggedIn) {//commented for now
      if (loggedIn) {
        return <AuthStackScreen />;
      }

    return (
      <Provider store={store}>
        <BottomTabs />
      </Provider>
    )

  }
}

export default App;
// What I did and it's working with me but still I don't knwo if it's a good practice or not
// Navigated to file node_modules\react-native\Libraries\Core\Timers\JSTimers.js
// there is a function const MAX_TIMER_DURATION_MS = 60 * 1000 and I increased the time to be 60 * 100000 and it stopeed appearing
//two lines Related to time error with firebase web sdk