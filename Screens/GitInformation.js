import React from "react";
import { View, StyleSheet,Button, SafeAreaView } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Organizations from "../components/Tabs/Organizations";
import Rate_limit from "../components/Tabs/Rate_limit";
import Licenses from "../components/Tabs/Licenses";
import AppBar from "../components/AppBar";
import { LinearGradient } from "expo-linear-gradient";
const Tab = createMaterialTopTabNavigator();
class GitInformation extends React.Component {
  render() {
    return (  <SafeAreaView>
        <View style={{height:"100%"}}>
        <AppBar
          navigation={this.props.navigation}
          title={"Git Information"}
          isSearch={false}
        />
          <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />
    <Tab.Navigator >
    <Tab.Screen name="Organization" component={Organizations} />
    <Tab.Screen name="Rate limit" component={Rate_limit} />
    <Tab.Screen name="License   " component={Licenses} />
  </Tab.Navigator>
  
  </View>
  </SafeAreaView>
     ) }
}
const styles = StyleSheet.create({
  container: {},
});

export default GitInformation;
