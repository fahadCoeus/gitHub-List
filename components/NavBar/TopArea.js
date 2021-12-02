import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { Entypo, Ionicons,Octicons,AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
class TopArea extends React.Component {
  constructor(props){
    super(props);
    this.state={
      heartselected:true,
      appSelected:true
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.iconsRow}>
          <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
          <Entypo color="white" name="cross" size={25} />
          </TouchableOpacity>
          <Ionicons color="white" name="ios-settings-sharp" size={25} />
        </View>
        <View
          style={{
            flex:1,
            marginTop:40,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../assets/coeuslogo.jpeg")}
            style={styles.companyPicture}
          />
          <View >
            <Text style={{marginTop:10,color:"white",fontSize:24,fontWeight:"500"}}>Coeus Solutions</Text>
            <Text style={{marginTop:5,color:"white",fontSize:14,fontWeight:"300",textAlign:"center"}}>Software House</Text>
          </View>
        <View style={{flexDirection:"row",marginTop:25}}>
          <View style={{marginRight:25,}}>
          <TouchableOpacity onPress={()=>this.setState({heartselected:!this.state.heartselected})} >
        <Octicons color= {this.state.heartselected?"white":"red"} name="heart" size={25}  />
        </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>this.setState({appSelected:!this.state.appSelected})}>
        <AntDesign color={this.state.appSelected?"white":"orange"} name="appstore1" size={25} />
        </TouchableOpacity>
        

        </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor:"#3a66c7"
  },
  iconsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  companyPicture: {
    width: 140,
    height: 140,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: 70,
    marginTop: -70,
  },
});
export default TopArea;
