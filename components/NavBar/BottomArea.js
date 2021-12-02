import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
class BottomArea extends React.Component {
   
  render() {
 
    return (
      <View style={styles.container}>
          <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate("Home")
                }>
        <View style={
            { flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons name="home" color={this.props.state.routeNames[this.props.state.index]=="Home"?"#3a66c7":"#b9b6bd"} size={35} />
          <Text
            style={
                this.props.state.routeNames[this.props.state.index]=="Home"?
                
                {
              color: "#3a66c7",
              fontSize: 20,
              fontWeight: "500",
              marginLeft: 7,
            }:   {
                color: "#6e6b79",
                fontSize: 20,
                fontWeight: "500",
                marginLeft: 7,
              }
        }
          >
            Home
          </Text>
        </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() =>
                  this.props.navigation.navigate("MoreInfo")
                }>
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <Entypo name="info" color={this.props.state.routeNames[this.props.state.index]=="MoreInfo"?"#3a66c7":"#b9b6bd"} size={35} />
          <Text
            style={
                this.props.state.routeNames[this.props.state.index]=="MoreInfo"?
                
                {
              color: "#3a66c7",
              fontSize: 20,
              fontWeight: "500",
              marginLeft: 7,
            }:   {
                color: "#6e6b79",
                fontSize: 20,
                fontWeight: "500",
                marginLeft: 7,
              }
        }
          >
            More Info
          </Text>
        </View>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1.6,
    backgroundColor: "white",
    margin: 30,
  },
});
export default BottomArea;
