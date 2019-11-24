import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  Animated,
  ToastAndroid,
  Dimensions
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import RoundButton from "./roundButton";
import * as MediaLibrary from "expo-media-library";
import { HeaderBackButton } from "react-navigation";

class cameraScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: (
        <HeaderBackButton
          onPress={async () => {
            await navigation.state.params.refreshPhotos();
            navigation.goBack(null);
          }}
        />
      ),
      title: "Camera",
      headerStyle: {
        backgroundColor: "#0096a5"
      },
      headerTitleStyle: {
        color: "#ffffff"
      }
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      hasCameraPermission: null, // przydzielone uprawnienia do kamery
      type: Camera.Constants.Type.back, // typ kamery
      fadeAnim: new Animated.Value(0)
    };
  }

  componentDidMount = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status == "granted" });
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
  };

  componentWillUnmount = async () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  };

  handleBackPress = async () => {
    await this.props.navigation.state.params.refreshPhotos();
    this.props.navigation.goBack();
    return true;
  };

  testFunc() {
    console.log("nic tutaj nie ma przyjdź za tydzień");
  }

  rotateCamera = () => {
    this.setState({
      type:
        this.state.type === Camera.Constants.Type.back
          ? Camera.Constants.Type.front
          : Camera.Constants.Type.back
    });
  };

  takePhoto = async () => {
    if (this.camera) {
      Animated.timing(
        // Uses easing functions
        this.state.fadeAnim, // The value to drive
        { toValue: 0.75 } // Configuration
      ).start();
      let foto = await this.camera.takePictureAsync();
      //let asset = await MediaLibrary.createAssetAsync(foto.uri);  // domyslnie zapisuje w DCIM
      await MediaLibrary.createAssetAsync(foto.uri);
      ToastAndroid.showWithGravity(
        "zdjęcie zrobione!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
      Animated.timing(
        // Uses easing functions
        this.state.fadeAnim, // The value to drive
        { toValue: 0 } // Configuration
      ).start();
    }
  };

  render() {
    const { hasCameraPermission } = this.state; // podstawienie zmiennej ze state
    if (hasCameraPermission == null) {
      return <View />;
    } else if (hasCameraPermission == false) {
      return <Text>brak dostępu do kamery</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            ref={ref => {
              this.camera = ref; // Uwaga: referencja do kamery używana później
            }}
            style={{ flex: 1 }}
            type={this.state.type}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                zIndex: 200
              }}>
              <RoundButton
                btImage={require("./img/rotateCam.png")}
                btWidth={50}
                btPress={this.rotateCamera}
              />
              <RoundButton
                btImage={require("./img/shutter.png")}
                btWidth={100}
                btPress={this.takePhoto}
              />
              <RoundButton
                btImage={require("./img/settings.png")}
                btWidth={50}
                btPress={this.testFunc}
              />
            </View>

            <Animated.View
              style={{
                position: "absolute",
                backgroundColor: "#000000",
                opacity: this.state.fadeAnim,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height
              }}></Animated.View>
          </Camera>
        </View>
      );
    }
  }
}

export default cameraScreen;
