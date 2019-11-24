import React, { Component } from 'react';
import { View, Text } from 'react-native';
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
    };
   // console.log(this.props.navigation.state.params);
  }

  render() {
      var markersTab = []
      
        this.props.navigation.state.params.selectedPins.forEach(function (element,index) {
            console.log(element)
         markersTab.push(<MapView.Marker key={index} coordinate={{latitude:element.latitude,longitude:element.longitude}} title={"pos"}
         description={"opis"}/>)
        });
      
    return (
      <View style={{flex:1}}>
           <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: this.props.navigation.state.params.selectedPins[0] ? (this.props.navigation.state.params.selectedPins[0].latitude) : (48.067763),
            longitude: this.props.navigation.state.params.selectedPins[0] ? (this.props.navigation.state.params.selectedPins[0].longitude) : (12.859047),
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
         {markersTab}
        </MapView>
      </View>
    );
  }
}

export default mapScreen;
