import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

class MyButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View style={{height: 70 }}>
                <TouchableOpacity onPress={this.props.press} style={{ backgroundColor: this.props.background, width: parseInt(this.props.width), height: 40 }}>
                    <Text style={{ fontSize: parseInt(this.props.textSize), textAlign: "center" }}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    textSize: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired,
    width: PropTypes.string.isRequired,
    press: PropTypes.func.isRequired,
};

export default MyButton