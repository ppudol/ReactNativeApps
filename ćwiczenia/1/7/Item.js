import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      text: this.props.index,
      textColor: this.props.textColor
    };
    //console.log("Content");
  }

  onPress = () => {
    alert("bg = " + this.state.color + " id = " + this.state.text);
  };

  render() {
    return (
      <TouchableOpacity onPress={this.onPress}>
        <View
          style={{
            backgroundColor: this.state.color,
            alignItems: "center",
            justifyContent: "center",
            flex: 1
          }}
        >
          <Text style={styles(this.state.textColor).text}>
            {this.state.text}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = textColor =>
  StyleSheet.create({
    text: { fontSize: 48, color: textColor }
  });

export default Item;
