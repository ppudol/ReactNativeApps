import React, { Component } from "react";
import { TouchableOpacity, Image } from "react-native";
import PropTypes from "prop-types";

class roundButton extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <TouchableOpacity
        onPress={this.props.btPress}
        style={{
          height: this.props.btWidth,
          width: this.props.btWidth,
          borderRadius: this.props.btWidth,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          backgroundColor: this.props.btColor,
          margin: 20
        }}>
        <Image
          style={{
            width: this.props.btWidth - 10,
            height: this.props.btWidth - 10
          }}
          source={this.props.btImage}
        />
      </TouchableOpacity>
    );
  }
}

roundButton.propTypes = {
  btImage: PropTypes.number.isRequired,
  btPress: PropTypes.func.isRequired,
  btWidth: PropTypes.number.isRequired,
  btColor: PropTypes.string.isRequired
};
roundButton.defaultProps = {
  btColor: "#0096a5"
};

export default roundButton;
