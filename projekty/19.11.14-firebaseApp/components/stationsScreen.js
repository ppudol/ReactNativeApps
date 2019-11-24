import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import firebase from "firebase";
import CstButton from "./Button";
import { BackHandler } from "react-native";

class stationsScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "Stacje rowerowe",
    headerStyle: {
      backgroundColor: "#0096a5"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  constructor(props) {
    super(props);
    this.state = { flatlistData: [] };
    this.stations = this.getFirebase().child("stations_big"); // "stations" to nazwa tablicy w obiekcie jsona
  }

  getFirebase() {
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    return firebase.database().ref();
  }

  componentDidMount() {
    this.stations.on("value", elements => {
      // wykonaj foreach na tej kolekcji, wpisując potrzebne dane do tablicy w state
      elements.forEach(item => {
        //item.forEach(el => {
        //   console.log(el);
        // });
        //console.log(item);
        //console.log(item[0]);
        var it = JSON.stringify(item);
        var ip = JSON.parse(it);
        //console.log(ip.id);

        // this.setState({
        //  flatlistData: this.state.flatlistData.concat(stationOb)
        // });
        this.setState(prevState => ({
          flatlistData: [...prevState.flatlistData, ip]
        }));
        //console.log(this.state.flatlistData);
      });
    });
    //console.log(this.state.flatlistData);
  }

  handleBackPress = async () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        alert("logout");
        this.props.navigation.navigate("s2");
      })
      .catch(error => alert(error));
  };

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  }

  showMap(latitude, longitude) {
    console.log(latitude + " " + longitude);
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.flatlistData}
          keyExtractor={(item, index) => "key" + index}
          renderItem={item => (
            (f1 = item.item.availableBikes / item.item.totalDocks),
            (f2 = item.item.availableDocks / item.item.totalDocks),
            (
              //  console.log("here is your thing", item.item),
              <View
                style={{
                  flex: 1,
                  borderColor: "black",
                  borderWidth: 1,
                  paddingTop: 5
                }}
              >
                <View style={{ flex: 1 }}>
                  <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                    {item.item.stationName}
                  </Text>
                </View>
                <View
                  style={{
                    flex: 3,
                    flexDirection: "row"
                  }}
                >
                  <View
                    style={{
                      flex: 2
                    }}
                  >
                    <Text>longitude: {item.item.longitude}</Text>
                    <Text>latitude: {item.item.latitude}</Text>
                    <Text>razem stacji: {item.item.totalDocks}</Text>
                  </View>
                  <View
                    style={{
                      flex: 3,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    <View style={{ height: 50, width: 200 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          flex: 1
                        }}
                      >
                        <View
                          style={{
                            flex: item.item.availableBikes,
                            backgroundColor: "#808e95"
                          }}
                        >
                          <Text style={{ textAlign: "center" }}>R</Text>
                        </View>
                        <View
                          style={{
                            flex: item.item.availableDocks,
                            backgroundColor: "#e2f1f8"
                          }}
                        >
                          <Text style={{ textAlign: "center" }}>S</Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flex: 1,
                          backgroundColor:
                            item.item.statusValue == "In Service"
                              ? "#c41c00"
                              : "#80e27e"
                        }}
                      >
                        <Text style={{ textAlign: "center" }}>
                          {item.item.statusValue}
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    flex: 3,
                    alignItems: "flex-end"
                  }}
                >
                  <CstButton
                    btWidth={80}
                    btTitle="Mapa"
                    btHeight={30}
                    btPress={() =>
                      this.props.navigation.navigate("s6", {
                        longitude: item.item.longitude,
                        latitude: item.item.latitude
                      })
                    }
                  />
                </View>
              </View>
            )
          )}
        />
      </View>
    );
  }
}

export default stationsScreen;
