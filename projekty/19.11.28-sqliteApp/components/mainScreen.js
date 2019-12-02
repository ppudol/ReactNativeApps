import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import CstButton from "./Button";
import Database from "./DatabaseOperations";

class mainScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    Database.createTable();
  }

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#035ef9" }}>
        <View style={{ flex: 3 }}>
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
              Sqlite App
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#ffffff",
                textAlign: "center"
              }}
            >
              Sqlite CRUD, animations, ring
            </Text>
          </View>
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <CstButton
            btTitle="Start"
            btWidth={"70%"}
            btPress={() => this.props.navigation.navigate("s2")}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default mainScreen;
