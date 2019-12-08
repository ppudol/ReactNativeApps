import React, { Component } from "react";
import { View, Text } from "react-native";
import RoundButton from "./roundButton";
import Database from "./Database";

class newDataScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  addData = async () => {
    //dodawanie danych do bazy
    await Database.add();
    await this.props.navigation.state.params.refresh();
    this.props.navigation.navigate("s2");
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#035ef9" }}>
        <View style={{ flex: 9 }}></View>

        <View
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}>
          <RoundButton
            btWidth={120}
            btColor={"#278fa5"}
            btPress={this.addData}
          />
        </View>
      </View>
    );
  }
}

export default newDataScreen;
