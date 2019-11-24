import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, TextInput } from "react-native";

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
    this.state = { email: "", password: "" };
  }

  parseUser = async () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("s2"))
      .catch(error => this.setState({ errorMessage: error.message }));
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1
        }}
      >
        <TextInput
          style={{ height: 40 }}
          //placeholder="password"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2
          }}
        />
        <TextInput
          style={{ height: 40 }}
          //placeholder="password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
          style={{
            borderBottomColor: "#ff5722",
            borderBottomWidth: 2
          }}
        />
        <CstButton btWidth={"30%"} btTitle="Login" btPress={this.parseUser} />
      </KeyboardAvoidingView>
    );
  }
}

export default registerScreen;
