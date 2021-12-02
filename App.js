import React from "react";
import { StyleSheet,View,Text } from "react-native";

import MainApp from "./Screens/MainApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetail from "./Screens/UserDetail";
import { createDrawerNavigator } from '@react-navigation/drawer';
import SideBar from "./components/SideBar";
import MoreInfo from "./Screens/MoreInfo";
//chek source tree
const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      openDrawer:"closed"
    }
  }
  handleChange=()=> {
    setState({openDrawer:"open"})
  }
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator 
        drawerContent={(props) => <SideBar {...props} />}
        screenOptions={{
          drawerStyle: {
            width: "80%",
          },
        }}
        >
          <Drawer.Screen
            name="Home"
            component={MainApp}
            options={{
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="UserDetail"
            component={UserDetail}
            options={{
              headerShown: false,
    
            }}
          />
          <Drawer.Screen
            name="MoreInfo"
            component={MoreInfo}
            options={{
              headerShown: false,
    
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
export default App;
