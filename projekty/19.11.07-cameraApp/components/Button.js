import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";

class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.btPress}
        style={{
          height: 50,
          width: this.props.btWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: this.props.btColor,
          margin: 20,
          borderRadius: 2
        }}>
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center"
          }}>
          {this.props.btTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  btTitle: PropTypes.string.isRequired,
  btPress: PropTypes.func.isRequired,
  btWidth: PropTypes.string.isRequired,
  btColor: PropTypes.string.isRequired
};
MyButton.defaultProps = {
  btColor: "#0096a5"
};

export default MyButton;
