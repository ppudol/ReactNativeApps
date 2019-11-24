import React, { Component } from "react";
import { View, Text, KeyboardAvoidingView, Switch, ActivityIndicator, FlatList, Image} from "react-native";
import MyButton from "./Button";
import { AsyncStorage } from "react-native";
import * as Location from "expo-location";

class listScreen extends Component {
  constructor(props) {
    super(props);
    this.state = { switchAllValue: false, selectedSwitches: [], loading: 0, flatListData: "", flatListRaw: ""};
  }
  
  componentDidMount() {
    this.getAllData()
  }

  savePosition = async () => {
    //await AsyncStorage.setItem("key1", "value1");
    console.log("get position");
    this.setState({ loading: 1 });
    let pos = await Location.getCurrentPositionAsync({});
    this.setState({ loading: 0 });
   // alert(JSON.stringify(pos, null, 4));
   // console.log(pos.coords.latitude)
   //JSON.stringify(pos.coords)
    await AsyncStorage.setItem(JSON.stringify(pos.timestamp), JSON.stringify(pos.coords) );
    console.log("dataSet"); 
    this.getAllData()
  };

  deletePositions = async () => {
    let keys = await AsyncStorage.getAllKeys();
    let stores = await AsyncStorage.multiGet(keys);
    AsyncStorage.multiRemove(keys, err => {
    });
    this.getAllData()
  };

  showMap = async () => {
    console.log("showMap")
    selectedPinsTab = []
    this.state.flatListRaw.forEach(element => {
      if(element.selected == true) {
        selectedPinsTab.push(element.val)
      }
    });
    console.log(selectedPinsTab)
    this.props.navigation.navigate("s3", { selectedPins: selectedPinsTab})
    //console.log(val);
  };

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
     color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  switchAllChange = () => {
    var data = this.state.flatListRaw
    if (this.state.switchAllValue) {
      data.forEach(element => {
        element.selected = false
      })
    } else {
      data.forEach(element => {
        element.selected = true
      })
    }

    this.setState({ switchAllValue: !this.state.switchAllValue,flatListRaw: data });
    
   
  };

  toggleSwitch = async (value, key, id) => {
    console.log(value, key, id)
    var data = this.state.flatListRaw
    data[id].selected = !data[id].selected
    this.setState({flatListRaw: data})
    }


  getAllData = async () => {
    let keys = await AsyncStorage.getAllKeys();
    //console.log("keys", keys);
    let stores = await AsyncStorage.multiGet(keys);
   // console.log("stores", stores);

    jsonTab = []
    let maps = stores.map((result, i, store) => {
      let key = store[i][0];
      let value = store[i][1];
      let jsonValue = JSON.parse(value)
      try {
        //console.log(this.state.flatListRaw[i].selected)
        jsonTab.push({key:key,val:jsonValue,selected: this.state.flatListRaw[i].selected})
      } catch{
        jsonTab.push({key:key,val:jsonValue,selected:false})
      }
    
      //if (this.state.flatListRaw[i])
    
    });

    this.setState({flatListRaw: jsonTab})
    //this.setState({flatListData: flatListData})
   //console.log(this.state.flatListData)
  };


  render() {

    let flatListData = []
    try { this.state.flatListRaw.forEach( function (element, index){
      var flatListObject = {
        key: element.key,
        index: index,
        latitude: element.val.latitude,
        longitude:element.val.longitude,
        switchSelected: element.selected
    };
    flatListData.push(flatListObject);
  
  });
 // this.setState({flatListData: flatListData})
   } catch{}
   
    return (
      <KeyboardAvoidingView style={{ flex: 1 }}>
         {this.state.loading == 0 ? (<View style={{ flex: 1}}>
         <View style={{ flex: 1, alignItems: "center", margin: 0 }}>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around"
            }}
          >
            <MyButton
              btWidth={"40%"}
              btTitle="Pobierz i zapisz pozycję"
              btPress={this.savePosition}
            />
            <MyButton
              btWidth={"40%"}
              btTitle="Usuń wszystkie dane"
              btPress={this.deletePositions}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <MyButton
              btWidth={"78%"}
              btTitle="Przejdź do mapy"
              btPress={this.showMap}
            />
            <Switch
              value={this.state.switchAllValue}
              onValueChange={this.switchAllChange}
            />
          </View>
        </View>
        <View style={{ flex: 5 }}>
          <FlatList data={flatListData}   
          renderItem={({ item }) => (
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                padding: 10
              }}
            ><Image
                style={{ width: 70, height: 70, padding: 10}}
                source={require("./map.png")}
              />
              <View style={{flex:1, flexDirection: "column", padding: 10}}> 
                <Text style={{ width: 200, fontSize: 20, fontWeight: "bold" }}>
              Key: {item.key}
              </Text>
              <Text style={{ width: 200, fontSize: 12, color: "#37474f" }}>
              Longitude: {item.longitude}
              </Text>
              <Text style={{ width: 200, fontSize: 12, color: "#37474f"}}>
              Latitude: {item.latitude}
              </Text></View>
              <Switch
              value={item.switchSelected
                /*this.state.selectedSwitches.includes(item.key.toString())?true:false */}
              onValueChange = {(eventValue) => this.toggleSwitch(eventValue
                , item.key, item.index)}
            />
            </View>
          )}/>
        </View>
        </View> )  : (<View  style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                padding: 10
              }}><Text style={{fontSize: 50, fontWeight: "bold", textAlign: "center", color: "#ff00ff" }}>please be patient i have autism </Text><ActivityIndicator size="large" color="#0096a5" /></View>)}
      </KeyboardAvoidingView>
    );
  }
}

export default listScreen;
