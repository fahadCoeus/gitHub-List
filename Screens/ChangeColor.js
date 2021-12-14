import React from 'react';
import { StyleSheet, Button,SafeAreaView ,NativeModules} from 'react-native';
import AppBar from '../components/AppBar';
import { LinearGradient } from 'expo-linear-gradient';

class ChangeColor extends React.Component {
  constructor(props){
    super(props)
    this.state={
      backgroundColor:"#fff"
    }
  }
    render(){
    return (
        <SafeAreaView style={{ backgroundColor: this.state.backgroundColor,flex:1 }}>
        <AppBar
          navigation={this.props.navigation}
          title={"Native Module"}
          isSearch={false}
        />
        <LinearGradient
          colors={["rgb(246,246,246)", "rgb(255,255,255)"]}
          style={{ width: "100%", height: 10 }}
        />


        <Button title="Change Color"
      
          onPress={async()=>{

            try {
              const response = await NativeModules.ColorPicker.picker();
              console.log(response);
              this.setState({backgroundColor:response});
            } catch (error) {
              console.log(error);
            }
         
          }}
          
          />
        </SafeAreaView>
    );
    }
}
const styles = StyleSheet.create({
    container:{
 
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      width:"100%"
      
  }
})
export default ChangeColor