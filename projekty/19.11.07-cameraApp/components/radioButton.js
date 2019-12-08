import React, { Component } from "react";
import { View, Text } from "react-native";

class radioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#0E5D08",
      selected: true
    };
  }

  render() {
    return (
      <View
        style={{
          borderRadius: 30,
          borderWidth: 3,
          borderColor: this.state.color,
          width: 30,
          height: 30,
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        {this.state.selected ? (
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 25,
              backgroundColor: this.state.color
            }}
          ></View>
        ) : null}
      </View>
    );
  }
}

export default radioButton;
