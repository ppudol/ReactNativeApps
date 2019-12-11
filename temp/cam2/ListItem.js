import React, { Component } from "react";
import { View, Text } from "react-native";
import MyButton from "./MyButton";

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: this.props.item
    };
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundcolor: "#000000" }}>
        <Text>aaa</Text>
      </View>
    );
  }
}

export default ListItem;
