import React, { Component } from "react";
import { View, Text } from "react-native";
import ListItem from "./listItem";
import Database from "./Database";

class ListItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.objData
    };
    console.log(this.props.objData);
    this.refresh = this.refresh.bind(this);
  }

  refresh() {
    console.log("refresh LISTITEMS");

    this.props.refresh();
  }

  render() {
    znaczniki = [];
    this.props.objData.forEach(element => {
      znaczniki.push(
        <ListItem
          key={element.id}
          elementId={element.id}
          refresh={this.refresh}
        />
      );
    });
    return <View>{znaczniki}</View>;
  }
}

export default ListItems;
