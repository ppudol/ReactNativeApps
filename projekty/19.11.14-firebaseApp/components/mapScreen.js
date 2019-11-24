import React, { Component } from "react";
import { View, Text } from "react-native";
import MapView from "react-native-maps";

class mapScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "mapa",
    headerStyle: {
      backgroundColor: "#0096a5"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      latitude: this.props.navigation.state.params.latitude,
      longitude: this.props.navigation.state.params.longitude
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: this.state.latitude,
              longitude: this.state.longitude
            }}
            title={"stacja"}
            description={"stacja"}
          />
        </MapView>
      </View>
    );
  }
}

export default mapScreen;
