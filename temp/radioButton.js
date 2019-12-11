import React, { Component } from "react";
import { View, Text, TouchableNativeFeedback } from "react-native";

class radioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#0E5D08",
      selected: this.props.selected
    };
  }

  render() {
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.Ripple("rgba(255,255,255,1)", true)}
        onPress={() => console.log("pressed")}
        style={{
          width: 30,
          height: 30,
          backgroundColor: "blue",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 700
        }}
      >
        <View
          style={{
            borderRadius: 30,
            borderWidth: 3,
            borderColor: this.props.color,
            width: 30,
            height: 30,
            justifyContent: "center",
            alignItems: "center",
            margin: 10
          }}
        >
          {this.props.selected ? (
            <View
              style={{
                width: 20,
                height: 20,
                borderRadius: 25,
                backgroundColor: this.props.color
              }}
            ></View>
          ) : null}
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default radioButton;
