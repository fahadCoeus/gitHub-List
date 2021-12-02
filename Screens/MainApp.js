import React from "react";
import {
  StyleSheet,
  FlatList,
  ActivityIndicator,
  Text,
  SafeAreaView,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import AppBar from "../components/AppBar";
import UserList from "../components/UserList";
import listing from "../api/userList";
class MainApp extends React.Component {
  constructor(props) {
    super(props);

    this.setStateOfParent.bind(this);
    this.state = {
      error: false,
      searchValue: "",
      users: [],
      fetch: false,
      page: 0,
      showspinner: false,
      sendUserRequest: false,
      totalUsers: 0,
      userDisplayed: 0,
    };
  }
  componentDidMount() {}
  setStateOfParent = async (value) => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      this.setState({ searchValue: value });
      this.setState({ page: 2 });
    }, 1000);
  };

  render() {
    const getUser = async () => {
      try {
        const response = await listing.getListings(this.state.searchValue, 1);
        if (response.ok) {
          this.setState({
            error: false,
            users: response.data.items,
            totalUsers: response.data.total_count,
            userDisplayed: 30,
            page: 1,
          });
        }
      } catch (error) {
        this.setstate({ error: true });
      }
    };
    const updateUSer = async () => {
      try {
        if (!this.state.sendUserRequest) {
          this.setState({ showspinner: true, sendUserRequest: true });

          const response = await listing.getListings(
            this.state.searchValue,
            this.state.page + 1
          );
          if (response.ok) {
            this.setState({
              error: false,
              users: [...this.state.users, ...response.data.items],
              sendUserRequest: false,
              showspinner: false,
              page: this.state.page + 1,
              userDisplayed: (this.state.page + 1) * 30,
            });
          }
        }
      } catch (error) {
        this.setstate({ error: true });
      }
    };

    return (
      <SafeAreaView style={{ backgroundColor: "white" }}>
        <AppBar
          style={styles.container}
          isSearch={true}
          title={"Home"}
          setStateOfParent={async (value) => {
            if (this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => {
              this.setState({ searchValue: value });
              getUser();
            }, 300);
          }}
          navigation={this.props.navigation}
        />
        <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />
        <View style={{ height: "90%" }}>
          <FlatList
            data={this.state.users}
            keyExtractor={({ item, index }) => index}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("UserDetail", {
                    name: item.login,
                  })
                }
              >
                <UserList
                  key={index}
                  name={item.login}
                  description={index + " - " + item.node_id}
                  image={item.avatar_url}
                  online={item.site_admin}
                />
              </TouchableOpacity>
            )}
            refreshing={this.state.fetch}
            onRefresh={async () => getUser()}
            onMomentumScrollEnd={async () => updateUSer()}
          />
        </View>
        {this.state.showspinner && (
          <ActivityIndicator size="small" color="#CCCCCC" />
        )}
        {this.state.users.length != 0 && (
          <Text style={styles.textStyle}>
            {this.state.userDisplayed}/{this.state.totalUsers} (
            {this.state.page})
          </Text>
        )}

        {this.state.error && <Text>There is an error Check Teminal</Text>}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },
  textStyle: { marginLeft: 10 },
});

export default MainApp;
