import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedbackBase,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

class UserList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.ImageBorder}>
          <Image
            source={{ uri: this.props.image }}
            style={styles.ImageStyle}
          ></Image>
          {this.props.online ? (
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: "green",
                borderRadius: 8,
                position: "absolute",
                alignSelf: "flex-end",
                bottom: 10,
              }}
            />
          ) : (
            <View
              style={{
                height: 12,
                width: 12,
                backgroundColor: "red",
                borderRadius: 8,
                position: "absolute",
                alignSelf: "flex-end",
                bottom: 10,
              }}
            />
          )}
        </View>
        <View style={styles.sideInformation}>
          <Text style={styles.heading}>{this.props.name}</Text>
          <Text style={styles.description}>{this.props.description}</Text>
        </View>
        <View style={{justifyContent:"center",width:"100%",flex:1}}>
          <Text><MaterialIcons name="keyboard-arrow-right" size={20} style={{alignSelf:"center"}}/></Text>
        </View>
      </View>
    );
  }
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
    flex:6
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
export default UserList;
