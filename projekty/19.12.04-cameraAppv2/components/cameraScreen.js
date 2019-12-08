import React, { Component } from "react";
import {
  View,
  Text,
  BackHandler,
  Animated,
  ToastAndroid,
  Dimensions,
  StyleSheet,
  ScrollView
} from "react-native";
import * as Permissions from "expo-permissions";
import { Camera } from "expo-camera";
import RoundButton from "./roundButton";
import * as MediaLibrary from "expo-media-library";
import { HeaderBackButton } from "react-navigation";
import { Tescik } from "./Test";
import RadioGroup from "./radioGroup";

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
      ratios: {
        "4:3": 0,
        "16:9": 1
      },
      selectedWhiteBalance: "auto",
      selectedFlashMode: "auto",
      selectedRatio: "4:3",
      selectedPictureSize: "",
      allCameraData: {
        whiteBalance: Camera.Constants.WhiteBalance,
        flashMode: Camera.Constants.FlashMode,
        sizes: []
      },
      allSizes: ""
    };

    //console.log(this.state.selectedWhiteBalance);
    this.isHidden = true;
    this.testFunc = this.testFunc.bind(this);
    this.changeWhiteBalance = this.changeWhiteBalance.bind(this);
    this.changeFlashMode = this.changeFlashMode.bind(this);
    this.changeRatio = this.changeRatio.bind(this);
    this.changeSelectedPictureSize = this.changeSelectedPictureSize.bind(this);
    this.getCameraData = this.getCameraData.bind(this);
  }

  getCameraData = async () => {
    //   console.log("cameraData");
    if (this.camera) {
      const sizes = await this.camera.getAvailablePictureSizesAsync(
        this.state.selectedRatio
      );

      var biggestSize = sizes.slice(-1)[0];

      var sizesObj = {};
      sizes.forEach(function(element, index) {
        //console.log(element + index);
        sizesObj[element] = index;
      });
      //  console.log(sizesObj);
      this.setState({ selectedPictureSize: biggestSize });
      this.setState({ allSizes: sizesObj });

      console.log("sizes", JSON.stringify(this.state.allSizes));
      console.log("MaxSize", this.state.selectedPictureSize);
    }
  };

  componentDidMount = async () => {
    let { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status == "granted" });
    BackHandler.addEventListener("hardwareBackPress", this.handleBackPress);
    //await this.getCameraData();
  };

  componentWillUnmount = async () => {
    BackHandler.removeEventListener("hardwareBackPress", this.handleBackPress);
  };

  handleBackPress = async () => {
    await this.props.navigation.state.params.refreshPhotos();
    this.props.navigation.goBack();
    return true;
  };

  testFunc = async () => {
    await this.getCameraData();
    // console.log("nic tutaj nie ma przyjdź za tydzień");

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
  };

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

  changeWhiteBalance(mode) {
    console.log("selWhiteBalance", mode);
    this.setState({ selectedWhiteBalance: mode });
  }

  changeFlashMode(mode) {
    console.log("selFlash", mode);
    this.setState({ selectedFlashMode: mode });
  }

  async changeRatio(mode) {
    console.log("selRatio", mode);
    await this.setState({ selectedRatio: mode });
    this.getCameraData();
  }

  changeSelectedPictureSize(mode) {
    console.log("selPictureSize", mode);
    this.setState({ selectedPictureSize: mode });
  }

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
            ratio={this.state.selectedRatio}
            whiteBalance={this.state.selectedWhiteBalance}
            pictureSize={this.state.selectedPictureSize}
            flashMode={this.state.selectedFlashMode}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "flex-end"
                //  zIndex: auto
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
              style={[
                {
                  width: Dimensions.get("window").width / 2,
                  height: Dimensions.get("window").height - 80,
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                  zIndex: 6
                },
                styles.animatedView,
                {
                  transform: [{ translateY: this.state.pos }]
                }
              ]}>
              <ScrollView style={{ flex: 1 }}>
                <RadioGroup
                  color='#ff00ff'
                  change={this.changeWhiteBalance}
                  direction='column'
                  data={Camera.Constants.WhiteBalance}
                  groupName='White Balance'
                  selectedItem={this.state.selectedWhiteBalance}
                />

                <RadioGroup
                  color='#ff00ff'
                  change={this.changeFlashMode}
                  direction='column'
                  data={Camera.Constants.FlashMode}
                  groupName='Flash Mode'
                  selectedItem={this.state.selectedFlashMode}
                />

                <RadioGroup
                  color='#ff00ff'
                  change={this.changeRatio}
                  direction='column'
                  data={this.state.ratios}
                  groupName='Ratio'
                  selectedItem={this.state.selectedRatio}
                />

                <RadioGroup
                  color='#ff00ff'
                  change={this.changeSelectedPictureSize}
                  direction='column'
                  data={this.state.allSizes}
                  groupName='Picture Size'
                  selectedItem={this.state.selectedPictureSize}
                />
              </ScrollView>
            </Animated.View>

            {/* {this.state.menuOpened == true ? <Test /> : null} */}
          </Camera>
        </View>
      );
    }
  }
}

var styles = StyleSheet.create({
  animatedView: {}
});

export default cameraScreen;
