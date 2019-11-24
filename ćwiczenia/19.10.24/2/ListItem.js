import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <View style={{
                flexWrap: 'wrap',
                alignItems: 'flex-start',
                flexDirection: 'row'
            }}>
                <Image
                    style={{ width: 70, height: 70 }}
                    source={{ uri: 'https://cdn3.iconfinder.com/data/icons/sweet-halloween/512/Sweet_Halloween_Ghost-512.png' }}></Image>
                <Text style={{ lineHeight: 80 }}> username: {this.props.username}</Text>
                <Text style={{ lineHeight: 80 }}> password: {this.props.password}</Text>
            </View>
        );
    }
}

ListItem.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};

export default ListItem;
