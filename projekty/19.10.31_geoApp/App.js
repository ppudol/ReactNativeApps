import { createStackNavigator, createAppContainer } from "react-navigation";
import mainScreen from "./components/mainScreen";
import listScreen from "./components/listScreen";

const Root = createStackNavigator({
  s1: { screen: mainScreen },
  s2: { screen: listScreen }
});

const App = createAppContainer(Root);

export default App;
