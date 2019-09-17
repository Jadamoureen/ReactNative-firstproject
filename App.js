/* eslint-disable comma-dangle */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';
import { Text, View, Button, TextInput } from 'react-native';
import Home from './src/screens/home';

class App extends Component {
  state = {
    firstName: 'Moureen',
    lastName: 'Caroline'
  };

  handleNameChange = name => {
    this.setState({ firstName: name });
  }

  nameChanger = name => {
      this.setState({lastName: name});
  }


  render() {
    return (
      <View>
        <Text> This is it !!! </Text>
        <View>
          <Button title="Click Me" />
        </View>
        <View>
          <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.firstName}
          onChangeText={this.handleNameChange} />
        </View>
        <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          value={this.state.lastName}
          onChangeText={this.nameChanger} />
        </View>
        <Home
          fname={this.state.firstName}
          lname={this.state.lastName}
        />
      </View>
    );
  }
}

export default App;
