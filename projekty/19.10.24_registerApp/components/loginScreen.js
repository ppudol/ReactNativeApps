import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView,
  Header
} from "react-native";
import MyButton from "./Button";
import config from "./Settings";

class loginScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { username: "", password: "" };
  }

  checkIfUsersExists() {
    this.setState({ username: "", password: "" });
    console.log("łączenie z serwerem");
    return fetch(
      "http://" + config.ipAddress + ":" + config.port + "/addUser",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        })
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.response == "login") {
          console.log("logowanie");
          this.props.navigation.navigate("s2", responseJson.usersTab);
        } else {
          return alert("Użytkownik istnieje wybierz inną nazwę");
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior="padding"
        //keyboardVerticalOffset={84}
      >
        <View
          style={{
            flex: 3,
            backgroundColor: "#005b9f",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 48,
              color: "white",
              fontWeight: "bold"
            }}
          >
            Register Node App
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            backgroundColor: "#ffffff",
            justifyContent: "flex-start",
            paddingLeft: 10,
            paddingRight: 10,
            paddingTop: 10
          }}
        >
          <View>
            <Text>username</Text>
            <TextInput
              style={{ height: 40 }}
              //placeholder="username"
              onChangeText={username => this.setState({ username })}
              value={this.state.username}
              style={{
                borderBottomColor: "#005b9f",
                borderBottomWidth: 2
              }}
            />
          </View>

          <View>
            <Text>password</Text>
            <TextInput
              style={{ height: 40 }}
              //placeholder="password"
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
              style={{
                borderBottomColor: "#005b9f",
                borderBottomWidth: 2
              }}
            />
          </View>

          <MyButton
            style={{}}
            btTitle="REGISTER"
            btPress={() => this.checkIfUsersExists()}
          />
        </View>
      </KeyboardAvoidingView>

      /* <Button
      title="go to screen2"
      onPress={() => this.props.navigation.navigate("s2", { a: 1, b: 2 })}
    />

    <Text style={{ padding: 10, fontSize: 42 }}>
      {this.state.text
        .split(" ")
        .map(word => word && "🍕")
        .join(" ")}
    </Text> */
    );
  }
}

export default loginScreen;
