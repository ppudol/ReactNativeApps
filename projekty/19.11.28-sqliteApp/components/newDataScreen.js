import React, { Component } from "react";
import { View, Text } from "react-native";
import RoundButton from "./roundButton";
import Database from "./DatabaseOperations";

class newDataScreen extends Component {
  static navigationOptions = {
    header: null
  };
  //   static navigationOptions = {
  //     title: "Lista Budzików",
  //     headerStyle: {
  //       backgroundColor: "#00026f"
  //     },
  //     headerTitleStyle: {
  //       color: "#ffffff"
  //     },
  //     headerTintColor: "white"
  //   };

  constructor(props) {
    super(props);
    this.state = {};
  }

  addData = async () => {
    //dodawanie danych do bazy
    Database.addData();
    await this.props.navigation.navigate("s2");
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#035ef9" }}>
        <View style={{ flex: 9 }}></View>

        <View
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
        >
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
