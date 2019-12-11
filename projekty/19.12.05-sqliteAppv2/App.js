import { createStackNavigator, createAppContainer } from "react-navigation";
import mainScreen from "./components/mainScreen";
import dataScreen from "./components/dataScreen";
import newDataScreen from "./components/newDataScreen";

const Root = createStackNavigator({
  s1: { screen: mainScreen },
  s2: { screen: dataScreen },
  s3: { screen: newDataScreen }
});

const App = createAppContainer(Root);

export default App;
