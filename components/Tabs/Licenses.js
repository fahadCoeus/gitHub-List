import React from 'react';
import { View,StyleSheet,Text,FlatList } from 'react-native';
import ListDetail from "./ListDetail";
import listing from "../../api/userList";
import Seperator from "./Seperator";
import SelectColor from './SelectColor';
class Licenses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          color:"black"
        };
      }
      async componentDidMount() {
        try {
          const response = await listing.getLicensesList();
          if (response.ok) {
            this.setState({ data: response.data });
          }
        } catch (error) {
          console.log(error);
        }
      }
    render(){
   return (
    <View>
        <SelectColor setColor={(selectedColor)=>this.setState({color:selectedColor})}/>
        <FlatList
          data={this.state.data}
          keyExtractor={this.state.data.key}
          renderItem={({ item, index }) => (
            <View style={{alignSelf:"center",width:"100%",alignItems:"center",marginVertical:10}}>
             <Text style={{color:this.state.color}}>{item.key}</Text>
             <Text style={{color:this.state.color}}>{item.name}</Text>
             <Text style={{color:this.state.color}}>{item.spdx_id}</Text>
             <Text style={{color:this.state.color}}>{item.url}</Text>
             <Text style={{color:this.state.color}}>{item.node_id}</Text>
              <Seperator />
            </View>
          )}
        />
      </View>
   );
    }
}
const styles = StyleSheet.create({
   container:{

   }
})
export default Licenses