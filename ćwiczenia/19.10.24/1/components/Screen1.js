import React, { Component } from "react";
import {
  View,
  Text,
  Button,
  TextInput,
  KeyboardAvoidingView
} from "react-native";

class Screen1 extends Component {
  static navigationOptions = {
    // header: null,
    title: "tytuł",
    headerStyle: {
      backgroundColor: "#ff0000"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <Button
          title="go to screen2"
          onPress={() => this.props.navigation.navigate("s2", { a: 1, b: 2 })}
        />
        <TextInput
          style={{ height: 40 }}
          placeholder="Type here to translate!"
          onChangeText={text => this.setState({ text })}
          value={this.state.text}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </KeyboardAvoidingView>
    );
  }
}

export default Screen1;
