import { createStackNavigator, createAppContainer } from "react-navigation";
import mainScreen from "./components/mainScreen";
import galleryScreen from "./components/galleryScreen";
import photoScreen from "./components/photoScreen";
import cameraScreen from "./components/cameraScreen";

const Root = createStackNavigator({
  s1: { screen: mainScreen },
  s2: { screen: galleryScreen },
  s3: { screen: photoScreen },
  s4: { screen: cameraScreen }
});

const App = createAppContainer(Root);

export default App;
