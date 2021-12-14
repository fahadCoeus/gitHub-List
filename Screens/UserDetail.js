import React from "react";
import {
  View,
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  FlatList,
  ActivityIndicator,
} from "react-native";
import {
  MaterialCommunityIcons,
  Entypo,
  SimpleLineIcons,
} from "@expo/vector-icons";
import axios from "axios";
import listing from "../api/userList";
import AccountInfo from "../components/AccountInfo";
import Clipboard from "@react-native-community/clipboard";
class UserDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageURL: "NotAvailable",
      name: "NotAvailable",
      id: "NotAvailable",
      company: "NotAvailable",
      location: "NotAvailable",
      bio: "NotAvailable",
      repos: "NotAvailable",
      followers: "NotAvailable",
      isLoading: true,
    };
  }

  async componentDidMount() {
    this.props.navigation.addListener("focus", async () => {
      var value = this.props.route.params;

      const response = await listing.getUser(value.name);
      if (response.ok) {
        const {
          avatar_url,
          name,
          node_id,
          company,
          public_repos,
          location,
          bio,
          followers,
        } = response.data;
        this.setState({
          imageURL: avatar_url,
          name: name,
          id: node_id,
          company: company,
          repos: public_repos,
          location: location,
          bio: bio,
          followers: followers,
          isLoading: false,
        });
      }
    });
  }

  render() {
    const AcountInfoText = [
      {
        iconType: "MaterialCommunityIcons",
        iconName: "office-building",
        name: "Company",
        description: this.state.company,
      },
      {
        iconType: "Entypo",
        iconName: "location-pin",
        name: "Location",
        description: this.state.location,
      },
      {
        iconType: "MaterialCommunityIcons",
        iconName: "bio",
        name: "Bio",
        description: this.state.bio,
      },
      {
        iconType: "MaterialCommunityIcons",
        iconName: "source-repository",
        name: "Public_repos",
        description: this.state.repos,
      },
      {
        iconType: "SimpleLineIcons",
        iconName: "user-following",
        name: "Followers",
        description: this.state.followers,
      },
    ];
    if (this.state.isLoading) {
      return (
        <ActivityIndicator
          animating={true}
          style={styles.indicator}
          size="large"
        />
      );
    }
    return (
      <View style={styles.screens}>
        <StatusBar barStyle="light-content" />
        <View style={styles.topBar}>
          <View style={styles.container}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("Home")}
              style={{ width: 30 }}
            >
              <MaterialCommunityIcons
                name="keyboard-backspace"
                color="white"
                size={30}
              />
            </TouchableOpacity>
            <Text style={styles.mainText}>Profile Settings</Text>
          </View>
          <View style={styles.bottomSection}>
            <Image
              source={{ uri: this.state.imageURL }}
              style={styles.profilPicture}
            />
            <Text style={{ fontSize: 28, fontWeight: "600", marginTop: 30 }}>
              {this.state.name}
            </Text>
            <View style={styles.userId}>
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "300",
                  marginRight: 10,
                  color: "#b5b5b5",
                }}
              >
                {this.state.id}
              </Text>
              <MaterialCommunityIcons
                name="content-copy"
                color="#6446BD"
                size={16}
              />
            </View>
            <View style={styles.line} />
            <View
              style={{
                width: "100%",
                padding: 30,
                paddingBottom: 10,
              }}
            >
              <Text
                style={{ fontSize: 20, fontWeight: "500", color: "#51505b" }}
              >
                Account Info
              </Text>
            </View>
            <View style={{ width: "100%" }}>
              <View style={{ marginLeft: 0, width: "100%" }}>
                {AcountInfoText.map((item, index) => (
                  <AccountInfo
                    iconType={item.iconType}
                    iconName={item.iconName}
                    name={item.name}
                    description={item.description}
                    key={index}
                  />
                ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#6446BD",
    flex: 1,
    borderBottomLeftRadius: 80,
    borderColor: "#6446BD",
    paddingTop: 30,
    paddingLeft: 33,
  },
  listContainer: {
    flexDirection: "row",
    padding: "3%",
    paddingLeft: "4%",
  },

  sideInformation: {
    flexDirection: "column",
    paddingLeft: 15,
  },
  heading: {
    fontWeight: "500",
    fontSize: 18,
    fontSize: 20,
  },
  description: {
    marginTop: "2%",
    fontSize: 15,
    color: "#868686",
    width: 280,
  },
  screens: {
    backgroundColor: "#6446BD",
    paddingTop: 25,
  },
  topBar: {
    flexDirection: "column",
    height: "100%",
    backgroundColor: "white",
  },
  mainText: {
    color: "white",
    fontSize: 24,
    marginTop: 20,
  },
  bottomSection: {
    backgroundColor: "white",
    flex: 3,
    alignItems: "center",
  },
  profilPicture: {
    width: 140,
    height: 140,
    justifyContent: "center",
    borderRadius: 70,
    marginTop: -70,
  },
  userId: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  line: {
    height: 0.3,
    backgroundColor: "#868686",
    marginLeft: 15,
    width: "100%",
    marginTop: 40,
  },
  indicator: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 80,
  },
});
export default UserDetail;
