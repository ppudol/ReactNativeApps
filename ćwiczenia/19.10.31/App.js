import { createStackNavigator, createAppContainer } from "react-navigation";
import loginScreen from "./components/loginScreen";
import usersScreen from "./components/usersScreen";
import editUserScreen from "./components/editUserScreen";
import screen2 from "./components/Screen2";

const Root = createStackNavigator({
  s1: { screen: screen2 },
  s2: { screen: loginScreen },
  s3: { screen: usersScreen },
  s4: { screen: editUserScreen }
});

const App = createAppContainer(Root);

export default App;
