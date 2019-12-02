import React, { Component } from "react";
import { View, ScrollView } from "react-native";
import ListItems from "./ListItems";
import RoundButton from "./roundButton";

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
        <View style={{ flex: 9 }}>
          <ScrollView>
            <ListItems />
          </ScrollView>
        </View>

        <View
          style={{ flex: 1.5, justifyContent: "center", alignItems: "center" }}
        >
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
