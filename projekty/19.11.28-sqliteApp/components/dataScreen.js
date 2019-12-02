import React, { Component } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import ListItems from "./ListItems";
import RoundButton from "./roundButton";
import * as SQLite from "expo-sqlite";

class dataScreen extends Component {
  static navigationOptions = {
    title: "Lista Budzików",
    headerStyle: {
      backgroundColor: "#00026f"
    },
    headerTitleStyle: {
      color: "#ffffff"
    },
    headerTintColor: "white"
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  refreshData = () => {};

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#035ef9" }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <ListItems />
          </ScrollView>
        </View>

        <View
          style={{
            position: "absolute",
            justifyContent: "center",
            alignItems: "center",
            bottom: 2,
            left: (Dimensions.get("window").width - 130) / 2
          }}>
          <RoundButton
            btWidth={120}
            btPress={() => this.props.navigation.navigate("s3")}
          />
        </View>
      </View>
    );
  }
}

export default dataScreen;
