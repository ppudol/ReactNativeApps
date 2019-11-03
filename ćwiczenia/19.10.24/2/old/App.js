import { createStackNavigator, createAppContainer } from "react-navigation";
import mainScreen from "./components/mainScreen";
import listScreen from "./components/listScreen";
import mapScreen from "./components/mapScreen";

const Root = createStackNavigator({
  s1: { screen: mainScreen },
  s2: { screen: listScreen },
  s3: { screen: mapScreen}
});

const App = createAppContainer(Root);

export default App;
