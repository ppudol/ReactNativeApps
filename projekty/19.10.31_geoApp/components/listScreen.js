import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, Switch } from "react-native";
import MyButton from "./Button";
import { AsyncStorage } from "react-native";
import * as Location from "expo-location";

class listScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { switchAllValue: false, selectedSwitches: [] };
  }
  savePosition = async () => {
    //await AsyncStorage.setItem("key1", "value1");
    console.log("get position");
    this.setState({ number: 0 });
    let pos = await Location.getCurrentPositionAsync({});
    this.setState({ number: 1 });
    alert(JSON.stringify(pos, null, 4));
    /*
    await AsyncStorage.setItem(
      "key" + Math.round(Math.random() * 100),
      "value" + Math.random()
    );
    console.log("dataSet"); */
  };

  deletePositions = async () => {
    let val = await AsyncStorage.getItem("key1");
    console.log(val);
  };

  showMap = async () => {
    let val = await AsyncStorage.getItem("key1");
    console.log(val);
  };

  switchAllChange = () => {
    this.setState({ switchAllValue: !this.state.switchAllValue });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <MyButton
              btWidth={"40%"}
              btTitle="Pobierz i zapisz pozycję"
              btPress={this.savePosition}
            />
            <MyButton
              btWidth={"40%"}
              btTitle="Usuń wszystkie dane"
              btPress={this.deletePositions}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <MyButton
              btWidth={"80%"}
              btTitle="Przejdź do mapy"
              btPress={this.showMap}
            />
            <Switch
              value={this.state.switchAllValue}
              onValueChange={this.switchAllChange}
            />
          </View>
        </View>
        <View style={{ flex: 5 }}></View>
      </KeyboardAvoidingView>
    );
  }
}

export default listScreen;
