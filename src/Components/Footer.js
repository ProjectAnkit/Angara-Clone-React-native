import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

const Footer = () => {

    const [isLoaded] = useFonts({
        "Poppins": require("./../../assets/fonts/Poppins-Regular.ttf"),
      });
  
    if(!isLoaded){
        return <></>
    }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>© 2024 Vedicgems All Rights Reserved.</Text>
      <Text style={styles.text}>| Accessibility | Privacy Policy | T&C</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height : 80,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
  },
  text: {
    fontSize: 12,
    fontWeight: "300",
    fontFamily: 'Poppins', 
  },
});

export default Footer;
