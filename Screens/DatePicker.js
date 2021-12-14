import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  Text,
  FlatList,
  TouchableHighlight,
} from "react-native";
import AppBar from "../components/AppBar";
import { LinearGradient } from "expo-linear-gradient";
import UIDatePicker from "./../components/DatePicker";

class DatePicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "2020-01-09T00:00:00.00+0",
      data: [
        {
          key: 0,
          backgroundcolor: "#E8C33B",
          selected: true,
          date: "2020-01-09",
        },
        {
          key: 1,
          backgroundcolor: "#CBCBC8",
          selected: false,
          date: "2020-01-10",
        },
        {
          key: 2,
          backgroundcolor: "#CBCBC8",
          selected: false,
          date: "2020-01-11",
        },
        {
          key: 3,
          backgroundcolor: "#CBCBC8",
          selected: false,
          date: "2020-01-012",
        },
        {
          key: 4,
          backgroundcolor: "#CBCBC8",
          selected: false,
          date: "2020-01-13",
        },
      ],
      selectedItem: 0,
    };
  }

  _onchange = (event) => {
    if (Platform.OS === "ios") {
      let getDate = new Date(event.nativeEvent.changedDate);
      let newList = [...this.state.data];
      newList[this.state.selectedItem] = {
        ...newList[this.state.selectedItem],
        date: getDate.toISOString().split("T")[0],
      };
      this.setState({ data: newList });
    } else {
      let newList = [...this.state.data];
      newList[this.state.selectedItem] = {
        ...newList[this.state.selectedItem],
        date: event.nativeEvent.getDate.split("/").reverse().join("-"),
      };
      this.setState({ data: newList });
    }
  };

  render() {
    return (
      <SafeAreaView style={{ alignItems: "center" }}>
        <AppBar
          navigation={this.props.navigation}
          title={"Date Picker"}
          isSearch={false}
        />
        <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />

        <UIDatePicker
          style={Platform.OS === "ios" ? styles.ios : styles.android}
          date={this.state.date}
          onChange={this._onchange}
        />
        <View style={{ width: "100%", marginTop: 10 }}>
          <FlatList
            data={this.state.data}
            
            renderItem={({ item, index, separators }) => (
              <TouchableHighlight
                key={item.key}
                onPress={() => {
                  let newList = [...this.state.data];
                  // let index = this.state.data.findIndex(dateStatus => dateStatus.selected);
                  newList[item.key] = {
                    ...newList[item.key],
                    selected: true,
                    backgroundcolor: "#E8C33B",
                  };
                  newList[this.state.selectedItem] = {
                    ...newList[this.state.selectedItem],
                    backgroundcolor: "#CBCBC8",
                    selected: false,
                  };
                  this.setState({
                    data: newList,
                    selectedItem: item.key,
                    date: item.date + "T00:00:00.00+0",
                  });
                }}
                style={{
                  marginVertical: 10,
                  backgroundColor: item.backgroundcolor,
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 20 }}>{item.date}</Text>
              </TouchableHighlight>
            )}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  android: {
    height: "50%",
    alignItems: "center",
    width: "80%",
    marginTop: 0,
    backgroundColor: "orange",
  },
  ios: {
    height: "40%",

    width: "60%",
    marginTop: 0,
  },
});
export default DatePicker;
