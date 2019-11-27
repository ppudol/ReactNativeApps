import React, { Component } from "react";
import { View, Text, TextInput, KeyboardAvoidingView } from "react-native";
import firebase from "firebase";
import CstButton from "./Button";

class loginScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "Login Screem",
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
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate("s4"))
      .catch(error => {
        this.setState({ errorMessage: error.message });
        if (
          error.message ==
          "There is no user record corresponding to this identifier. The user may have been deleted."
        ) {
          console.log("aaa");
          this.props.navigation.navigate("s3", {
            email: this.state.email,
            password: this.state.password
          });
        }
      });
  };

  render() {
    return (
      <KeyboardAvoidingView
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          padding: 5
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
        <CstButton btWidth={"90%"} btTitle="Login" btPress={this.parseUser} />
        <CstButton
          btWidth={"30%"}
          btTitle="Nie masz konta?"
          btPress={() => this.props.navigation.navigate("s3")}
        />
      </KeyboardAvoidingView>
    );
  }
}

export default loginScreen;
