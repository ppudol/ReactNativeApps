import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, KeyboardAvoidingView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyButton from "./MyButton";

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  userExists() {
    if (this.state.username.length > 2 && this.state.password.length > 2) {
      return fetch('http://192.168.1.159:3000/register', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.state.username,
          password: this.state.password
        }),
      })
        .then((response) => response.json())
        .then((responseJson) => {
          if (responseJson.userExists) {
            Alert.alert("UWAGA!", "Nazwa użytkownika jest już zajęta.")
          } else {
            this.props.navigation.navigate("s2")
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      Alert.alert("UWAGA!", "Nazwa użytkownika oraz hasło muszą zawierać więcej niż dwie litery.")
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <Text style={styles.text}> Register App </Text>
        <View style={styles.view}>
          <Text>Username:</Text>
          <TextInput onChangeText={(username) => this.setState({ username })}
            placeholder="Username"
            style={styles.input}></TextInput>
          <Text>Password:</Text>
          <TextInput onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            style={styles.input}
            secureTextEntry={true}></TextInput>
          <MyButton style={{ flex: 2, }} text="Register" textSize="25" width="150" background="#7986cb" press={() => this.userExists()} />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48, flex: 1, backgroundColor: "#b39ddb", color: "#000000", lineHeight: 150, textAlign: "center" },
  view: {
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: { borderBottomColor: "#7986cb", borderBottomWidth: 2, marginBottom: 5, }
});

export default Main;
