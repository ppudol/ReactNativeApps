import React, { Component } from "react";
import { View, Text } from "react-native";
import ListItem from "./listItem";
class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </View>
    );
  }
}

export default ListItems;
