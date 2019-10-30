import { createStackNavigator, createAppContainer } from "react-navigation";
import loginScreen from "./components/loginScreen";
import usersScreen from "./components/usersScreen";
import editUserScreen from "./components/editUserScreen";

const Root = createStackNavigator({
  s1: { screen: loginScreen },
  s2: { screen: usersScreen },
  s3: { screen: editUserScreen }
});

const App = createAppContainer(Root);

export default App;
