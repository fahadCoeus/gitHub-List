import React from "react";
import { View, Image, StyleSheet, Text, TouchableOpacity } from "react-native";

export default function ListItem({ name, description, image }) {
  return (
    <View style={styles.container}>
      <View style={styles.ImageBorder}>
        <Image source={{ uri: image }} style={styles.ImageStyle} />
      </View>
      <View style={styles.sideInformation}>
        <Text style={styles.heading}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: "3%", paddingLeft: "4%" },
  ImageBorder: {
    borderColor: "#DDDDD6",
    borderWidth: 1,
    borderRadius: 40,
    padding: 2,
  },
  ImageStyle: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  sideInformation: {
    flexDirection: "column",
    paddingLeft: 15,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
    marginTop: "8%",
  },
  description: {
    marginTop: "5%",
    fontSize: 12,
    color: "#868686",
  },
});
