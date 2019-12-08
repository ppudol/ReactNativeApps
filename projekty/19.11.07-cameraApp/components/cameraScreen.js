import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  Animated,
  ToastAndroid,
  Dimensions,
  StyleSheet
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import RoundButton from "./roundButton";
import * as MediaLibrary from "expo-media-library";
import { HeaderBackButton } from "react-navigation";
import { Tescik } from "./Test";

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
      fadeAnim: new Animated.Value(0),
      menuOpened: false,
      pos: new Animated.Value(Dimensions.get("window").height), //startowa pozycja y wysuwanego View
      ratios: ["4:3", "16:9"],
      selectedWhiteBalance: Camera.Constants.WhiteBalance[0],
      selectedFlashMode: Camera.Constants.FlashMode[0],
      selectedRatio: "4:3"
    };
    this.isHidden = true;
    this.testFunc = this.testFunc.bind(this);
  }

  getCameraData = async () => {
    console.log("cameraData");
    if (this.camera) {
      const sizes = await this.camera.getAvailablePictureSizesAsync(
        this.state.selectedRatio
      );

      var propertiesObj = {
        whiteBalance: Camera.Constants.WhiteBalance,
        flashMode: Camera.Constants.FlashMode,
        sizes: sizes
      };

      //alert(JSON.stringify(sizes, null, 4));
    }

    console.log(propertiesObj);

    //propertiesTab.push(Camera.Constants.WhiteBalance);
    //console.log(Camera.Constants.WhiteBalance);
    //console.log(Camera.Constants.FlashMode);
    //if (this.camera) {
    // const sizes = await this.camera.getAvailablePictureSizesAsync(
    //   this.state.selectedRatio
    // );
    //  alert(JSON.stringify(sizes, null, 4));
    // }
  };

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
    this.getCameraData();
    console.log("nic tutaj nie ma przyjdź za tydzień");

    this.setState({ menuOpened: !this.state.menuOpened });

    if (this.isHidden) toPos = 0;
    else toPos = Dimensions.get("window").height;

    //animacja

    Animated.spring(this.state.pos, {
      toValue: toPos,
      velocity: 1,
      tension: 0,
      friction: 10
    }).start();

    this.isHidden = !this.isHidden;
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
            type={this.state.type}
            // ratio={this.state.ratio}
            // whiteBalance={this.state.wb}
            //  pictureSize={this.state.ps}
            // flashMode={this.state.fm}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end",
                zIndex: 200
              }}
            >
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
              style={[
                {
                  width: Dimensions.get("window").width / 2,
                  height: Dimensions.get("window").height
                },
                styles.animatedView,
                {
                  transform: [{ translateY: this.state.pos }]
                }
              ]}
            >
              <Text>ANIMATE ME!</Text>
            </Animated.View>

            <Animated.View
              style={{
                position: "absolute",
                backgroundColor: "#000000",
                opacity: this.state.fadeAnim,
                width: Dimensions.get("window").width,
                height: Dimensions.get("window").height
              }}
            ></Animated.View>

            {/* {this.state.menuOpened == true ? <Test /> : null} */}
          </Camera>
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  animatedView: {
    position: "absolute",
    bottom: -80,
    left: 0,
    right: 0,
    backgroundColor: "#00ff00"
  }
});

export default cameraScreen;
