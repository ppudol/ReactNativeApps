import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Header,
  Image
} from "react-native";
import MyButton from "./Button";

class editUserScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: this.props.navigation.state.params.username,
      password: this.props.navigation.state.params.password
    };
  }

  static navigationOptions = {
    // header: null,
    title: "Edit User",
    headerStyle: {
      backgroundColor: "#005b9f"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        behavior="padding"
        keyboardVerticalOffset={84}
      >
        <Image
          style={{ width: 150, height: 150 }}
          source={require("./user.png")}
        />
        <Text>{this.state.username}</Text>
        <Text>{this.state.password}</Text>
      </KeyboardAvoidingView>
    );
  }
}

export default editUserScreen;
