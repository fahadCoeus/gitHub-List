import React from "react";
import {
  View,
  Text,
  TouchableWithoutFeedback,
  TextInput,
  StyleSheet,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSearchBox: true,
    };
    this.buildNameTextInput = React.createRef();
  }
  focusInputWithKeyboard() {
    this.textInput.focus()
  }
  render() {
    return (
      <View
        style={[
          styles.container,
          { alignItems: !this.state.showSearchBox && "flex-start" },
        ]}
      >
        {this.state.showSearchBox ? (
          <>
            <View style={styles.search}>
              <Text style={styles.mainHeading}>Contacts</Text>
            </View>
            <TouchableWithoutFeedback
              onPress={() => {  this.buildNameTextInput = true;
                this.setState({ showSearchBox: false })}}
            >
              <MaterialIcons name="search" size={25} color="#b5b5b5" />
            </TouchableWithoutFeedback>
          </>
        ) : (
          <>
            <View style={styles.search}>
              <TextInput
              autoFocus={!!this.buildNameTextInput}
                style={styles.textInput}
                placeholder="Enter your text"
                ref={this.buildNameTextInput}
                onChangeText={this.props.setValue}
              />
              <TouchableWithoutFeedback
                onPress={() => this.setState({ showSearchBox: true })}
              >
                <MaterialIcons name="close" size={25} color="#b5b5b5" />
              </TouchableWithoutFeedback>
            </View>
          </>
        )}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: { flex: 1, flexDirection: "row" },
  search: {
    flex: 1,
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
  },
  textInput: {
    color: "#0c0c0c",
    fontSize: 20,
    width: "85%",
    marginLeft: 10,
    marginRight: 10,
  },
  mainHeading: { color: "#6c6969", fontSize: 20, textAlign: "center", flex: 1 },
});
export default SearchUser;
