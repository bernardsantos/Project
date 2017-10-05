import React, {Component} from 'react';
import LoginForm from './LoginForm';
import {
  StyleSheet,
  View,
  Image,
  Text,
  KeyboardAvoidingView,
} from 'react-native';

export default class Login extends Component {
  render() {
    return(
      <KeyboardAvoidingView behavior = "padding" style = {styles.container}>
        <View style = {styles.logoContainer}>
          <Image style = {styles.logo} source = {require('../../images/Luffy.jpg')}/>
          <Text style = {styles.title} >An App made using React Native</Text>
        </View>
        <View style = {styles.formContainer}>
          <LoginForm />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#3498db',
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',

  },
  logo:{
    width:100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    color: '#FFF',
    marginTop: 10,
    textAlign: 'center',
    width: 130,
    opacity: 0.8,
  },
  button: {
    alignItems: 'center',
  },
});
