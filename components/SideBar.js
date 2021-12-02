import React from 'react';
import { View,StyleSheet, Text,StatusBar } from 'react-native';
import TopArea from './NavBar/TopArea';
import BottomArea from './NavBar/BottomArea';

 class SideBar extends React.Component{
    
     render(){
     
    return (
        <View style={styles.container}>
           <TopArea style={{flex:1}} navigation={this.props.navigation}/>
           <BottomArea style={{flex:1.6,padding:20}} navigation={this.props.navigation} state={this.props.state}/>
           
        </View>
    );
     }
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:"white",height:"100%"
    }
})
export default SideBar