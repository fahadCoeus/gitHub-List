import React from "react";
import { Image, SafeAreaView, StyleSheet, View, Text } from "react-native";
import AppBar from "../components/AppBar";
import { LinearGradient } from "expo-linear-gradient";
class MoreInfo extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <AppBar
          navigation={this.props.navigation}
          title={"More Info"}
          isSearch={false}
        />
        <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />
        <View style={{ height: "100%", alignItems: "center" }}>
          <Image
            source={require("../assets/coeuslogo.jpeg")}
            style={styles.companyPicture}
          />
          <View>
            <Text
              style={{
                marginTop: 10,
                color: "black",
                fontSize: 24,
                fontWeight: "500",
              }}
            >
              Muhammad Fahad
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: "black",
                fontSize: 14,
                fontWeight: "300",
                textAlign: "center",
              }}
            >
              Mobile Application Developer
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontWeight: "800",
                color: "orange",
                fontSize: 50,
                textAlign: "center",
              }}
            >
              YAHO0!
            </Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
  companyPicture: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 70,
  },
});
export default MoreInfo;
