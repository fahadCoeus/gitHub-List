import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";

class AccountInfo extends React.Component {
  render() {
    return (
      <View style={styles.listContainer}>
        <View
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "#6446BD",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {this.props.iconType == "MaterialCommunityIcons" && (
            <MaterialCommunityIcons
              name={this.props.iconName}
              size={28}
              color="white"
            />
          )}
          {this.props.iconType == "Entypo" && (
            <Entypo name="location-pin" size={28} color="white" />
          )}
          {this.props.iconType == "SimpleLineIcons" && (
            <SimpleLineIcons name="user-following" size={25} color="white" />
          )}
        </View>
        <View style={styles.sideInformation}>
          <Text style={styles.heading}>{this.props.name}</Text>

          {this.props.description ? (
            <Text style={styles.description}>{this.props.description}</Text>
          ) : (
            <Text style={styles.description}>Not Available</Text>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    flexDirection: "row",
    padding: "3%",
    paddingLeft: "6%",
  },

  sideInformation: {
    flexDirection: "column",
    paddingLeft: 15,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
  },
  description: {
    marginTop: "2%",
    fontSize: 12,
    color: "#868686",
  },
});
export default AccountInfo;
