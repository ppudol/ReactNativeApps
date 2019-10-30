import React, { Component } from "react";
import { View, Text, Button, FlatList } from "react-native";
import MyButton from "./Button";

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
    this.state = {};
    //odbiór paramów
    console.log(this.props.navigation.state.params.a);
    console.log(this.props.navigation.state.params.b);
  }

  anyFunction() {
    console.log("klikasz w button");
  }

  fetchUsersFromServer() {
    console.log("aaa");
    return fetch("http://192.164.1.101:3000", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstParam: "yourValue",
        secondParam: "yourOtherValue"
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <View>
        <Button
          title="go to screen1"
          onPress={() => this.props.navigation.navigate("s1")}
        />
        <FlatList
          data={[{ key: "a" }, { key: "b" }, { key: "c" }]}
          renderItem={({ item }) => <Text>{item.key}</Text>}
        />

        <MyButton
          testProp1="tytulik wpisujący"
          testProp2={false}
          testPress={() => this.anyFunction()}
        />
        <MyButton
          testProp1="zapytanie testowe do servera express"
          testProp2={true}
          testPress={() => this.fetchUsersFromServer()}
        />
      </View>
    );
  }
}

export default Screen2;
