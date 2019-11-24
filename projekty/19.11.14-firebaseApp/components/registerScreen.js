import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";
import firebase from "firebase";
import CstButton from "./Button";

class registerScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "Register Screem",
    headerStyle: {
      backgroundColor: "#ff5722"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errorMessage: "" };
  }

  componentDidMount() {
    try {
      this.setState({ email: this.props.navigation.state.params.email });
      this.setState({ password: this.props.navigation.state.params.password });
    } catch {}
  }

  parseUser = async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() =>
        this.props.navigation.navigate("s2", {
          email: this.state.email,
          password: this.state.password
        })
      )
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center"
        }}
        behavior="padding"
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
          style={{ height: 40 }}
          //placeholder="password"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2,
            height: 40,
            margin: 10,
            width: "90%"
          }}
        />
        <TextInput
          style={{ height: 40 }}
          //placeholder="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2,
            height: 40,
            margin: 10,
            width: "90%"
          }}
        />
        <CstButton
          btWidth={"90%"}
          btTitle="Register"
          btPress={this.parseUser}
        />

        <CstButton
          btWidth={"30%"}
          btTitle="Masz konto?"
          btPress={() => this.props.navigation.navigate("s2")}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default registerScreen;
