import { createStackNavigator, createAppContainer } from "react-navigation";
import loginScreen from "./components/loginScreen";
import loadingScreen from "./components/loadingScreen";
import registerScreen from "./components/registerScreen";
import mainScreen from "./components/mainScreen";
import stationsScreen from "./components/stationsScreen";
import mapScreen from "./components/mapScreen";

const Root = createStackNavigator({
  s1: { screen: mainScreen },
  s2: { screen: loginScreen },
  s3: { screen: registerScreen },
  s4: { screen: loadingScreen },
  s5: { screen: stationsScreen },
  s6: { screen: mapScreen }
});

const App = createAppContainer(Root);

export default App;
