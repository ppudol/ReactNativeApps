import React, { Component } from "react";
import { View, Text, Button, FlatList, Image } from "react-native";
import MyButton from "./Button";
import config from "./Settings";

class usersScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "Admin Page",
    headerStyle: {
      backgroundColor: "#005b9f"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  constructor(props) {
    super(props);
    this.state = { userList: this.props.navigation.state.params };
    //odbiór paramów
    //console.log(this.props.navigation.state.params);
  }

  anyFunction() {
    console.log("klikasz w button");
  }

  deleteUser(index) {
    console.log(index);
    console.log("łączenie z serwerem");
    return fetch(
      "http://" + config.ipAddress + ":" + config.port + "/deleteUser",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          index: index
        })
      }
    )
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.response == "deleted") {
          console.log("usunięto");
          this.setState({ userList: responseJson.usersTab });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    flatListData = [];
    this.state.userList.usersTab.forEach(function(element, index) {
      //console.log(index + " " + element);
      var flatListObject = {
        key: element.username,
        password: element.password,
        index: index
      };
      flatListData.push(flatListObject);
    });
    return (
      <View>
        <FlatList
          data={flatListData}
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center"
              }}
            >
              <Image
                style={{ width: 50, height: 50 }}
                source={require("./user.png")}
              />
              <Text style={{ width: 200 }}>
                {item.index}:{item.key}
              </Text>
              <MyButton
                btTitle="Edytuj"
                btPress={() =>
                  this.props.navigation.navigate("s3", {
                    username: item.key,
                    password: item.password
                  })
                }
              />
              <MyButton
                btTitle="Usuń"
                btPress={() => this.deleteUser(item.index)}
              />
            </View>
          )}
        />
      </View>
    );
  }
}

export default usersScreen;
