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
    // console.log("selected item", this.props.selectedItem);
  }

  changeVal(key) {
    console.log("ChangeValRadioGroup klucz", key);
    this.props.change(key);
  }

  render() {
    elementsTab = [];

    Object.entries(this.props.data).forEach(([key, val]) => {
      //console.log(key); // the name of the current key.
      //console.log(val); // the value of the current key.
      if (key == this.props.selectedItem) {
        elementsTab.push(
          <View style={{ height: 50, flexDirection: "row" }} key={key + val}>
            <RadioButton
              color={this.props.color}
              selected={true}
              changeVal={() => this.changeVal(key)}
            />
            <Text>{key}</Text>
          </View>
        );
      } else {
        elementsTab.push(
          <View style={{ height: 50, flexDirection: "row" }} key={key + val}>
            <RadioButton
              color={this.props.color}
              selected={false}
              name={key}
              changeVal={() => this.changeVal(key)}
            />
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
          padding: 5
          //backgroundColor: "red"
        }}>
        <Text>{this.props.groupName}</Text>
        {elementsTab}
      </View>
    );
  }
}

export default radioGroup;
