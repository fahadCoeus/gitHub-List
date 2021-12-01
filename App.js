import React from "react";
import { StyleSheet } from "react-native";

import MainApp from "./Screens/MainApp";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UserDetail from "./Screens/UserDetail";

const Stack = createNativeStackNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={MainApp}
            options={{
              headerShown: false,
              tabBarLabel: "Account",
            }}
          />
          <Stack.Screen
            name="UserDetail"
            component={UserDetail}
            options={{
              headerShown: false,
              tabBarLabel: "Account",
            }}
          />
        </Stack.Navigator>
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
