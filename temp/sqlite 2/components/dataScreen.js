import React, { Component } from "react";
import { View, ScrollView, Dimensions } from "react-native";
import ListItems from "./ListItems";
import RoundButton from "./roundButton";
import Database from "./Database";

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
    this.state = {
      flatListData: []
    };
  }

  componentWillMount() {
    this.refreshData();
  }

  refreshData = () => {
    console.log("refresh datas");
    Database.getAll().then(all => {
      this.setState({ flatListData: JSON.parse(all).rows._array });
      // JSON.parse(all).rows._array.forEach(element => {
      //console.log(element);
      // });
    });
  };

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "#035ef9" }}>
        <View style={{ flex: 1 }}>
          <ScrollView>
            <ListItems
              objData={this.state.flatListData}
              refresh={this.refreshData}
            />
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
            btPress={() =>
              this.props.navigation.navigate("s3", {
                refresh: this.refreshData
              })
            }
          />
        </View>
      </View>
    );
  }
}

export default dataScreen;
