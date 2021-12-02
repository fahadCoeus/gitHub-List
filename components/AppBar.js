import React from "react";
import { View, Text, StyleSheet,TouchableOpacity} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import SearchUser from "./SearchUser";
class AppBar extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick = (value) => {
    this.props.setStateOfParent(value);
  };
  componentDidMount(){
    
    // this.props.navigation.toggleDrawer()
    // this.props.navigation.toggleDrawer()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={()=>this.props.navigation.toggleDrawer()}>
        <MaterialCommunityIcons
          name="format-list-bulleted"
          size={25}
          color="#b5b5b5"
        />
        </TouchableOpacity>
        <SearchUser setValue={this.handleClick} title={this.props.title} isSearch={this.props.isSearch}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flexDirection: "row", padding: 15, backgroundColor: "white" },
});
export default AppBar;
