import React from "react";
import { View, StyleSheet } from "react-native";

class Seperator extends React.Component {
  render() {
    return <View style={styles.container} />;
  }
}
const styles = StyleSheet.create({
  container: {
    height: 0.3,
    backgroundColor: "#868686",
    justifyContent: "center",
    alignSelf: "center",
    width: "20%",
    marginTop: 10,
  },
});
export default Seperator;
