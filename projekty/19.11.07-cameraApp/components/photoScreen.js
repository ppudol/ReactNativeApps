import React, { Component } from "react";
import { View, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";
import * as MediaLibrary from "expo-media-library";

export default class photoScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.state.params.item.uri,
    headerStyle: {
      backgroundColor: "#0096a5"
    },
    headerTitleStyle: {
      color: "#ffffff",
      fontSize: 10
    }
  });
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.navigation.state.params.item,
      refreshPhotos: this.props.navigation.state.params.refresh
    };
  }

  onDeletePress = async () => {
    console.log("kosz press");
    await MediaLibrary.deleteAssetsAsync([this.state.item.id]);
    await this.props.navigation.state.params.refresh();
    this.props.navigation.goBack(null);
  };

  render() {
    return (
      <View
        style={{ flex: 1, justifyContent: "center", alignContent: "center" }}>
        <Image
          style={{
            width:
              this.state.item.width *
              (Dimensions.get("window").width / this.state.item.width),
            height:
              this.state.item.height *
              (Dimensions.get("window").width / this.state.item.width),
            padding: 10
          }}
          /*resizeMode={'cover'}
                    style={{
                      width: "100%",
                      height: "100%"
                    }} */
          source={{ uri: this.state.item.uri }}
        />
        <TouchableOpacity
          onPress={this.onDeletePress}
          style={{
            position: "absolute",
            width: 30,
            height: 30,
            bottom: 10,
            left: (Dimensions.get("window").width - 30) / 2
          }}>
          <Image
            style={{
              width: 30,
              height: 30
            }}
            source={require("./img/trash.png")}
          />
        </TouchableOpacity>
      </View>
    );
  }
}
