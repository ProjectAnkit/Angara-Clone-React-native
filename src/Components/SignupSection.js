import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';

const SignupSection = () => {

    const [isLoaded] = useFonts({
        "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
      });
  
    if(!isLoaded){
        return <></>
    }
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's keep in touch!</Text>
      <TextInput
        style={styles.input}
        cursorColor={"#f1791f"}
        placeholder="Enter Email Address or Mobile no."
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
    marginBottom: 10,
    fontFamily: 'Poppins',
  },
  input: {
    height: 50,
    borderRadius: 8,
    borderColor: '#f1791f',
    borderWidth: 1,
    width: '100%',
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontFamily: 'Poppins', 
  },
  button: {
    backgroundColor: '#f1791f',
    width: '100%',
    padding: 10,
    borderRadius: 7,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontFamily: 'Poppins', 
  },
});

export default SignupSection;
