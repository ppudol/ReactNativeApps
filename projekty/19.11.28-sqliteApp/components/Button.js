import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity } from "react-native";
import { smart } from "@babel/template";

class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.btPress}
        style={{
          height: this.props.btHeight,
          width: this.props.btWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: this.props.btColor,
          margin: 10,
          borderRadius: 2
        }}
      >
        <Text
          style={{
            color: "#ffffff",
            fontWeight: "bold",
            paddingLeft: 20,
            paddingRight: 20,
            textAlign: "center",
            textTransform: "uppercase"
          }}
        >
          {this.props.btTitle}
        </Text>
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  btTitle: PropTypes.string.isRequired,
  btPress: PropTypes.func.isRequired,
  btWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  btColor: PropTypes.string.isRequired,
  btHeight: PropTypes.number.isRequired
};
MyButton.defaultProps = {
  btColor: "#79a2d0",
  btHeight: 50
};

export default MyButton;
