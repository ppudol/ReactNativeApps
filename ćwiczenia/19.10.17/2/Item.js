import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Item extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: this.props.color,
      text: this.props.text,
      flexSize: this.props.flexSize
    };
    console.log("Content");
  }

  render() {
    return (
      <View
        style={{
          flex: this.state.flexSize,
          backgroundColor: this.state.color
        }}
      >
        <Text style={styles.text}> {this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: { fontSize: 48 }
});

export default Item;
