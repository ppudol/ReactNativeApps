import React, { Component } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import firebase from "firebase";
import { ToastAndroid } from "react-native";

var firebaseConfig = {
  apiKey: "AIzaSyC19EIwq4iDWPBC-eiNiwdmVN3yjJodzIM",
  authDomain: "padol4ic1.firebaseapp.com",
  databaseURL: "https://padol4ic1.firebaseio.com",
  projectId: "padol4ic1",
  storageBucket: "padol4ic1.appspot.com",
  messagingSenderId: "897568627864",
  appId: "1:897568627864:web:373d040dc768dce5aa44ed",
  measurementId: "G-SGHVVH2PHX"
};

firebase.initializeApp(firebaseConfig);

class loadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      try {
        alert(JSON.stringify("logged user email: " + user.email));
        //console.log(JSON.stringify(user));
        ToastAndroid.showWithGravity(
          "zalogowano" + user.email,
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );

        this.props.navigation.navigate("s5");
      } catch {
        this.props.navigation.navigate("s2");
      }
    });
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator size={500} color="#ff5722" />
      </View>
    );
  }
}

export default loadingScreen;
