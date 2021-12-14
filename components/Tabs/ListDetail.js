import React from "react";
import { View, StyleSheet, Text,Image } from "react-native";
class ListDetail extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <View style={[styles.ImageBorder,{borderColor:this.props.color}]}>
          <Image
            source={{ uri: this.props.avatar_url }}
            style={styles.ImageStyle}
          ></Image>
        </View>
        <View style={styles.sideInformation}>
          <Text style={[styles.heading,{color:this.props.color}]}>{this.props.name}</Text>
          <Text style={[styles.description,{color:this.props.color}]}>{this.props.repos}</Text>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: "3%", paddingLeft: "4%" },
  ImageBorder: {
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
    flex: 6,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
    marginTop: "8%",
  },
  description: {
    marginTop: "2%",
    fontSize: 12,
    color: "#868686",
  },
});

export default ListDetail;
