import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import Item from "./Item";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calcTab: [[1, 2, 3], [4, 5, 6], [7, 8, 9], [".", 0, "="]],
      characterTab: ["C", "/", "*", "-", "+"],
      calculation: "2+3"
    };
    this.parseCalc = this.parseCalc.bind(this);
  }

  parseCalc(val) {
    //console.log(val);
    if (val == "=") {
      //console.log("eval");
      var result = eval(this.state.calculation);
      this.setState({ calculation: result.toString() });
    } else if (val == "C") {
      // console.log("clear");
      this.setState({ calculation: this.state.calculation.slice(0, -1) });
    } else {
      // console.log(val);
      this.setState({ calculation: (this.state.calculation += val) });
    }
  }

  render() {
    console.log("App");
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#BCE0B6"
        }}
      >
        <View
          style={{
            flex: 2,
            backgroundColor: "#009688",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Text
            style={{
              fontSize: 48,
              color: "white"
            }}
          >
            {this.state.calculation}
          </Text>
        </View>

        <View
          style={{
            flex: 4,
            backgroundColor: "#673AB7",
            flexDirection: "row"
          }}
        >
          <View
            style={{
              flex: 3,
              backgroundColor: "#263238"
            }}
          >
            <View style={styles.rowContainer}>
              <Item
                value={this.state.calcTab[0][0]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[0][1]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[0][2]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
            </View>
            <View style={styles.rowContainer}>
              <Item
                value={this.state.calcTab[1][0]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[1][1]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[1][2]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
            </View>
            <View style={styles.rowContainer}>
              <Item
                value={this.state.calcTab[2][0]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[2][1]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[2][2]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
            </View>
            <View style={styles.rowContainer}>
              <Item
                value={this.state.calcTab[3][0]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[3][1]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
              <Item
                value={this.state.calcTab[3][2]}
                tileColor={"#263238"}
                parseCalc={this.parseCalc}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1
            }}
          >
            <Item
              value={this.state.characterTab[0]}
              tileColor={"#616161"}
              parseCalc={this.parseCalc}
            />
            <Item
              value={this.state.characterTab[1]}
              tileColor={"#616161"}
              parseCalc={this.parseCalc}
            />
            <Item
              value={this.state.characterTab[2]}
              tileColor={"#616161"}
              parseCalc={this.parseCalc}
            />
            <Item
              value={this.state.characterTab[3]}
              tileColor={"#616161"}
              parseCalc={this.parseCalc}
            />
            <Item
              value={this.state.characterTab[4]}
              tileColor={"#616161"}
              parseCalc={this.parseCalc}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#BCE0B6"
  },
  rowContainer: {
    flexDirection: "row",
    flex: 1
  }
});
