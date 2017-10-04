import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StatusBar,
} from 'react-native';

export default class LoginForm extends Component {
  render(){
    return(
      <View style = {styles.container}>
      <StatusBar
        barStyle = "light-content"
        />
        <TextInput
          underlineColorAndroid = 'transparent'
          placeholder = "Username or Email"
          placeholderTextColor = "rgba(255,255,255,0.2)"
          returnKeyType = "next"
          onSubmitEditing = {(input) => this.passwordInput.focus()}
          keyboardType = "email-address"
          autoCorrect = {false}
          style = {styles.input}
        />

        <TextInput
          placeholder = "Password"
          placeholderTextColor = "rgba(255,255,255,0.2)"
          secureTextEntry
          returnKeyType = "go"
          ref={(input) => this.passwordInput = input}
          style = {styles.input}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container:{
    padding: 20,
  },
  input:{
    height: 40,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginBottom: 20,
    color: '#FFF',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  buttonContainer: {
    backgroundColor: '#2980b9',
    paddingVertical: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
  }

});
