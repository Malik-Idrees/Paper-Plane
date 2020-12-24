import firebase from "firebase";
require("firebase/firestore");

//import USER_STATE_CHANGE  from '../constants/index';
import { USER_STATE_CHANGE,Nothing } from "../constants/index";


export function fetchUser() {
  return (dispatch) => {
    firebase.firestore()
    .collection("users")
      .doc(firebase.auth().currentUser.uid)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          console.log("Current User...logged in"+snapshot.data())
          dispatch({ currentUser: snapshot.data().email, type: USER_STATE_CHANGE });
        } else {
          console.log("User does not exist");
        }
      });
  };
} 
