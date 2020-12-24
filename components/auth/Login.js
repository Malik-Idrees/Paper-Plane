import React, { Component } from "react";
import { Text, View, TextInput, Button,TouchableOpacity, StyleSheet } from "react-native";

import firebase from "firebase";

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password, name } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder={"email"}
          style={styles.input}
        />
        <TextInput
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder={"Password"}
          secureTextEntry={true}
          style={styles.input}
        />

        <Button
          onPress={() => this.onSignUp()}
          style={styles.input}
          title="Sign In"
        />

        <TouchableOpacity
         
          style={styles.navigateBtn}
          onPress={() => navigation.navigate("Register")}
        >
          <Text>Register</Text>
         
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;

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
  navigateBtn: {
    color: "#000",
    alignItems: "center",
    backgroundColor: "#2196F3",
    width: 200,
    height: 44,
    padding: 10,
    marginTop: 10,
  },
});
