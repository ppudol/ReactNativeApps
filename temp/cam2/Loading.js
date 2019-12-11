import React, { Component } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import firebase from "firebase"

var config = {
    apiKey: "AIzaSyBRvrM-3591egAwSwnM9RnzgXtH1nOXbms",
    authDomain: "dudzik4ia1.firebaseapp.com",
    databaseURL: "https://dudzik4ia1.firebaseio.com",
    projectId: "dudzik4ia1",
    storageBucket: "dudzik4ia1.appspot.com",
    messagingSenderId: "878132918670",
    appId: "1:878132918670:web:432caeecfe094a61954cdf",
    measurementId: "G-Z80MXXEV3P"
};

firebase.initializeApp(config);

class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {

            if (user) {
                this.props.navigation.navigate("s5", { email: user.email })
            }
            else {
                this.props.navigation.navigate("s3")
            }

        })
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <ActivityIndicator size={50} color="#b39ddb" />
            </View>
        );
    }
}

export default Loading;
