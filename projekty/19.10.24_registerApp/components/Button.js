import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Button, FlatList } from "react-native";

class MyButton extends Component {
  render() {
    return <Button title={this.props.btTitle} onPress={this.props.btPress} />;
  }
}

MyButton.propTypes = {
  btTitle: PropTypes.string.isRequired,
  btPress: PropTypes.func.isRequired
};

export default MyButton;
