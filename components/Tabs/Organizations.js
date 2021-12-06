import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import ListDetail from "./ListDetail";
import listing from "../../api/userList";
import Seperator from "./Seperator";
import SelectColor from "./SelectColor";
class Organizations extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      color:"black"
    };
  }
  async componentDidMount() {
    try {
      const response = await listing.getorganizationsList();
      if (response.ok) {
        this.setState({ data: response.data });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
      console.log(this.state.color)

    return (
      <View>
          <SelectColor setColor={(selectedColor)=>this.setState({color:selectedColor})}/>
        <FlatList
          data={this.state.data}
          keyExtractor={this.state.data.name}
          renderItem={({ item, index }) => (
            <View>
              <ListDetail
                name={item.login}
                repos={item.repos_url}
                avatar_url={item.avatar_url}
                color={this.state.color}
              />
              <Seperator />
            </View>
          )}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
});
export default Organizations;
