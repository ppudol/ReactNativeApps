import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import CstButton from "./Button";

class mainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 3, backgroundColor: "#ff5722" }}>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Text
              style={{
                fontSize: 70,
                color: "#ffffff",
                textAlign: "center"
              }}
            >
              Firebase App
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#ffffff",
                textAlign: "center"
              }}
            >
              firebase auth
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#ffffff",
                textAlign: "center"
              }}
            >
              firebase database
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <CstButton
            btTitle="Start"
            btWidth={"70%"}
            btPress={() => this.props.navigation.navigate("s4")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default mainScreen;
