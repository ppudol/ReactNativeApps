import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import RadioButton from "./radioButton";

class radioGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      selectedItem: this.props.selectedItem
    };
    //  console.log(this.props.data);
    //this.render = this.render.bind(this);
    //  console.log(this.props.color)
    //  console.log("selected item", this.props.selectedItem);
  }

  render() {
    selected = this.props.selectedItem;
    color = this.props.color;
    //   console.log("props", this.props.data);
    // console.log("state", this.state.data);

    elementsTab = [];
    //this.state.data.forEach(element => {
    // console.log(element);
    // });
    Object.entries(this.state.data).forEach(([key, val]) => {
      //console.log(key); // the name of the current key.
      // console.log(val); // the value of the current key.

      if (val == this.props.selectedItem) {
        elementsTab.push(
          <View style={{ height: 50, flexDirection: "row" }} key={key}>
            <RadioButton color={this.props.color} selected={true} />
            <Text>{key}</Text>
          </View>
        );
      } else {
        elementsTab.push(
          <View style={{ height: 50, flexDirection: "row" }} key={key}>
            <RadioButton color={this.props.color} selected={false} />
            <Text>{key}</Text>
          </View>
        );
      }
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          padding: 5,
          zIndex: 600
        }}
      >
        {elementsTab}
      </View>
    );
  }
}

export default radioGroup;
