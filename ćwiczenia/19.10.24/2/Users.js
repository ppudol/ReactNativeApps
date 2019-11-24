import React, { Component } from 'react';
import { View, Text, Button, FlatList } from 'react-native';
import MyButton from "./MyButton";
import ListItem from "./ListItem";

class Users extends Component {
  static navigationOptions = {
    title: "admin page",
    headerStyle: {
      backgroundColor: "#b39ddb"
    },
    headerTitleStyle: {
      color: "#000000"
    }
  }
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
    this.getUserList()
  }

  getUserList() {
    return fetch('http://192.168.1.159:3000/getUserList', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({ userList: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{
        flex: 1, alignItems: "center"
      }}>
        
        <MyButton style={{ flex: 1 }} text="Login page" textSize="25" width="200" background="#7986cb" press={() => this.props.navigation.navigate("s1")} />
        <FlatList style={{ flex: 1 }}
          data={this.state.userList}

          renderItem={({ item }) => <ListItem username={item.username} password={item.password} />} />
      </View>
    );
  }
}

export default Users;
