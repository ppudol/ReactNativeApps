import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Item from "./Item";

export default class App extends React.Component {
  render() {
    console.log("App"); // tą konsolę zobacz w przeglądarce
    elementsTab = [];
    colorsTab = [
      "#009688",
      "#E91E63",
      "#8BC34A",
      "#607D8B",
      "#7B1FA2",
      "#D32F2F",
      "#FBC02D"
    ];
    // var colorsIndex = colorsTab.map(function(x, index) {
    //   return index;
    //  });
    colorsTab.forEach(function addToTab(element, index) {
      //console.log(element);
      //console.log(index);
      elementsTab.push(<Item color={element} key={index} index={index} />);
    });
    colorsTab.reverse();

    return <View style={styles.container}>{elementsTab}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0B6"
  }
});
