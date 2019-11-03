import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView } from "react-native";
import MyButton from "./Button";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";

class mainScreen extends Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props);
    this.state = { fontloaded: false };
  }

  componentDidMount = async () => {
    await Font.loadAsync({
      spaceMono: require("./SpaceMono-Regular.ttf")
    });
    this.setState({ fontloaded: true });
  };

  componentWillMount = () => {
    this.setPermissions();
  };

  setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      alert("odmawiam przydzielenia uprawnień do czytania lokalizacji");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 3, backgroundColor: "#0096a5" }}>
          {this.state.fontloaded ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
              }}
            >
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 100,
                  color: "#ffffff"
                }}
              >
                Geo App
              </Text>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 30,
                  color: "#ffffff"
                }}
              >
                Find and save your position
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}
        >
          <MyButton
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
