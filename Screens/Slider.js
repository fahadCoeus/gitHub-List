import React from 'react';
import { View,StyleSheet,SafeAreaView } from 'react-native';
import AppBar from "../components/AppBar";
import { LinearGradient } from "expo-linear-gradient";
class Slider extends React.Component{
    render(){
    return (
        <SafeAreaView style={{ alignItems: "center" }}>
        <AppBar
          navigation={this.props.navigation}
          title={"IOS Native Libraray"}
          isSearch={false}
        />
        <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />
        </SafeAreaView>
    );
    }
}
const styles = StyleSheet.create({
    container:{

    }
})
export default Slider