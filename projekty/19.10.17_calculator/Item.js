import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileColor: this.props.tileColor,
      tileValue: this.props.value
    };
    //console.log("Content");
  }

  onPress = () => {
    //alert("bg = " + this.state.tileColor + " value = " + this.state.tileValue);
    this.props.parseCalc(this.state.tileValue);
  };

  render() {
    return (
      <TouchableOpacity
        onPress={this.onPress}
        style={{
          backgroundColor: this.state.tileColor,
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <View>
          <Text
            style={{
              color: "white",
              fontSize: 24
            }}
          >
            {this.state.tileValue}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default Item;
