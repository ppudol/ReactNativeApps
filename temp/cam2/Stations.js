import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import firebase from "firebase";
import MyButton from "./MyButton";
import ListItem from "./ListItem";

class Stations extends Component {
  static navigationOptions = {
    title: "Bike stations",
    headerStyle: {
      backgroundColor: "#b39ddb"
    },
    headerTitleStyle: {
      color: "#000000"
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      listData: [],
      email: this.props.navigation.state.params.email
    };
    this.stations = this.getFirebase().child("stations_big"); // "stations" to nazwa tablicy w obiekcie jsona
  }

  getFirebase() {
    return firebase.database().ref();
  }

  componentDidMount() {
    this.stations.on("value", elements => {
      // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
      elements.forEach(item => {
        // console.log(item);
        var it = JSON.stringify(item);
        var ip = JSON.parse(it);
        this.setState(prevState => ({
          listData: [...prevState.listData, ip]
        }));
      });
    });
    console.log("elo", JSON.stringify(this.state.listData));
  }

  showMap(latitude, longitude) {
    console.log(latitude + " " + longitude);
  }

  logout() {
    firebase
      .auth()
      .signOut()
      .then(() => {
        ToastAndroid.showWithGravity(
          "Got logged out.",
          ToastAndroid.SHORT,
          ToastAndroid.CENTER
        );
      })
      .catch(error => alert(error));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text style={{ fontSize: 22, color: "#7986cb", textAlign: "center" }}>
          Witaj, {this.state.email}!
        </Text>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row"
          }}>
          <View style={{ flex: 2 }}></View>
          <MyButton
            style={{ flex: 2 }}
            text='Main page'
            textSize='22'
            width='150'
            height='35'
            background='#7986cb'
            press={() => this.props.navigation.navigate("s1")}
          />
          <View style={{ flex: 2 }}></View>
          <MyButton
            style={{ flex: 2 }}
            text='Logout'
            textSize='22'
            width='150'
            height='35'
            background='#7986cb'
            press={() => this.props.navigation.navigate("s3")}
          />
          <View style={{ flex: 2 }}></View>
        </View>
        <View style={{ flex: 9 }}>
          <FlatList
            style={{ flex: 9 }}
            data={this.state.listData}
            keyExtractor={(item, index) => "key" + index}
            renderItem={item => (
              (<ListItem item={item.item} />), console.log("aa")
            )}
          />
        </View>
      </View>
    );
  }
}

export default Stations;
