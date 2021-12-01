import React from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchUser from "./SearchUser";
class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (value) => {
    this.props.setStateOfParent(value);
  };

  render() {
    return (
      <View style={styles.container}>
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={25}
          color="#E4E5E7"
        />
        <SearchUser setValue={this.handleClick} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15, backgroundColor: "white" },
});
export default AppBar;
