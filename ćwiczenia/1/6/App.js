import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Item from "./Item";

export default class App extends React.Component {
  render() {
    console.log("App"); // tą konsolę zobacz w przeglądarce
    leftElementsTab = [];
    rightElementsTab = [];
    colorsTab = [
      "#009688",
      "#E91E63",
      "#8BC34A",
      "#607D8B",
      "#7B1FA2",
      "#D32F2F"
    ];
    // var colorsIndex = colorsTab.map(function(x, index) {
    //   return index;
    //  });
    colorsTab.forEach(function addToTab(element, index) {
      //console.log(element);
      //console.log(index);
      leftElementsTab.push(
        <Item color={element} key={index} index={index} textColor={"black"} />
      );
      rightElementsTab.push(
        <Item color={element} key={index} index={index} textColor={"white"} />
      );
    });
    leftElementsTab.reverse();
    var viewTab = [];
    colorsTab.forEach(function addToTab(element, index) {
      if (index % 2 == 0) {
        viewTab.push(
          <View key={index} style={styles.container}>
            {rightElementsTab}
          </View>
        );
      } else {
        viewTab.push(
          <View key={index} style={styles.container}>
            {leftElementsTab}
          </View>
        );
      }
    });
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "row"
        }}
      >
        {viewTab}
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
