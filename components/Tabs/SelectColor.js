import React from 'react';
import { View,StyleSheet,Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 class SelectColor extends React.Component {
     
     render(){
         const selectedColor=["red","orange","blue","green","black"]
    return (
        <View style={styles.container}>
            
 {selectedColor.map((item,index)=>(
     <TouchableOpacity onPress={()=>this.props.setColor(item)}>
    <View style={[styles.box,{backgroundColor:item}]} key={index}/>
    </TouchableOpacity>
    ))}


{/*             
      <View style={[styles.box,{backgroundColor:"red"}]}></View>
      <View style={[styles.box,{backgroundColor:"red"}]}></View>

      <View style={[styles.box,{backgroundColor:"red"}]}></View>

      <View style={[styles.box,{backgroundColor:"red"}]}></View>
<View style={[styles.box,{backgroundColor:"red"}]}></View> */}

        </View>
    );
}
}
const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        paddingLeft:10,
        paddingRight:10
    },
    box:{
        width:40,height:40,
    }
    
})
export default SelectColor