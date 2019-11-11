import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, Icon } from "react-native";
import MyButton from "./Button";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";

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
      spaceMono: require("./fonts/SpaceMono-Regular.ttf")
    });
    this.setState({ fontloaded: true });
  };

  componentWillMount = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (status !== "granted") {
      alert("brak uprawnień do czytania image-ów z galerii");
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
              }}>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 70,
                  color: "#ffffff",
                  textAlign: "center"
                }}>
                Camera App
              </Text>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 20,
                  color: "#ffffff",
                  textAlign: "center"
                }}>
                show gallery pictures
              </Text>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 20,
                  color: "#ffffff",
                  textAlign: "center"
                }}>
                take picture from camera
              </Text>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 20,
                  color: "#ffffff",
                  textAlign: "center"
                }}>
                save photos on device
              </Text>
              <Text
                style={{
                  fontFamily: "spaceMono",
                  fontSize: 20,
                  color: "#ffffff",
                  textAlign: "center"
                }}>
                delete photos from device
              </Text>
            </View>
          ) : null}
        </View>
        <View
          style={{ flex: 2, justifyContent: "center", alignItems: "center" }}>
          <MyButton
            btTitle='Start'
            btWidth={"70%"}
            btPress={() =>
              this.props.navigation.navigate("s2", {
                refreshPhotos: true
              })
            }
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default mainScreen;
