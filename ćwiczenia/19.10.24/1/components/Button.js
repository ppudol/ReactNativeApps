import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Button, FlatList } from "react-native";

class MyButton extends Component {
  render() {
    return (
      <Button
        title={this.props.testProp1}
        onPress={this.props.testPress}
        testProp2={this.props.testProp2}
      />
    );
  }
}

MyButton.propTypes = {
  testProp1: PropTypes.string.isRequired,
  testProp2: PropTypes.bool.isRequired,
  testPress: PropTypes.func.isRequired
};

export default MyButton;
