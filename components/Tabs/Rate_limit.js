import React from "react";
import { View, StyleSheet, Text } from "react-native";
import listing from "../../api/userList";
import SelectColor from "./SelectColor";
import Seperator from "./Seperator";
class Rate_limit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: "",
      remaining: "",
      reset: "",
      used: "",
      resource: "",
      color: "black",
    };
  }
  async componentDidMount() {
    try {
      const response = await listing.getLimitList();
      if (response.ok) {
        console.log(response.data.rate);
        this.setState({
          limit: response.data.rate.limit,
          remaining: response.data.rate.remaining,
          reset: response.data.rate.reset,
          resource: response.data.rate.resource,
          used: response.data.rate.used,
        });
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const diplayInfo = [
      { title: "Total Rate :", info: this.state.limit },
      { title: "Total Rate : ", info: this.state.limit },
      { title: "Used : ", info: this.state.used },
      { title: "Remaining :", info: this.state.remaining },
      { title: "Reset :", info: this.state.reset },
      { title: "Resource :", info: this.state.resource },
    ];
    return (
      <View>
        <SelectColor
          setColor={(selectedColor) => this.setState({ color: selectedColor })}
        />
        {diplayInfo.map((item, index) => (
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              marginTop: 20,
            }}
            key={index}
          >
            <Text style={{ fontSize: 35, color:this.state.color }}>{item.title} </Text>
            <Text style={{ fontSize: 35, color:this.state.color }}>{item.info}</Text>
          </View>
        ))}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {},
});
export default Rate_limit;
