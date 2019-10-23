import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Item from "./Item";

export default class App extends React.Component {
  render() {
    console.log("App"); // tą konsolę zobacz w przeglądarce
    return (
      <View style={styles.container}>
        <Item color={"#C93D21"} flexSize={1} text={"header"} />
        <Item color={"#8E159C"} flexSize={4} text={"content"} />
        <Item color={"#9CDA3B"} flexSize={1} text={"stoopka"} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0B6"
  }
});
