import React from "react";
import { StyleSheet, View, Text, } from "react-native";
import MainApp from "./Screens/MainApp";
import { NavigationContainer } from "@react-navigation/native";
import UserDetail from "./Screens/UserDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SideBar from "./components/SideBar";
import MoreInfo from "./Screens/MoreInfo";
import GitInformation from "./Screens/GitInformation";
import ChangeColor from "./Screens/ChangeColor";
import DatePicker from "./Screens/DatePicker";
import Slider from "./Screens/Slider";
const Drawer = createDrawerNavigator();
class App extends React.Component {
  render() {
    return (
      // <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      //   <Text>Hello</Text>

      // </View>
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
              drawerType: "front",
            }}
          />
          <Drawer.Screen
            name="UserDetail"
            component={UserDetail}
            options={{
              headerShown: false,
              drawerType: "front",
            }}
          />
          <Drawer.Screen
            name="MoreInfo"
            component={MoreInfo}
            options={{
              headerShown: false,
              drawerType: "front",
            }}
          />
          <Drawer.Screen
            name="GitInformation"
            component={GitInformation}
            options={{
              headerShown: false,
              drawerType: "front",
            }}
          />
            <Drawer.Screen
            name="ChangeColor"
            component={ChangeColor}
            options={{
              headerShown: false,
              drawerType: "front",
            }}
          />
           <Drawer.Screen
            name="DatePicker"
            component={DatePicker}
            options={{
              headerShown: false,
              drawerType: "front",
            }}
          />
           <Drawer.Screen
            name="Slider"
            component={Slider}
            options={{
              headerShown: false,
              drawerType: "front",
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
