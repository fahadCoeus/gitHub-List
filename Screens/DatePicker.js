import React from "react";
import { View, StyleSheet, SafeAreaView, Platform } from "react-native";
import AppBar from "../components/AppBar";
import { LinearGradient } from "expo-linear-gradient";
import UIDatePicker from "./../components/DatePicker";

class DatePicker extends React.Component {


constructor(props){
  super(props)
  this.state={
    date:"2020-01-09T00:00:00.00+5",
  }
}

    _onchange= (event) => {
      Platform.OS === 'ios'?console.log(event.nativeEvent): console.log(event.nativeEvent.getDate)
     
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
        <UIDatePicker style={styles.container}  
        date={this.state.date}
        onChange={this._onchange}
        />
      </SafeAreaView>
    );
  }
 
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    alignItems: "center",
    width: "100%",
    marginTop: 80,
  },
});
export default DatePicker;
