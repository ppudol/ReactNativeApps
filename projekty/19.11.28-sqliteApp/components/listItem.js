import React, { Component } from "react";
import {
  View,
  Text,
  TouchableNativeFeedback,
  Animated,
  Switch,
  Image,
  TouchableOpacity
} from "react-native";
import { throwStatement } from "@babel/types";

class listItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: new Animated.Value(180), // początkowa wartość wysokości itema
      expanded: false, // zwinięty};
      switch: false,
      pnSelected: false,
      wtSelected: false,
      srSelected: false,
      czSelected: false,
      ptSelected: false,
      sbSelected: false,
      ndSelected: false
    };
    this.toggle = this.toggle.bind(this);
    this.switchChange = this.switchChange.bind(this);
    this.toValue = 0;
  }

  toggle() {
    if (!this.state.expanded) this.toValue = 250;
    else this.toValue = 180;

    Animated.spring(this.state.height, {
      toValue: this.toValue
    }).start();

    this.setState({
      expanded: !this.state.expanded
    });
  }

  switchChange() {
    console.log("switch change");
    this.setState({ switch: !this.state.switch });
  }

  render() {
    return (
      <Animated.View
        style={{
          height: this.state.height, // animowany styl, tutaj wysokość View

          borderBottomColor: "#FFFFFF",
          borderBottomWidth: 2,
          flexDirection: "column"
        }}>
        <View
          style={{
            height: 100,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20
          }}>
          <Text style={{ color: "#ffffff", fontSize: 64 }}>00:00</Text>
          <Switch onValueChange={this.switchChange} value={this.state.switch} />
        </View>
        <View
          style={{
            height: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            paddingLeft: 20,
            paddingRight: 20
          }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              "rgba(255,255,255,1)",
              true
            )}
            onPress={() => console.log("pressed")}
            style={{
              width: 20,
              height: 20
            }}>
            <Image source={require("./baseline_delete_white_18dp.png")} />
          </TouchableNativeFeedback>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              "rgba(255,255,255,1)",
              true
            )}
            onPress={this.toggle}
            style={{
              width: 20,
              height: 20
            }}>
            <Image source={require("./baseline_expand_more_white_18dp.png")} />
          </TouchableNativeFeedback>
        </View>

        {this.state.expanded == true ? (
          <View
            style={{
              height: 100,
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignContent: "space-between",
              alignItems: "center",
              paddingRight: 20,
              paddingLeft: 20
            }}>
            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ pnSelected: !this.state.pnSelected })
              }>
              <Text
                style={{
                  color: this.state.pnSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.pnSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                PN
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ wtSelected: !this.state.wtSelected })
              }>
              <Text
                style={{
                  color: this.state.wtSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.wtSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                WT
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ srSelected: !this.state.srSelected })
              }>
              <Text
                style={{
                  color: this.state.srSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.srSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                ŚR
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ czSelected: !this.state.czSelected })
              }>
              <Text
                style={{
                  color: this.state.czSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.czSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                CZ
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ ptSelected: !this.state.ptSelected })
              }>
              <Text
                style={{
                  color: this.state.ptSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.ptSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                PT
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ sbSelected: !this.state.sbSelected })
              }>
              <Text
                style={{
                  color: this.state.sbSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.sbSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                SB
              </Text>
            </TouchableNativeFeedback>

            <TouchableNativeFeedback
              style={{ flex: 1 }}
              onPress={() =>
                this.setState({ ndSelected: !this.state.ndSelected })
              }>
              <Text
                style={{
                  color: this.state.ndSelected ? "#000000" : "#ffffff",
                  backgroundColor: this.state.ndSelected
                    ? "#ffffff"
                    : "transparent",
                  padding: 5,
                  borderRadius: 50
                }}>
                ND
              </Text>
            </TouchableNativeFeedback>
          </View>
        ) : (
          <View
            style={{
              height: 30,
              flexDirection: "row",
              //justifyContent: "center",
              paddingLeft: 20
            }}>
            {this.state.pnSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Pon.{" "}
              </Text>
            ) : null}
            {this.state.wtSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Wto.{" "}
              </Text>
            ) : null}
            {this.state.srSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Sro.{" "}
              </Text>
            ) : null}
            {this.state.czSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Czw.{" "}
              </Text>
            ) : null}
            {this.state.ptSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Pią.{" "}
              </Text>
            ) : null}
            {this.state.sbSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Sob.{" "}
              </Text>
            ) : null}
            {this.state.ndSelected ? (
              <Text style={{ color: "#ffffff", fontWeight: "bold" }}>
                Nie.{" "}
              </Text>
            ) : null}
          </View>
        )}
      </Animated.View>
    );
  }
}

export default listItem;
