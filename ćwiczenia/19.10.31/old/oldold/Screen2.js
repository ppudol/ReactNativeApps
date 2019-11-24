import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";
import MyButton from "./Button";
import { ActivityIndicator } from "react-native";
import * as Font from "expo-font";
import * as Permissions from "expo-permissions";
import * as Location from "expo-location";
import { AsyncStorage } from "react-native";
import MapView from "react-native-maps";

class Screen2 extends Component {
  static navigationOptions = {
    // header: null,
    title: "tytuł2",
    headerStyle: {
      backgroundColor: "#ffff00"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  constructor(props) {
    super(props);
    this.state = { number: 1, fontloaded: false };
    //odbiór paramów
    //console.log(this.props.navigation.state.params.a);
    //console.log(this.props.navigation.state.params.b);
  }
  componentDidMount = async () => {
    await Font.loadAsync({
      myfont: require("./SpaceMono-Regular.ttf")
    });
    this.setState({ fontloaded: true });
  };

  componentWillMount = () => {
    this.setPermissions();
  };

  getPosition = async () => {
    console.log("get position");
    this.setState({ number: 0 });
    let pos = await Location.getCurrentPositionAsync({});
    this.setState({ number: 1 });
    alert(JSON.stringify(pos, null, 4));
  };

  setPermissions = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      alert("odmawiam przydzielenia uprawnień do czytania lokalizacji");
    }
  };

  setData = async () => {
    await AsyncStorage.setItem("key1", "value1");
    await AsyncStorage.setItem(
      "key" + Math.round(Math.random() * 100),
      "value" + Math.random()
    );
    console.log("dataSet");
  };

  getData = async () => {
    let val = await AsyncStorage.getItem("key1");
    console.log(val);
  };

  getAllData = async () => {
    let keys = await AsyncStorage.getAllKeys();
    console.log("keys", keys);
    let stores = await AsyncStorage.multiGet(keys);
    console.log("stores", stores);
    let maps = stores.map((result, i, store) => {
      let key = store[i][0];
      let value = store[i][1];
      console.log(key, value);
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        {this.state.number == 0 ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : null}
        {this.state.fontloaded ? (
          <View style={{ flex: 1 }}>
            <Text
              style={{
                fontFamily: "myfont",
                fontSize: 100
              }}
            >
              Test
            </Text>
          </View>
        ) : null}
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 50.111,
            longitude: 20.111,
            latitudeDelta: 0.001,
            longitudeDelta: 0.001
          }}
        >
          <MapView.Marker
            coordinate={{
              latitude: 50.111,
              longitude: 20.111
            }}
            title={"pos"}
            description={"opis"}
          />
        </MapView>
        <Button title="getPosition" onPress={this.getPosition}></Button>
        <Button title="setData" onPress={this.setData}></Button>
        <Button title="getData" onPress={this.getData}></Button>
        <Button title="getAllData" onPress={this.getAllData}></Button>
      </View>
    );
  }
}

export default Screen2;
