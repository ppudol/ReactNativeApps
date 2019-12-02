import React, { Component } from "react";
import PropTypes from "prop-types";
import { Text, TouchableOpacity, Image } from "react-native";

class MyButton extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.btPress}
        style={{
          height: this.props.btWidth,
          width: this.props.btWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: this.props.btColor,
          margin: 10,
          borderRadius: this.props.btWidth
        }}
      >
        <Image
          style={{
            width: this.props.btWidth - 10,
            height: this.props.btWidth - 10
          }}
          source={require("./baseline_add_white_48dp.png")}
        />
      </TouchableOpacity>
    );
  }
}

MyButton.propTypes = {
  btPress: PropTypes.PropTypes.func.isRequired,
  btWidth: PropTypes.PropTypes.number.isRequired,
  btColor: PropTypes.string.isRequired
};
MyButton.defaultProps = {
  btColor: "#0f038d",
  btWidth: 50,
  btPress: () => {
    console.log("roundButtonKlik");
  }
};

export default MyButton;
