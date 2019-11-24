import React, { Component } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
import CstButton from "./Button";

class loginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errorMessage: "" };
  }

  parseUser = async () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("s4"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        <Text
          style={{
            color: "red",
            textAlign: "center"
          }}
        >
          {this.state.errorMessage}
        </Text>
        <TextInput
          style={{ height: 40, margin: 20 }}
          //placeholder="password"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2
          }}
        />
        <TextInput
          style={{ height: 40, margin: 20 }}
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2
          }}
        />
        <CstButton btWidth={200} btTitle="Login" btPress={this.parseUser} />
      </KeyboardAvoidingView>
    );
  }
}

export default loginScreen;
