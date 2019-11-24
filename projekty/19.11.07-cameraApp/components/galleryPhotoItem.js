import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Dimensions } from "react-native";

class galleryPhotoItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item,
      flatlistRows: this.props.flatlistRows,
      selected: this.props.selected
    };
    this.onPressPhoto = this.onPressPhoto.bind(this);
  }

  onPressPhoto() {
    console.log("photo Press");
    this.props.navigation.navigate("s3", {
      item: this.state.item,
      refresh: this.props.refreshPhotos,
      hold: this.onHoldPhoto
    });
  }

  onHoldPhoto = () => {
    console.log("photo Hold");
    this.setState({ selected: !this.state.selected });
    this.props.handleDeletionTab(this.state.selected, this.state.item.id);
  };

  render() {
    return (
      <View
        style={{
          width: Dimensions.get("window").width / this.state.flatlistRows,
          height:
            this.state.flatlistRows == 4
              ? Dimensions.get("window").width / this.state.flatlistRows
              : 160,
          alignItems: "flex-start"
        }}>
        <TouchableOpacity
          style={{
            width: Dimensions.get("window").width / this.state.flatlistRows,
            height:
              this.state.flatlistRows == 4
                ? Dimensions.get("window").width / this.state.flatlistRows
                : 160
          }}
          onPress={this.onPressPhoto}
          onLongPress={this.onHoldPhoto}>
          {this.state.selected == true ? (
            <View
              style={{
                width: Dimensions.get("window").width / this.state.flatlistRows,
                height:
                  this.state.flatlistRows == 4
                    ? Dimensions.get("window").width / this.state.flatlistRows
                    : 160,
                alignItems: "flex-start",
                backgroundColor: "#ffffff"
              }}>
              <Image
                style={{
                  width:
                    Dimensions.get("window").width / this.state.flatlistRows -
                    20,
                  height: "100%",
                  position: "absolute",
                  opacity: 0.9,
                  top: 0,
                  left:
                    (Dimensions.get("window").width / this.state.flatlistRows -
                      (Dimensions.get("window").width /
                        this.state.flatlistRows -
                        20)) /
                    2
                }}
                source={require("./img/done.png")}
              />
              <Image
                style={{
                  width:
                    Dimensions.get("window").width / this.state.flatlistRows -
                    2,
                  height:
                    this.state.flatlistRows == 4
                      ? Dimensions.get("window").width /
                          this.state.flatlistRows -
                        2
                      : 160,
                  padding: 10,
                  position: "relative",
                  opacity: 0.2,
                  marginLeft: 1
                }}
                source={{ uri: this.state.item.uri }}
              />
            </View>
          ) : (
            <Image
              style={{
                width:
                  Dimensions.get("window").width / this.state.flatlistRows - 2,
                height:
                  this.state.flatlistRows == 4
                    ? Dimensions.get("window").width / this.state.flatlistRows -
                      2
                    : 160,
                marginLeft: 1
              }}
              source={{ uri: this.state.item.uri }}
            />
          )}

          <Text
            style={{
              position: "relative",
              bottom: 4,
              color: "#ffffff",
              left: 4
            }}>
            {this.state.item.id}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default galleryPhotoItem;
