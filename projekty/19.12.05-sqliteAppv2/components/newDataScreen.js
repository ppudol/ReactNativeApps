import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableNativeFeedback,
  Vibration
} from "react-native";
import RoundButton from "./roundButton";
import Database from "./Database";
import { TouchableOpacity } from "react-native-gesture-handler";
import { ThemeColors } from "react-navigation";

class newDataScreen extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      hour: "12",
      minute: "00",
      hourSelected: true
    };
    this.hourClick = this.hourClick.bind(this);
    this.minuteClick = this.minuteClick.bind(this);
    this.changeHour = this.changeHour.bind(this);
    this.changeMinute = this.changeMinute.bind(this);
  }

  addData = async () => {
    //dodawanie danych do bazy
    await Database.addHour(this.state.hour, this.state.minute);
    //  await Database.add();
    await this.props.navigation.state.params.refresh();
    this.props.navigation.navigate("s2");
  };

  hourClick() {
    console.log("hourCLick");
    this.setState({ hourSelected: true });
  }

  minuteClick() {
    console.log("minuteCLick");
    this.setState({ hourSelected: false });
  }

  changeHour(i, hour) {
    //console.log("changeHour", hour, i);
    this.setState({ hour: hour });
    this.setState({ hourSelected: false });
    Vibration.vibrate(100);
  }

  changeMinute(i, minute) {
    this.setState({ minute: minute });
    Vibration.vibrate(100);
    //console.log("changeMinute", i, minute);
  }

  render() {
    let hourCirclesDivTable = [];
    let hourCirclesDiv2Table = [];
    let minuteCirclesDivTable = [];

    let hourTab = [20, 19, 18, 17, 16, 15, 14, 13, 0, 23, 22, 21];
    let minuteTab = [40, 35, 30, 25, 20, 15, 10, "05", "00", 55, 50, 45];
    let hourTab2 = [8, 7, 6, 5, 4, 3, 2, 1, 12, 11, 10, 9];

    for (let i = 0; i < 12; i++) {
      hourCirclesDivTable.push(
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            "rgba(255,255,255,1)",
            true
          )}
          key={i * 5}
          onPress={() => this.changeHour(i, hourTab[i])}
          style={{
            width: 100,
            height: 100
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              left:
                (Dimensions.get("window").width - 50) / 2 -
                +((Dimensions.get("window").width - 50) / 2) *
                  Math.cos(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              top:
                (Dimensions.get("window").width - 50) / 2 -
                +((Dimensions.get("window").width - 50) / 2) *
                  Math.sin(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              borderWidth: 2,
              borderRadius: 50,
              justifyContent: "center",
              alignContent: "center"
              // transform: [{ translateX: 275 }, { rotate: "144deg" }]
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center"
              }}>
              {hourTab[i]}
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

    for (let i = 0; i < 12; i++) {
      hourCirclesDiv2Table.push(
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            "rgba(255,255,255,1)",
            true
          )}
          key={i * 5}
          onPress={() => this.changeHour(i, hourTab2[i])}
          style={{
            width: 100,
            height: 100
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              left:
                (Dimensions.get("window").width - 200) / 2 -
                +((Dimensions.get("window").width - 200) / 2) *
                  Math.cos(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              top:
                (Dimensions.get("window").width - 200) / 2 -
                +((Dimensions.get("window").width - 200) / 2) *
                  Math.sin(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              borderWidth: 2,
              borderRadius: 50,
              justifyContent: "center",
              alignContent: "center"
              // transform: [{ translateX: 275 }, { rotate: "144deg" }]
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center"
              }}>
              {hourTab2[i]}
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

    for (let i = 0; i < 12; i++) {
      minuteCirclesDivTable.push(
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple(
            "rgba(255,255,255,1)",
            true
          )}
          key={i * 5}
          onPress={() => this.changeMinute(i, minuteTab[i])}
          style={{
            width: 100,
            height: 100
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              position: "absolute",
              left:
                (Dimensions.get("window").width - 200) / 2 -
                +((Dimensions.get("window").width - 200) / 2) *
                  Math.cos(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              top:
                (Dimensions.get("window").width - 200) / 2 -
                +((Dimensions.get("window").width - 200) / 2) *
                  Math.sin(2 * Math.PI - ((30 * Math.PI) / 180) * (i + 1)),

              borderWidth: 2,
              borderRadius: 50,
              justifyContent: "center",
              alignContent: "center"
              // transform: [{ translateX: 275 }, { rotate: "144deg" }]
            }}>
            <Text
              style={{
                fontSize: 16,
                textAlign: "center"
              }}>
              {minuteTab[i]}
            </Text>
          </View>
        </TouchableNativeFeedback>
      );
    }

    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#035ef9"
        }}>
        <View
          style={{
            height: 200,
            flexDirection: "row",
            alignContent: "center"
          }}>
          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              "rgba(255,255,255,1)",
              true
            )}
            onPress={this.hourClick}
            style={{
              flex: 1,

              alignContent: "flex-end"
            }}>
            <View
              style={{
                flex: 1,
                alignItems: "flex-end",
                justifyContent: "center"
              }}>
              <Text
                style={{
                  color: this.state.hourSelected ? "red" : "black",
                  fontSize: 56,
                  textAlign: "right"
                }}>
                {this.state.hour}
              </Text>
            </View>
          </TouchableNativeFeedback>

          <TouchableNativeFeedback
            background={TouchableNativeFeedback.Ripple(
              "rgba(255,255,255,1)",
              true
            )}
            onPress={this.minuteClick}
            style={{
              flex: 1
            }}>
            <View
              style={{
                flex: 1,
                alignContent: "center",
                justifyContent: "center"
              }}>
              <Text
                style={{
                  color: this.state.hourSelected ? "black" : "red",
                  fontSize: 56
                }}>
                : {this.state.minute}
              </Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        {this.state.hourSelected ? (
          <View style={{ flex: 5 }}>
            <View style={{ position: "absolute" }}>{hourCirclesDivTable}</View>
            <View
              style={{
                position: "absolute",
                left: 75,
                top: 75
              }}>
              {hourCirclesDiv2Table}
            </View>
          </View>
        ) : (
          <View style={{ flex: 5, position: "relative", left: 75, top: 75 }}>
            {minuteCirclesDivTable}
          </View>
        )}

        <View
          style={{
            flex: 2,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            alignItems: "center"
          }}>
          <RoundButton
            btWidth={120}
            btColor={"#278fa5"}
            btPress={this.addData}
          />
        </View>
      </View>
    );
  }
}

export default newDataScreen;
