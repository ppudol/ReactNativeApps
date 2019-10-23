import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      text: this.props.index,
      textColor: this.props.textColor
    };
    console.log("Content");
  }

  render() {
    return (
      <View
        style={{
          backgroundColor: this.state.color,
          alignItems: "center",
          justifyContent: "center",
          flex: 1
        }}
      >
        <Text style={styles(this.state.textColor).text}>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = textColor =>
  StyleSheet.create({
    text: { fontSize: 48, color: textColor }
  });

export default Item;
