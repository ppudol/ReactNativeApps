import React, { Component } from "react";
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  ToastAndroid
} from "react-native";
import CstButton from "./Button";
import * as MediaLibrary from "expo-media-library";
import GalleryPhoto from "./galleryPhotoItem";

class galleryScreen extends Component {
  static navigationOptions = {
    // header: null,
    title: "Zdjęcia Zapisane W Telefonie",
    headerStyle: {
      backgroundColor: "#0096a5"
    },
    headerTitleStyle: {
      color: "#ffffff"
    }
  };

  componentWillMount() {
    this.getImagesFromDevice();
  }

  constructor(props) {
    super(props);
    this.state = {
      imagesFlatListData: "",
      flatlistRows: 4,
      photosToDeleteTab: []
    };
  }

  testFunc = async () => {
    this.props.navigation.navigate("s3", {
      refreshPhotos: true
    });
  };

  changeNumOfColumns = () => {
    if (this.state.flatlistRows == 4) {
      this.setState({ flatlistRows: 1 });
    } else {
      this.setState({ flatlistRows: 4 });
    }
  };

  getImagesFromDevice = async () => {
    console.log("refresh Photos");
    let obj = await MediaLibrary.getAssetsAsync({
      first: 100, // ilość pobranych assetów
      mediaType: "photo" // typ pobieranych danych, photo jest domyślne
    });
    this.setState({ imagesFlatListData: obj.assets });
    //alert(JSON.stringify(obj.assets, null, 4));
  };

  handleDeletionTab = (state, id) => {
    if (state) {
      var photosTab = this.state.photosToDeleteTab;
      photosTab.push(id);
      this.setState({ photosToDeleteTab: photosTab });
    } else {
      var photosTab = this.state.photosToDeleteTab;
      var index = photosTab.indexOf(id);
      photosTab.splice(index, 1);
      this.setState({ photosToDeleteTab: photosTab });
    }
  };

  deletePhotos = async () => {
    if (this.state.photosToDeleteTab.length == 0) {
      ToastAndroid.showWithGravity(
        "zaznacz zdjęcia do usunięcia!",
        ToastAndroid.SHORT,
        ToastAndroid.CENTER
      );
    } else {
      await MediaLibrary.deleteAssetsAsync(this.state.photosToDeleteTab);
      this.setState({ photosToDeleteTab: [] });
      this.getImagesFromDevice();
    }
  };

  navigateToCamera = () => {
    this.props.navigation.navigate("s4", {
      refreshPhotos: this.getImagesFromDevice
    });
  };

  render() {
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center"
          }}>
          <CstButton
            btWidth={"30%"}
            btTitle='Grid/List'
            btPress={this.changeNumOfColumns}
          />
          <CstButton
            btWidth={"30%"}
            btTitle='Open Camera'
            btPress={this.navigateToCamera}
          />
          <CstButton
            btWidth={"30%"}
            btTitle='Remove Selected'
            btPress={this.deletePhotos}
          />
        </View>
        <View style={{ flex: 9 }}>
          <FlatList
            data={this.state.imagesFlatListData}
            keyExtractor={item => item.id}
            key={this.state.flatlistRows}
            horizontal={false}
            numColumns={this.state.flatlistRows}
            renderItem={({ item }) => (
              <GalleryPhoto
                item={item}
                flatlistRows={this.state.flatlistRows}
                selected={
                  this.state.photosToDeleteTab.includes(item.id) ? true : false
                }
                handleDeletionTab={this.handleDeletionTab}
                navigation={this.props.navigation}
                refreshPhotos={this.getImagesFromDevice}
              />
            )}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default galleryScreen;
