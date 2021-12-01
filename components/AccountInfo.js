import React from 'react';
import { View,StyleSheet, Text } from 'react-native';
import {MaterialCommunityIcons,Entypo,SimpleLineIcons} from "@expo/vector-icons"

class AccountInfo extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
    return (
        
                <View style={styles.listContainer}>
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 30,
                      backgroundColor: "#6464BD",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >{this.props.iconType=="MaterialCommunityIcons"&&
                    <MaterialCommunityIcons
                      name={this.props.iconName}
                      size={40}
                      color="white"
                    />}
                    {this.props.iconType=="Entypo"&&
                    <Entypo name="location-pin" 
                    size={40} 
                    color="white"
                    />
                    }
                    {this.props.iconType=="SimpleLineIcons"&&
                         <SimpleLineIcons
                         name="user-following"
                         size={40}
                         color="white"
                       />
                    }
                  </View>
                  <View style={styles.sideInformation}>
                    <Text style={styles.heading}>{this.props.name}</Text>

                    {this.props.description ? (
                      <Text style={styles.description}>
                    {this.props.description}
                      </Text>
                    ) : (
                      <Text style={styles.description}>Not Available</Text>
                    )}
                  </View>
                </View>
              
    );
    }
}
const styles = StyleSheet.create({
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
})
export default AccountInfo