import React, { Component } from "react";
import { Text, View, TextInput, Button, StyleSheet } from "react-native";

import firebase, { firestore } from "firebase";

export class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      name: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        firebase
          .firestore()
          .collection("users")
          .doc(firebase.auth().currentUser.uid)
          .set({
            name,
            email,
          });
        console.log("User Registered"+result.user.uid);
      })
      .catch((err) => {
        console.log("Error while registering"+err);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          placeholder="name"
          style={styles.input}
          onChangeText={(name) => this.setState({ name })}
        />
        <TextInput
          placeholder="email"
          onChangeText={(email) => this.setState({ email })}
          style={styles.input}
        />
        <TextInput
          placeholder="password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password: password })}
          style={styles.input}
        />

        <Button
          onPress={() => this.onSignUp()}
          style={styles.input}
          title="Sign Up"
        />
      </View>
    );
  }
}

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
  },
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
});
